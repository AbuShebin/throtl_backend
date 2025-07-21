import express from "express";
const router = express.Router();
import  routeConstands  from "../../utils/route_constrands";
import {rideController} from "./rideController";

router.post(routeConstands.addRideDetails,rideController.addRideDetails);
router.get(routeConstands.getAllRideDetails,rideController.getAllRideDetails);

export default router;