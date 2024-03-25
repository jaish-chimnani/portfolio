import React from "react";
import ProjectsCard from "./ProjectCard";
import Resources from "../../config/resources";

export default function Projects() {
  const data = [
    {
      heading: "Project 1",
      image: Resources.images.projectCard.projectCard,
      description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima ipsa asperiores consectetur provident consequuntur nesciunt quasi. Qui mollitia deserunt sint ex, fuga, recusandae, possimus optio dolorem sapiente quas suscipit!",
    },
    {
      image: Resources.images.projectCard.projectCard,
      heading: "Project 1",
      description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima ipsa asperiores consectetur provident consequuntur nesciunt quasi. Qui mollitia deserunt sint ex, fuga, recusandae, possimus optio dolorem sapiente quas suscipit!",
    },
    {
      heading: "Project 1",
      image: Resources.images.projectCard.projectCard,
      description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima ipsa asperiores consectetur provident consequuntur nesciunt quasi. Qui mollitia deserunt sint ex, fuga, recusandae, possimus optio dolorem sapiente quas suscipit!",
    },
    {
      heading: "Project 1",
      image: Resources.images.projectCard.projectCard,
      description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima ipsa asperiores consectetur provident consequuntur nesciunt quasi. Qui mollitia deserunt sint ex, fuga, recusandae, possimus optio dolorem sapiente quas suscipit!",
    },
    {
      heading: "Project 1",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima ipsa asperiores consectetur provident consequuntur nesciunt quasi. Qui mollitia deserunt sint ex, fuga, recusandae, possimus optio dolorem sapiente quas suscipit!",
    },
  ];
  return (
    <div className="p-5 md:p-20">
      <div className="mb-10 text-5xl">My Projects</div>
      <div className="grid gap-8 md:grid-cols-3">
        {data?.map((item: any) => (
          <ProjectsCard
            description={item.description}
            heading={item.heading}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}
