export interface Banner {
  imageUrl: string;
  name: string;
  type: BannerType;
}

export type BannerType = "top-banner" | "listing-banner" | "side-banner";
