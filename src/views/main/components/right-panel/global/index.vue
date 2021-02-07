<template>
    <div
        class="right-panel-wrapper panel-global-wrapper animate__animated"
        :class="type !== '' ? 'animate__slideOutRight' : 'animate__slideInRight'"
    >
        <panel-title title="告警信息"></panel-title>
        <today-warning></today-warning>
        <types-warning></types-warning>
        <panel-title title="施工状态"></panel-title>
        <work-status></work-status>
    </div>
</template>
<script>
import PanelTitle from '../components/title';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Getter } from '@/utils/getters';
import TodayWarning from './today-warning';
import TypesWarning from './types-warning';
import WorkStatus from './work-status';
@Component({
    components: {
        PanelTitle,
        TodayWarning,
        TypesWarning,
        WorkStatus
    }
})
export default class PanelGlobal extends Vue {
    flag = false;
    @Getter('type') type;
}
</script>

<style lang="less" scoped>
.panel-global-wrapper {
}
</style>
