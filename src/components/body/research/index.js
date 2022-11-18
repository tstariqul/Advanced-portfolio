import React from "react";
import "./research.css";
import ResearchCard from "./research-card";
import { ResearchData } from "../../../data/research";
import Separator from "../../common/separator/index";

function Research() {
  const data = ResearchData;
  return (
    <div className="research">
      <Separator />
      <label className="section-title">Research & Publication🔬 - Journals(3) Conferences(10), Papers Under Review(3), Thesis(2), Book(1)</label>
      <><br />
      Research Topics:
        Artificial Intelligence,
        Big Data,
        Cloud Computing,
        Data Science
      </>

      <div>
        {data.map((research) => {
          return <ResearchCard research={research} />;
        })}
      </div>
    </div>
  );
}

export default Research;
