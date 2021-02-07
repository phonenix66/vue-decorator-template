<template>
    <div class="panel-title">
        <h3>{{ title }}</h3>
    </div>
</template>

<script>
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class PanelTitle extends Vue {
    @Prop({ type: String, default: '' }) title;
}
</script>

<style lang="less" scoped>
.panel-title {
    padding: 10px 10px 0 10px;
    border-bottom: 2px solid #3168a7;
    h3 {
        color: #fff;
        position: relative;
        &::before {
            position: absolute;
            width: 8px;
            height: 8px;
            content: ' ';
            left: -15px;
            top: 29px;
            transform: rotate(45deg);
            background-color: #2da7ff;
        }
        &::after {
            position: absolute;
            content: '';
            width: 44px;
            height: 3px;
            background-color: #2da7ff;
            right: -10px;
            top: 32px;
        }
    }
}
</style>
