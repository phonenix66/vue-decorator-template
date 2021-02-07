<template>
    <div class="work-status-wrapper">
        <div class="pie-boxer" ref="chart"></div>
        <div class="kpi-boxer">
            <panel-kpi-boxer class="item-box">
                <div class="item-bag">
                    <span>现场管理人员</span>
                    <p>11</p>
                </div>
            </panel-kpi-boxer>
            <panel-kpi-boxer class="item-box">
                <div class="item-bag">
                    <span>正在使用车辆</span>
                    <p>21</p>
                </div>
            </panel-kpi-boxer>
            <panel-kpi-boxer class="item-box">
                <div class="item-bag">
                    <span>正在施工人员</span>
                    <p>32</p>
                </div>
            </panel-kpi-boxer>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import PanelKpiBoxer from '../components/kpiBoxer';

import { getRandomIntInclusive } from '@/utils/util';
import { statusOption } from './config';
@Component({
    components: {
        PanelKpiBoxer
    }
})
export default class WorkStatus extends Vue {
    types = [
        {
            color: '#F57276',
            name: '未施工',
            value: getRandomIntInclusive(5, 20)
        },
        {
            color: '#3797FF',
            name: '正在施工',
            value: getRandomIntInclusive(5, 30)
        },
        {
            color: '#4BD8F3',
            name: '已完工',
            value: getRandomIntInclusive(5, 35)
        }
    ];
    colors = ['#F57276', '#3797FF', '#4BD8F3'];
    option = statusOption;
    chartInstance = null;

    created() {}
    mounted() {
        this.chartInstance = this.$echarts.init(this.$refs.chart);
        this.initCharts();
    }
    initCharts() {
        this.option.series[0].data = [];
        this.types.forEach(item => {
            this.option.legend.data.push({
                name: item.name
            });
            this.option.series[0].data.push({
                name: item.name,
                value: item.value,
                label: {
                    color: item.color
                }
            });
        });
        this.chartInstance.setOption(this.option);
    }
}
</script>

<style lang="less" scoped>
.work-status-wrapper {
    height: 240px;
    width: 100%;
    display: flex;
    flex-direction: row;
    .pie-boxer {
        width: calc(100% - 130px);
    }
    .kpi-boxer {
        width: 130px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .item-box {
            width: 130px;
            height: 66px;

            &:nth-child(2) {
                margin: 10px 0;
            }
            .item-bag {
                display: flex;
                flex-direction: column;
                padding-left: 24px;
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
