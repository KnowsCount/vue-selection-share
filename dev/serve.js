/*
 * @Date: 01/06/2021 16.55.57 +0800
 * @Author: KnowsCount
 * @LastEditTime: 01/06/2021 17.01.38 +0800
 * @FilePath: /vue-selection-share/dev/serve.js
 */
import Vue from 'vue'
import Dev from './serve.vue'

Vue.config.productionTip = false

new Vue({
	render: (h) => h(Dev),
}).$mount('#app')
