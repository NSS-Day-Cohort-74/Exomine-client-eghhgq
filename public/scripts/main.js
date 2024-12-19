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

    <div id="colonyMinContainer" class="container">
      <div id="colony-minerals">
        <h3>Colony Minerals</h3>
      </div>
    </div>
  </div>
  <div id="bottom">
  <div id="FacilityMinContainer" class="container">
    <div id="facility-minerals">
      <h3>Facility Minerals</h3>
    </div>
      </div>
    ${genSpaceCart()}
  </div>`;
};


render();



