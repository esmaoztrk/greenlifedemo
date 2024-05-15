import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Template = () => {
  return (
    <div>
      <Header/>
      <div className="footer-container-bottom">
        <Outlet/>   
        <Footer />    
      </div>
    </div>
  );
};

export default Template;
