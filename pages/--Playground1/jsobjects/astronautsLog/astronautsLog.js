export default {
	myVar1: [],
	myVar2: {},
	astronautNames: () => {
		fetch
		return fetchAstronauts.data.results.map((n) => {
			return {
				label: n.name,
				value: n.name
		}})
	},
	displayAstronaut: () => Object.keys(this.astronautNames).map(a => ({ label: a + `${this.astronautNames[a] ? ' ' + this.astronautNames[a] : ''}`, value: a })),
	textColour: () => {
		storeValue('formTextColour', '#b91c1c')
	},
	progressBar: () => {
		return Math.floor(Math.random() * 100) + 1
	},
	ratings: () => {
		return Math.floor(Math.random() * 5) + 1
	}
}