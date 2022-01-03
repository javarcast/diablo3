import classes from '@/utils/heroClasses.js'

export default {
  methods: {
    classToName (classSlug) {
      return classes[classSlug]
    }
  }
}
