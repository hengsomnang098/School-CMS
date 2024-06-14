import { createContext, useContext } from "react";
import CategoryStore from "./categoryStore";
import SlideStore from "./slideStore";
import ArticleStore from "./articleStore";
import UserStore from "./userStore";

export const store = {
  categoryStore: new CategoryStore(),
  slideStore: new SlideStore(),
  articleStore: new ArticleStore(),
  userStore: new UserStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
