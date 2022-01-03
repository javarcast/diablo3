<template>
  <div>
    <base-loading v-if="isLoading"></base-loading>
    <template v-if="profileData !== null">
      <main-block :profile-data="profileData"></main-block>
      <artisan-block :artisans-data="artisansData"></artisan-block>
    </template>
  </div>
</template>

<script>
import { getApiAccount } from '@/api/search'
import setError from '@/mixins/setError'
import BaseLoading from '@/components/BaseLoading'
import MainBlock from '@/views/Profile/MainBlock/Index'
import ArtisanBlock from '@/views/Profile/ArtisanBlock/Index'

export default {
  name: 'ProfileView',
  mixins: [
    setError
  ],
  data () {
    return {
      profileData: null,
      isLoading: false
    }
  },
  components: {
    BaseLoading,
    MainBlock,
    ArtisanBlock
  },
  created () {
    this.isLoading = true
    this.fetchData()
  },
  methods: {
    fetchData () {
      const { region, battleTag: account } = this.$route.params
      getApiAccount({ region, account })
        .then(({ data }) => {
          this.profileData = data
        })
        .catch((err) => {
          this.profileData = null
          const errObj = {
            routeParams: this.$route.params,
            message: err.message
          }
          if (err.response) {
            errObj.data = err.response.data
            errObj.status = err.response.status
          }
          this.setApiErr(errObj)
          this.$router.push({ name: 'Error' })
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  },
  computed: {
    artisansData () {
      return {
        blacksmith: this.profileData.blacksmith,
        blacksmithHardcore: this.profileData.blacksmithHardcore,
        jeweler: this.profileData.jeweler,
        jewelerHardcore: this.profileData.jewelerHardcore,
        mystic: this.profileData.mystic,
        mysticHardcore: this.profileData.mysticHardcore
      }
    }
  }
}
</script>
