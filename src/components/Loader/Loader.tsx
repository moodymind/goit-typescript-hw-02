import React from "react";
import { Oval } from "react-loader-spinner";
import "./Loader.modules.css";

const Loader: React.FC = () => (
  <div className="loader-container">
    <Oval
      height={80}
      width={80}
      color="#4fa94d"
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#4fa94d"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  </div>
);

export default Loader;
