<template>
    <div class="map-right-panel-wrapper">
        <div class="mask-lowest animate__animated animate__fadeIn"></div>
        <panel-global></panel-global>
        <panel-car :class="flag ? 'show' : 'hide'"></panel-car>
    </div>
</template>
<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Getter } from '@/utils/getters';
import PanelGlobal from './global/index';
import PanelCar from './car/index';
@Component({
    components: {
        PanelGlobal,
        PanelCar
    }
})
export default class RightPanel extends Vue {
    @Getter('type') type;
    flag = false;
    mounted() {
        /* this.$nextTick(() => {
            this.flag = true;
        }); */
        setTimeout(() => {
            this.flag = true;
        }, 2000);
    }
}
</script>
<style lang="less" scoped>
.map-right-panel-wrapper {
    position: absolute;
    right: 0;
    top: 68px;
    width: 422px;
    bottom: 0;
    padding: 30px 10px 0 0;
    z-index: 10;
    //animation: panelRight 1s forwards;
    .mask-lowest {
        width: 100%;
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: linear-gradient(90deg, rgba(0, 30, 15, 0.4) 0%, rgba(0, 19, 9, 0.73) 100%);
        filter: blur(38px);
        //animation: fadeIn 1s forwards;
    }

    .show {
        opacity: 1;
    }
    .hide {
        opacity: 0;
    }
}

@keyframes panelRight {
    0% {
        right: -420px;
    }
    100% {
        right: 0;
    }
}
@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>
