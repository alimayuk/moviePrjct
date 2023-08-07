import React from "react";
import Faq from "react-faq-component";
import data from "../data/faqData";

const styles = {
  bgColor: "black",
  titleTextSize: "35px",
  titleTextColor: "white",
  rowTitleTextSize: '20px',
  rowTitleColor: "white",
  rowContentPaddingTop:"10px",
  rowContentPaddingBottom:"10px",
  rowContentColor: "grey",
  arrowColor: "red",
  rowContentTextSize: '16px',
};

const config = {
  animate: true,
  // arrowIcon: "V",
  tabFocus: true,
};

const Faqq = () => {
  return (
    <div>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
};

export default Faqq;
