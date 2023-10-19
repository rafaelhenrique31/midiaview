import axios from "axios";
import CategoryService from "./CategoryService";

export const CategoryApiClient = axios.create({
  baseURL: "https://mediaviewapi20231019142011.azurewebsites.net/",
});

export const CATEGORY_CLIENT = {
  CATEGORY: new CategoryService(CategoryApiClient),
} as const;

export default CATEGORY_CLIENT;
