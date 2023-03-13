import { generateFakeData } from "@/models/item";
import type { Item } from "@/models/item";
import { defineStore } from "pinia";

export const groceryStore = defineStore("grocery", {
  state: (): any => ({
    items: [] as Item[],
  }),

  actions: {
    create(item?: Item): void {
      if (item) this.items.push(item);
      else this.items.push(generateFakeData());
    },
    update(id: string): void {
      const index = this.findById(id);
      if (index === -1) return;

      this.items[index] = generateFakeData();
    },
    delete(id: string): void {
      const index = this.findById(id);
      if (index === -1) return;

      this.items.splice(index, 1);
    },
    findById(id: string): number {
      return this.items.findIndex((item: Item) => item.id === id);
    },
  },

  getters: {
    toString(): string {
      return ``;
    },
  },
});
