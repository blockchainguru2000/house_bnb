import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { LogOut } from "lucide-react";
import { useAuth } from "../auth/authetication";
import AuthButton from "../auth/mavbarbutton";
import { useEffect } from "react";

const NavBar = () => {
  const navaigate = useNavigate();
  const { isAuthenticated, login, principal, logout } = useAuth();
  useEffect(() => {
    if (!isAuthenticated) {
      navaigate("/");
    }
  }, []);
  return (
    <div className="w-full flex justify-between ">
      <h1
        className="cursor-pointer font-bold"
        onClick={() => navaigate("/home")}
      >
        TYHotelS
      </h1>
      <div className="flex items-center space-x-10">
        <Link to="/home">Explore Hotes</Link>
        <Link to="/profile">Profile</Link>
        <AuthButton />
      </div>
    </div>
  );
};

export default NavBar;
