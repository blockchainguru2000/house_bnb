import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import NavBar from "../pagecomponents/Navbar";

const ProfilePage = () => {
    const navigate=useNavigate();
  const data = [
    {
      name: "Dahlonge",
      location: "Georgia",
      price: 234,
      likes: 2,
    },
  ];
  return (
    <div className="max-w-[1400px] mx-auto pt-4 px-5">
      <NavBar />

      <Button variant="link" onClick={()=>navigate("/addhome")}>Add Home</Button>
      <div className="mt-[50px] px-2">
        {data.length == 0 ? (
          <>
            <div className="h-[70vh] flex justify-center items-center">
              <h1 className="font-bold">you dont have any listing</h1>
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-4 gap-4">
              {data.map((val, _index) => (
                <div className="" key={_index}>
                  <div
                    className=" w-[300px]"
                    
                  >
                    <img
                      src="../../m.png"
                      alt={val.name}
                      className="w-full h-[200px]"
                    />
                    <div className="my-4 flex justify-between">
                      <Button variant="link">View</Button>
                      <Button variant="destructive">Delete</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
