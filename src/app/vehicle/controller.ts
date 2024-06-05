import { Request, Response } from "express";
import VehicleServices from "./service";

export default new (class ReplyControllers {
  async getAllVehicles(req: Request, res: Response) {
    try {
      const vehicle = await VehicleServices.getAll();
      res.status(200).json(vehicle);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async addNewVehicle(req: Request, res: Response) {
    try {
      const newVehicle = await VehicleServices.create(req.body);
      res.status(200).json(newVehicle);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getDetailVehicle(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const detailVehicle = await VehicleServices.getDetail(id);

      res.status(200).json(detailVehicle);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateVehicle(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = req.body;
      const result = await VehicleServices.updateVehicle(data, id);

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async removeVehicle(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const removeVehicle = await VehicleServices.delete(id);

      res.status(200).json(removeVehicle);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async changeStatus(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const changeStatus = await VehicleServices.changeLockStatus(id);

      res.status(200).json(changeStatus);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async changeBattery_level(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = req.body.battery_level;

      const changeBattery_level = await VehicleServices.changeBattery_level(
        id,
        data
      );

      res.status(200).json(changeBattery_level);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async changeCurrent_speed(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = req.body.current_speed;

      const changeCurrent_speed = await VehicleServices.changeCurrent_speed(
        id,
        data
      );

      res.status(200).json(changeCurrent_speed);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
})();
