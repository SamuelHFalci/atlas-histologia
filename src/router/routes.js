const routes = [
  {
    path: "/",
    component: () => import("layouts/Master.vue"),
    children: [
      {
        path: "/",
        component: () => import("src/layouts/Home.vue"),
        children: [{ path: "", component: () => import("pages/Index.vue") }],
      },
      {
        path: "Histologia-Dos-Sistemas",
        component: () => import("src/layouts/Secondary.vue"),

        children: [
          {
            path: "",
            component: () => import("pages/HistologiaDosSistemas.vue"),
            name: "Histologia dos Sistemas",
            meta: { breadCrumbs: ["Histologia dos Sistemas"] },
          },
          {
            path: "sistema-circulatorio/coracao",
            component: () =>
              import("src/pages/sistema-circulatorio/Coracao.vue"),
            name: "Coração",
            meta: {
              breadCrumbs: [
                "Histologia dos Sistemas",
                "Sistema Circulatório",
                "Coração",
              ],
            },
          },

          {
            path: "admin",
            component: () => import("src/pages/Admin.vue"),
          },
        ],
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
