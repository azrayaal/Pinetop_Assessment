import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  vehicle_id: number;

  @Column()
  type: string;

  @Column()
  lock_status: string;

  @Column()
  current_speed: string;

  @Column()
  battery_level: string;

  @Column()
  status: string;

  @Column()
  location: string;

  @Column("timestamp", { default: () => "CURRENT_TIMESTAMP" })
  last_update: Date;
}
