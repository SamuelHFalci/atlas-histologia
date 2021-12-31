const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      {
        path: "histologia-dos-sistemas",
        component: () => import("pages/HistologiaDosSistemas.vue"),
      },
      {
        path: "lamina/:id",
        component: () => import("src/pages/Slide.vue"),
      },
      {
        path: "admin",
        component: () => import("src/pages/Admin.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
