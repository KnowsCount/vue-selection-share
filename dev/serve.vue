<!--
 * @Date: 01/06/2021 16.55.57 +0800
 * @Author: KnowsCount
 * @LastEditTime: 11/06/2021 07.45.58 +0800
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
		<!-- <p>mother of god</p> -->
		<p>
			To be truly womanly you must never wear your hair short; to be truly manly you must never wear it long. To be truly womanly you must dress as daintily as possible, however uncomfortably; to be truly manly you must wear the most hideous gear ever invented by the servility of tailors—a strange succession of cylinders from head to heel; cylinder on head, cylinder round your body, cylinders on arms and cylinders on legs. To be truly womanly you must be shrinking and clinging in manner and trivial in conversation; you must have no ideas, and rejoice that you wish for none; you must thank Heaven that you have never ridden a bicycle or smoked a cigarette; and you must be prepared to do a thousand other absurd and ridiculous things. To be truly manly you must be and do the opposite of all these things, with this exception—that with you the possession of ideas is optional. The finest specimens of British manhood are without ideas; but that, I say, is, generally speaking, a matter for yourself. It is indeed the only matter in which you have any choice. More important matters, such as the cut of your clothes and hair, the shape of your face, the length of your moustache and the pattern of your cane—all these are very properly regulated for you by laws of fashion, which you could never dream of breaking. You may break every moral law there is—or rather, was—and still remain a man. You may be a bully, a cad, a coward and a fool, in the poor heart and brains of you; but so long as you wear the mock regimentals of contemporary manhood, and are above all things plain and undistinguished enough, your reputation for manhood will be secure. There is nothing so dangerous to a reputation for manhood as brains or beauty.
		</p>
		</VueSelectionShare>
	</div>
</template>

<style>
p {
	padding-top: 30%;
	text-align: center;
}
</style>