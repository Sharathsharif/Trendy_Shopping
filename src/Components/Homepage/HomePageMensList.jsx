import "../CSS/Home.css";
import HomepageProductLayout from "./HomepageProductLayout";
import { MensFormalPantList } from "../Productlists/Mens/Dress/MensFormalpantsList";
import { MensSuitList } from "../Productlists/Mens/Dress/MensSuitList";
import { MensAnalogWatchList } from "../Productlists/Mens/Watches/MensAnalogWatchList";

export default function HomePageMensList() {
  return (
    <>
      <br />
      <br />
      <br />
      <h2 className="HomepageHotDealstitle ">
        
        <strong>Hot Mens Deals !!!</strong>
      </h2>
      <div className="Homepageproduct_container" >
      <HomepageProductLayout {...MensFormalPantList[0]} />
      <HomepageProductLayout {...MensFormalPantList[1]} />
      <HomepageProductLayout {...MensSuitList[1]} />
      <HomepageProductLayout {...MensSuitList[2]} />
    <HomepageProductLayout {...MensAnalogWatchList[0]}/>
      </div>

      <h2 className="HomepageHotDealstitle ">
        
        <strong>Hot Womens Deals !!!</strong>

      </h2>
    </>
  );
}
