import Cards from "./Componentes/Cards/Cards";
import NavBar from "./Componentes/NavBar/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./Componentes/About/About";
import Detail from "./Componentes/Detail/Detail";
import Forms from "./Componentes/Forms/Forms";
import Favorites from "./Componentes/Favorites.js";
import style from "./App.module.css";
const EMAIL = 'facu@barsanti.com';
const PASSWORD = '1234';


function App() {
  const [characters, setCharacters] = useState([]);
  const {pathname} = useLocation();


  const navigate = useNavigate();
  const [access, setAccess] = useState(false);


function login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
};

useEffect(() => {
  !access && navigate('/');
}, [access]);
  


  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => {
        return char.id !== Number(id);
      })
    );
  };

  return (

    <div className={style.App}>
     {pathname !== '/' && <NavBar onSearch={onSearch} />}

         <Routes>
            <Route path="/" element={<Forms login={login}/>}/>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
         </Routes>

    </div>
  );
}

export default App;
