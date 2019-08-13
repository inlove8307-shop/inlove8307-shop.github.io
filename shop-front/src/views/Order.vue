<template>
  <main>
    <section>
      <h2>주문하기</h2>
      <article>
        <div class="product">
          <img src="/img/product/img_food01.jpg" alt="food">
          <ul>
            <li>제품명</li>
            <li>수량</li>
            <li>가격</li>
          </ul>
        </div>
        <ul class="infomation">
          <li>
            <label for="">받는사람</label>
            <input type="text">
          </li>
          <li>
            <label for="">주소</label>
            <input type="text">
            <input type="text">
          </li>
        </ul>
        <div class="guide">
          <strong>주문안내</strong>
          <ul>
            <li>
              안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항
              안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항
              안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항
              안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항
            </li>
            <li>
              안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항
              안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항
              안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항
              안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항
            </li>
            <li>
              안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항
              안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항
              안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항
              안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항
            </li>
          </ul>
          <strong>유의사항</strong>
          <ul>
            <li>
              안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항
              안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항
              안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항
              안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항
            </li>
            <li>
              안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항
              안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항
              안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항
              안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항
            </li>
            <li>
              안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항
              안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항
              안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항
              안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항 안내사항
            </li>
          </ul>
        </div>
        <div class="buttons">
          <router-link to="/detail">취소</router-link>
          <router-link to="/history">주문</router-link>
        </div>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  name: 'order'
}
</script>

<style lang="scss" scoped>
main {
  flex: 1;
  display: flex;
  flex-flow: column;
  align-items: center;

  section {
    box-sizing: border-box;
    padding: 0 0 4rem 0;
    width: 108rem;

    h2 {
      margin: 0;
      padding: 2rem 0;
      font-weight: 300;
      font-size: 1.4rem;
      color: white;
    }

    article {
      display: flex;
      flex-flow: wrap;

      .product {
        position: relative;
        box-sizing: border-box;
        padding-left: 20rem;
        min-height: 20rem;
        width: 50%;

        img {
          position: absolute;
          top: 0;
          left: 0;
          box-sizing: border-box;
          width: 20rem;
          border: 0.1rem solid rgba(0, 0, 0, 1);
        }

        ul {
          margin: 0;
          padding: 0 1rem;

          li {
            margin-bottom: 1rem;
            font-family: 'Noto Sans KR';
            font-size: 1.4rem;
            list-style: none;
            color: rgba(255, 255, 255, 1);
          }
        }
      }

      .infomation {
        margin: 0;
        padding: 0;
        width: 50%;

        &::after {
          content: '';
          display: block;
          clear: both;
        }

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
            width: 100%;
            font-weight: 300;
            font-size: 1.4rem;
            color: rgba(255, 255, 255, 1);
          }

          input {
            display: block;
            box-sizing: border-box;
            margin: 0;
            padding: 0.5rem;
            width: 100%;
            height: 3.5rem;
            border: 0.1rem solid rgba(255, 255, 255, 0.5);
            border-radius: 0.25rem;
            background-color: rgba(0, 0, 0, 0.5);
            font-family: 'Noto Sans KR';
            font-weight: 300;
            font-size: 1.4rem;
            color: rgba(255, 255, 255, 1);

            &+input {
              margin-top: 1rem;
            }
          }
        }
      }

      .guide {
        box-sizing: border-box;
        margin-top: 2rem;
        width: 100%;
        border-top: 0.1rem solid rgba(255, 255, 255, 0.5);

        strong {
          display: block;
          margin-top: 2rem;
          font-family: 'Noto Sans KR';
          font-weight: 300;
          font-size: 1.4rem;
          color: rgba(255, 255, 255, 1);
        }

        ul {
          margin: 1rem 0 0 0;
          padding: 0;

          li {
            position: relative;
            margin-bottom: 0.5rem;
            padding-left: 1.2rem;
            font-family: 'Noto Sans KR';
            font-weight: 300;
            font-size: 1.4rem;
            color: rgba(255, 255, 255, 1);
            list-style: none;

            &::before {
              content: '·';
              position: absolute;
              top: 0;
              left: 0;
              font-family: 'Noto Sans KR';
              font-weight: 300;
              font-size: 1.4rem;
              color: rgba(255, 255, 255, 1);
            }
          }
        }
      }

      .buttons {
        display: flex;
        justify-content: stretch;
        align-items: stretch;
        margin-top: 2rem;
        width: 100%;
        height: 4rem;

        button, a {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 1rem;
          border: 0;
          background-color: rgba(255, 0, 0, 1);
          font-family: 'Noto Sans KR';
          font-weight: 400;
          font-size: 1.4rem;
          text-decoration: none;
          color: rgba(255, 255, 255, 1);

          &:first-child {
            margin-left: 0;
            background-color: rgba(255, 255, 255, 1);
            color: rgba(0, 0, 0, 1);
          }
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
    section {
      box-sizing: border-box;
      padding: 0 0.69vw 3.47vw;
      width: 100%;

      h2 {
        padding: 1.38vw 0;
        font-size: 1.94vw;
      }

      article {
        .product {
          padding-left: 0;
          min-height: 0;
          width: 50%;

          img {
            width: 40%;
          }

          ul {
            margin-left: 40%;
            padding: 0 0.69vw;

            li {
              margin-bottom: 0.69vw;
              font-size: 1.56vw;
            }
          }
        }

        .infomation {
          width: 50%;

          li {
            margin-top: 0.69vw;

            label {
              margin-bottom: 0.69vw;
              font-size: 1.56vw;
            }

            input {
              box-sizing: border-box;
              padding: 0.78vw;
              height: 4.16vw;
              border-width: 0.12vw;
              border-radius: 0.34vw;
              font-size: 1.56vw;

              &+input {
                margin-top: 0.69vw;
              }
            }
          }
        }

        .guide {
          margin-top: 1.38vw;
          border-top-width: 0.13vw;

          strong {
            margin-top: 1.38vw;
            font-size: 1.56vw;
          }

          ul {
            margin-top: 0.69vw;

            li {
              margin-bottom: 0.69vw;
              padding-left: 1.38vw;
              font-size: 1.56vw;

              &::before {
                font-size: 1.56vw;
              }
            }
          }
        }

        .buttons {
          position: fixed;
          left: 0;
          bottom: 0;
          box-sizing: border-box;
          margin-top: 0;
          padding: 1.38vw;
          height: 7.81vw;
          border-top: 0.13vw solid rgba(255, 255, 255, 0.5);
          background-color: rgba(0, 0, 0, 1);

          button, a {
            margin-left: 1.38vw;
            font-size: 1.94vw;
          }
        }
      }
    }
  }
}
@media (min-width: 320px) and (max-width: 480px) {
  /* ##Device = Most of the Smartphones Mobiles (Portrait) ##Screen = B/w 320px to 479px */
  main {
    section {
      box-sizing: border-box;
      padding: 0 1.38vw 6.94vw;
      width: 100%;

      h2 {
        padding: 2.77vw 0;
        font-size: 3.88vw;
      }

      article {
        display: block;

        .product {
          padding-left: 0;
          min-height: auto;
          width: 100%;

          &::after {
            content: '';
            display: block;
            clear: both;
          }

          img {
            float: left;
            position: initial;
            box-sizing: border-box;
            width: 30%;
            height: auto;
            border: 0.1rem solid rgba(0, 0, 0, 1);
          }

          ul {
            float: left;
            box-sizing: border-box;
            padding: 0 0 0 1.38vw;
            width: 70%;

            li {
              margin-bottom: 1.38vw;
              font-size: 3.12vw;
              text-align: right;
            }
          }
        }

        .infomation {
          margin-top: 2.77vw;
          padding-top: 1.38vw;
          border-top: 0.13vw solid rgba(255, 255, 255, 0.5);
          width: 100%;

          li {
            margin-top: 1.38vw;

            label {
              box-sizing: border-box;
              margin-bottom: 1.38vw;
              font-size: 3.12vw;
            }

            input {
              box-sizing: border-box;
              margin: 0;
              padding: 1.56vw;
              height: 8.33vw;
              border-width: 0.27vw;
              border-radius: 0.69vw;
              font-size: 3.12vw;

              &+input {
                margin-top: 1.38vw;
              }
            }
          }
        }

        .guide {
          margin-top: 2.77vw;
          border-top-width: 0.13vw;

          strong {
            margin-top: 2.77vw;
            font-size: 3.12vw;
          }

          ul {
            margin-top: 1.38vw;

            li {
              margin-bottom: 1.38vw;
              padding-left: 2.77vw;
              font-size: 3.12vw;

              &::before {
                content: '·';
                font-family: 'Noto Sans KR';
                font-size: 3.12vw;
              }
            }
          }
        }

        .buttons {
          position: fixed;
          left: 0;
          bottom: 0;
          box-sizing: border-box;
          margin-top: 0;
          padding: 2.76vw;
          width: 100%;
          height: 15.62vw;
          border-top: 0.27vw solid rgba(255, 255, 255, 0.5);
          background-color: rgba(0, 0, 0, 1);

          button, a {
            margin-left: 2.76vw;
            font-size: 3.88vw;
          }
        }
      }
    }
  }
}
</style>
