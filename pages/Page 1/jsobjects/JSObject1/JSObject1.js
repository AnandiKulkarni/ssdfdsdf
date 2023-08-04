export default {
	myVar1: [],
	myVar2: {},
myFun1 () {
	  let var1 = Table1.selectedRow.country
		return var1
	},
	async myFun2 () {  
		setInterval((s)=>{console.log("asdasdsad")},3000)
	},
		 myFun3 () {
	    setTimeout((s)=>{
				Api1.run().then((s)=>{
					console.log(s.users)
					storeValue('username',s.users[2].name)
				},2000).then(s=>console.log(appsmith.store.username))
			})
	},
	 myFun4 () {
     return this.myVar1[0].id
	},
 myFun5 () {
		 return Api1.data.users.map((s)=>{
			 return{
				 label:s.name,
				 value:s.name
			 }
		 })	 
	},
	 myFun6 () {
	  Api1.run((s)=>{storeValue('email',s.users[3].email).then((s)=>{console.log(appsmith.store.email)})})
	},
}
