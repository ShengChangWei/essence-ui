import EsButton from './src/button'
// console.dir(EsButton)

if(EsButton['install']) {
   
    EsButton['install'] = function(vue) {
       
        Vue.component(EsButton.name, EsButton)
    }
}

export default EsButton;