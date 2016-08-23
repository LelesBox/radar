<style lang="scss">

.corner {
    background-color: red;
    %corner-basic {
        position: fixed;
        height: 100px;
        width: 100px;
        transition: all .5s ease;
        cursor: pointer;
        &:hover {
            @extend %corner-hover;
        }
    }
    %corner-hover {
        height: 200px;
        width: 200px;
    }
    &__left-top {
        @extend %corner-basic;
        border-radius: 0 0 100% 0;
        background-color: red;
        left:0;
        top:0;
    }
    &__left-bottom {
        @extend %corner-basic;
        border-radius: 0 100% 0 0;
        background-color: yellow;
        bottom: 0;
        left:0;
    }
    &__right-top {
        @extend %corner-basic;
        border-radius: 0 0 0 100%;
        background-color: green;
        right: 0;
        top:0;
    }
    &__right-bottom {
        @extend %corner-basic;
        border-radius: 100% 0 0 0;
        background-color: blue;
        bottom: 0;
        right: 0;
    }
}

</style>

<template>

<div class="corner">
    <div class="corner__left-top"></div>
    <div class="corner__left-bottom"></div>
    <div class="corner__right-top"></div>
    <div class="corner__right-bottom"></div>
</div>

</template>

<script>
export default {}

</script>
