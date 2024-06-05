import * as express from "express";
import VehicleController from "./controller";

const router = express.Router();

router.get("/vehicles", VehicleController.getAllVehicles);
router.post("/vehicle", VehicleController.addNewVehicle);
router.get("/vehicle/:id", VehicleController.getDetailVehicle);
router.put("/vehicle/:id", VehicleController.updateVehicle);
router.delete("/vehicle/:id", VehicleController.removeVehicle);

router.post("/vehicle/:id/lock_status", VehicleController.changeStatus);
router.put("/vehicle/:id/battery_level", VehicleController.changeBattery_level);
router.put("/vehicle/:id/current_speed", VehicleController.changeCurrent_speed);

export default router;
