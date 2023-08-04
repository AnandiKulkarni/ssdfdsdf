export default {
	locations: [
		{
			"lat": 28.644078,
			"long": 77.343284,
			"title": "Vaishali",
			"color": "#8AA000"
		},
		{
			"lat": 28.6162195,
			"long": 77.1584105,
			"title": "Tilak Nagar",
			"color": "#8AA001"
		},
		{
			"lat": 28.5477725,
			"long": 77.27241599999999,
			"title": "Vasant Kunj",
			"color": "#8AA002"
		},
		{
			"lat": 28.6842635,
			"long": 77.12194249999999,
			"title": "Rohini",
			"color": "#8AA003"
		},
		{
			"lat": 28.627524,
			"long": 77.26232999999999,
			"title": "Mayur Vihar",
			"color": "#8AA004"
		},
		{
			"lat": 28.723989,
			"long": 77.32631549999999,
			"title": "New Friends Colony",
			"color": "#8AA005"
		},
		{
			"lat": 28.533346,
			"long": 77.2608495,
			"title": "Kalkaji",
			"color": "#8AA006"
		},
		{
			"lat": 28.6111395,
			"long": 77.0912565,
			"title": "Dwarka",
			"color": "#8AA007"
		},
		{
			"lat": 28.607106,
			"long": 77.0939745,
			"title": "Paschim Vihar",
			"color": "#8AA008"
		},
		{
			"lat": 28.7238,
			"long": 77.04109700000001,
			"title": "Janakpuri",
			"color": "#8AA009"
		},
		{
			"lat": 28.6004265,
			"long": 77.13923650000001,
			"title": "Uttam Nagar",
			"color": "#8AA00A"
		},
		{
			"lat": 28.662347500000003,
			"long": 77.293808,
			"title": "Preet Vihar",
			"color": "#8AA00B"
		},
		{
			"lat": 28.548065,
			"long": 77.238924,
			"title": "Nehru Place",
			"color": "#8AA00C"
		},
		{
			"lat": 28.698132,
			"long": 77.1752135,
			"title": "Pitampura",
			"color": "#8AA00D"
		},
		{
			"lat": 28.649233000000002,
			"long": 77.37527349999999,
			"title": "Ghaziabad",
			"color": "#8AA00E"
		},
		{
			"lat": 28.669881500000002,
			"long": 77.1325635,
			"title": "Punjabi Bagh",
			"color": "#8AA00F"
		},
		{
			"lat": 28.995054000000003,
			"long": 77.1732235,
			"title": "Patel Nagar"
		},
		{
			"lat": 28.7234325,
			"long": 77.202831,
			"title": "Shalimar Bagh"
		},
		{
			"lat": 28.6362485,
			"long": 77.229872,
			"title": "Greater Kailash (1/ 2/ 3)"
		},
		{
			"lat": 28.641876500000002,
			"long": 77.204572,
			"title": "Krishna Nagar"
		},
		{
			"lat": 28.596356,
			"long": 77.2121875,
			"title": "Connaught Place"
		},
		{
		"lat": 28.5450065,
		"long": 77.279852,
		"title": "Okhla"
		},
	{
	"lat": 28.637442999999998,
	"long": 77.1791195,
	"title": "Rajendra Nagar"
},
	{
	"lat": 28.65356,
	"long": 77.2749285,
	"title": "Shahdara"
},
	{
	"lat": 28.574506,
	"long": 77.1907595,
	"title": "Ashok Vihar"
},
	{
	"lat": 28.658746,
	"long": 77.1803415,
	"title": "Kamla Nagar"
},
	{
	"lat": 28.575978499999998,
	"long": 77.159367,
	"title": "Hauz Khas/Safdarjung/Green Park"
},
	{
	"lat": 28.607501499999998,
	"long": 77.22935749999999,
	"title": "Karol Bagh"
},
	{
	"lat": 28.509921499999997,
	"long": 77.2065825,
	"title": "Anand Vihar / Chander Nagar"
},
	{
	"lat": 28.5873275,
	"long": 77.22194250000001,
	"title": "Saket/Malviya Nagar/Adchini"
},
	{
	"lat": 28.6872405,
	"long": 77.114919,
	"title": "Rajouri/ Kirti"
},
	{
	"lat": 28.7819535,
	"long": 77.3001775,
	"title": "East of Kailash/Lajpat Nagar"
},
	{
	"lat": 28.61948,
	"long": 77.1274255,
	"title": "Hari Nagar / Mayapuri"
},
	{
	"lat": 28.529919,
	"long": 77.0723435,
	"title": "South ex / 1/ 2/ DC"
},
	{
	"lat": 28.77791,
	"long": 77.05407650000001,
	"title": "Vasant Vihar/ MB/ RKP"
},
	{
	"lat": 28.614067,
	"long": 77.0558015,
	"title": "Vikaspuri"
},
	{
	"lat": 28.67888,
	"long": 77.3584895,
	"title": "Dilshad Garden"
},
	{
	"lat": 28.718331499999998,
	"long": 77.1691395,
	"title": "Model Town (1/ 2)"
},
	{
	"lat": 28.722808,
	"long": 77.12085400000001,
	"title": "Aerocity"
},
	{
	"lat": 28.586436499999998,
	"long": 77.300185,
	"title": "Jangpura"
},
	{
	"lat": 28.487882499999998,
	"long": 77.198639,
	"title": "Sainik Farms"
},
	{
	"lat": 28.653709,
	"long": 77.12888749999999,
	"title": "Ramesh Nagar"
}
],
	storeLocation: function () {
		storeValue('mapPins', this.locations)
		return appsmith.store.mapPins
	},
	countdown: () => {
		storeValue('count', NumberSlider1.value)
		var interval = setInterval(() => {
			storeValue('count', appsmith.store.count - 1)
			if(appsmith.store.count < 1 )
				clearInterval(interval)
		}, NumberSlider2.value)
	}
}