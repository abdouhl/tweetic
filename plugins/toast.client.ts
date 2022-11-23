import Toast, { PluginOptions, POSITION } from "vue-toastification/dist/index.mjs";

const options: PluginOptions = {
  position: POSITION.TOP_CENTER,
  maxToasts: 1,
  timeout: 2000,
  transition: "Vue-Toastification__fade",
};

export default defineNuxtPlugin((nuxt) => {
  nuxt.vueApp.use(Toast, options);
});
