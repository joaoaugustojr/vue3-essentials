import { v4 as uuidv4 } from "uuid";
import { faker } from "@faker-js/faker";

export interface Item {
  id: string;
  name: string;
  description?: string;
  quantity: number;
  createdAt: Date;
  deletedAt?: Date;
}

export const generateFakeData = (): Item => {
  return {
    id: uuidv4(),
    quantity: Math.random(),
    name: faker.lorem.word(),
    description: faker.lorem.words(),
    createdAt: new Date(),
  };
};
