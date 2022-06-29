import { Client } from 'faunadb';
console.log('FAUNADB_KEY', process.env.FAUNADB_KEY)
export const fauna = new Client({
    secret: process.env.FAUNADB_KEY,
    domain: "db.us.fauna.com",
})