export interface CategoryGetResponse {
  id: number;
  name: string;
  bannerImage: string;
  active: boolean;
  midias: MidiaGetResponse[];
}

export interface MidiaGetResponse {
  id: number;
  name: string;
  description: string;
  active: boolean;
  createdAt: Date;
  isSerie: boolean;
  bannerImage: string;
  linkVideo: string;
  category: category;
  showTooltip: boolean | undefined;
}

export interface category {
  id: number;
  name: string;
  bannerImage: string;
  active: boolean;
}
