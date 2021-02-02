import YCMap from './Map.vue';

export default {
    install(Vue, options = {}) {
        options = options || {};
        const MapConstructor = Vue.extend(YCMap);

        Vue.prototype.$initMap = initMap;
        let saveCb = null;
        function initMap() {
            const instance = new MapConstructor();
            MapConstructor.prototype.callback = callback;
            document.body.append(instance.$mount().$el);

            return new Promise((resolve, reject) => {
                saveCb = {
                    resolve,
                    reject
                };
            });
        }

        function callback(map) {
            if (map) {
                saveCb.resolve(map);
            }
            saveCb.reject('fail');
        }
    }
};
