// ! containers and components
import WelcomeCard from "../containers/dashboard/WelcomeCard";
import OverviewCard from "../containers/dashboard/OverviewCard";
import RightCard from "../containers/dashboard/RightCard";
import SideNav from "../components/SideNav";
import MainNav from "../components/MainNav";

// ! icons and images
import icn_umbrella from "../assets/icons/umbrella.svg";
import icn_file from "../assets/icons/file.svg";
import icn_link from "../assets/icons/link.svg";
import icn_dollar from "../assets/icons/dollar.svg";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__nav">
        <MainNav />
      </div>
      <div className="dashboard__content">
        <SideNav />
        <div className="dashboard__content__data">
          <WelcomeCard />
          <div className="dashboard__overviewCard">
            <h2>Overview</h2>
            <div className="dashboard__overviewCard__contain">
              <OverviewCard
                className="dashboard__overviewCard__contain__child--4"
                icon={icn_link}
              />
              <OverviewCard
                className="dashboard__overviewCard__contain__child--1"
                icon={icn_umbrella}
              />
              <OverviewCard
                className="dashboard__overviewCard__contain__child--2"
                icon={icn_file}
              />
              <OverviewCard
                className="dashboard__overviewCard__contain__child--3"
                icon={icn_dollar}
              />
            </div>
          </div>
        </div>
        <RightCard />
      </div>
    </div>
  );
};

export default Dashboard;
