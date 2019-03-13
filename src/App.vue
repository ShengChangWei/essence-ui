<template>
	<div id="app">
		<es-map :prop="props"></es-map>
	</div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import HelloWorld from './components/HelloWorld.vue';

    @Component({
        components: {
            HelloWorld,
        },
    })
    export default class App extends Vue {

		private msg: string = '我是测试文件';
		props:any = {
			geoUrl: ' http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer',
          gisApiUrl: 'http://js.arcgis.com/3.23/',
          initExtent: {xmax: 116.39029888900006, xmin: 116.04209077900009, ymax: 40.161018230000025, ymin: 39.885287565000056},
          initExtent1: {xmax: 12980277.986602597, xmin: 12934415.769631553, ymax: 4864627.423165954, ymin: 4841696.314680432},
          showMapType: 'google',
		}
    }
</script>

<style lang="scss">
html,body {
	width: 100%;
	height: 100%;
	overflow: hidden;
	margin: 0;
	padding: 0;
}
	#app {
		// position: absolute;
		// top: 0;
		// left: 0;
		// right: 0;
		// bottom: 0;
		// height: 100%;
		// width: 100%;
	}
</style>
