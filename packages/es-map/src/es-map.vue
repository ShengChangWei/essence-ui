<template>
    <div class="map-content">
        <EVueEsrimap
        v-show="prop.showMapType === 'google'"
        :enableNavigation="'false'"
        :mapType="'google'"
        :mapUrl="'m'"
        :submapUrl="['y', 'p']"
        :geoUrl="prop.geoUrl"
        :initExtent="prop.initExtent1"
        :gisApiUrl="prop.gisApiUrl"
        v-on:baseLayerChange="onGoogleBaseLayerChange($event)"
        v-on:mapReady="onGoogleMapReady($event)">
        </EVueEsrimap>
        <EVueEsrimap
        v-show="prop.showMapType === 'tdt'"
        :mapType="'tdt'"
        :mapUrl="['vec','cva']"
        :submapUrl="[['img','cia'], ['ter','cta']]"
        :geoUrl="prop.geoUrl"
        :initExtent="prop.initExtent"
        :gisApiUrl="prop.gisApiUrl"
        :enableNavigation="'false'"
        v-on:baseLayerChange="onTdtBaseLayerChange($event)"
        v-on:mapReady="onTdtMapReady($event)">
        </EVueEsrimap>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
 @Component({
        name: 'EsMap',
    })
 export default class EsMap extends Vue {
        // @Prop({default: 'http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer'}) geoUrl!: string;
        // @Prop({default: 'http://js.arcgis.com/3.23/'}) gisApiUrl!: string;
        // @Prop({
        // default: function() { return  {xmax: 116.39029888900006, xmin: 116.04209077900009, ymax: 40.161018230000025, ymin: 39.885287565000056}}
        // })  initExtent!:any;
        // @Prop({
        // default: function() { return {xmax: 12980277.986602597, xmin: 12934415.769631553, ymax: 4864627.423165954, ymin: 4841696.314680432}}}) initExtent1!:any;
        // @Prop({default: 'tdt'}) showMapType!: string;
        @Emit() layerChange(val?: any) {}
        @Emit() mapReady(val?: any) {}

        @Prop({default:
        
       function() {
           return  {
            geoUrl: ' http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer',
            gisApiUrl: 'http://js.arcgis.com/3.23/',
            initExtent: {xmax: 116.39029888900006, xmin: 116.04209077900009, ymax: 40.161018230000025, ymin: 39.885287565000056},
            initExtent1: {xmax: 12980277.986602597, xmin: 12934415.769631553, ymax: 4864627.423165954, ymin: 4841696.314680432},
            showMapType: 'google',

        }
       }
        
        }) prop!:Object
        onGoogleBaseLayerChange(event: any) {
            this.layerChange(event)
        }

        onGoogleMapReady(event: any) {
            console.log(event)
            this.mapReady(event)
        }

        onTdtBaseLayerChange(event: any) {
             this.layerChange(event)
        } 

        onTdtMapReady(event: any) {
             this.mapReady(event)
        }

        

 }
</script>

<style lang="scss">

</style>
