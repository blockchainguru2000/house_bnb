import {  useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";

const WelcomePage = () => {
    const navigate=useNavigate()
    return ( 
        <div className="w-[1300px] mx-auto h-[100vh]  flex justify-center items-center">

            <div className="">

                <h1 className="font-bold py-2">All The Best Hotesl availabel</h1>
                <Button onClick={()=>navigate("/home")}>Sign Up To Explore</Button>
               
            </div>
        </div>
     );
}
 
export default WelcomePage;