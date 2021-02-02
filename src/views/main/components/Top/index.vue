<template>
    <div class="top-wrapper">
        <div class="boxer left-one"></div>
        <div class="boxer left-two"></div>
        <div class="boxer center">宜昌两网智慧工地</div>
        <div class="boxer right-two"></div>
        <div class="boxer right-one"></div>
    </div>
</template>
<script>
export default {
    name: 'Top'
};
</script>
<style lang="less" scoped>
.top-wrapper {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 78px;
    top: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    .boxer {
        height: 78px;
        background-position: center center;
        background-repeat: no-repeat;
        &.left-one {
            width: 130px;
            background-image: url('~@/assets/images/map/left-arrow.png');
        }
        &.left-two {
            flex: 1;
            background-image: url('~@/assets/images/map/left-repeat.png');
        }
        &.right-two {
            flex: 1;
            background-image: url('~@/assets/images/map/right-repeat.png');
        }
        &.center {
            width: 1268px;
            background-image: url('~@/assets/images/map/top.png');
            font-size: 28px;
            color: #fff;
            font-weight: 700;
            text-align: center;
            line-height: 78px;
        }
        &.right-one {
            width: 130px;
            background-image: url('~@/assets/images/map/right-arrow.png');
        }
    }
}
</style>
