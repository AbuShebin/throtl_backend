import express from "express";
const router = express.Router();
import { routeConstrands } from "../../utils/route_constrands";
import {rideController} from "./rideController";

router.post(routeConstrands.addRideDetails,rideController.addRideDetails);
router.get(routeConstrands.getAllRideDetails,rideController.getAllRideDetails);

export default router;