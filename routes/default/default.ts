import { Request, Response, Router } from "express";

const defaultRouter: Router = Router();

defaultRouter.get("/", (req: Request, res: Response) => {
  res.send("You are on the main default route");
});

export default defaultRouter;
