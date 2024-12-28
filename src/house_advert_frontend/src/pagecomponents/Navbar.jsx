import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { LogOut } from "lucide-react";

const NavBar = () => {
  const navaigate=useNavigate();
  return (
    <div className="w-full flex justify-between ">
      <h1 className="cursor-pointer font-bold" onClick={()=>Navigate("/home")}>TYHotelS</h1>
      <div className="flex items-center space-x-10">
        <Link to="/home">Explore Hotes</Link>
        <Link to="/profile">Profile</Link>
        <Button varaint="outline">
          <LogOut />
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
