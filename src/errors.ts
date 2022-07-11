import { Request, Response, NextFunction } from 'express';

export const withErrorHandler =
    (cb: (req: Request, res: Response) => void) =>
        async (req: Request, res: Response, next: NextFunction) => {
            console.log(req.path, req.body);
            try {
                await cb(req, res);
            } catch (e) {
                next(e);
            }
        };