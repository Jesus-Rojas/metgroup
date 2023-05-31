import { ItemDTO } from "@metgroup/api-interfaces";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Store } from "../../stores/entities/stores.entity";

@Entity('items')
export class Item implements ItemDTO {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column({ type: 'float' })
  price: number;

  @ManyToOne(
    () => Store,
    (store) => store.items,
    { eager: true }
  )
  store: Store;
}