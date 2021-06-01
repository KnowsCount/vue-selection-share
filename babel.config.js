/*
 * @Date: 01/06/2021 16.55.57 +0800
 * @Author: KnowsCount
 * @LastEditTime: 01/06/2021 17.02.16 +0800
 * @FilePath: /vue-selection-share/babel.config.js
 */
const devPresets = ['@vue/babel-preset-app']
const buildPresets = [
	[
		'@babel/preset-env',
		// Config for @babel/preset-env
		{
			// Example: Always transpile optional chaining/nullish coalescing
			// include: [
			//   /(optional-chaining|nullish-coalescing)/
			// ],
		},
	],
]
module.exports = {
	presets: process.env.NODE_ENV === 'development' ? devPresets : buildPresets,
}
