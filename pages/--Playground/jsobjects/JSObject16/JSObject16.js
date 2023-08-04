export default {
	myFun1: () => {
		petFacts.run()
		resetWidget('Select1')
			.then(() => storeValue('select', Select1.selectedOptionLabel))
			.then(() => showAlert(appsmith.store.select))
	},
	myFun2: async () => {
		//use async-await or promises
	}
}