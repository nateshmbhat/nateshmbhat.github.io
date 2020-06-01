export interface ProjectType {
  title: string
  imagePath: string
  demoLink: string
  shortDesc: string
  longDesc: string
}

export enum ProfileSite {
  stackoverflow,
  github,
  facebook,
  stackexchange,
  hackerrank,
  instagram,
  twitter,
  medium,
  dev,
}

export interface ProfileType {
  title: string
  link: string
  category: string
  type: ProfileSite
}

export interface AchievementType {
  shortDesc: string
  longDesc: string
  imagePath: string
}

export interface PortfolioDataType {
  profiles: ProfileType[]
  achievements: AchievementType[]
  projects: ProjectType[]
}
