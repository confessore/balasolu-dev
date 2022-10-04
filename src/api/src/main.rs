use actix_cors::Cors;
use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};
use diesel::{pg::PgConnection, Connection};

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

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let path = std::env::var("APPLICATION__POSTGRESOPTIONS__CONNECTIONSTRING").expect("Expected a token in the environment");
    let connection_string = std::fs::read_to_string(path).expect("should have been a file path");
    PgConnection::establish(&connection_string)
        .unwrap_or_else(|_| panic!("Error connecting to {}", connection_string));
   
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