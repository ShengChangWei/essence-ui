import EsMap from './src/es-map.vue'


EsMap.install = function(vue) {
    Vue.component(EsMap.name, EsMap)
}

export default EsMap;