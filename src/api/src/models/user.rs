use diesel::prelude::*;
use serde::{
    Serialize,
    Deserialize
};

#[derive(Queryable, Serialize, Deserialize, Debug)]
pub struct User {
    pub id: String,
    pub created_at: u64,
    pub email: String,
    pub username: String,
}

impl User {

}
