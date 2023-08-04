export default {
	myFun1: async () => { 
		// TC1.clearStore()
		randomUserGenerator.run()
			.then((res) => {
			let values =
					[
						storeValue('pic', res.results[0].picture.large),
						storeValue('dob', res.results[0].dob.date),
						storeValue('phone', res.results[0].phone),
						storeValue('cell', res.results[0].cell),
						storeValue('email', res.results[0].email),
						storeValue('password', res.results[0].login.password),
						storeValue('lat', res.results[0].location.coordinates.latitude),
						storeValue('long', res.results[0].location.coordinates.longitude),
						storeValue('title', res.results[0].name.title),
						storeValue('first', res.results[0].name.first),
						storeValue('last', res.results[0].name.last),
						storeValue('gender', res.results[0].gender)
					]
			return Promise.all(values)
				.then(() => {	
				showAlert("completed storing all values and now displaying fetched data on appropriate widgets") 
				console.log(appsmith.store) 
				console.log(values)
			})
				.catch((err) => { 
				console.log("Could not store values   ", err.toString())
				showAlert('Could not store values ', err.toString())		
			}) })
		await console.warn("2");
	},
	myFun2: async () => {
		failingQuery.run()
			.then(() => showAlert("Query run was successful"))
			.catch(() => {
			randomUserGenerator.run()
				.then((res) => {
				let values =
						[
							storeValue('pic', res.results[0].picture.large),
							storeValue('dob', res.results[0].dob.date),
							storeValue('phone', res.results[0].phone),
							storeValue('cell', res.results[0].cell),
							storeValue('email', res.results[0].email),
							storeValue('password', res.results[0].login.password),
							storeValue('lat', res.results[0].location.coordinates.latitude),
							storeValue('long', res.results[0].location.coordinates.longitude),
							storeValue('title', res.results[0].name.title),
							storeValue('first', res.results[0].name.first),
							storeValue('last', res.results[0].name.last),
							storeValue('gender', res.results[0].gender)
						]
				return Promise.all(values)
					.then(() => {	
					showAlert("completed storing all values and now displaying all values on appropriate widgets") })
					.catch((err) => { 
					console.log("Could not store value in store  ", err.toString())
					showAlert('Could not store values in store ', err.toString())		
				}) 
			})
		})
	}, 
}