import { AxiosInstance } from "axios";
import { CategoryGetResponse, MidiaGetResponse } from "./types";

class CategoryService {
  private readonly httpClient: AxiosInstance;
  private readonly BASE_PATH = "/Category";

  constructor(httpClient: AxiosInstance) {
    this.httpClient = httpClient;
  }

  getAllCategories = async () => {
    const url = `${this.BASE_PATH}`;
    const response = await this.httpClient.get<CategoryGetResponse[]>(url);
    return response.data;
  };

  getAllMidiasByCategoryId = async (categoryId: number) => {
    const url = `${this.BASE_PATH}/${categoryId}/Midia`;
    const response = await this.httpClient.get<MidiaGetResponse[]>(url);
    return response.data;
  };
}

export default CategoryService;
