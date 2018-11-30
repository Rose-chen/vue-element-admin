<template>
  <div class="Main">
    <el-container>
      <el-header>
        <nav-header></nav-header>
      </el-header>
      <el-container>
        <el-aside>
          <nav-left></nav-left>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavHeader from '@/components/NavHeader.vue'
import NavLeft from '@/components/NavLeft.vue'
export default {
  name: 'Main',
  components: {
    NavHeader,
    NavLeft
  }
}
</script>

<style lang="stylus" scoped>
  .el-container
    .el-header
      padding: 0
    .el-container
      position: absolute
      top: 60px
      left: 0
      right: 0
      bottom: 0
      .el-aside
        width: 220px!important
        background: rgb(84, 92, 100)
</style>
