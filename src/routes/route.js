import Login from '../pages/login';
import Error404 from '../pages/Error404'
import Home from '../pages/Home'
import Header from '../templates/header'
import Fotos from '../pages/Fotos'

import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'



const routes = {
    "/": Login,
    "/:id": Home,
    "/404c": Error404,   
    "/fotos": Fotos
};

const router = async () => {
   const header = null || document.getElementById("header");
   const content = document.getElementById("content");

   header.innerHTML = await Header();
//   content.innerHTML = await Login();

   let hash = getHash();
   let route = await resolveRoutes(hash);
   let render = routes[route] ? routes[route] : Error404;
   content.innerHTML = await render();
 };

export default router;
