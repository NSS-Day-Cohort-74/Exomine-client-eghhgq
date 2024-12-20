import { purchaseMineral } from "../../TransientState.js";


export const SpacePurchaseHandler = (event) => {
    if (event.target.id === "space-purchase") {
        purchaseMineral()
    }
}

