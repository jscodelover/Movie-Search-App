<template>
  <Fragment>
    <div class="movie__cast">
      <div
        v-for="castMember in castMembers"
        :key="castMember.credit_id"
        class="movie__cast--person"
      >
        <div class="profile-img">
          <img
            :class="castMember.profile_path ? '' : 'no_img'"
            :src="profile(castMember.profile_path)"
            alt="profile"
          />
        </div>
        <div class="movie__cast--info">
          <h4>{{castMember.name}}</h4>
          <span>{{castMember.character || castMember.job}}</span>
        </div>
      </div>
    </div>
    <div class="movie__cast">
      <div v-for="crewDepartment in crewDepartments" :key="crewDepartment">
        <div
          v-for="crewMember in crewMembers.filter(
            crew => crew.department === crewDepartment
          )"
          :key="crewMember.credit_id"
          class="movie__cast--person"
        >
          <div class="profile-img">
            <img
              :class="crewMember.profile_path ? '' : 'no_img'"
              :src="profile(crewMember.profile_path)"
              alt="profile"
            />
          </div>
          <div class="movie__cast--info">
            <h4>{{ crewMember.name }}</h4>
            <span>{{ crewMember.character || crewMember.job }}</span>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import CONFIG from "@/utils/config";
export default {
  name: "MovieCast",
  components: { Fragment },
  data() {
    return {
      castMembers: this.$store.state.castMember,
      crewMembers: this.$store.state.crewMember
    };
  },
  computed: {
    crewDepartments() {
      return this.crewMembers.length
        ? this.crewMembers.reduce((arr, crew) => {
            if (!arr.includes(crew.department)) {
              return arr.concat(crew.department);
            }
            return arr;
          }, [])
        : [];
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
  grid-template-columns: repeat(auto-fit, 324px);
  justify-content: space-between;
  &--person {
    display: flex;
    align-items: center;

    .profile-img {
      width: 66px;
      height: 66px;
      border-radius: 4px;
      background-color: #dbdbdb;
      box-shadow: 0px 0px 20px 0px #5454544d;
      .no_img {
        margin: auto;
        margin: auto;
        padding: 13px 0px;
        width: 60%;
      }
      img[alt="profile"] {
        height: 100%;
        border-radius: 4px;
        object-fit: cover;
      }
    }
  }
  &--info {
    padding-left: 10px;
    & > h4 {
      font-weight: 900;
      font-size: 16px;
      line-height: 21px;
      color: #07633f;
    }
    & > span {
      font-size: 13px;
      font-weight: 500;
      display: inline-block;
      line-height: 15px;
    }
  }
}
</style>
