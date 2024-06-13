import { createContext, useContext } from "react";
import CategoryStore from "./categoryStore";
import BannerStore from "./bannerStore";

export const store = {
  categoryStore: new CategoryStore(),
  bannerSoter: new BannerStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
