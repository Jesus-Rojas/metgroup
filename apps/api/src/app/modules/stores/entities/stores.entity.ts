import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Items } from "../../items/entities/items.entity";
import { Store } from "../types/store.interface";

@Entity()
export class Stores implements Store {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @OneToMany(
    () => Items,
    (item) => item.store,
  )
  items: Items[];
}