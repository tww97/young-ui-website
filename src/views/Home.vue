<template>
  <div>
    <div class="topnavAndBanner">
        <div class="banner">
            <h1>YOUNG UI</h1>
            <h2>一个年轻的UI框架</h2>
            <p class="actions">
                <a href="https://github.com/tww97/young-ui-website">GitHub</a>
                <router-link to='/doc/install'>开始</router-link>
            </p>
        </div>
    </div>
  </div>

</template>
<script>
</script>
<style lang="scss"> 
$green: #02bcb0;
$color: #28d1c9;
.topnavAndBanner{
  background: linear-gradient(145deg, rgba(227,255,253,1) 0%, rgba(183,233,230,1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
}

.features{
  margin: 64px auto;
  width: 400px;
  @media(min-width: 800px){
    width: 800px;
  }
  @media(min-width: 1200px){
    width: 1200px;
  }
  >ul{
    display: flex;
    flex-wrap: wrap;

    >li{
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: center;
      align-content: space-between;
      grid-template-areas: 
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      >svg{
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      >h3{
        grid-area: title;
        font-size: 28px;
      }
    }
  }

}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: $color;
  > .actions{
    padding: 8px 0;
    a {
      margin:0 8px;
      background: $green;
      display: inline-block;
      padding: 8px 24px;
      color: white;
      border-radius: 20px;

      &:hover{
        text-decoration: none;
        background-color: rgb(52, 245, 235);
      }
    }
  }
}

</style>