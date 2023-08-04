export default {
	blue: () => {
		storeValue('background', '#606ebd')
		storeValue('highlight', '#0e23c2')
		storeValue('text', '#09171f')
		storeValue('contrast', '#a9ab43')
	},
	orange: () => {
		storeValue('background', '#ba9a99')
		storeValue('highlight', '#990f0b')
		storeValue('text', '#b30a05')
		storeValue('contrast', '#76948b')
		},
	green: () => {
		storeValue('background', '#9fb39b')
		storeValue('highlight', '#205717')
		storeValue('text', '#3b5237')
		storeValue('contrast', '#d13681')
	}
}