<template>
    <div
        class="right-panel-wrapper panel-car-wrapper animate__animated"
        :class="type === 'car' ? 'animate__slideInRight' : 'animate__slideOutRight'"
    >
        <panel-title title="车辆信息"></panel-title>
        <panel-kpi-boxer class="kpi-box">
            <div class="item-bag">
                <span>当前在线车辆</span>
                <p>12</p>
            </div>
            <div class="item-bag">
                <span>当前在线车辆</span>
                <p>12</p>
            </div>
        </panel-kpi-boxer>
    </div>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Getter } from '@/utils/getters';
import PanelTitle from '../components/title';
import PanelKpiBoxer from '../components/kpiBoxer';

import { getList } from '@/api/map/car';
@Component({
    components: {
        PanelTitle,
        PanelKpiBoxer
    }
})
export default class PanelCar extends Vue {
    @Getter('type') type;

    created() {
        getList({
            pageNo: 1,
            pageSize: 10
        }).then(res => {
            console.log(res);
        });
    }
}
</script>
<style lang="less" scoped>
.panel-car-wrapper {
    .kpi-box {
        width: 100%;
        margin: 16px 0;
        /deep/ .panel-kpi-inner {
            display: flex;
            justify-content: space-around;
            align-items: center;
            .item-bag {
                padding: 10px 20px 5px 30px;
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
    }
}
</style>
