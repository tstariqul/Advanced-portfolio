import React from "react";
import "./curricular.css";
import CurricularCard from "./curricular-card";
import { CurricularData } from "../../../data/curricular";
import Separator from "../../common/separator/index";
function Curricular() {
  const data = CurricularData;
  return (
    <div className="curriculars">
      <Separator />
      <label className="section-title">Co-curricular & Accomplish­ments🧾</label>
      <div>
        {data.map((curricular) => {
          return <CurricularCard curricular={curricular} />;
        })}
      </div>
    </div>
  );
}

export default Curricular;
