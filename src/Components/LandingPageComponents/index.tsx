import * as React from "react";
import Header from "./Header";
import Skills from "./Skills";
import Blogs from "./Blogs";
import Projects from "../Projects";
import { Divider } from "@mui/material";

function LandingPageComponent() {
  return (
    <div className="">
      <Divider />
      <Header />
      <Divider />
      <Projects />
      <Divider />
      <Skills />
      <Divider />
      <Blogs />
      <Divider />
    </div>
  );
}
export default LandingPageComponent;
