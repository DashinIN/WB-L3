import "./icons";
import Router from "./router";
import { cartService } from "./services/cart.service";
import { userService } from "./services/user.service";


async function initializeApp() {
  await userService.init(); 
  await cartService.init(); 
  const router = new Router(); 
  router.route();
  document.body.classList.add("is__ready");
}

initializeApp();