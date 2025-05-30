import InnerContainer from "./InnerContainer";
import Sidebar from "./Sidebar";

const MainContainer =()=>{
    return(
        <div className="flex">
            <Sidebar/>
            <InnerContainer/>
        </div>
    )
}

export default MainContainer;