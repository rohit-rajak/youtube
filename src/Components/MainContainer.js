import { Outlet } from "react-router-dom";
import InnerContainer from "./InnerContainer";
import Sidebar from "./Sidebar";

const MainContainer =()=>{
    return(
        <div className="flex">
            <Sidebar/>
            
            <Outlet/>
        </div>
    )
}

export default MainContainer;