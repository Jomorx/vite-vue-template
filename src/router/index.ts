// 1.导入
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
	{ path: "/", name: "", component: () => import("../pages/Home.vue") },
];
const router = createRouter({
	history: createWebHistory(),
	routes, // short for `routes: routes
});

export default router;
