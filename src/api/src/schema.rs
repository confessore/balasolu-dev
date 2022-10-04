// @generated automatically by Diesel CLI.

diesel::table! {
    users (id) {
        id -> Varchar,
        created_at -> Int8,
        email -> Varchar,
        username -> Varchar,
    }
}
