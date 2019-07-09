<template>
  <div id="app">
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <app-header></app-header>
    </nav>
    <div class="container-fluid">
        <div class="row">
            <app-sidebar></app-sidebar>

             <!-- 主内容区域 内容可变 所以用router-view占位 -->
            <router-view></router-view>
        </div>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppSidebar from './components/AppSidebar'
export default {
  name:'app',
  components: {
    AppHeader,
    AppSidebar
  }
}
</script>

<style>

</style>
