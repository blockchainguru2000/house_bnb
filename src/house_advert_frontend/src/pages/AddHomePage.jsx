import { useState } from "react";
import { Button } from "../components/ui/button";
import NavBar from "../pagecomponents/Navbar";

const AddHome = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [image5, setImage5] = useState("");
  const [image1, setImage1] = useState("");
  const [title, setTitle] = useState("");
  const handleimage1 = (e) => {
    const data = new FileReader();
    data.addEventListener("load", () => setImage1(data.result));
    data.readAsDataURL(e.target.files[0]);
  };
  const handleimage2 = (e) => {
    const data = new FileReader();
    data.addEventListener("load", () => setImage2(data.result));
    data.readAsDataURL(e.target.files[0]);
  };
  const handleimage3 = (e) => {
    const data = new FileReader();
    data.addEventListener("load", () => setImage3(data.result));
    data.readAsDataURL(e.target.files[0]);
  };
  const handleimage4 = (e) => {
    const data = new FileReader();
    data.addEventListener("load", () => setImage4(data.result));
    data.readAsDataURL(e.target.files[0]);
  };
  const handleimage5 = (e) => {
    const data = new FileReader();
    data.addEventListener("load", () => setImage5(data.result));
    data.readAsDataURL(e.target.files[0]);
  };
  return (
    <div className="max-w-[1400px] mx-auto pt-4 px-5">
      <NavBar />
      <div className="mt-4 mb-5">
        <h1 className="font-bold text-center">List Your House to the world</h1>
        <div className="pb-4">
          <form className="w-[700px] mx-auto border rounded-md p-2">
            <div className="flex flex-col my-3">
              <label htmlFor="">name of your property</label>
              <input
                type="text"
                value={title}
                min={10}
                max={50}
                required
                className="border"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex flex-col my-3">
              <label htmlFor="">title of your property</label>
              <input
                type="text"
                value={name}
                min={10}
                max={50}
                required
                className="border"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col my-3">
              <label htmlFor="">location of your property</label>
              <input
                type="text"
                value={location}
                min={10}
                max={50}
                required
                className="border"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="flex flex-col my-3">
              <label htmlFor="">country of location of your property</label>
              <input
                type="text"
                value={country}
                min={10}
                max={50}
                required
                className="border"
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="">Description of your property</label>
              <textarea
                type="text"
                value={description}
                min={40}
                max={500}
                required
                className="border"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="">Image1 of your house </label>
              <input type="file" required onChange={handleimage1} />
              <div className="flex flex-col mb-3">
                <label htmlFor="">Image2 of your house </label>
                <input type="file" required onChange={handleimage2} />
              </div>
              <div className="flex flex-col mb-3">
                <label htmlFor="">Image3 of your house </label>
                <input type="file" required onChange={handleimage3} />
              </div>
              <div className="flex flex-col mb-3">
                <label htmlFor="">Image4 of your house </label>
                <input type="file" required onChange={handleimage4} />
              </div>
              <div className="flex flex-col mb-3">
                <label htmlFor="">Image5 of your house </label>
                <input type="file" required onChange={handleimage5} />
              </div>
            </div>
            <div className="mt-5 flex justify-end ">
              <Button type="submit">submit</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddHome;
