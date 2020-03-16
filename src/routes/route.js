import Login from '../pages/login';
import Error404 from '../pages/Error404'

import Header from '../templates/header'

//  const routes = {
//    "/": login,
//    "/:id": Home,
// //   "/contact": "Contact"
//  };

const router = async () => {
   const header = null || document.getElementById("header");
   const content = document.getElementById("content");

   header.innerHTML = await Header();
   content.innerHTML = await Login();

//   let hash = getHash();
//   let route = await resolveRoutes(hash);
//   let render = routes[route] ? routes[route] : Error404;
//   content.innerHTML = await render();
 };

export default router;
