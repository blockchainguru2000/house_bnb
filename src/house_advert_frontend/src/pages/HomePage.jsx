import { useNavigate } from "react-router-dom";
import NavBar from "../pagecomponents/Navbar";
import { house_advert_backend } from 'declarations/house_advert_backend';
import { useEffect, useState } from "react";
const HomePage = () => {
  const navigate=useNavigate();
 const [data,setData]=useState([]);
 useEffect(()=>{
  house_advert_backend . get_all_houses().then((result)=>{
    console.log(result,"houses")
    setData(result);
  })
},[]);
  return (
    <div className="max-w-[1400px] mx-auto pt-4 px-5">
      <NavBar />

      <div className="mt-[50px] px-2">
        {data.length == 0 ? (
          <>
            <div className="h-[70vh] flex justify-center items-center">
              <h1 className="font-bold">
                Currently no houses available to explore
              </h1>
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-4 gap-4">
              {data.map((val, _index) => (
                <div className="" key={_index}>
                  <div className=" w-[300px] cursor-pointer" onClick={()=>navigate(`/housedetail/${val.id}`)}>
                    <img src={val?.image1} alt={val.name} className="w-full h-[200px]"/>
                    <div className="my-4">
                        <h2 className="font-bold">{val.name}, <span className="">{val.location}</span></h2>
                        <h4 className="my-3">price ${val.price}</h4>
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

export default HomePage;
