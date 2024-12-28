import { Button } from "../components/ui/button";
import NavBar from "../pagecomponents/Navbar";

const HouseDetail = () => {
  return (
    <div className="max-w-[1400px] mx-auto pt-4 px-5">
      <NavBar />
      <h1 className="font-bold mt-4">
        AlpineCabin -Views! Outdoor shower, hot tub, more!
      </h1>
      <div className="flex gap-2 mt-4 h-[420px] border">
        <div className="">
          <img src="../../m.png" alt="" className="w-full h-full" />
        </div>
        <div className="grid grid-cols-2 gap-2 flex-1">
          <img src="../../m.png" alt="" className="w-full h-[200px]" />
          <img src="../../m.png" alt="" className="w-full h-[200px]" />
          <img src="../../m.png" alt="" className="w-full h-[200px]" />
          <img src="../../m.png" alt="" className="w-full h-[200px]" />
        </div>
      </div>
      <div className="mt-4 flex">
        <div className="">
          <h2 className="font-bold">
            Treehouse in Dahlonega, Georgia, United States
          </h2>
          <p className="py-3">
            Indulge in nature AND luxury on 40 private acres with views of the
            North Georgia Mountains. Sourwood Cabin at Kindle Ridge
          </p>
          <div className="my-4">
            <form action="">
                <label htmlFor="">provide your comment</label>
                <div className="">
                    <textarea className="border" rows={5} cols={30}/>
                </div>
            </form>
          </div>
          <Button className="mb-5">Emails us</Button>
        </div>
        <div className="w-[350px] pl-3 underline">
            <h1 className="py-2 font-bold">comments</h1>
        </div>
      </div>
    </div>
  );
};

export default HouseDetail;
