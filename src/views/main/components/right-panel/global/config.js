export const warningOption = {
    // backgroundColor: '#232d36',
    // color: ['#3797FF', '#44D7B6', '#F7B500', '#F37D2F', '#3BBAFF', '#8A6AFF'],
    color: [],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgba(0, 255, 233,0)'
                        },
                        {
                            offset: 0.5,
                            color: 'rgba(255, 255, 255,1)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(0, 255, 233,0)'
                        }
                    ],
                    global: false
                }
            }
        }
    },
    grid: {
        top: '5%',
        left: '5%',
        right: '4%',
        bottom: '16%'
        // containLabel: true
    },

    legend: {
        icon: 'rect',
        bottom: -6,
        data: [],
        // data: ['未佩戴安全帽', '火灾', '未戴口罩', '未穿反光衣', '扬尘', '噪音'],
        itemHeight: 8,
        itemWidth: 8,
        textStyle: {
            fontSize: 12,
            color: '#fff'
        }
    },
    xAxis: [
        {
            type: 'category',
            axisLine: {
                show: false,
                color: '#A582EA'
            },

            axisLabel: {
                color: '#fff',
                width: 100
            },
            splitLine: {
                show: false
            },
            boundaryGap: false,
            data: []
        }
    ],
    yAxis: [
        {
            type: 'value',
            min: 0,
            // max: 140,
            splitNumber: 4,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#00BFF3',
                    opacity: 0.23
                }
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: true,
                // margin: 20,
                color: '#fff'
            },
            axisTick: {
                show: false
            }
        }
    ],
    series: []
};

export const statusOption = {
    tooltip: {
        trigger: 'item'
    },
    // color: [],
    legend: {
        bottom: -5,
        data: [],
        itemHeight: 8,
        itemWidth: 8,
        textStyle: {
            fontSize: 12,
            color: '#fff'
        }
    },
    series: [
        {
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['35%', '65%'],
            minAngle: 10,
            legendHoverLink: true,
            avoidLabelOverlap: true,
            emphasis: {
                scale: true
            },
            itemStyle: {
                color: params => {
                    return ['#F57276', '#3797FF', '#4BD8F3'][params.dataIndex];
                }
            },
            selectedOffset: 15,
            label: {
                show: true,
                position: 'outer',
                alignTo: 'labelLine',
                color: '#fff',
                // ·圆点
                // backgroundColor: 'auto', // 圆点颜色，auto：映射的系列色
                // height,width.lineHeight必须为0
                distanceToLabelLine: 6, // 圆点到labelline距离
                textBorderWidth: 0,
                padding: [2.5, -2.5, 2.5, -2.5],
                formatter: '{c}'
            },
            data: []
        }
    ]
};
