import axios from 'axios';
import store from '@/store';
import storage from 'store';
import { Modal, notification } from 'ant-design-vue';
import { VueAxios } from './axios';
import { ACCESS_TOKEN } from '@/store/mutation-types';
// 创建axios实例

const request = axios.create({
    // API 请求的默认前缀
    baseURL: process.env.VUE_APP_API_BASE_URL,
    timeout: 6000
});

// 异常拦截处理器
const errorHandler = error => {
    if (error.response) {
        const data = error.response.data;
        // 从localstorage 获取token
        const token = storage.get(ACCESS_TOKEN);

        console.log('-----异常响应-----', token);
        console.log('-----异常状态-----', error.response.status);

        switch (error.response.status) {
            case 403:
                notification.error({
                    message: '系统提示',
                    description: '拒绝访问',
                    duration: 3
                });
                break;
            case 500:
                // eslint-disable-next-line no-case-declarations
                const type = error.response.request.responseType;
                if (type === 'blob') {
                    blobtoJson(data);
                    break;
                }
                if (token && data.message.includes('Token失效')) {
                    // update-begin- --- author:scott ------ date:20190225 ---- for:Token失效采用弹框模式，不直接跳转----
                    Modal.error({
                        title: '登录已过期',
                        content: '很抱歉，登录已过期，请重新登录',
                        okText: '重新登录',
                        mask: false,
                        onOk: () => {
                            store.dispatch('Logout').then(() => {
                                storage.remove(ACCESS_TOKEN);
                                /* try {
                                    const path = window.document.location.pathname;
                                    console.log('location pathname -> ' + path);
                                    if (path !== '/' && path.indexOf('/user/login') === -1) {
                                        window.location.reload();
                                    }
                                } catch (e) {
                                    window.location.reload();
                                } */
                            });
                        }
                    });
                }
                break;
            case 404:
                notification.error({
                    message: '系统提示',
                    description: '很抱歉，资源未找到',
                    duration: 3
                });
                break;
            case 504:
                notification.error({ message: '系统提示', description: '网络超时' });
                break;
            case 401:
                notification.error({
                    message: '系统提示',
                    description: '未授权，请重新登录',
                    duration: 3
                });
                if (token) {
                    /* store.dispatch('Logout').then(() => {
                        setTimeout(() => {
                            window.location.reload();
                        }, 1500);
                    }); */
                }
                break;
            default:
                notification.error({
                    message: '系统提示',
                    description: data.message,
                    duration: 4
                });
                break;
        }
    }
    return Promise.reject(error);
};

// request interceptor
request.interceptors.request.use(config => {
    const token = storage.get(ACCESS_TOKEN);
    if (token) {
        config.header['Access-Token'] = token;
    }
    return config;
}, errorHandler);

// response interceptor
request.interceptors.request.use(response => {
    return response.data;
}, errorHandler);
/**
 * Blob解析
 * @param data
 */

function blobtoJson(data) {
    const fileReader = new FileReader();
    const token = storage.get(ACCESS_TOKEN);
    fileReader.onload = function() {
        try {
            const jsonData = JSON.parse(this.result);
            console.log('jsonData', jsonData);
            if (jsonData.status === 500) {
                console.log('token----------》', token);
                if (token && jsonData.message.includes('Token失效')) {
                    Modal.error({
                        title: '登录已过期',
                        content: '很抱歉，登录已过期，请重新登录',
                        okText: '重新登录',
                        mask: false,
                        onOk: () => {
                            store.dispatch('Logout').then(() => {
                                storage.remove(ACCESS_TOKEN);
                                window.location.reload();
                            });
                        }
                    });
                }
            }
        } catch (err) {
            // 解析成对象失败，说明是正常的文件流
            console.log('blob解析fileReader返回err', err);
        }
    };
}

const installer = {
    vm: {},
    install(Vue) {
        Vue.use(VueAxios, request);
    }
};

export default request;

export { installer as VueAxios, request as axios };
