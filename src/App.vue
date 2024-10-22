<template>
  <Header/>
  <div class="main-page row">
    <div class="col-2">
        <NavBar/>
    </div>
    <div class="col-10 side-page overflow-auto">
      <TopBar/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
import TopBar from '@/components/ToBar.vue'

export default {
  components: {
    Header, NavBar, TopBar
  }
}
  </script>

<style>

</style>
