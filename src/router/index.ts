import { createRouter, createWebHistory } from "vue-router";
import CounterView from "@/views/CounterView.vue";
import GroceryView from "@/views/GroceryView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => {},
    },
    {
      path: "/counter",
      name: "counter",
      meta: { title: "Counter - Pinia Store" },
      component: CounterView,
    },
    {
      path: "/grocery",
      name: "grocery",
      meta: { title: "grocery - Pinia Store" },
      component: GroceryView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const title: any = to.meta.title;
  if (title) document.title = title;

  next();
});

export default router;
