export default {
	components: true,
	head: {
		title: 'vizdata',
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'initial-scale=1, width=device-width'
			}
		]
	},
	modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],
	pwa: {
		manifest: {
			lang: 'en'
		}
	},
	ssr: false,
	target: 'static'
};
