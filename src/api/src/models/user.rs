use azure_data_cosmos::{
    CosmosEntity
};
use diesel::prelude::*;
use serde::{
    Serialize,
    Deserialize
};

#[derive(Queryable, Serialize, Deserialize)]
pub struct User {
    pub id: String,
    pub created_at: u64,
    pub email: String,
    pub username: String,
}

impl User {

}

impl CosmosEntity for User {
    type Entity = String;

    fn partition_key(&self) -> Self::Entity {
        self.id.clone()
    }
}