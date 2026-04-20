import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";

import FlexLinkCard from "./components/FlexLinkCard.vue";
import SideLinkCard from "./components/SideLinkCard.vue";
import EduCard from "./components/EduCard.vue";
import TagList from "./components/TagList.vue";

import "./styles/custom.css";

const theme: Theme = {
  extends: DefaultTheme,
  enhanceApp({ app }) 
  {
    app.component("FlexLinkCard", FlexLinkCard);
    app.component("SideLinkCard", SideLinkCard);
    app.component("EduCard", EduCard);
    app.component("TagList", TagList);
  }
};

export default theme;
