import { createContext, useContext } from "react";
import CategoryStore from "./categoryStore";
import SlideStore from "./slideStore";
import ArticleStore from "./articleStore";
import UserStore from "./userStore";
import RoleStore from "./roleStore";
import ManagementTeamStore from "./managementTeamStore";
import StudentStore from "./studentStore";

export const store = {
  categoryStore: new CategoryStore(),
  slideStore: new SlideStore(),
  articleStore: new ArticleStore(),
  userStore: new UserStore(),
  roleStore: new RoleStore(),
  managementTeamStore: new ManagementTeamStore(),
  studentStore: new StudentStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
