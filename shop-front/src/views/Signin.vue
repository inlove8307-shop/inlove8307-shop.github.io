<template>
  <main>
    <section>
      <!-- <h2>로그인</h2> -->
      <article>
        <ul>
          <li>
            <label for="email">이메일</label>
            <input type="text" id="email" name="EMAIL">
          </li>
          <li>
            <label for="password">비밀번호</label>
            <input type="password" id="password" name="PASSWORD">
          </li>
        </ul>
        <button>로그인</button>
        <span class="signup">
          <router-link to="/signup">회원가입</router-link>
        </span>
      </article>
    </section>
  </main>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'signin'
}
</script>

<style lang="scss" scoped>
main {
  flex: 1;
  display: flex;
  flex-flow: column;

  section {
    flex: 1;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    h2 {
      font-weight: 400;
      font-size: 1.4rem;
      text-align: center;
      color: rgba(255, 255, 255, 1);
    }

    article {
      ul {
        margin: 0;
        padding: 0;

        li {
          list-style: none;
          margin-top: 1rem;

          &:first-child {
            margin-top: 0;
          }

          label {
            display: block;
            box-sizing: border-box;
            margin-bottom: 0.5rem;
            width: 25rem;
            font-weight: 300;
            font-size: 1.4rem;
            color: rgba(255, 255, 255, 1);
          }

          input {
            display: block;
            box-sizing: border-box;
            margin: 0;
            padding: 0.5rem;
            width: 25rem;
            height: 3.5rem;
            border: 0.1rem solid rgba(255, 255, 255, 0.5);
            border-radius: 0.25rem;
            background-color: rgba(0, 0, 0, 0.5);
            font-family: 'Noto Sans KR';
            font-weight: 300;
            font-size: 1.4rem;
            color: rgba(255, 255, 255, 1);
          }
        }
      }

      button {
        margin-top: 1rem;
        padding: 0.5rem;
        width: 25rem;
        height: 3.5rem;
        border: 0;
        border-radius: 0.25rem;
        background-color: rgba(255, 255, 255, 1);
        font-family: 'Noto Sans KR';
        font-weight: 700;
        font-size: 1.4rem;
        color: rgba(0, 0, 0, 1);
      }

      span {
        display: block;
        margin-top: 1rem;
        text-align: center;

        a {
          font-family: 'Noto Sans KR';
          font-weight: 300;
          font-size: 1.4rem;
          color: rgba(255, 255, 255, 1);
        }
      }
    }
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
  main {
    h2 {
      font-size: 1.56vw;
    }

    section {
      article {
        box-sizing: border-box;
        padding: 0.78vw;

        ul {
          &::after {
            content: '';
            display: block;
            clear: both;
          }

          li {
            float: left;
            margin-top: 0;
            margin-left: 0.78vw;

            &:first-child {
              margin-left: 0;
            }

            label {
              box-sizing: border-box;
              margin-bottom: 0.78vw;
              width: 27.77vw;
              font-size: 1.56vw;
            }

            input {
              box-sizing: border-box;
              padding: 0.78vw;
              width: 27.77vw;
              height: 4.16vw;
              border-width: 0.12vw;
              border-radius: 0.34vw;
              font-size: 1.56vw;
            }
          }
        }

        button {
          width: 100%;
          height: 4.16vw;
          font-size: 1.94vw;
        }

        span {
          margin-top: 0.78vw;

          a {
            margin-top: 0.78vw;
            font-size: 1.56vw;
          }
        }
      }
    }
  }
}
@media (min-width: 320px) and (max-width: 480px) {
  /* ##Device = Most of the Smartphones Mobiles (Portrait) ##Screen = B/w 320px to 479px */
  main {
    h2 {
      font-size: 3.12vw;
    }

    section {
      display: block;

      article {
        box-sizing: border-box;
        padding: 1.56vw;
        width: 100%;

        ul {
          li {
            label {
              box-sizing: border-box;
              padding: 1.56vw 0;
              width: 100%;
              height: 8.33vw;
              font-size: 3.12vw;
            }

            input {
              box-sizing: border-box;
              margin-bottom: 1.56vw;
              padding: 1.56vw;
              width: 100%;
              height: 8.33vw;
              border-width: 0.27vw;
              border-radius: 0.69vw;
              font-size: 3.12vw;
            }
          }
        }

        button {
          margin-top: 1.56vw;
          width: 100%;
          height: 8.33vw;
          font-size: 3.88vw;
        }

        span {
          margin-top: 1.56vw;

          a {
            font-size: 3.12vw;
          }
        }
      }
    }
  }
}
</style>