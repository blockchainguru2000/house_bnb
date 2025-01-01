import { useState } from "react";
import { Button } from "../components/ui/button";
import NavBar from "../pagecomponents/Navbar";
import { house_advert_backend } from "declarations/house_advert_backend";
const AddHome = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [image1, setImage1] = useState("");
  const [title, setTitle] = useState("");
  const [price,setPrice]=useState("");
  const handleimage1 = (e) => {
    const data = new FileReader();
    data.addEventListener("load", () => setImage1(data.result));
    data.readAsDataURL(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    house_advert_backend
      .register_new_house(name, title, description, location, price,email,image1)
      .then((result) => {
        console.log(result, "register");
        alert("house registered");
      });
  };
  return (
    <div className="max-w-[1400px] mx-auto pt-4 px-5">
      <NavBar />
      <div className="mt-4 mb-5">
        <h1 className="font-bold text-center">List Your House to the world</h1>
        <div className="pb-4">
          <form
            className="w-[700px] mx-auto border rounded-md p-2"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col my-3">
              <label htmlFor="">name of your property</label>
              <input
                type="text"
                value={title}
                minLength={10}
                maxLength={50}
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
                minLength={10}
                maxLength={50}
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
                 minLength={10}
                maxLength={50}
                required
                className="border"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            
            <div className="flex flex-col my-3">
              <label htmlFor="">your email address</label>
              <input
                type="email"
                value={email}
               
                required
                className="border"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
             <div className="flex flex-col my-3">
              <label htmlFor="">House price</label>
              <input
                type="number"
                value={price}
                 min={10}
                required
                className="border"
                onChange={(e) => setPrice(e.target.value)}
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
