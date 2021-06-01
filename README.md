<!--
 * @Date: 01/06/2021 21.20.26 +0800
 * @Author: KnowsCount
 * @LastEditTime: 01/06/2021 21.43.03 +0800
 * @FilePath: /vue-selection-share/README.md
-->

# vue-selection-share

> a medium-like text highlight sharing component

![](https://knowscount-1304485449.cos.ap-shanghai.myqcloud.com/img/Screenshot%202021-06-01%20at%2021.21.11.png)

well, it's all about reinventing the wheel.

---

## 🤤 usage

to install the single file component, run:

```
npm install --save vue-selection-share
```

to use the component:

<!-- prettier-ignore-start -->
```vue.js
import VueSelectionShare from 'vue-selection-share';
```
<!-- prettier-ignore-end -->

then add `methods` for clicking behaviour, to `onShare` and `onHighlight`:

<!-- prettier-ignore-start -->
```vue.js
methods: {
	onShare (text) {
		console.log('share:', text)
	},

	onHighlight (text) {
		console.log('highlight:', text)
	}
}
```
<!-- prettier-ignore-end -->
