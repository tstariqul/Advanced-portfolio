import React from "react";
import { WorkData } from "../../../data/work";
import WorkCard from "./work-card";
import "./work.css";
import Separator from "../../common/separator/index";

function Work() {

  const data = WorkData;
  return (
    <div className="work">
      <Separator />
      <label className="rock-title">Work Experience💼 (≈2.5 Years) </label>
      <div data-aos="fade-up-right" className="work-list">
        {data.map((item, seework) => {
          return <WorkCard item={item} />;
        })}
      </div>
    </div>
  );
}

export default Work;
