<template>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div> -->
  <div id="app">
    <header>
      <h1>타이틀</h1>
      <menu>
        <a href="">로그인</a>
      </menu>
    </header>
    <main>
      <section>
        <!-- <nav>
          <a href="">LINK</a>
          <a href="">LINK</a>
          <a href="">LINK</a>
        </nav> -->
        <h2>
          <p>제목</p>
        </h2>
        <article>
          <h3>카테고리</h3>
          <ul>
            <li>
              <span class="food">
                <span><img src="./assets/images/img_food01.jpg" alt="food"></span>
                <strong>제품명</strong>
                <p>설명...</p>
                <a href="">자세히</a>
              </span>
            </li>
            <li>
              <span class="food">
                <span><img src="./assets/images/img_food02.jpg" alt="food"></span>
                <strong>제품명</strong>
                <p>설명...</p>
                <a href="">자세히</a>
              </span>
            </li>
            <li>
              <span class="food">
                <span><img src="./assets/images/img_food03.jpg" alt="food"></span>
                <strong>제품명</strong>
                <p>설명...</p>
                <a href="">자세히</a>
              </span>
            </li>
            <li>
              <span class="food">
                <span><img src="./assets/images/img_food04.jpg" alt="food"></span>
                <strong>제품명</strong>
                <p>설명...</p>
                <a href="">자세히</a>
              </span>
            </li>
          </ul>
        </article>
        <article>
          <h3>카테고리</h3>
          <ul>
            <li>
              <span class="food">
                <span><img src="./assets/images/img_food01.jpg" alt="food"></span>
                <strong>제품명</strong>
                <p>설명...</p>
                <a href="">자세히</a>
              </span>
            </li>
            <li>
              <span class="food">
                <span><img src="./assets/images/img_food02.jpg" alt="food"></span>
                <strong>제품명</strong>
                <p>설명...</p>
                <a href="">자세히</a>
              </span>
            </li>
            <li>
              <span class="food">
                <span><img src="./assets/images/img_food03.jpg" alt="food"></span>
                <strong>제품명</strong>
                <p>설명...</p>
                <a href="">자세히</a>
              </span>
            </li>
            <li>
              <span class="food">
                <span><img src="./assets/images/img_food04.jpg" alt="food"></span>
                <strong>제품명</strong>
                <p>설명...</p>
                <a href="">자세히</a>
              </span>
            </li>
          </ul>
        </article>
        <article>
          <h3>카테고리</h3>
          <ul>
            <li>
              <span class="food">
                <span><img src="./assets/images/img_food01.jpg" alt="food"></span>
                <strong>제품명</strong>
                <p>설명...</p>
                <a href="">자세히</a>
              </span>
            </li>
            <li>
              <span class="food">
                <span><img src="./assets/images/img_food02.jpg" alt="food"></span>
                <strong>제품명</strong>
                <p>설명...</p>
                <a href="">자세히</a>
              </span>
            </li>
            <li>
              <span class="food">
                <span><img src="./assets/images/img_food03.jpg" alt="food"></span>
                <strong>제품명</strong>
                <p>설명...</p>
                <a href="">자세히</a>
              </span>
            </li>
            <li>
              <span class="food">
                <span><img src="./assets/images/img_food04.jpg" alt="food"></span>
                <strong>제품명</strong>
                <p>설명...</p>
                <a href="">자세히</a>
              </span>
            </li>
          </ul>
        </article>
        <article>
          <h3>카테고리</h3>
          <ul>
            <li>
              <span class="food">
                <span><img src="./assets/images/img_food01.jpg" alt="food"></span>
                <strong>제품명</strong>
                <p>설명...</p>
                <a href="">자세히</a>
              </span>
            </li>
            <li>
              <span class="food">
                <span><img src="./assets/images/img_food02.jpg" alt="food"></span>
                <strong>제품명</strong>
                <p>설명...</p>
                <a href="">자세히</a>
              </span>
            </li>
            <li>
              <span class="food">
                <span><img src="./assets/images/img_food03.jpg" alt="food"></span>
                <strong>제품명</strong>
                <p>설명...</p>
                <a href="">자세히</a>
              </span>
            </li>
            <li>
              <span class="food">
                <span><img src="./assets/images/img_food04.jpg" alt="food"></span>
                <strong>제품명</strong>
                <p>설명...</p>
                <a href="">자세히</a>
              </span>
            </li>
          </ul>
        </article>
        <article>
          <h3>카테고리</h3>
          <ul>
            <li>
              <span class="food">
                <span><img src="./assets/images/img_food01.jpg" alt="food"></span>
                <strong>제품명</strong>
                <p>설명...</p>
                <a href="">자세히</a>
              </span>
            </li>
            <li>
              <span class="food">
                <span><img src="./assets/images/img_food02.jpg" alt="food"></span>
                <strong>제품명</strong>
                <p>설명...</p>
                <a href="">자세히</a>
              </span>
            </li>
            <li>
              <span class="food">
                <span><img src="./assets/images/img_food03.jpg" alt="food"></span>
                <strong>제품명</strong>
                <p>설명...</p>
                <a href="">자세히</a>
              </span>
            </li>
            <li>
              <span class="food">
                <span><img src="./assets/images/img_food04.jpg" alt="food"></span>
                <strong>제품명</strong>
                <p>설명...</p>
                <a href="">자세히</a>
              </span>
            </li>
          </ul>
        </article>
      </section>
    </main>
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
  background-image: url('./assets/images/bg_main.jpg');
  background-repeat: repeat;
  background-position: 50% 80%;
  background-size: 100%;
  background-attachment: fixed;
}

#app {
  min-height: 100%;
  background: -moz-linear-gradient(top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.3) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.85) 0%,rgba(0, 0, 0, 0.3) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.85) 0%,rgba(0, 0, 0, 0.3) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 10rem;
  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.85);
  text-align: center;

  h1 {
    margin: 0;
    font-weight: 300;
    font-size: 1.6rem;
    color: rgba(255, 255, 255, 1);
  }

  menu {
    position: absolute;
    right: 1rem;
    margin: 0;
    padding: 0;

    a {
      margin-left: 0.5rem;
      font-weight: 300;
      font-size: 1.4rem;
      color: rgba(255, 255, 255, 1);
    }
  }
}

main {
  nav {
    a {}
  }
  section {
    padding: 1rem 0 5rem 0;

    h2 {
      position: relative;
      margin: 0 1rem 0 1rem;
      height: 30rem;
      border-bottom: 0.1rem solid rgba(255, 255, 255, 0.5);
      background-image: url('./assets/images/bg_section.jpg');
      background-repeat: repeat;
      background-position: 0 50%;
      background-size: 100%;

      p {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        background: -moz-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 1) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        text-align: center;
        font-weight: 300;
        font-size: 1.6rem;
        color: rgba(255, 255, 255, 1);
      }
    }
    article {
      padding: 1rem;

      h3 {
        margin: 0;
        padding: 1rem 0;
        border-bottom: 0.1rem solid rgba(255, 255, 255, 0.85);
        font-weight: 300;
        font-size: 1.6rem;
        color: rgba(255, 255, 255, 1);
      }

      ul {
        margin: 1rem -1rem -1rem 0;
        padding: 0;

        &::after {
          content: '';
          display: block;
          clear: both;
        }

        li {
          float: left;
          width: 25%;
          list-style: none;

          .food {
            overflow: hidden;
            display: block;
            margin: 0 1rem 1rem 0;
            border-radius: 0.5rem;
            background-color: rgba(255, 255, 255, 0.2);
            box-shadow: 0.1rem 0.1rem 0.5rem rgba(0, 0, 0, 0.5);

            span {
              overflow: hidden;
              display: block;
              position: relative;
              margin: 1rem 1rem 0 1rem;
              height: 30rem;
              font-size: 1.4rem;

              &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                box-sizing: border-box;
                width: 100%;
                height: 100%;
                border: 0.1rem solid rgba(0, 0, 0, 0.7);
                box-shadow: inset 0 0 0.3rem rgba(0, 0, 0, 0.7);
              }

              img {
                width: 100%;
              }
            }

            strong {
              display: block;
              margin: 1rem 1rem 0 1rem;
              font-weight: 300;
              font-size: 1.4rem;
              color: rgba(255, 255, 255, 1);
            }

            p {
              margin: 1rem 1rem 0 1rem;
              font-weight: 300;
              font-size: 1.4rem;
              color: rgba(255, 255, 255, 1);
            }

            a {
              display: block;
              margin: 1rem;
              text-align: center;
              font-weight: 300;
              font-size: 1.4rem;
              color: rgba(255, 255, 255, 1);
            }
          }
        }
      }
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
  border-top: 0.1rem solid rgba(255, 255, 255, 0.2);
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
  header {
    height: 7.87vw;
    border-bottom-width: 0.07vw;

    h1 {
      font-size: 1.56vw;
    }

    menu {
      right: 0.78vw;

      a {
        margin-left: 0.39vw;
        font-size: 1.56vw;
      }
    }
  }

  main {
    section {
      padding: 0.78vw 0 1.95vw 0;

      h2 {
        margin: 0 0.78vw;
        height: 23.43vw;
        border-bottom-width: 0.07vw;

        p {
          font-size: 1.56vw;
        }
      }
      article {
        padding: 0.78vw;

        h3 {
          padding: 0.78vw 0;
          border-bottom-width: 0.07vw;
          font-size: 1.56vw;
        }

        ul {
          margin: 0.78vw -0.78vw -0.78vw 0;
          padding: 0;

          li {
            box-sizing: border-box;
            padding-right: 0.78vw;
            width: 50%;

            .food {
              position: relative;
              margin: 0 0 0.78vw 0;
              padding: 0 0 3.12vw 21.56vw;
              min-height: 13.44vw;
              border-radius: 0.39vw;
              box-shadow: 0.07vw 0.07vw 0.39vw rgba(0, 0, 0, 0.5);

              span {
                position: absolute;
                top: 0.78vw;
                left: 0.78vw;
                margin: 0;
                width: 20vw;
                height: 15vw;
                font-size: 1.56vw;

                &::before {
                  border-width: 0.15vw;
                  box-shadow: inset 0 0 0.23vw rgba(0, 0, 0, 0.5);
                }
              }

              strong {
                margin: 0.78vw 0.78vw 0 0;
                font-size: 1.56vw;
              }

              p {
                margin: 0.78vw 0.78vw 0 0;
                font-size: 1.56vw;
              }

              a {
                position: absolute;
                bottom: 0.78vw;
                right: 0.78vw;
                margin: 0;
                font-size: 1.56vw;
              }
            }
          }
        }
      }
    }
  }

  footer {
    height: 7.81vw;
    border-top-width: 0.15vw;
    font-size: 1.56vw;
  }
}
@media (min-width: 320px) and (max-width: 480px) {
  /* ##Device = Most of the Smartphones Mobiles (Portrait) ##Screen = B/w 320px to 479px */
  header {
    height: 15.65vw;
    border-bottom-width: 0.15vw;

    h1 {
      font-size: 3.12vw;
    }

    menu {
      right: 1.56vw;

      a {
        margin-left: 0.78vw;
        font-size: 3.12vw;
      }
    }
  }

  main {
    section {
      padding: 3.12vw 0 3.9vw 0;

      h2 {
        margin: 0 1.56vw;
        height: 46.87vw;
        border-bottom-width: 0.15vw;

        p {
          font-size: 3.12vw;
        }
      }
      article {
        padding: 1.56vw;

        h3 {
          padding: 1.56vw 0;
          border-bottom-width: 0.15vw;
          font-size: 3.12vw;
        }

        ul {
          margin: 1.56vw 0 -1.56vw 0;
          padding: 0;

          li {
            float: none;
            width: auto;

            .food {
              position: relative;
              margin: 0 0 1.56vw 0;
              padding: 0 0 6.24vw 43.12vw;
              min-height: 26.88vw;
              border-radius: 0.78vw;
              box-shadow: 0.15vw 0.15vw 0.78vw rgba(0, 0, 0, 0.5);

              span {
                position: absolute;
                top: 1.56vw;
                left: 1.56vw;
                margin: 0;
                width: 40vw;
                height: 30vw;
                font-size: 3.12vw;

                &::before {
                  border-width: 0.15vw;
                  box-shadow: inset 0 0 0.46vw rgba(0, 0, 0, 0.5);
                }
              }

              strong {
                margin: 1.56vw 1.56vw 0 0;
                font-size: 3.12vw;
              }

              p {
                margin: 1.56vw 1.56vw 0 0;
                font-size: 3.12vw;
              }

              a {
                position: absolute;
                bottom: 1.56vw;
                right: 1.56vw;
                margin: 0;
                font-size: 3.12vw;
              }
            }
          }
        }
      }
    }
  }

  footer {
    height: 15.62vw;
    border-top-width: 0.15vw;
    font-size: 3.12vw;
  }
}
</style>
