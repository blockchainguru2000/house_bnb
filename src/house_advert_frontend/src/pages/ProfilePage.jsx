import { useNavigate, } from "react-router-dom";
import { Button } from "../components/ui/button";
import NavBar from "../pagecomponents/Navbar";
import { house_advert_backend } from "declarations/house_advert_backend";
import { useEffect, useState } from "react";
const ProfilePage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    house_advert_backend.get_my_houses().then((result) => {
      console.log(result, "housesprofileghghfhhhh");
      setData(result.ok.houses);
    });
  }, []);


  const handledelete = (id) => {
    
    house_advert_backend.delete_house(id).then((result) => {
      console.log(result, "delete");
    });
    house_advert_backend.get_my_houses().then((result) => {
      console.log(result, "houseshyghghghgfhghfghg");
      setData(result.ok.houses);
    });
  };

  return (
    <div className="max-w-[1400px] mx-auto pt-4 px-5">
      <NavBar />

      <Button variant="link" onClick={() => navigate("/addhome")}>
        Add Home
      </Button>
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
                  <div className=" w-[300px]">
                    <img
                      src="../../m.png"
                      alt={val.name}
                      className="w-full h-[200px]"
                    />
                    <div className="my-4 flex justify-between">
                      <Button variant="link">View house</Button>
                      <Button
                        variant="destructive"
                        onClick={handledelete(val.id)}
                      >
                        Delete
                      </Button>
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
