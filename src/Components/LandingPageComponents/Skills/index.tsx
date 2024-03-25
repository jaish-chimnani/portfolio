import { Button } from "@mui/material";
import * as React from "react";
import Resources from "../../../config/resources";
import Graph from "../../shared/Graph";

function Skills() {
  return (
    <div className="md:flex text-white bg-center bg-cover h-[90%] bg-deepTeal">
      <div className="p-10 space-y-6 md:px-20 md:py-40 md:w-2/4">
        <h1 className="text-5xl font-semibold ">Your Heading Goes Here</h1>
        <p>
          This is prime space! Use it to elaborate on your attention-grabbing
          heading. Explain what this graph is about, share some details, and
          give just the right amount of information to engage your audience.
          Treat this paragraph as a caption of sorts to accompany your chart.
        </p>
      </div>
      <div className="p-10 md:py-20 md:w-2/4">
        <Graph />
      </div>
    </div>
  );
}
export default Skills;
