import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { connect } from "./database/database";
import { makeMigrations } from "./database/migrations";
import routes from './routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Healthcheck');
});

app.get('/test', (req: Request, res: Response) => {
    res.send('All work file');
});

app.use(routes);


async function run() {
    console.log("Connecting to DB");
    await connect();
    console.log('database connection established');
    await makeMigrations();
    console.log("All migrations passed");
    app.listen(port, () => {
        console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
}

run()
    .catch((e) => {
    console.log(e)
})