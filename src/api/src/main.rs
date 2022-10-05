use actix_cors::Cors;
use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};
use azure_data_cosmos::prelude::*;
use diesel::{pg::{PgConnection, Pg}, Connection};
use diesel_migrations::{embed_migrations, EmbeddedMigrations, MigrationHarness};
pub const MIGRATIONS: EmbeddedMigrations = embed_migrations!("./migrations/");
use serde::{Deserialize, Serialize};

fn run_migrations(connection: &mut impl MigrationHarness<Pg>) -> Result<(), Box<dyn std::error::Error + Send + Sync + 'static>> {

    // This will run the necessary migrations.
    //
    // See the documentation for `MigrationHarness` for
    // all available methods.
    connection.run_pending_migrations(MIGRATIONS)?;

    Ok(())
}

#[get("/")]
async fn hello() -> impl Responder {
    HttpResponse::Ok().body("Hello world!")
}

#[post("/echo")]
async fn echo(req_body: String) -> impl Responder {
    HttpResponse::Ok().body(req_body)
}

async fn manual_hello() -> impl Responder {
    HttpResponse::Ok().body("Hey there!")
}

#[derive(Serialize, Deserialize, Debug)]
struct MySampleStruct {
    id: String,
    string: String,
    number: u64,
}


impl azure_data_cosmos::CosmosEntity for MySampleStruct {
    type Entity = u64;

    fn partition_key(&self) -> Self::Entity {
        self.number
    }
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let path = std::env::var("APPLICATION__POSTGRESOPTIONS__CONNECTIONSTRING").expect("Expected a token in the environment");
    let connection_string = std::fs::read_to_string(path).expect("should have been a file path");
    let mut connection = PgConnection::establish(&connection_string)
        .unwrap_or_else(|_| panic!("Error connecting to {}", connection_string));

    let cosmos_account_path = std::env::var("APPLICATION__COSMOSOPTIONS__ACCOUNT").expect("Expected a token in the environment");
    let cosmos_account = std::fs::read_to_string(cosmos_account_path).expect("should have been a file path");
    let cosmos_key_path = std::env::var("APPLICATION__COSMOSOPTIONS__KEY").expect("Expected a token in the environment");
    let cosmos_key = std::fs::read_to_string(cosmos_key_path).expect("should have been a file path");

    let cosmos_authorization_token = AuthorizationToken::primary_from_base64(&cosmos_key).unwrap_or_else(|_| panic!("error"));
    let cosmos_client = CosmosClient::new(&cosmos_account, cosmos_authorization_token);
    let cosmos_database = cosmos_client.database_client("balasolu");
    let cosmos_collection = cosmos_database.collection_client("users");
    let users = cosmos_collection.create_document(MySampleStruct {
        id: format!(""),
        string: "".to_owned(),
        number: 100
    }).into_future().await.unwrap_or_else(|_| panic!("could not get users"));

    let _result = run_migrations(&mut connection).unwrap_or_else(|_| panic!("error running migrations"));
    HttpServer::new(|| {
        let cors = Cors::default().allow_any_origin().supports_credentials();
        App::new()
            .wrap(cors)
            .service(hello)
            .service(echo)
            .route("/hey", web::get().to(manual_hello))
    })
    .bind(("0.0.0.0", 3002))?
    .run()
    .await
}