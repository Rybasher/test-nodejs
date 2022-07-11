import { migrate } from "postgres-migrations"
import { join } from "path";
import { postgresConfig } from "./config";

const pg = require('pg');

export async function makeMigrations() {
    const client = new pg.Client(postgresConfig)
    await client.connect()
    try {
        await migrate({client}, join(__dirname, '..', '..', 'migrations'))
    } finally {
        await client.end()
    }
}