import { createDecorator } from 'vue-class-component';
import { mapGetters } from 'vuex';

export function MapGetters(namespace, states) {
    return createDecorator(options => {
        if (!options.computed) {
            options.computed = {};
        }
        Object.assign(options.computed, mapGetters(namespace, states));
    });
}

export function Getter(getterType) {
    return createDecorator((options, key) => {
        if (!options.computed) options.computed = {};
        options.computed[key] = function() {
            return this.$store.getters[getterType];
        };
    });
}
