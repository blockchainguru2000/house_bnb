import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import NavBar from "../pagecomponents/Navbar";
import { useParams } from "react-router-dom";
import { house_advert_backend } from "declarations/house_advert_backend";
const HouseDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    house_advert_backend.get_house(id).then((result) => {
      console.log(result, "house");
      setData(result.ok);
    });
  }, []);
  console.log(data, "data");
  return (
    <div className="max-w-[1400px] mx-auto pt-4 px-5">
      <NavBar />
      {data ? (
        <div className="">
          {data.map((val, index) => (
            <div className="" key={index}>
              <div className="w-[500px] mx-auto border rounded-md p-2">
                <h1 className="font-bold mt-4">
                 {val.name}
                </h1>
                <div className=" mt-4 h-[420px] border">
                  <div className="">
                    <img  src={val?.image1} alt="" className="w-full h-[420px]" />
                  </div>
                </div>
                <div className="mt-4 flex">
                  <div className="">
                    <h2 className="font-bold">
                      {val.location}
                    </h2>
                    <p className="py-3">
                      {val.description}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center py-3">
                  <Button>${val.price}</Button>
                  <Button variant="outline">Contact us</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className=""></div>
      )}
    </div>
  );
};

export default HouseDetail;
