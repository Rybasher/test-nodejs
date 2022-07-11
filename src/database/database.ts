import {postgresConfig } from './config';
const { Client } = require('pg')


export const client = new Client({
    ...postgresConfig,
    max: 1,
    min: 0,
    idleTimeoutMillis: 120000,
    connectionTimeoutMillis: 10000,
});

export async function connect() {
    client.connect()
    const res = await client.query('SELECT $1::text as message', ['Hello world!']);
    console.log(res.rows[0].message)
}

export const disconnect = async () => client.end();
