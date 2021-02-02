<template>
    <div class="map-container"></div>
</template>
<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import WMTSTileGrid from 'ol/tilegrid/WMTS';
import WMTS from 'ol/source/WMTS';

import { getWidth, getTopLeft } from 'ol/extent';
import { get as getProjection } from 'ol/proj';
import { ZoomSlider } from 'ol/control';
/* import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import { Fill, Stroke, Style, Text, Icon } from 'ol/style';
import VectorLayer from 'ol/layer/Vector';
import Point from 'ol/geom/Point'; */

@Component
export default class YCMap extends Vue {
    data() {
        return {
            baseLayers: [],
            baseLayersConfig: {}
        };
    }
    async mounted() {
        await this.initBaseLayers();
        this.initMap();
    }
    destroyed() {}
    initBaseLayers() {
        const layer1 = this.crtLayerWMTS('vec_c', 'EPSG:4326', false, 1);
        const layer2 = this.crtLayerWMTS('img_c', 'EPSG:4326', true, 1);
        this.baseLayers = [layer1, layer2];
        this.baseLayersConfig = {
            vec_c: layer1,
            img_c: layer2
        };
    }
    crtLayerWMTS(type, proj, visible, opacity) {
        const projection = getProjection(proj);
        const projectionExtent = projection.getExtent();
        const size = getWidth(projectionExtent) / 256;
        const resolutions = new Array(18);
        const matrixIds = new Array(18);
        for (let z = 1; z < 18; ++z) {
            // generate resolutions and matrixIds arrays for this WMTS
            resolutions[z] = size / Math.pow(2, z);
            matrixIds[z] = z;
        }

        const layer = new TileLayer({
            visible: visible,
            opacity: opacity,
            source: new WMTS({
                url:
                    'http://t'
                    + Math.round(Math.random() * 7)
                    + '.tianditu.com/'
                    + type
                    + '/wmts?tk=dcc26cde758a5ee891ec81197fadcc68',
                layer: type.substr(0, 3),
                matrixSet: type.substring(4),
                format: 'tiles',
                projection: projection,
                tileGrid: new WMTSTileGrid({
                    origin: getTopLeft(projectionExtent),
                    resolutions: resolutions,
                    matrixIds
                }),
                style: 'default',
                wrapX: true
            })
        });
        layer.id = type;
        return layer;
    }
    initMap() {
        const center = [115.963883, 27.940015];
        const proj = 'EPSG:4326';
        const zoom = 15;
        const initMap = new Map({
            target: 'main',
            layers: this.baseLayers,
            view: new View({
                projection: proj,
                center: center,
                zoom: zoom,
                minZoom: 3,
                maxZoom: 18
            })
        });
        const zoomslider = new ZoomSlider();
        initMap.addControl(zoomslider);
        this.callback && this.callback(initMap);
    }
}
</script>

<style lang="less">
/* .ol-zoom {
    top: auto;
    left: 35px;
    bottom: 30px;

    button {
        width: 16px;
        margin: 0;
        padding: 0;
        outline: none;
        border: none;
        background: rgba(64, 141, 255, 0.22);
        box-shadow: 0px 0px 4px 2px rgba(0, 28, 71, 0.38);
        border: 1px solid #4399d0;
        height: 20px;
        font-size: 14px;
        font-weight: 400;
        color: #88d1ff;
        border-radius: 0;
        line-height: 20px;
    }
    &.ol-control {
        background-color: transparent;
    }
    .ol-zoom-out {
        margin-top: 153px;
        border-bottom-left-radius: 9px;
        border-bottom-right-radius: 9px;
    }
    .ol-zoom-in {
        border-top-left-radius: 9px;
        border-top-right-radius: 9px;
    }
}
.ol-zoomslider {
    top: auto;
    left: 37px;
    bottom: 51px;
    border-left: 1px solid #4399d0;
    border-right: 1px solid #4399d0;
    background: rgba(64, 141, 255, 0.22);
    box-shadow: 0px 0px 4px 2px rgba(0, 28, 71, 0.38);
    border-radius: 0px;
    width: 16px;
    height: 155px;

    &.ol-control:hover {
        background: rgba(64, 141, 255, 0.22);
    }
    .ol-zoomslider-thumb {
        width: 10px;
        height: 15px;
        overflow: hidden;
        filter: none;
        box-shadow: 0px 0px 2px 2px rgba(0, 160, 213, 0.6);
        border-radius: 20px;
        margin: 0;
        outline: none;
    }
} */

.ol-zoom {
    top: auto;
    left: 35px;
    bottom: 27px;

    button {
        width: 16px;
        margin: 0;
        padding: 0;
        outline: none;
        border: none;
        background: rgba(64, 141, 255, 0.22);
        //box-shadow: 0px 0px 4px 2px rgba(0, 28, 71, 0.38);
        box-shadow: 0 0 6px rgb(74, 173, 235);
        height: 20px;
        font-size: 14px;
        font-weight: 400;
        color: #88d1ff;
        border-radius: 0;
        line-height: 20px;
    }
    &.ol-control {
        border-radius: 0;
        background-color: transparent;
    }
    .ol-zoom-out {
        margin-top: 156px;
        border-bottom-left-radius: 9px;
        border-bottom-right-radius: 9px;
    }
    .ol-zoom-in {
        border-top-left-radius: 9px;
        border-top-right-radius: 9px;
    }
}

.ol-zoomslider {
    top: auto;
    left: 37px;
    bottom: 50px;
    background-color: rgba(64, 141, 255, 0.22);
    width: 16px;
    height: 155px;
    padding: 0;
    box-shadow: 0 0 6px rgb(74, 173, 235);
    //border-radius: 0px;
    &.ol-control {
        border-radius: 0;
    }
    &.ol-control:hover {
        background: rgba(64, 141, 255, 0.22);
    }
}

.ol-zoomslider:hover {
    background-color: rgba(255, 69, 0, 0.3);
}

.ol-zoomslider .ol-zoomslider-thumb {
    width: 10px;
    height: 16px;
    left: 3px;
    overflow: hidden;
    filter: none;
    box-shadow: 0px 0px 2px 2px rgba(0, 160, 213, 0.6);
    border-radius: 20px;
    margin: 0;
    outline: none;
}
a.ol-zoomslider-handle:hover {
    background-color: rgba(255, 69, 0, 0.7);
}
</style>
