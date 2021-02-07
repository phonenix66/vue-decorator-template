<template>
    <div class="types-warning-wrapper">
        <div class="warning-header">
            <span
                class="check"
                :class="type === 'week' ? 'selected' : ''"
                @click="initCharts('week')"
            >
                本周
            </span>
            <span
                class="check"
                :class="type === 'month' ? 'selected' : ''"
                @click="initCharts('month')"
            >
                本月
            </span>
            <span
                class="check"
                :class="type === 'year' ? 'selected' : ''"
                @click="initCharts('year')"
            >
                全年
            </span>
        </div>
        <div class="warning-charts" ref="chart"></div>
        <!-- <div class="warning-footer">
            <div class="item-type" v-for="(item, index) in types" :key="index">
                <span :style="{ backgroundColor: item.color }"></span>
                <b>{{ item.name }}</b>
            </div>
        </div> -->
    </div>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import * as echarts from 'echarts';
import { getData, getDaysArray } from '@/utils/util';
import { warningOption } from './config';
@Component
export default class TypesWarning extends Vue {
    types = [
        {
            color: '#3797FF',
            name: '未佩戴安全帽',
            week: getData(7),
            month: getData(30),
            year: getData(12)
        },
        {
            color: '#44D7B6',
            name: '火灾',
            week: getData(7),
            month: getData(30),
            year: getData(12)
        },
        {
            color: '#F7B500',
            name: '未戴口罩',
            week: getData(7),
            month: getData(30),
            year: getData(12)
        },
        {
            color: '#F37D2F',
            name: '未穿反光衣',
            week: getData(7),
            month: getData(30),
            year: getData(12)
        },
        {
            color: '#3BBAFF',
            name: '扬尘',
            week: getData(7),
            month: getData(30),
            year: getData(12)
        },
        {
            color: '#8A6AFF',
            name: '噪音',
            week: getData(7),
            month: getData(30),
            year: getData(12)
        }
    ];
    xAxisDataweek = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
    xAxisDatayear = [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月'
    ];
    xAxisDatamonth = getDaysArray(2020, 2);

    option = warningOption;
    chartInstance = null;
    type = '';
    created() {}
    mounted() {
        this.chartInstance = this.$echarts.init(this.$refs.chart);
        this.types.forEach(item => {
            this.option.color.push(item.color);
            this.option.legend.data.push(item.name);
        });
        this.initCharts('week');
        // console.log(this.types);
    }
    initCharts(type) {
        this.type = type;
        this.option.series = [];

        this.option.xAxis[0].data = this['xAxisData' + type];
        this.types.forEach(item => {
            this.option.series.push({
                name: item.name,
                type: 'line',
                showAllSymbol: true,
                smooth: true,
                symbol: 'none',
                symbolSize: 5,
                lineStyle: {
                    color: item.color
                },
                label: {
                    show: true,
                    position: 'top',

                    color: item.color
                },
                itemStyle: {
                    borderColor: item.color,
                    borderWidth: 2
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(43,193,145,0.3)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(43,193,145,0)'
                            }
                        ],
                        false
                    )
                },
                data: item[type]
            });
        });
        this.chartInstance.setOption(this.option);
    }
}
</script>

<style lang="less" scoped>
.types-warning-wrapper {
    width: 100%;
    height: 292px;
    padding: 10px 0 0;
    .warning-header {
        height: 22px;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        span.check {
            width: 60px;
            height: 22px;
            color: #48caff;
            font-size: 12px;
            line-height: 22px;
            text-align: center;
            background-image: url('~@/assets/images/map/types-frame.png');
            background-position: 0 0;
            background-repeat: no-repeat;
            cursor: pointer;
            &.selected {
                color: #fff;
                background-position: 0 -22px;
            }
        }
    }
    .warning-charts {
        height: 258px;
    }
    .warning-footer {
        height: 18px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        .item-type {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 4px;
            span {
                width: 8px;
                height: 8px;
            }
            b {
                color: #fff;
                font-weight: 500;
                margin: 0 0 0 2px;
            }
        }
    }
}
</style>
