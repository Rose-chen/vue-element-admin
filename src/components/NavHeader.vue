<template>
  <div class="NavHeader">
    <div class="left">
      <h2>vue-admin</h2>
    </div>
    <div class="right">
      <router-link class="logout" to="/login">退出</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavHeader'
}
</script>

<style lang="stylus" scoped>
  .NavHeader
    position: relative
    height: 60px
    line-height: 60px
    .left
      font-size: 18px
      font-weight: bold
      text-indent: 2em
      background: rgb(84, 92, 100)
      color: #fff
    .right
      position: absolute
      top: 0
      right: 0
      width: 80px
      height: 100%
      text-align: center
      .logout
        display: inline-block
        width: 100%
        height: 100%
        line-height: 100%
        color: #fff
</style>
