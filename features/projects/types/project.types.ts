import { BadgeColor } from "@features/ui";

export enum ProjectLanguage {
  react = "react",
  node = "node",
  python = "python",
}

export enum ProjectStatus {
  stable = "info",
  warning = "warning",
  critical = "error",
}

export type StatusColors = {
  [ProjectStatus.stable]: BadgeColor;
  [ProjectStatus.warning]: BadgeColor;
  [ProjectStatus.critical]: BadgeColor;
};

export type Project = {
  id: string;
  name: string;
  language: ProjectLanguage;
  numIssues: number;
  numEvents24h: number;
  status: ProjectStatus;
};
