import { Request, Response, Router } from "express";

import defaultRouter from "./default/default";

const indexRouter: Router = Router();

indexRouter.get("/", (req: Request, res: Response) => {
  res.send("You are on the main app route");
});

indexRouter.use("/default", defaultRouter);

indexRouter.use((_, res: Response) => {
  res.status(404).send("404 page");
});

export default indexRouter;
