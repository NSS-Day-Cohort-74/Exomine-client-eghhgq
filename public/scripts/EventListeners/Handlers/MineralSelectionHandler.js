import { setMineral } from "../../TransientState.js"

export const mineralSelectionHandler = (changeEvent) => {
	if(changeEvent.target.name ==="facility-minerals"){
		const insideHTML=document.querySelector("#whatToBuy")
		const mineral = (changeEvent.target.dataset.name)
		insideHTML.innerHTML=`1 ton of ${mineral} `
		setMineral(changeEvent.target.dataset.id)

	}
}
	

/*
export const mineralSelectionHandler = ({
	target:
	{ 
		name: idOfMin,
		dataset: {
			name,
			id
		},
}}) => {
	if (name === "facility-minerals") {
		const insideHTML=document.querySelector("#whatToBuy")
		const mineral = (name)
		insideHTML.innerHTML=`1 ton of ${mineral} `
		setMineral(idOfMin)

	}
}
	*/