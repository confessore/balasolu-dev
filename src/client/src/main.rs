use actix_files::{
    Files,
    NamedFile
};
use actix_web::{
    get, post, web,
    App, HttpResponse, HttpServer, Responder, Result
};
use std::fs::{
    read_dir
};
use std::path::PathBuf;

async fn react_app() -> Result<NamedFile> {
    let path: PathBuf = PathBuf::from("/usr/local/bin/react-app/build/index.html");
    Ok(NamedFile::open(path)?)
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .route("/", web::get().to(react_app))
            .service(Files::new("/", "/usr/local/bin/react-app/build/").index_file("index.html"))
    })
    .bind(("0.0.0.0", 3001))?
    .run()
    .await
}

/*for entry in read_dir("./")? {
    let entry = entry?;
    let path = entry.path();
    if path.is_dir() {
        println!("{:?}", path.file_name())
    }
}*/