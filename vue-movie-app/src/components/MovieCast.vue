<template>
  <div class="movie__cast">
    <div class="movie__cast--person">
      <img
        src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/Ao3fp9f4loVQ1Vvk6ph8HU5p0Lu.jpg"
        alt="profile"
      />
      <h4>Kevin Conroy</h4>
      <span>Terence 'Terry' McGinnis / Batman</span>
    </div>
    <div class="movie__cast--person">
      <img
        src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/Ao3fp9f4loVQ1Vvk6ph8HU5p0Lu.jpg"
        alt="profile"
      />
      <h4>Kevin Conroy</h4>
      <span>Terence 'Terry' McGinnis / Batman</span>
    </div>
    <div class="movie__cast--person">
      <img
        src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/Ao3fp9f4loVQ1Vvk6ph8HU5p0Lu.jpg"
        alt="profile"
      />
      <h4>Kevin Conroy</h4>
      <span>Terence 'Terry' McGinnis / Batman</span>
    </div>
    <div class="movie__cast--person">
      <img
        src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/Ao3fp9f4loVQ1Vvk6ph8HU5p0Lu.jpg"
        alt="profile"
      />
      <h4>Kevin Conroy</h4>
      <span>Terence 'Terry' McGinnis / Batman</span>
    </div>
    <div class="movie__cast--person">
      <img
        src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/Ao3fp9f4loVQ1Vvk6ph8HU5p0Lu.jpg"
        alt="profile"
      />
      <h4>Kevin Conroy</h4>
      <span>Terence 'Terry' McGinnis / Batman</span>
    </div>
    <div class="movie__cast--person">
      <img
        src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/Ao3fp9f4loVQ1Vvk6ph8HU5p0Lu.jpg"
        alt="profile"
      />
      <h4>Kevin Conroy</h4>
      <span>Terence 'Terry' McGinnis / Batman</span>
    </div>
    <div class="movie__cast--person">
      <img
        src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/Ao3fp9f4loVQ1Vvk6ph8HU5p0Lu.jpg"
        alt="profile"
      />
      <h4>Kevin Conroy</h4>
      <span>Terence 'Terry' McGinnis / Batman</span>
    </div>
    <div class="movie__cast--person">
      <img
        src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/Ao3fp9f4loVQ1Vvk6ph8HU5p0Lu.jpg"
        alt="profile"
      />
      <h4>Kevin Conroy</h4>
      <span>Terence 'Terry' McGinnis / Batman</span>
    </div>
    <div class="movie__cast--person">
      <img
        src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/Ao3fp9f4loVQ1Vvk6ph8HU5p0Lu.jpg"
        alt="profile"
      />
      <h4>Kevin Conroy</h4>
      <span>Terence 'Terry' McGinnis / Batman</span>
    </div>
    <div class="movie__cast--person">
      <img
        src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/Ao3fp9f4loVQ1Vvk6ph8HU5p0Lu.jpg"
        alt="profile"
      />
      <h4>Kevin Conroy</h4>
      <span>Terence 'Terry' McGinnis / Batman</span>
    </div>
    <div class="movie__cast--person">
      <img
        src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/Ao3fp9f4loVQ1Vvk6ph8HU5p0Lu.jpg"
        alt="profile"
      />
      <h4>Kevin Conroy</h4>
      <span>Terence 'Terry' McGinnis / Batman</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieCast"
};
</script>

<style lang="scss" scoped>
.movie__cast {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, 160px);
  justify-items: center;
  justify-content: center;
  &--person {
    background-color: white;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
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