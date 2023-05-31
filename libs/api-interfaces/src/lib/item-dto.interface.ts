import { StoreDTO } from "./store-dto.interface";

export interface ItemDTO {
  id: number;
  name: string;
  price: number;
  store: StoreDTO;
}

export interface CreateItemDTO {
  name?: string;
  price: number;
  storeId: number
}

export type UpdateItemDTO = Partial<CreateItemDTO>