const VueAxios = {
    vm: {},
    install(Vue, instance) {
        if (this.instanced) {
            return;
        }
        this.instanced = true;

        if (!instance) {
            console.error('you have to install axios');
        }

        Vue.axios = instance;

        Object.defineProperties(Vue.prototype, {
            axios: {
                get: function() {
                    return instance;
                }
            },
            $http: function() {
                return instance;
            }
        });
    }
};

export { VueAxios };
