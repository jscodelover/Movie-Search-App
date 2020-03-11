<template>
  <div class="movie__cast">
    <div v-for="member in members" :key="member.credit_id" class="movie__cast--person">
      <div class="profile-img">
        <img
          :class="member.profile_path ? '' : 'no_img'"
          :src="profile(member.profile_path)"
          alt="profile"
        />
      </div>
      <div class="movie__cast--info">
        <h4>{{member.name}}</h4>
        <span>{{member.character || member.job}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CONFIG from "@/utils/config";
export default {
  name: "MovieCast",
  computed: {
    members() {
      const { castMember, crewMember } = this.$store.state;
      return [...castMember, ...crewMember];
    },
    profile() {
      return path =>
        path ? `${CONFIG.IMAGE_SM}${path}` : require("../assets/image.png");
    }
  }
};
</script>

<style lang="scss" scoped>
.movie__cast {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, 170px);
  justify-items: center;
  justify-content: center;
  &--person {
    background-color: white;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    .profile-img {
      width: 171px;
      height: 255px;
      background-color: #c5c5c5b8;
      .no_img {
        padding: 64px 0px;
        margin: auto;
      }
    }
  }
  &--info {
    & > h4 {
      font-weight: 600;
      font-size: 18px;
      padding: 7px 10px 0px;
      color: #4b8870;
    }
    & > span {
      font-size: 14px;
      display: inline-block;
      line-height: 16px;
      padding: 0 9px;
    }
  }
}
</style>