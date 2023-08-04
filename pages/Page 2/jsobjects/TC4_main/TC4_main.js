export default {
	both: async function () {
		this.cat()
		await setTimeout(() => { 
			console.log('executing code doggo')
			this.dog()} ,12000, 'both')
	},
	dog: async () => {
		setInterval(() => {
			storeValue('imageApi','https://dog.ceo/api/breeds/image/random')
			storeValue('factsApi', 'https://dogapi.dog/api/v2/facts') 
				.then(async () => {
				await petImages.run();
				await petFacts.run()
				console.log('Attemping to find new dog pics')
			}).then( () => {
				(petImages.responseMeta.statusCode == '200 OK' ? storeValue('doggoImage', petImages.data.message) : appsmith.store.dogImage),
				(petFacts.responseMeta.statusCode === '200 OK' ? storeValue('petFacts', petFacts.data[0].attribute.body) : appsmith.store.dogFact)
				console.log('Found new doggo pics and fun facts about them')
			})
		}, 15000, 'doggo')	
	},
	cat: () => {
		setInterval(() => {
			storeValue('imageApi','https://api.thecatapi.com/v1/images/search')
			storeValue('factsApi', 'https://catfact.ninja/fact')
				.then(async () => {
				await	petImages.run()
				await	petFacts.run()
				console.log('Attemping to find new cat pics')
			}).then(async () => {
				storeValue('kittyImage', petImages.data[0].url)
				storeValue('kittyFact', petFacts.data.fact)
				console.log('Found new kitty pics and fun facts about them')
			})
		}, 15000, 'kitty')
	}
}