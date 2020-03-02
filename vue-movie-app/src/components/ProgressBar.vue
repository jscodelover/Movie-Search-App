<template>
  <div class="progress-circle" :data-progress="rating">
    <div class="circle">
      <div class="full progress-circle__slice">
        <div class="progress-circle__fill progress-circle__fill--green"></div>
      </div>
      <div class="progress-circle__slice">
        <div class="progress-circle__fill progress-circle__fill--green"></div>
        <div class="progress-circle__fill progress-circle__fill--green progress-circle__bar"></div>
      </div>
    </div>
    <div class="progress-circle__overlay">
      <span class="progress font-mono text-base">{{rating}}%</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    rating: {
      type: Number,
      required: true
    }
  }
};
</script>

<style lang="scss">
$circle-size: 60px;
$circle-background: #d9d9d9;
$inset-size: 48px;
$inset-color: #fbfbfb;
$transition-length: 1s;

.progress-circle {
  margin: auto;
  width: $circle-size;
  height: $circle-size;

  background-color: $circle-background;
  border-radius: 50%;
  .progress-circle__slice,
  .progress-circle__fill {
    width: $circle-size;
    height: $circle-size;
    position: absolute;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    transition: transform $transition-length;
    border-radius: 50%;
  }
  .progress-circle__slice {
    clip: rect(0px, $circle-size, $circle-size, $circle-size/2);
    .progress-circle__fill {
      clip: rect(0px, $circle-size/2, $circle-size, 0px);
    }
    .progress-circle__fill--green {
      background-image: linear-gradient(
        to left,
        #02674c,
        #00834f,
        #089e49,
        #3bba37,
        #6ad402
      );
    }
    .progress-circle__fill--yellow {
      background-image: linear-gradient(
        to right top,
        #d1ee09,
        #d8ec09,
        #dfea0a,
        #e5e70e,
        #ebe512
      );
    }
    .progress-circle__fill--red {
      background-image: linear-gradient(
        to left,
        #a40618,
        #af1d2a,
        #ba2e3c,
        #c33d4e,
        #cc4b5f
      );
    }
  }
  .progress-circle__overlay {
    width: $inset-size;
    height: $inset-size;
    position: absolute;
    margin-left: ($circle-size - $inset-size)/2;
    margin-top: ($circle-size - $inset-size)/2;
    background-color: $inset-color;
    border-radius: 50%;
    .progress {
      position: absolute;
      top: 27%;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  $i: 0;
  $increment: 180deg / 100;
  @while $i <= 100 {
    &[data-progress="#{$i}"] {
      .progress-circle__slice.full,
      .progress-circle__fill {
        transform: rotate($increment * $i);
      }
      .progress-circle__fill.progress-circle__bar {
        transform: rotate($increment * $i * 2);
      }
      $i: $i + 1;
    }
  }
}
</style>