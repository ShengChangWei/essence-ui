import EsInput from './src/input.vue'

EsInput.install = function(vue) {
    Vue.component(EsInput.name, EsInput)
}

export default EsInput;