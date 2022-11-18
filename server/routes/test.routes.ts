import { Express, Request, Response } from "express";

const router = (app: Express) => {
    console.log("[server]: Router loaded.");
    app.get("/api", (request: Request, response: Response) => {
        response.status(200).json({
            message: "[server]: Test successful.",
        });
    });
};

export default router;
