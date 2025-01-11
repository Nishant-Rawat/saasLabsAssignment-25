import React from "react";
import "./index.css";

const ShimmerLoader = ({
  width = "100%",
  height = "16px",
  borderRadius = "4px",
}) => {
  return (
    <div
      className="shimmer-loader"
      style={{ width, height, borderRadius }}
    ></div>
  );
};

export default ShimmerLoader;
