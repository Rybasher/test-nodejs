export const postgresConfig = {
    host: process.env.PG_HOST ?? 'localhost',
    port: Number(process.env.PG_PORT) ?? 5432,
    database: process.env.PG_DATABASE ?? 'test_node',
    user: process.env.PG_USER ?? 'user',
    password: process.env.PG_PASSWORD ?? 'pass',
};
