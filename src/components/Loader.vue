<!-- eslint-disable -->
<template>
  <div class="cube-loader">
    <div class="caption">
      <div class="cube--loader">
        <div class="cube loader-1"></div>
        <div class="cube loader-2"></div>
        <div class="cube loader-3"></div>
        <div class="cube loader-4"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .cube-loader {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 50%;
  }
  .cube--loader {
    width: 73px;
    height: 73px;
    margin: 0 auto;
    margin-top: 49px;
    position: relative;
    transform: rotateZ(45deg);
  }
  .cube {
    position: relative;
    float: left;
    width: 50%;
    height: 50%;
    transform: rotateZ(45deg);
    transform: scale(1.1);
  }
  .cube::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(139, 224, 0, 1.0);
    animation: cube-loader 2.76s infinite linear both;
    transform-origin: 100% 100%;
  }
  .loader-2 {
    transform: scale(1.1) rotateZ(90deg);
  }
  .loader-3 {
    transform: scale(1.1) rotateZ(180deg);
  }
  .loader-4 {
    transform: scale(1.1) rotateZ(270deg);
  }
  .loader-2::before {
    animation-delay: 0.35s;
  }
  .loader-3::before {
    animation-delay: 0.69s;
  }
  .loader-4::before {
    animation-delay: 1.04s;
  }
  .loader--position {
    position: inherit;
  }
  @keyframes cube-loader {
    0%, 10% {
      transform: perspective(136px) rotateX(-180deg);
      opacity: 0;
    }
    25%, 75% {
      transform: perspective(136px) rotateX(0deg);
      opacity: 1;
    }
    90%, 100% {
      transform: perspective(136px) rotateY(180deg);
      opacity: 0;
    }
  }
</style>
