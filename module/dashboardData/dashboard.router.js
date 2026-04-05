import {Router} from "express"
// something happened
//
import FatchData from "./dashboard.controller.js"

const dashboardRouter= Router();
dashboardRouter.get("/fatchData", FatchData);

export default dashboardRouter;
