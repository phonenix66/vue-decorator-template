import request from '@/utils/request';

export function login(data) {
    return request({
        url: '/auth/login',
        data,
        method: 'post'
    });
}

export function logout() {
    return request({
        url: '/auth/logout',
        method: 'get'
    });
}

export function getInfo() {
    return request({
        url: '/user/info',
        method: 'get'
    });
}
