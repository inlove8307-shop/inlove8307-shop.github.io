<template>
  <main class="container">
    <section class="contents">
      <article class="wrapper">
        <h3 class="name">제품명</h3>
        <img class="image" src="/img/product/img_food01.jpg" alt="food">
        <div class="info">
          <ul>
            <li>
              <span>용량</span>
              <span>1Kg</span>
            </li>
            <li>
              <span>재료(원산지)</span>
              <span>재료(원산지)</span>
            </li>
            <li>
              <span>가격</span>
              <span>15,000원</span>
            </li>
          </ul>
          <div class="buttons">
            <router-link to="/" class="default">목록</router-link>
            <router-link to="/order" class="active">주문</router-link>
          </div>
        </div>
        <div class="detail">
          <p>
            제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명
            제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명
            제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명
            제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명
            제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명
            제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명
            제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명
            제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명
            제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명
            제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명
            제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명
            제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명
            제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명
            제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명
            제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명
            제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명
            제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명
            제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명
            제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명
            제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명
            제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명
            제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명
            제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명
            제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명
            제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명
            제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명
            제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명
            제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명
            제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명
            제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명
          </p>
        </div>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  name: 'detail'
}
</script>

<style lang="scss" scoped>
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

.container {
  flex: 1;

  .contents {
    margin: 0 auto;
    padding-bottom: 5rem;
    width: 108rem;

    .wrapper {
      display: flex;
      flex-flow: wrap;
      padding-top: 2rem;

      .name {
        margin: 0;
        padding: 1rem 0;
        margin-bottom: 1rem;
        width: 100%;
        @include font (1.4rem, 300);
      }

      .image {
        width: 54rem;
        height: 54rem;
      }

      .info {
        flex: 1;
        display: flex;
        flex-flow: column;
        margin-left: 1rem;

        ul {
          flex: 1;
          margin: 0 0 1rem;
          padding: 0;
          border-top: 0.1rem solid rgba(255, 255, 255, 0.25);

          li {
            display: flex;
            padding: 1rem 0;
            border-bottom: 0.1rem solid rgba(255, 255, 255, 0.25);
            list-style: none;

            span {
              @include font(1.4rem, 300);

              &:last-child {
                flex: 1;
                text-align: right;
              }
            }
          }
        }

        .buttons {
          display: flex;
          justify-content: flex-start;
          align-items: stretch;
          height: 4rem;

          & * {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 1rem;
            padding: 0;
            border: 0;
            @include font(1.4rem, 400);

            &:first-child {
              margin-left: 0;
            }

            &.default {
              background-color: rgba(255, 255, 255, 1);
              color: rgba(0, 0, 0, 1);
            }

            &.active {
              background-color: rgba(255, 0, 0, 1);
            }
          }
        }
      }

      .detail {
        margin-top: 2rem;
        border-top: 0.1rem solid rgba(255, 255, 255, 0.25);
        padding-top: 1rem;

        p {
          margin: 0;
          @include font(1.4rem, 300);
          line-height: 1.5;
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
  /* ##Device = Tablets, Ipads (porliait) ##Screen = B/w 768px to 1024px */
}

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  /* ##Device = Tablets, Ipads (landscape) ##Screen = B/w 768px to 1024px */
}

// @media (min-width: 481px) and (max-width: 767px) {
@media (min-width: 481px) and (max-width: 1024px) {
  /* ##Device = Low Resolution Tablets, Mobiles (Landscape) ##Screen = B/w 481px to 767px */
  .container {
    .contents {
      box-sizing: border-box;
      padding: 0 0.69vw 3.47vw;
      width: 100%;

      .wrapper {
        padding-top: 1.38vw;

        .name {
          padding: 0.69vw 0;
          margin-bottom: 0.69vw;
          @include font (1.66vw, 400);
        }

        .image {
          width: 27.5vw;
          height: auto;
        }

        .info {
          margin-left: 0.69vw;

          ul {
            border-top-width: 0.13vw;

            li {
              padding: 0.69vw 0;
              border-bottom-width: 0.13vw;

              span {
                @include font(1.38vw, 300);
              }
            }
          }

          .buttons {
            position: fixed;
            bottom: 0;
            left: 0;
            z-index: 9999;
            box-sizing: border-box;
            padding: 0.69vw;
            width: 100%;
            height: 6.94vw;
            border-top-width: 0.13vw;
            background-color: rgba(0, 0, 0, 1);

            & * {
              margin-left: 0.69vw;
              @include font(1.66vw, 400);
            }
          }
        }

        .detail {
          margin-top: 1.38vw;
          border-top: 0;
          padding-top: 1.69vw;

          p {
            @include font(1.38vw, 300);
            line-height: 1.5;
          }
        }
      }
    }
  }
}

@media (min-width: 320px) and (max-width: 480px) {
  /* ##Device = Most of spane Smartphones Mobiles (Porliait) ##Screen = B/w 320px to 479px */
  .container {
    .contents {
      box-sizing: border-box;
      padding: 0 1.38vw 6.94vw;
      width: 100%;

      .wrapper {
        flex-flow: column;
        padding-top: 2.77vw;

        .name {
          padding: 1.38vw 0;
          margin-bottom: 1.38vw;
          @include font (3.33vw, 400);
        }

        .image {
          width: 100%;
          height: auto;
        }

        .info {
          margin-left: 0;

          ul {
            margin: 0;
            border-top-width: 0.27vw;

            li {
              padding: 1.38vw 0;
              border-bottom-width: 0.27vw;

              span {
                @include font(2.77vw, 300);
              }
            }
          }

          .buttons {
            position: fixed;
            bottom: 0;
            left: 0;
            z-index: 9999;
            box-sizing: border-box;
            padding: 1.38vw;
            width: 100%;
            height: 13.88vw;
            border-top-width: 0.27vw;
            background-color: rgba(0, 0, 0, 1);

            & * {
              margin-left: 1.38vw;
              @include font(3.33vw, 400);
            }
          }
        }

        .detail {
          margin-top: 2.77vw;
          border-top: 0;
          padding-top: 1.38vw;

          p {
            @include font(2.77vw, 300);
            line-height: 1.5;
          }
        }
      }
    }
  }
}
</style>
