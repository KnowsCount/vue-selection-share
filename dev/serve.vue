<!--
 * @Date: 01/06/2021 16.55.57 +0800
 * @Author: KnowsCount
 * @LastEditTime: 02/06/2021 07.23.39 +0800
 * @FilePath: /vue-selection-share/dev/serve.vue
-->
<script>
import Vue from 'vue'
import VueSelectionShare from '@/vue-selection-share.vue'

export default Vue.extend({
	name: 'ServeDev',
	components: {
		VueSelectionShare
	},
	methods: {
		onShare (text) {
			console.log('share:', text)
		},

		onHighlight (text) {
			console.log('highlight:', text)
		}
	}
})
</script>

<template>
	<div id="app">
		<VueSelectionShare
			@share="onShare"
			@highlight="onHighlight"
		>
		<p>mother of god</p>
		</VueSelectionShare >
	</div>
</template>

<style>
p {
	padding-top: 30%;
	text-align: center;
}
</style>