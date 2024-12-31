
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/Welcome';
import HomePage from './pages/HomePage';
import HouseDetail from './pages/HouseDetail';
import AddHome from './pages/AddHomePage';
import ProfilePage from './pages/ProfilePage';
import { AuthProvider } from './auth/authetication';
//import { house_advert_backend } from 'declarations/house_advert_backend';

function App() {
 // const [greeting, setGreeting] = useState('');

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
      <AuthProvider>
      <Routes>

        <Route path="/" element={<WelcomePage/>}/>
         <Route path="/home" element={<HomePage/>}/>
         <Route path="housedetail" element={<HouseDetail/>}/>
         <Route path="addhome" element={<AddHome/>}/>
         <Route path="profile" element={<ProfilePage/>}/>
      </Routes>
      </AuthProvider>
   </BrowserRouter>
  );
}

export default App;
