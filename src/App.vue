<template>
  <load-layout v-if="isLoading">
    <base-loading></base-loading>
  </load-layout>
  <main-layout v-else></main-layout>
</template>

<script>

import { mapState } from 'vuex'

import LoadLayout from '@/layouts/LoadLayout.vue'
import BaseLoading from '@/components/BaseLoading.vue'
import MainLayout from '@/layouts/MainLayout.vue'

export default {
  name: 'App',
  components: {
    LoadLayout,
    BaseLoading,
    MainLayout
  },
  methods: {
    init () {
      this.$store.dispatch('oauth/getToken', null, { root: true })
    }
  },
  computed: {
    ...mapState('loading', { isLoading: 'isLoading' })
  },
  created () {
    this.init()
  }
}
</script>

<style lang="stylus">
 #app
    padding 60px 0
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    color #ffffff // Le ponemos un color de letra blanco para que resalte
    background-color #15202b // Le cambiamos el color de fondo por un azul marino oscuro
</style>
