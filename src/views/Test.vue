<template>
    <div>测试一个class component {{ msg }}</div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'Test'
})
export default class extends Vue {
    msg = 123;
}
</script>
