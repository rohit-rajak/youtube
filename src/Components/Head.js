import SearchBox from "./SearchBox";
import Usericon from "./Usericon";
import Logo from "./Logo";


const Head=()=>{
    return(
        <div className="flex justify-between items-center bg-gray-200 p-2">
            <Logo/>
            <SearchBox/>
            <Usericon/>
        </div>
    )
}
export default Head;