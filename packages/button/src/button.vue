<template>
    <button
    class="es-button"
    :disabled="buttonDisabled"
    :class="[type? 'es-button-'+ type : '']"
    >
    按钮测试
    </button>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
 @Component({
        name: 'EsButton',
    })
 export default class EsButton extends Vue {

     @Prop() disabled!: Boolean;
     @Prop() loading!: Boolean;
     @Prop({default: 'success'}) type!: string;

     mounted():void {
         console.log(this)
     }
    //  计算属性
    get buttonDisabled() {
        return this.disabled
    }
 }
</script>

<style lang="scss" scoped>
    button {
        display: inline-block;

        &.es-button-success {
            background-color: greenyellow;
        }
        &.es-button-info {
            background-color: #fff;
        }
    }
</style>


