import { Button } from "@mui/material";
import * as React from "react";
import Resources from "../../../config/resources";

function Header() {
  return (
    <div className="flex !h-[90%] bg-center  bg-deepTeal text-white text-opacity-70">
      <div className="py-32 space-y-6 text-center md:px-72 ">
        <h1 className="text-5xl font-semibold ">Jaish Chimnani</h1>
        <p>
          👨‍💻 Software Engineer | Web & Mobile App Developer 🎓<br></br>{" "}
          <br></br> 🚀 Passionate about open source contributions and
          innovation. Currently focusing on projects utilizing React to create
          cutting-edge web and mobile applications.<br></br> <br></br>
        </p>
        <div className="flex items-center justify-center space-x-4">
          <Button variant="contained" className="!bg-deepTeal">
            Call
          </Button>
          <Button variant="contained" className="!bg-deepTeal">
            Email Me
          </Button>
        </div>
      </div>
      {/* <div className="w-2/4"></div> */}
    </div>
  );
}
export default Header;
