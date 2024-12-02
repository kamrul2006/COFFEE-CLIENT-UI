import { Outlet } from "react-router-dom";
import NavBar from "../Pages/NavBar";
import FooterPage from "../Pages/FooterPage";

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <FooterPage></FooterPage>
        </div>
    );
};

export default Root;