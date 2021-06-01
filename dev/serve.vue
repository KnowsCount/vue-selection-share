<!--
 * @Date: 01/06/2021 16.55.57 +0800
 * @Author: KnowsCount
 * @LastEditTime: 01/06/2021 17.01.48 +0800
 * @FilePath: /vue-selection-share/dev/serve.vue
-->
<script>
import Vue from 'vue';
import VueSelectionShare from '@/vue-selection-share.vue';

export default Vue.extend({
	name: 'ServeDev',
	components: {
		VueSelectionShare
	}
});
</script>

<template>
	<div id="app">
		<vue-selection-share />
	</div>
</template>
