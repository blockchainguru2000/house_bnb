import { useState } from 'react';
import { Button } from './components/ui/button';
import { CarouselDemo } from './components/ui/rt';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/Welcome';
import HomePage from './pages/HomePage';
import HouseDetail from './pages/HouseDetail';
import AddHome from './pages/AddHomePage';
import ProfilePage from './pages/ProfilePage';
//import { house_advert_backend } from 'declarations/house_advert_backend';

function App() {
  const [greeting, setGreeting] = useState('');

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const name = event.target.elements.name.value;
  //   house_advert_backend.greet(name).then((greeting) => {
  //     setGreeting(greeting);
  //   });
  //   return false;
  // }

  return (
   <BrowserRouter>
      <Routes>

        <Route path="/" element={<WelcomePage/>}/>
         <Route path="/home" element={<HomePage/>}/>
         <Route path="housedetail" element={<HouseDetail/>}/>
         <Route path="addhome" element={<AddHome/>}/>
         <Route path="profile" element={<ProfilePage/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
