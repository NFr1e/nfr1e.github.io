import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import HomeSocialCards from "./components/HomeSocialCards.vue";
import FlexLinkCard from "./components/FlexLinkCard.vue";
import SideLinkCard from "./components/SideLinkCard.vue";
import "./styles/custom.css";

const theme: Theme = {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("HomeSocialCards", HomeSocialCards);
    app.component("FlexLinkCard", FlexLinkCard);
    app.component("SideLinkCard", SideLinkCard);
  }
};

export default theme;
