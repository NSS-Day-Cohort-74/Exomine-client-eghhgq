import { genGovernorSelectMenu } from "./selectMenus/GovernorSelect.js";
import { createEventListeners } from "./EventListeners/EventListeners.js";
import { genFacilitiesSelectMenu } from "./selectMenus/FacilitySelect.js";
const app = document.querySelector("#app");

const render = async () => {
  createEventListeners();
  const facilities = await genFacilitiesSelectMenu();
  const governer = await genGovernorSelectMenu();
  app.innerHTML = `${governer} 
                   ${facilities}
                    <div id="colonyMinContainer">
                            <div id="colony-minerals">
                                <header>Colony Minerals</header> 
                            </div>
                    </div>
                    <div id="FacilityMinContainer">
                            <div id="facility-minerals">
                                <header>Facility Minerals</header> 
                            </div>
                    </div>`;
 

};

render();
