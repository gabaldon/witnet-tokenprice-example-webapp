<template>
  <div>
    <p>Disclaimer view</p>
    <button @click="acceptDisclaimer">Acepto</button>
  </div>
</template>

<script>
import { setSeenCookie } from '@/utils'

export default {
  name: 'disclaimer',
  methods: {
    acceptDisclaimer () {
      setSeenCookie()
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
