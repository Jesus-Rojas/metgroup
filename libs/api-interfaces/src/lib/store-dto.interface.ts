import { ItemDTO } from "./item-dto.interface";

export interface StoreDTO {
  id: number;
  name: string;
  items: ItemDTO[]
}