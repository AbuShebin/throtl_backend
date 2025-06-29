import { Router } from "express";
import { routeConstrands } from "../utils/route_constrands";
import vehicleRoute from "../modules/vehicle/vehicleRoute";

const router = Router();


router.post(routeConstrands.addVehicleRoute,vehicleRoute);