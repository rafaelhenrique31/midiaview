export interface CategoryGetResponse {
  id: number;
  name: string;
  bannerImage: string;
  active: boolean;
}

export interface MidiaGetResponse {
  id: number;
  name: string;
  description: string;
  active: boolean;
  createdAt: Date;
  isSerie: boolean;
  bannerImage: boolean;
  linkVideo: boolean;
  category: category;
}

export interface category {
  id: number;
  name: string;
  bannerImage: string;
  active: boolean;
}
