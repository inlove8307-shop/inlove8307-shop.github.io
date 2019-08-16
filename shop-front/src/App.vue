<template>
  <div id="app">
    <header>
      <div class="wrapper">
        <h1><router-link to="/">SHOP</router-link></h1>
        <menu>
          <router-link to="/signin">LOGIN</router-link>
        </menu>
      </div>
    </header>
    <router-view></router-view>
    <footer>
      <div class="wrapper">
        COPYRIGHT
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
@mixin font($size, $weight) {
  font: {
    family: 'Noto Sans KR';
    weight: $weight;
    style: normal;
    size: $size;
  }

  line-height: 1;
  text-decoration: none;
  color: rgba(255, 255, 255, 1);
}

html, body {
  height: 100%;
}

html {
  font-family: 'Noto Sans KR';
  font-size: 0.625rem;
}

body {
  margin: 0;
  background-image: url('/img/main/bg_main.jpg');
  background-repeat: repeat;
  background-position: 50% 80%;
  background-size: 100%;
  background-attachment: fixed;
}

#app {
  display: flex;
  flex-flow: column;
  box-sizing: border-box;
  padding-top: 10rem;
  min-height: 100%;
  background: -moz-linear-gradient(top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.3) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.85) 0%,rgba(0, 0, 0, 0.3) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.85) 0%,rgba(0, 0, 0, 0.3) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
}

header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  box-sizing: border-box;
  width: 100%;
  height: 10rem;
  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.25);
  background: rgba(0, 0, 0, 0.75);
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.75);

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0 auto;
    width: 108rem;
    height: 100%;

    h1 {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      height: 100%;

      a {
        @include font (1.4rem, 300);
      }
    }

    menu {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 0;
      margin: 0;
      padding: 0;
      height: 100%;

      a {
        margin-left: 0.5rem;
        @include font (1.4rem, 300);
      }
    }
  }
}

footer {
  box-sizing: border-box;
  height: 10rem;
  border-top: 0.1rem solid rgba(255, 255, 255, 0.25);
  background-color: rgba(0, 0, 0, 0.75);

  .wrapper {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 108rem;
    height: 100%;
    @include font (1.4rem, 300);
  }
}

@media (min-width: 1281px) {
  /* ##Device = Desktops ##Screen = 1281px to higher resolution desktops */
}

@media (min-width: 1025px) and (max-width: 1280px) {
  /* ##Device = Laptops, Desktops ##Screen = B/w 1025px to 1280px */
}

@media (min-width: 768px) and (max-width: 1024px) {
  /* ##Device = Tablets, Ipads (portrait) ##Screen = B/w 768px to 1024px */
}

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  /* ##Device = Tablets, Ipads (landscape) ##Screen = B/w 768px to 1024px */
}

// @media (min-width: 481px) and (max-width: 767px) {
@media (min-width: 481px) and (max-width: 1024px) {
  /* ##Device = Low Resolution Tablets, Mobiles (Landscape) ##Screen = B/w 481px to 767px */
  body {
    background: none;

    &::after {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      background-image: url('/img/main/bg_main.jpg');
      background-repeat: repeat;
      background-position: 50% 80%;
      background-size: 100%;
    }
  }

  #app {
    padding-top: 6.94vw;
  }

  header {
    height: 6.94vw;
    border-bottom-width: 0.13vw;
    box-shadow: 0 0 0.69vw rgba(0, 0, 0, 0.75);

    .wrapper {
      width: 100%;

      h1 {
        a {
          @include font (1.66vw, 400);
        }
      }

      menu {
        margin-right: 0.69vw;

        a {
          margin-left: 0.69vw;
          @include font (1.66vw, 400);
        }
      }
    }
  }

  footer {
    height: 6.94vw;
    border-top-width: 0.13vw;

    .wrapper {
      width: 100%;
      @include font (1.38vw, 300);
    }
  }
}

@media (min-width: 320px) and (max-width: 480px) {
  /* ##Device = Most of the Smartphones Mobiles (Portrait) ##Screen = B/w 320px to 479px */
  body {
    background: none;

    &::after {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      background-image: url('/img/main/bg_main.jpg');
      background-repeat: repeat;
      background-position: 50% 80%;
      background-size: 100%;
    }
  }

  #app {
    padding-top: 13.88vw;
  }

  header {
    height: 13.88vw;
    border-bottom-width: 0.27vw;
    box-shadow: 0 0 1.38vw rgba(0, 0, 0, 0.75);

    .wrapper {
      width: 100%;

      h1 {
        a {
          @include font (3.33vw, 400);
        }
      }

      menu {
        margin-right: 1.38vw;

        a {
          margin-left: 1.38vw;
          @include font (3.33vw,400);
        }
      }
    }
  }

  footer {
    height: 13.88vw;
    border-top-width: 0.27vw;

    .wrapper {
      width: 100%;
      @include font (2.77vw, 300);
    }
  }
}
</style>
