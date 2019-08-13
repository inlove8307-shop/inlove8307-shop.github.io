<template>
  <div id="app">
    <header>
      <h1><router-link to="/">SHOP</router-link></h1>
      <menu>
        <router-link to="/signin">LOGIN</router-link>
        <!-- <router-link to="/signup">회원가입</router-link> -->
      </menu>
    </header>

    <router-view></router-view>

    <!-- <aside>
      <nav>
        <a href="">LINK</a>
        <a href="">LINK</a>
        <a href="">LINK</a>
      </nav>
    </aside> -->
    <footer>COPYRIGHT</footer>
  </div>
</template>

<style lang="scss">
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
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 10rem;
  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.3);
  background: rgba(0, 0, 0, 0.85);

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;

    a {
      font-weight: 300;
      font-size: 1.4rem;
      line-height: 1;
      vertical-align: middle;
      text-decoration: none;
      color: rgba(255, 255, 255, 1);
    }
  }

  menu {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 1rem;
    margin: 0;
    padding: 0;
    height: 100%;

    a {
      margin-left: 0.5rem;
      font-weight: 300;
      font-size: 1.4rem;
      text-decoration: none;
      color: rgba(255, 255, 255, 1);
    }
  }
}

aside {
  nav {
    a {}
  }
}

footer {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  height: 10rem;
  border-top: 0.1rem solid rgba(255, 255, 255, 0.25);
  background-color: rgba(0, 0, 0, 0.85);
  font-weight: 300;
  font-size: 1.6rem;
  color: rgba(255, 255, 255, 1);
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
    padding-top: 7.87vw;
  }

  header {
    height: 7.87vw;
    border-bottom-width: 0.07vw;

    h1 {
      a {
        font-size: 1.94vw;
      }
    }

    menu {
      right: 0.78vw;

      a {
        margin-left: 0.39vw;
        font-size: 1.56vw;
      }
    }
  }

  footer {
    box-sizing: border-box;
    height: 7.81vw;
    border-top-width: 0.15vw;
    font-size: 1.56vw;
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
    padding-top: 15.65vw;
  }

  header {
    height: 15.65vw;
    border-bottom-width: 0.15vw;

    h1 {
      a {
        font-size: 3.12vw;
      }
    }

    menu {
      right: 1.56vw;

      a {
        margin-left: 0.78vw;
        font-size: 3.12vw;
      }
    }
  }

  footer {
    box-sizing: border-box;
    height: 15.62vw;
    border-top-width: 0.15vw;
    font-size: 3.12vw;
  }
}
</style>
