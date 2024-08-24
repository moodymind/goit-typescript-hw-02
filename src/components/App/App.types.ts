import Image from "../ImageCard/ImageCard.types";

export type IsLoading = true | false;
export type Error = string | null;
export type SelectedImage = Image | null;

export interface ApiResponse {
  results: Image[];
  page: number;
  per_page: number;
}
