<script>
import { bxAnaalyse } from '@/core/icons';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Getter } from '@/utils/getters';
import Top from './components/Top/index';
import Compass from './components/compass/index';
@Component({
    components: {
        Top,
        Compass
    }
})
export default class Home extends Vue {
    bxAnaalyse = bxAnaalyse;
    // @MapGetters('map', ['map'])
    @Getter('map') map;
    render() {
        return (
            <div class='main' id='main'>
                <compass></compass>
            </div>
        );
    }
    async created() {
        const map = await this.$initMap().then(instance => {
            return instance;
        });
        this.$store.dispatch('map/GetMap', map);
    }
}
</script>

<style lang="less" scoped>
.main {
    width: 100%;
    height: 100%;
    position: relative;
}
</style>
