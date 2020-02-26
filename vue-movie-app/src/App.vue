<template>
  <div id="app" class="bg-green-100 text-gray-700 text-xl">
    <header class="header">The Movie App</header>
    <router-view />
    <footer class="mt-16 bg-green-500 p-4 relative">
      <div class="link inline-flex">
        <a class="text-white" href="https://github.com/jscodelover" target="_blank">
          <img src="./assets/github-logo.png" alt="github" />
        </a>
        <a class="text-white" href="https://twitter.com/jscodelover" target="_blank">
          <img src="./assets/twitter.png" alt="twitter" />
        </a>
        <a class="text-white" href="https://www.linkedin.com/in/jscodelover/" target="_blank">
          <img src="./assets/linkedin.png" alt="linkedin" />
        </a>
      </div>

      <p class="text-center text-white leading-relaxed tracking-wider uppercase">Learning VueJs</p>
      <a class="text-white" href="https://developers.themoviedb.org/" target="_blank">themoviedb.org</a>
    </footer>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
.b-b {
  border-bottom: 4px solid #4b8870;
}

.content {
  min-height: calc(100vh - 237px);
  @media (max-width: 600px) {
    min-height: calc(100vh - 301px);
  }
}
</style>
