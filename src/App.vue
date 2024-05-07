<template>
  <div>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/footer.vue'

export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>

</style>
./components/Switcher.vue
