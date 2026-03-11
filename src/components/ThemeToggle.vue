<template>
  <button
    type="button"
    class="theme-toggle btn btn-icon btn-sm rounded-full"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    :aria-pressed="isDark"
    @click="toggle"
  >
    <!-- Moon = currently light, click to go dark -->
    <i v-if="!isDark" class="uil uil-moon align-middle" aria-hidden="true"></i>
    <!-- Sun = currently dark, click to go light -->
    <i v-else class="uil uil-sun align-middle" aria-hidden="true"></i>
  </button>
</template>

<script>
import { ref, onMounted } from 'vue'

const STORAGE_KEY = 'color-scheme'

export default {
  name: 'ThemeToggle',
  setup() {
    const isDark = ref(false)

    function applyTheme(dark) {
      document.documentElement.classList.toggle('dark', dark)
      document.documentElement.classList.toggle('light', !dark)
      localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light')
      isDark.value = dark
    }

    function toggle() {
      applyTheme(!isDark.value)
    }

    onMounted(() => {
      const stored = localStorage.getItem(STORAGE_KEY)
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      applyTheme(stored !== null ? stored === 'dark' : prefersDark)
    })

    return { isDark, toggle }
  }
}
</script>

<style scoped>
.theme-toggle {
  background: light-dark(#f1f5f9, rgb(15 23 42));
  color: light-dark(#3c4858, #f1f5f9);
  border-color: light-dark(#e2e8f0, #334155);
  transition: background var(--transition-base), color var(--transition-base);
}

.theme-toggle:hover {
  background: light-dark(#e2e8f0, #1e293b);
}
</style>
