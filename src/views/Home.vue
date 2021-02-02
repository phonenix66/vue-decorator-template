<script>
import { bxAnaalyse } from '@/core/icons';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
    bxAnaalyse = bxAnaalyse;
    render(h) {
        return <div class='home'></div>;
    }
    created() {
        this.$initMap();
    }
}
/* export default {
    name: 'Home',
    data() {
        return {
            bxAnaalyse
        };
    }

}; */
</script>

<style lang="less" scoped>
.home {
    width: 100%;
    height: 100%;
    position: relative;
}
</style>
