import React from "react";
import PlansCard from "./PlansCard";

const Plans = () => {
  return (
    <div className="plans">
      <div className="container">
        <PlansCard
        count={24}
        desc={"Unlimited TV shows and movies"}
        desc2={"Full HD quality"}
        desc3={"Can be viewed on 2 devices"}
        />
            <PlansCard
        count={36}
        desc={"Unlimited TV shows and movies"}
        desc2={"Full HD quality"}
        desc3={"Can be viewed on 2 devices"}
        />
            <PlansCard
        count={56}
        desc={"Unlimited TV shows and movies"}
        desc2={"Full HD quality"}
        desc3={"Can be viewed on 2 devices"}
        />
      </div>
    </div>
  );
};

export default Plans;
