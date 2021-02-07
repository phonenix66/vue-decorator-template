<template>
    <div class="main" id="main">
        <top></top>
        <compass></compass>
        <bottom-toolbar></bottom-toolbar>
        <right-panel></right-panel>
        <hEF-weather></hEF-weather>
    </div>
</template>
<script>
import { bxAnaalyse } from '@/core/icons';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Getter } from '@/utils/getters';
import Top from './components/top/index';
import Compass from './components/compass/index';
import BottomToolbar from './components/bottom-toolbar/index';
import RightPanel from './components/right-panel/index';
import HEFWeather from './components/weather/index.vue';
@Component({
    components: {
        Top,
        Compass,
        BottomToolbar,
        RightPanel,
        HEFWeather
    }
})
export default class Home extends Vue {
    bxAnaalyse = bxAnaalyse;
    @Getter('map') map;
    async created() {
        const map = await this.$initMap().then(instance => {
            return instance;
        });
        this.$store.dispatch('map/GetMap', map);
    }
}
</script>

<style lang="less" scoped>
.main {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    background-color: #00569d;
}
</style>
