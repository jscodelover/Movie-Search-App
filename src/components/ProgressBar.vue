<template>
  <div class="progress-circle-container">
    <div :class="classCircle('progress-circle')" :data-progress="rating">
      <div class="circle">
        <div class="full progress-circle__slice">
          <div :class="classCircleFill()"></div>
        </div>
        <div class="progress-circle__slice">
          <div :class="classCircleFill()"></div>
          <div :class="classCircleFill('progress-circle__bar')"></div>
        </div>
      </div>
      <div class="progress-circle__overlay">
        <span class="progress font-mono text-base">{{rating}}%</span>
      </div>
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
  },
  data() {
    return {
      colors: ["red", "yellow", "green"],
      color: ""
    };
  },
  watch: {
    rating: {
      immediate: true,
      handler() {
        if (this.rating > 9 && this.rating < 40) this.color = this.colors[0];
        else if (this.rating >= 40 && this.rating < 70)
          this.color = this.colors[1];
        else if (this.rating >= 70 && this.rating <= 100)
          this.color = this.colors[2];
        else this.color = "";
      }
    }
  },
  computed: {
    classCircleFill() {
      return otherClasses =>
        `progress-circle__fill progress-circle__fill--${this.color} ${otherClasses}`;
    },
    classCircle() {
      return otherClasses => `${otherClasses} circle--${this.color}`;
    }
  }
};
</script>

<style lang="scss" scoped>
$circle-size: 50px;
$circle-background: #2b2b2b;
$inset-size: 38px;
$transition-length: 1s;
.progress-circle-container {
  margin: auto;
  width: 60px;
  height: 60px;
  background-color: $circle-background;
  border-radius: 50%;
  .progress-circle {
    margin: auto;
    width: $circle-size;
    height: $circle-size;
    background-color: #d9d9d9;
    border-radius: 50%;
    transform: translate(0px, 5px);
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
      background-color: $circle-background;
      color: #fff;
      border-radius: 50%;
      .progress {
        position: absolute;
        top: 22%;
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

  .circle {
    &--red {
      background-color: rgba(196, 63, 80, 0.38);
    }
    &--yellow {
      background-color: rgba(221, 235, 8, 0.41);
    }
    &--green {
      background-color: rgba(86, 200, 32, 0.32);
    }
  }
}
</style>