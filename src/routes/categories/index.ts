import { Router } from 'express';
import {withErrorHandler} from "../../errors";

const router = Router();

router.post('/add_news',
    withErrorHandler(async ({ body }, res) => {
        console.log("asdasd");
        if (!body.name) {
            console.log('Please enter news name');
        }
}))

export { router };