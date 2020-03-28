<template>
  <div id="app" class="app">
    <header class="header">The Movie App</header>
    <router-view />
    <footer class="bg-green-500 p-4 relative">
      <div class="link inline-flex">
        <a
          class="text-white"
          href="https://github.com/jscodelover"
          target="_blank"
        >
          <img src="./assets/github-logo.png" alt="github" />
        </a>
        <a
          class="text-white"
          href="https://twitter.com/jscodelover"
          target="_blank"
        >
          <img src="./assets/twitter.png" alt="twitter" />
        </a>
        <a
          class="text-white"
          href="https://www.linkedin.com/in/jscodelover/"
          target="_blank"
        >
          <img src="./assets/linkedin.png" alt="linkedin" />
        </a>
      </div>

      <p
        class="text-center text-white leading-relaxed tracking-wider uppercase"
      >
        Learning VueJs
      </p>
      <a
        class="text-white"
        href="https://developers.themoviedb.org/"
        target="_blank"
        >themoviedb.org</a
      >
    </footer>
  </div>
</template>

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

.header {
  padding: 20px;
  background: black;
  color: white;
  text-align: center;
  font-family: monospace;
}

footer {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .link {
    img {
      width: 28px;
    }
    a:nth-child(2) {
      padding: 0px 7px;
    }
  }
  @media (max-width: 600px) {
    flex-direction: column;
    .link {
      margin-bottom: 6px;
    }
  }
}

.content {
  /* min-height: calc(100vh - 237px);
  @media (max-width: 600px) {
    min-height: calc(100vh - 301px);
  } */
  flex: 1;
}
</style>
