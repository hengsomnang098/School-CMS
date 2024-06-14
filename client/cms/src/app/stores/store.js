import { createContext, useContext } from "react";
import CategoryStore from "./categoryStore";
import SlideStore from "./slideStore";
import ArticleStore from "./articleStore";

export const store = {
  categoryStore: new CategoryStore(),
  slideStore: new SlideStore(),
  articleStore: new ArticleStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
