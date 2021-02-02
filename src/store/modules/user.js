import storage from 'store';
import { ACCESS_TOKEN } from '@/store/mutation-types';
import { getInfo, login, logout } from '@/api/login';
const user = {
    state: {
        token: '',
        info: {},
        roles: []
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token;
        },
        SET_INFO: (state, info) => {
            state.info = info;
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar;
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles;
        }
    },
    actions: {
        // 登陆
        Login({ commit }, userInfo) {
            return new Promise((resolve, reject) => {
                login(userInfo)
                    .then(response => {
                        const result = response.result;
                        storage.set(ACCESS_TOKEN, result.token, 7 * 24 * 60 * 60 * 1000);
                        commit('SET_TOKEN', result.token);
                        resolve();
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        // 获取用户信息
        getInfo({ commit }) {
            return new Promise((resolve, reject) => {
                getInfo()
                    .then(response => {
                        const result = response.result;
                        if (result.role && result.role.permissions.length > 0) {
                            const role = result.role;
                            role.permissions = result.role.permissions;
                            role.permissions.map(per => {
                                if (per.actionEntitySet != null && per.actionEntitySet.length > 0) {
                                    const action = per.actionEntitySet.map(action => {
                                        return action.action;
                                    });
                                    per.actionList = action;
                                }
                            });
                            role.permissionList = role.permissions.map(permission => {
                                return permission.permissionId;
                            });
                            commit('SET_ROLES', result.role);
                            commit('SET_INFO', result);
                        } else {
                            reject(new Error('getInfo: roles must be a non-null array !'));
                        }

                        // commit('SET_NAME', { name: result.name, welcome: welcome() });
                        commit('SET_AVATAR', result.avatar);
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        // 登出
        logout({ commit, state }) {
            return new Promise((resolve, reject) => {
                logout(state.token)
                    .then(() => {
                        commit('SET_TOKEN', '');
                        commit('SET_ROLES', []);
                        storage.remove(ACCESS_TOKEN);
                        resolve();
                    })
                    .catch(() => {
                        resolve();
                    })
                    .finally(() => {});
            });
        }
    }
};

export default user;
