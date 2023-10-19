import CATEGORY_CLIENT from "../services/CategoryApiClient";

export function UseCategory() {
  const getAllCategories = async () => {
    return await CATEGORY_CLIENT.CATEGORY.getAllCategories();
  };

  return {
    getAllCategories,
  };
}
