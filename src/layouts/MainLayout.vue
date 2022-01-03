<template>
  <div class="container">
    <header-bar></header-bar>
    <router-view/>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import FooterBar from '@/components/FooterBar/Index.vue'
import HeaderBar from '@/components/HeaderBar/Index.vue'

export default {
  name: 'MainLayout',
  components: {
    FooterBar,
    HeaderBar
  }
}
</script>
