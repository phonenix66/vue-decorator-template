<template>
    <div class="today-warning-wrapper">
        <div class="today">
            <h2>95</h2>
            <h4>今日警告</h4>
        </div>
        <panel-kpi-boxer style="width:283px;height:130px" class="kpi-list">
            <div class="item-bag">
                <span>未佩戴安全帽</span>
                <p>12</p>
            </div>
            <div class="item-bag">
                <span>火宅</span>
                <p>12</p>
            </div>
            <div class="item-bag">
                <span>未戴口罩</span>
                <p>12</p>
            </div>
            <div class="item-bag">
                <span>未穿反光衣</span>
                <p>12</p>
            </div>
            <div class="item-bag">
                <span>噪音</span>
                <p>12</p>
            </div>
            <div class="item-bag">
                <span>扬尘</span>
                <p>12</p>
            </div>
        </panel-kpi-boxer>
    </div>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import PanelKpiBoxer from '../components/kpiBoxer';
@Component({
    components: {
        PanelKpiBoxer
    }
})
export default class TodayWarning extends Vue {}
</script>

<style lang="less" scoped>
.today-warning-wrapper {
    padding: 10px 0 16px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px dashed #2c7bc1;
    .today {
        width: 115px;
        height: 130px;
        background-image: url(~@/assets/images/map/gaojing.png);
        background-position: top center;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h2 {
            font-family: 'Courier New', Courier, monospace;
            color: #fff;
            text-align: center;
            font-weight: bold;
            font-size: 32px;
        }
        h4 {
            font-size: 16px;
            text-align: center;
            color: #fff;
            margin: 0;
            position: relative;
            bottom: -10px;
        }
    }
    .kpi-list {
        /deep/ .panel-kpi-inner {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
        }
    }
    .item-bag {
        width: 25%;
        &:nth-child(3n + 1) {
            width: 50%;
            padding-left: 10px;
        }
        span {
            color: #fff;
            font-family: 14px;
            line-height: 20px;
        }
        p {
            color: #48caff;
            font-size: 20px;
            font-family: 'Courier New', 'Trebuchet MS';
            margin: 0;
            font-weight: bold;
        }
    }
}
</style>
