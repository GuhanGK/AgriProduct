import React from "react";
import DashboardStyle from "./style";
import WeatherDisplay from "../Weather";

const Dashboard = () => {
  return (
    <>
      <DashboardStyle>
        <div className="">
            <WeatherDisplay />
        </div>
      </DashboardStyle>
    </>
  );
};

export default Dashboard;
