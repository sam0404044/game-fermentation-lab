export type ProjectStatus = "已上線" | "製作中" | "概念中";

export type ProjectCategory =
  | "議題型遊戲"
  | "社群測驗"
  | "敘事互動"
  | "教育型互動"
  | "實驗型作品";

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  status: ProjectStatus;
  coverImage: string;
  shortDescription: string;
  longDescription: string;
  tags: string[];
  year: string;
  role: string;
  tools: string[];
  process: string[];
  link: string;
  youtubeLink: string;
}
