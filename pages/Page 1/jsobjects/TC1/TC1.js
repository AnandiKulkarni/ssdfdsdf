export default {
	selectOptions: [
		{
			"label": "Blue",
			"value": "#7e98c2"
		},
		{
			"label": "Green",
			"value": "#96b080"
		},
		{
			"label": "Red",
			"value": "#ba5059"
		},
		{
			"label": "Yellow",
			"value": "#ebe58f"
		},
		{
			"label": "Grey",
			"value": "#a6aeba"
		}
	],

	myFun1: async () => {
		clearStore()
		await resetWidget('Switch1')
			.then(() => {
			resetWidget('Select1')
			resetWidget('Table1')
			this.myFun2() 		//return a message
				.then(async () => {
				await storeValue('selected', Select1.selectedOptionLabel)
				await showAlert('background colour is now ' + appsmith.store.selected) }) 
		}) 		//return a second toast message
			.catch((e) =>  {
			resetWidget('RadioGroup1')
			showAlert("Couldn't execute all success call steps, hence now in the catch block") })
	},
	myFun2: async () => {
		Api1.run()
			.then(() => showAlert("Ran the API"))
			.catch(() => showAlert("Nested call failed"))
	}
}