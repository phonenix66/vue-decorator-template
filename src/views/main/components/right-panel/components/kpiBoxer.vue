<template>
    <div class="panel-kpi-wrapper">
        <div class="panel-kpi-inner">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class PanelKpiBoxer extends Vue {}
</script>
<style lang="less" scoped>
.panel-kpi-wrapper {
    //width: 283px;
    //height: 130px;
    border-top: 1px solid #55c9ff;
    border-bottom: 1px solid #55c9ff;
    background: linear-gradient(to bottom, rgba(0, 123, 180, 0.2), rgba(30, 70, 95, 0.18));
    display: flex;
    position: relative;
    &::before {
        position: absolute;
        content: ' ';
        width: 8px;
        height: 2px;
        background-color: #61ffe1;
        left: 0;
        top: -3px;
    }
    &::after {
        position: absolute;
        content: ' ';
        width: 8px;
        height: 2px;
        background-color: #61ffe1;
        right: 0;
        top: -3px;
    }
    .panel-kpi-inner {
        flex: 1;
        /* display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center; */
        position: relative;
        &::before {
            position: absolute;
            content: ' ';
            width: 8px;
            height: 2px;
            background-color: #61ffe1;
            left: 0;
            bottom: -3px;
        }
        &::after {
            position: absolute;
            content: ' ';
            width: 8px;
            height: 2px;
            background-color: #61ffe1;
            right: 0;
            bottom: -3px;
        }
    }
}
</style>
