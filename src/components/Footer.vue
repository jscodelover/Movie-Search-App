<template>
  <footer class="bg-green-500 p-4 relative">
    <div class="link inline-flex">
      <a class="text-white" href="https://github.com/jscodelover" target="_blank">
        <img src="../assets/github-logo.png" alt="github" />
      </a>
      <a class="text-white" href="https://twitter.com/jscodelover" target="_blank">
        <img src="../assets/twitter.png" alt="twitter" />
      </a>
      <a class="text-white" href="https://www.linkedin.com/in/jscodelover/" target="_blank">
        <img src="../assets/linkedin.png" alt="linkedin" />
      </a>
    </div>

    <p class="text-center text-white leading-relaxed tracking-wider uppercase">Learning VueJs</p>
    <a class="text-white" href="https://developers.themoviedb.org/" target="_blank">themoviedb.org</a>
  </footer>
</template>

<style lang="scss">
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
</style>
