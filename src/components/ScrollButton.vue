<template>
  <button class="scroll">
    <img src="../assets/arrow.svg" role="img" alt="arrow_img" />
  </button>
</template>

<style lang="scss">
.scroll {
  position: fixed;
  right: 40px;
  bottom: 80px;
  z-index: 999;
  height: 55px;
  width: 55px;
  color: #000;
  background-color: #ff8c29;
  border: none;
  border-radius: 45px;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  box-shadow: 0 19px 19px 0 rgba(0, 0, 0, 0.3), 0 15px 6px 0 rgba(0, 0, 0, 0.22);
  img {
    width: 25px;
    height: 25px;
    margin: auto;
  }
  &:hover {
    background-color: #2ee59d;
    transform: translateY(-7px);
  }
}
</style>
