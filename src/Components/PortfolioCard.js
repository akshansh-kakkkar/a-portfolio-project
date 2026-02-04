import Header from "./Header";
import Avatar from "./Avatar";
import PersonalInfo from "./PersonalInfo";
import Bio from "./Bio";
import "../portfolio.css";

function PortfolioCard() {
  return (
    <div className="flex">
    <div className="portfolio-card">
      <Header />
      <div className="card-content">
        <Avatar />
        <PersonalInfo />
        <Bio />
      </div>
    </div>
    </div>
  );
}
export default PortfolioCard;
 