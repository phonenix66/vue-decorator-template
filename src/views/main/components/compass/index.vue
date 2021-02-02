<template>
    <div class="compass-wrapper">
        <div></div>
    </div>
</template>
<script>
export default {
    name: 'Compass'
};
</script>
<style lang="less" scoped>
.compass-wrapper {
    position: absolute;
    left: 21px;
    bottom: 234px;
    width: 48px;
    height: 48px;
    background: rgba(64, 141, 255, 0.22);
    box-shadow: 0px 0px 4px 2px rgba(0, 28, 71, 0.38);
    border: 1px solid #4399d0;
    z-index: 10;
    border-radius: 50%;
    box-sizing: content-box;
}
</style>
