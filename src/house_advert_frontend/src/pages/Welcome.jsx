import {  useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import AuthButton from "../auth/authbutton";

const WelcomePage = () => {
    const navigate=useNavigate()
    return ( 
        <div className="w-[1300px] mx-auto h-[100vh]  flex justify-center items-center">

            <div className="">

                <h1 className="font-bold py-2">All The Best Hotesl availabel</h1>
             <AuthButton/>
               
            </div>
        </div>
     );
}
 
export default WelcomePage;