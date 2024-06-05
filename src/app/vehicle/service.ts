import { Repository } from "typeorm";
import { Vehicle } from "../../entities/Vehicle";
import { AppDataSource } from "../../data-source";
import "dotenv/config";

export default new (class UserServices {
  private readonly VehicleRepository: Repository<Vehicle> =
    AppDataSource.getRepository(Vehicle);

  async getAll(): Promise<object | string> {
    try {
      const data = await this.VehicleRepository.find({});
      return data;
    } catch (error) {
      return {
        message: `Ooops something went wrong, please see this ==>> ${error}`,
      };
    }
  }

  async getDetail(id: any): Promise<object | string> {
    try {
      const data = await this.VehicleRepository.find({
        where: { vehicle_id: id },
      });
      return data || "Vehicle not found";
    } catch (error) {
      return {
        message: `Ooops something went wrong, please see this ==>> ${error}`,
      };
    }
  }

  async create(data: any): Promise<object | string> {
    try {
      const response = await this.VehicleRepository.save(data);
      return {
        response,
        message: "New vehicle has been added",
      };
    } catch (error) {
      return {
        message: `Ooops something went wrong, please see this ==>> ${error}`,
      };
    }
  }

  async updateVehicle(data: any, id: any): Promise<object | string> {
    try {
      const {
        type,
        lock_status,
        current_speed,
        battery_level,
        status,
        location,
        last_update,
      } = data;

      const existingVehicle = await this.VehicleRepository.findOne({
        where: { vehicle_id: id },
      });
      if (!existingVehicle) {
        return {
          message: `Vehicle not found`,
        };
      }

      existingVehicle.type = type;
      existingVehicle.lock_status = lock_status;
      existingVehicle.current_speed = current_speed;
      existingVehicle.battery_level = battery_level;
      existingVehicle.status = status;
      existingVehicle.location = location;
      existingVehicle.last_update = last_update;

      const updatedVehicle = await this.VehicleRepository.save(existingVehicle);

      return {
        message: `Success, vehicle details updated`,
        updatedVehicle,
      };
    } catch (error) {
      return {
        message: `Oops, something went wrong: ${error}`,
      };
    }
  }

  async delete(id: any): Promise<object | string> {
    try {
      const checkId = await this.VehicleRepository.findOne({
        where: { vehicle_id: id },
      });

      if (!checkId) {
        return { message: `Ooops vehicle can't be found` };
      }

      const deleteVehicle = await this.VehicleRepository.delete(id);

      return {
        message: "Success, vehicle has been removed",
      };
    } catch (error) {
      return {
        message: `Ooops something went wrong during, please see this ==>> ${error}`,
      };
    }
  }

  async changeLockStatus(id: any): Promise<object | string> {
    try {
      const vehicle = await this.VehicleRepository.findOne({
        where: { vehicle_id: id },
      });

      if (!vehicle) {
        return { message: `Oops, vehicle not found` };
      }

      let newStatus: string;
      if (vehicle.lock_status === "Lock") {
        newStatus = "Unlock";
      } else {
        newStatus = "Lock";
      }

      vehicle.lock_status = newStatus;
      await this.VehicleRepository.save(vehicle);

      return {
        vehicle,
        message: "Success, vehicle status has been changed",
      };
    } catch (error) {
      return {
        message: `Oops, something went wrong: ${error}`,
      };
    }
  }

  async changeBattery_level(id: any, data: any): Promise<object | string> {
    try {
      const vehicle = await this.VehicleRepository.findOne({
        where: { vehicle_id: id },
      });

      if (!vehicle) {
        return { message: `Oops, vehicle not found` };
      }

      vehicle.battery_level = data;

      await this.VehicleRepository.save(vehicle);

      return {
        vehicle,
        message: "Success, vehicle battery has been updated",
      };
    } catch (error) {
      return {
        message: `Oops, something went wrong: ${error}`,
      };
    }
  }

  async changeCurrent_speed(id: any, data: any): Promise<object | string> {
    try {
      const vehicle = await this.VehicleRepository.findOne({
        where: { vehicle_id: id },
      });

      if (!vehicle) {
        return { message: `Oops, vehicle not found` };
      }

      vehicle.current_speed = data;

      await this.VehicleRepository.save(vehicle);

      return {
        vehicle,
        message: "Success, vehicle current speed has been updated",
      };
    } catch (error) {
      return {
        message: `Oops, something went wrong: ${error}`,
      };
    }
  }
})();
