<template>
    <div class="bottom-wrapper animate__animated animate__slideInUp">
        <svg-icon :iconClass="types[0]" className="toolbar-icon" @click="handle('car')"></svg-icon>
        <svg-icon
            :iconClass="types[1]"
            className="toolbar-icon"
            @click="handle('person')"
        ></svg-icon>
        <svg-icon
            :iconClass="types[2]"
            className="toolbar-icon"
            @click="handle('noise')"
        ></svg-icon>
        <svg-icon
            :iconClass="types[3]"
            className="toolbar-icon"
            @click="handle('video')"
        ></svg-icon>
    </div>
</template>
<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Getter } from '@/utils/getters';
@Component
export default class BottomToolbar extends Vue {
    @Getter('type') type;
    types = ['car', 'person', 'noise', 'video'];

    flag = false;

    created() {}

    handle(type) {
        const initTypes = ['car', 'person', 'noise', 'video'];
        if (this.type === type) {
            this.types = initTypes;
            this.$store.dispatch('map/SetType', '');
            return;
        }
        this.types = initTypes.map((item, i) => {
            if (item.indexOf(type) > -1) {
                return item + '-selected';
            } else {
                return item;
            }
        });

        this.$store.dispatch('map/SetType', type);
    }
}
</script>
<style lang="less" scoped>
.bottom-wrapper {
    position: absolute;
    bottom: 27px;
    height: 74px;
    z-index: 10;
    left: calc(50% - 160px);
    display: flex;
    width: 320px;
    justify-content: space-between;
    align-items: center;
    .icon-box {
        width: 74px;
        height: 74px;
    }
    .toolbar-icon {
        //font-size: 74px;
        cursor: pointer;
        width: 74px;
        height: 74px;
    }
}
</style>
