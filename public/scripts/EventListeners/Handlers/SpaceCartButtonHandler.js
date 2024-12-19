import { purchaseMineral } from "../../TransientState.js";


export const SpacePurchaseHandler = (event) => {
    event.target.id === "space-purchase" && purchaseMineral()
}

