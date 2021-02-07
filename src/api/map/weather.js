import request from '@/utils/request';

export function getHEFWeather(params) {
    return request({
        url: 'https://devapi.qweather.com/v7/weather/now',
        method: 'get',
        params
    });
}
