import { ProjectType } from "../types/types";

export const projects: ProjectType[] = [
  {
    title: "Multiple Pendulum Simulation",
    imagePath: "/assets/images/projects/simplePendulum.gif",
    demoLink: "/projects/Simple Pendulum/",
    shortDesc: "On and On and On...",
    longDesc:
      "Simulate the visual effects of multiple user interactive simple pendulums with assumed physical constants.",
  },
  {
    title: "Gravity",
    imagePath: "/assets/images/projects/gravity.gif",
    demoLink: "/projects/Gravity/",
    shortDesc: "So Pull Me Closer",
    longDesc:
      "Simulation of mutual gravitational force between particles of variable sizes . The particles when collide follow momentum conservation and their colors also combine to form the new combined color.",
  },
  {
    title: "Push and Pull",
    imagePath: "/assets/images/projects/Push And Pull.gif",
    demoLink: "/projects/Push and Pull/",
    shortDesc: "A game of mouse and mice :)",
    longDesc: `All objects are attracted to where you point your mouse and will have a beautiful repel effect for every object when mouse button is clicked.`,
  },
]
