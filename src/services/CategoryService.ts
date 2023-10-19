import { AxiosInstance } from "axios";
import { CategoryGetResponse } from "./types";

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
}

export default CategoryService;
