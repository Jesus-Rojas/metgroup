import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Stores } from "../../stores/entities/stores.entity";

@Entity()
export class Items {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column({ type: 'float' })
  price: number;

  @ManyToOne(
    () => Stores,
    (store) => store.items,
  )
  store: Stores;
}