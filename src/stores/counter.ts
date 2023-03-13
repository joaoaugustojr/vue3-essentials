import { defineStore } from "pinia";

export const counterStore = defineStore("counter", {
  state: (): any => ({
    count: 0 as number,
  }),

  actions: {
    increment(): void {
      this.count++;
    },
    decrement(): void {
      this.count--;
    },
  },

  getters: {
    toString(): string {
      return `The counter value is: ${this.count}`;
    },
  },
});
