<template>
  <div id="app" class="app">
    <ScrollButton />
    <router-view />
  </div>
</template>

<script>
import ScrollButton from "@/components/ScrollButton.vue";
export default {
  name: "App",
  components: { ScrollButton }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
button,
video,
div,
input {
  &:focus {
    outline: none;
  }
}

.app {
  flex-direction: column;
  min-height: 100vh;
  display: flex;
}

.content {
  /* min-height: calc(100vh - 237px);
  @media (max-width: 600px) {
    min-height: calc(100vh - 301px);
  } */
  flex: 1;
}
</style>
