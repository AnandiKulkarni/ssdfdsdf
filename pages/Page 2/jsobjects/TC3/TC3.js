export default {
	myVar1: [
		{
			"label": "Page navigation",
			"value": "Page navigation"
		},
		{
			"label": "Widget navigation",
			"value": "Widget navigation"
		},
		{
			"label": "Tab navigation - WIP",
			"value": "Tab navigation"
		},
		{
			"label": "External navigation",
			"value": "External navigation"
		}
	],
	myFun1: async () => {
		if (Select2.selectedOptionValue == "Page navigation") {
			console.log("Navigating to a page")
			await Api1.clear()
			await Api2.clear()
			await Api3.clear()
			Api1.run()
				.then(() => {
				Api2.run()
					.then(async () => {
					Api3.run()
					await	navigateTo('Navigated Page', {}, 'SAME_WINDOW')
				}) })
		}
		else if (Select2.selectedOptionValue == "Widget navigation") {
			console.log("Navigating to a widget after API execution")
			Api1.clear()
			Api2.clear()
			Api3.clear()
			Api1.run()
				.then(() => {
				Api2.run()
					.then(async () => {
					Api3.run()
					await navigateTo('https://release.app.appsmith.com/app/automation-test-cases/page-2-63d961ab4628c647b6101b45#0mi3h8zskd', {}, 'SAME_WINDOW')
				}) })
				.catch(() => showAlert("Trouble executing API calls")) //not executing from second call
		}
		else if (Select2.selectedOptionValue == "Tab navigation") {
			showAlert("Navigating to Tab 2 of tab widget")
			Api1.run()
				.then(() => {
				Api2.run()
					.then(async() => {
					Api3.run() 
					await navigateTo('https://release.app.appsmith.com/app/automation-test-cases/page-2-62c6ba550721a64d32ce5ef5/edit#stu122x6ov', {}, 'SAME_WINDOW')
				}) .catch((e) => console.log(e.message)) })
				.catch("Trouble executing API calls")
		}
		else if (Select2.selectedOptionValue == "External navigation") {
			showAlert("Navigating to Appsmith website")
			Api1.run()
				.then(() => {
				Api2.run()
					.then(async() => {
					Api3.run()
					await navigateTo('www.appsmith.com', {}, 'NEW_WINDOW')
				}) })
				.catch("Trouble executing API calls")
		}
	}
}