import EsButton from './button/index.js'
import EsInput from './input/index.js'
import EsMap from './es-map/index.js'

const components = [
    EsButton,
    EsInput,
    EsMap
];

const install = function(Vue) {
    if(install['installed']) return;
    components.map(component => Vue.component(component.name, component))
}

// 判断是否直接引入

if(typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    EsButton,
    EsInput,
    EsMap
}