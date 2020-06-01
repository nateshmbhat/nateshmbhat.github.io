import { ProfileType, ProfileSite } from "../types/types";

export const profiles: ProfileType[]  = [
  {
    title: "Github",
    link: "https://github.com/nateshmbhat",
    category: "technical", // one of social , technical , work
    type: ProfileSite.github, // one of [facebook , github , hackerrank  , stackoverflow , stackexchange]
  },
  {
    title: "StackOverFlow",
    link: "https://stackoverflow.com/story/nateshmbhat",
    category: "technical", // one of social , technical , work
    type: ProfileSite.stackoverflow, // one of [facebook , github , hackerrank ]
  },
]
