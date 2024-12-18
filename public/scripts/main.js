import { genGovernorSelectMenu } from "./selectMenus/GovernorSelect.js";
import { createEventListeners } from "./EventListeners/EventListeners.js";
import { genFacilitiesSelectMenu } from "./selectMenus/FacilitySelect.js";
import { genSpaceCart } from "./SpaceCart/SpaceCart.js";
const app = document.querySelector("#app");

const render = async () => {
	createEventListeners();
	app.innerHTML = `<div id="top">
    <div id="select-menus">
    <div class="selects">
    ${await genGovernorSelectMenu()}
  </div>
      <div class="selects">
        ${await genFacilitiesSelectMenu()} 
      </div>
  </div>

    <div id="colonyMinContainer">
      <div id="colony-minerals">
        <header>Colony Minerals</header> 
      </div>
    </div>
  </div>
  <div id="bottom">
  <div id="FacilityMinContainer">
    <div id="facility-minerals">
      <header>Facility Minerals</header> 
    </div>
      </div>
    ${genSpaceCart()}
  </div>`;
};

render();
