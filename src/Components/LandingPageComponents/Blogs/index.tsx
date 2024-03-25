import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import * as React from "react";
import Resources from "../../../config/resources";
import Blogcard from "../../BlogCards";

function Blogs() {
  const blogs = [
    {
      subHeading: "Blog",
      heading: "Blog",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa dolores eveniet, iste beatae architecto aut harum reiciendis, consectetur odit voluptate maiores cumque praesentium eligendi quod ullam amet vitae officia corporis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, facere. Eveniet, laboriosam. Corporis illum aut perspiciatis non amet sint, alias veniam illo deserunt doloremque quae in obcaecati? Eligendi, minima rerum.",
    },
    {
      heading: "Blog",
      subHeading: "Blog",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa dolores eveniet, iste beatae architecto aut harum reiciendis, consectetur odit voluptate maiores cumque praesentium eligendi quod ullam amet vitae officia corporis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, facere. Eveniet, laboriosam. Corporis illum aut perspiciatis non amet sint, alias veniam illo deserunt doloremque quae in obcaecati? Eligendi, minima rerum.",
    },
    {
      subHeading: "Blog",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa dolores eveniet, iste beatae architecto aut harum reiciendis, consectetur odit voluptate maiores cumque praesentium eligendi quod ullam amet vitae officia corporis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, facere. Eveniet, laboriosam. Corporis illum aut perspiciatis non amet sint, alias veniam illo deserunt doloremque quae in obcaecati? Eligendi, minima rerum.",
      heading: "Blog",
    },
  ];
  return (
    <div className="!h-[90%] bg-center bg-cover bg-deepTeal text-white">
      <h1 className="p-10 text-3xl font-semibold text-center">Blogs</h1>
      <div className="grid gap-4 p-10 md:pb-20 md:px-20 md:grid-cols-3 ">
        {blogs.map(({ subHeading, text,heading }) => {
          return (
            <Blogcard subHeading={subHeading} text={text} heading={heading}/>
          );
        })}
      </div>
    </div>
  );
}
export default Blogs;
