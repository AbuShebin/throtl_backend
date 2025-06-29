import { Router } from "express";
import { routeConstrands } from "../../utils/route_constrands";
import { vehicleController } from "./vehicleController";

const router= Router();

router.post(routeConstrands.addVehicleRoute,vehicleController.addBike);

router.get(routeConstrands.getAllVehicleRoute, vehicleController.getAllBikes);

export default router;