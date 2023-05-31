import { StoreDTO } from "@metgroup/api-interfaces";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Item } from "../../items/entities/item.entity";

@Entity('stores')
export class Store implements StoreDTO {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    unique: true
  })
  name: string;

  @OneToMany(
    () => Item,
    (item) => item.store,
    { onDelete: 'CASCADE', eager: true }
  )
  items: Item[];
}