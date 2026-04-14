import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import HomeSocialCards from "./components/HomeSocialCards.vue";
import DLSampleCards from "./components/DLSampleCards.vue";
import "./styles/custom.css";

const theme: Theme = {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("HomeSocialCards", HomeSocialCards);
    app.component("DLSampleCards", DLSampleCards);
  }
};

export default theme;
