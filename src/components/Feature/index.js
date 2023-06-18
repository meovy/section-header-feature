import React, { useEffect, useState } from "react";
import Feature from "./Feature";
import { list as featureData } from "../../constants/feature";

const Features = () => {
  const [ list, setList ] = useState([]);

  useEffect(()=>{
    setList(featureData);
  }, [])

  return (
    <div id="features" className="features-section">
      {list.map((feature) => (
        <Feature key={feature.id} data={feature} />
      ))}
    </div>
  );
};
export default Features;
