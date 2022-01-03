<template>
  <div class="skills-wrapper mt-5">
    <h2 class="font-diablo">Skills</h2>
    <hr class="bg-white">

    <b-nav pills small>
      <b-button :active="!isPassiveSkillsActive" @click="changeComponent('ActiveSkills')">Active</b-button>
      <b-button :active="isPassiveSkillsActive" @click="changeComponent('PassiveSkills')">Passive</b-button>
    </b-nav>

    <keep-alive>
      <component :is="activeComponent" :skills="componentProps"/>
    </keep-alive>

  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  name: 'HeroSkills',
  components: {
    ActiveSkills: defineAsyncComponent(() =>
      import(/* webpackChunkName: "ActiveSkills" */ './ActiveSkills')
    ),
    PassiveSkills: defineAsyncComponent(() =>
      import(/* webpackChunkName: "PassiveSkills" */ './PassiveSkills')
    )
  },
  props: {
    skills: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      activeComponent: 'ActiveSkills'
    }
  },
  computed: {
    componentProps () {
      return this.activeComponent === 'ActiveSkills' ? this.skills.active : this.skills.passive
    },
    isPassiveSkillsActive () {
      return this.activeComponent === 'PassiveSkills'
    }
  },
  methods: {
    changeComponent (component) {
      this.activeComponent = component
    }
  }
}
</script>
