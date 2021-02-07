<template>
    <div class="weather-wrapper">
        <div class="time-localtion">
            <p>{{ time }}</p>
            <p>湖北省-宜昌市</p>
        </div>
        <div class="icon-box">
            <img :src="src" />
        </div>
        <div class="temp-text">
            <p>{{ temp }}°</p>
            <p>{{ text }}</p>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import axios from 'axios';
import moment from 'moment';
@Component
export default class HEFWeather extends Vue {
    params = {
        location: '101200901',
        key: '3abea843fe4042999cb222ce7ed07ee7'
    };
    temp = '';
    text = '';
    src = '';
    time = '';
    created() {
        axios
            .get(
                'https://devapi.qweather.com/v7/weather/now?location=101200901&key=3abea843fe4042999cb222ce7ed07ee7'
            )
            .then(res => {
                // console.log(res.data);
                if (res.status === 200) {
                    const result = res.data.now;
                    this.temp = result.temp;
                    this.text = result.text;
                    this.src = this.getImgUrl(result.icon);
                    this.time = moment(result.obsTime).format('YYYY-MM-DD');
                }
            });
    }

    getImgUrl(icon) {
        const images = require.context('../../../../assets/weather-icon-S2/64/', false, /\.png$/);
        return images('./' + icon + '.png');
    }
}
</script>

<style lang="less" scoped>
.weather-wrapper {
    width: 420px;
    height: 64px;
    position: absolute;
    top: 60px;
    right: 20px;
    display: flex;
    flex-direction: row;
    z-index: 10;
    justify-content: flex-end;
    align-items: center;
    .time-localtion {
        p {
            font-size: 16px;
            &:last-child {
                color: #00a0fb;
            }
        }
    }
    p {
        color: #fff;
        margin: 0;
        padding: 0;
        font-size: 16px;
    }
    .temp-text {
        text-align: center;
        p:first-child {
            font-size: 18px;
            font-weight: 700;
        }
    }
}
</style>
