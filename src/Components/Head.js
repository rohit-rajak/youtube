import Hamburger from "./Hamburger";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import Usericon from "./Usericon";

const Head =()=>{
    return(
        <div className="flex items-center">
            
            <Hamburger/>
            <Logo/>
            <SearchBox/>
            <Usericon/>
        </div>
    )
}

export default Head;