import CATEGORY_CLIENT from "../services/CategoryApiClient";

export function UseCategory() {
  const getAllCategories = async () => {
    return await CATEGORY_CLIENT.CATEGORY.getAllCategories();
  };

  const getMidiaByCategoryId = async (categoryId: number) => {
    return await CATEGORY_CLIENT.CATEGORY.getAllMidiasByCategoryId(categoryId);
  };

  return {
    getAllCategories,
    getMidiaByCategoryId,
  };
}
