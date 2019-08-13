<template>
  <main>
    <section>
      <h2>주문내역</h2>
      <article>
        <ul>
          <li>
            <span>제품명</span>
            <span>15,000원</span>
            <span>0000.00.00</span>
            <span>입금대기</span>
            <span><button>취소</button></span>
          </li>
          <li>
            <span>제품명</span>
            <span>15,000원</span>
            <span>0000.00.00</span>
            <span>입금확인</span>
            <span><button>취소</button></span>
          </li>
          <li>
            <span>제품명</span>
            <span>15,000원</span>
            <span>0000.00.00</span>
            <span>배송준비</span>
            <span><button disabled>취소</button></span>
          </li>
          <li>
            <span>제품명</span>
            <span>15,000원</span>
            <span>0000.00.00</span>
            <span>배송완료</span>
            <span><button disabled>취소</button></span>
          </li>
          <li>
            <span>제품명</span>
            <span>15,000원</span>
            <span>0000.00.00</span>
            <span>배송완료</span>
            <span><button disabled>취소</button></span>
          </li>
          <li>
            <span>제품명</span>
            <span>15,000원</span>
            <span>0000.00.00</span>
            <span>배송완료</span>
            <span><button disabled>취소</button></span>
          </li>
          <li>
            <span>제품명</span>
            <span>15,000원</span>
            <span>0000.00.00</span>
            <span>배송완료</span>
            <span><button disabled>취소</button></span>
          </li>
          <li>
            <span>제품명</span>
            <span>15,000원</span>
            <span>0000.00.00</span>
            <span>배송완료</span>
            <span><button disabled>취소</button></span>
          </li>
          <li>
            <span>제품명</span>
            <span>15,000원</span>
            <span>0000.00.00</span>
            <span>배송완료</span>
            <span><button disabled>취소</button></span>
          </li>
          <li>
            <span>제품명</span>
            <span>15,000원</span>
            <span>0000.00.00</span>
            <span>배송완료</span>
            <span><button disabled>취소</button></span>
          </li>
        </ul>
        <div class="page">
          <button>F</button>
          <button>P</button>
          <strong>1</strong>
          <a href="">2</a>
          <a href="">3</a>
          <a href="">4</a>
          <a href="">5</a>
          <a href="">6</a>
          <a href="">7</a>
          <a href="">8</a>
          <a href="">9</a>
          <a href="">10</a>
          <button>N</button>
          <button>L</button>
        </div>
        <div class="buttons">
          <button>더보기</button>
        </div>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  name: 'history'
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
      color: rgba(255, 255, 255, 1);
    }

    article {
      ul {
        margin: 0;
        padding: 0;
        border-top: 0.1rem solid rgba(255, 255, 255, 1);

        li {
          display: flex;
          border-bottom: 0.1rem solid rgba(255, 255, 255, 1);

          span {
            display: flex;
            align-items: flex-start;
            box-sizing: border-box;
            padding: 1rem 1rem;
            background-color: rgba(0, 0, 0, 0.75);
            font-family: 'Noto Sans KR';
            font-weight: 400;
            font-size: 1.4rem;
            text-align: center;
            color: rgba(255, 255, 255, 1);

            &:nth-child(1) {
              flex: 1;
              text-align: left;
            }
            &:nth-child(2) {
              text-align: right;
            }

            button {
              box-sizing: border-box;
              margin: 0;
              padding: 0 1.5rem;
              width: auto;
              border: 0;
              border-radius: 0.25rem;
              background-color: rgba(255, 0, 0, 1);
              font-family: 'Noto Sans KR';
              font-weight: 400;
              font-size: 1.4rem;
              color: rgba(255, 255, 255, 1);

              &:disabled {
                background-color: rgba(200, 200, 200, 1);
                color: rgba(255, 255, 255, 1);
              }
            }
          }
        }
      }

      .page {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;

        button, strong, a {
          display: flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          margin: 0 0 0 -0.1rem;
          padding: 0;
          min-width: 3rem;
          height: 3rem;
          border: 0.1rem solid rgba(255, 255, 255, 0.5);
          background-color: rgba(0, 0, 0, 0.5);
          font-family: 'Noto Sans KR';
          font-weight: 400;
          font-size: 1.4rem;
          text-decoration: none;
          color: rgba(255, 255, 255, 1);
        }

        strong {
          color: rgba(255, 0, 0, 1);
        }
      }

      .buttons {
        display: none;
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
        ul {
          border-top-width: 0.13vw;

          li {
            flex-flow: wrap;

            span {
              padding: 0.69vw;
              border-bottom-width: 0.13vw;
              font-size: 1.56vw;

              &:first-child {
                padding-left: 0;
              }

              &:last-child {
                padding-right: 0;
              }

              button {
                padding: 0 1.38vw;
                border-radius: 0.34vw;
                font-size: 1.56vw;
              }
            }
          }
        }

        .page {
          display: none;
        }

        .buttons {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;

          button {
            flex: 1;
            margin-top: 0.78vw;
            width: 100%;
            height: 4.16vw;
            border: 0;
            background-color: rgba(255, 255, 255, 1);
            font-family: 'Noto Sans KR';
            font-weight: 700;
            font-size: 1.94vw;
            color: rgba(0, 0, 0, 1);
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
        ul {
          border-top-width: 0.27vw;

          li {
            flex-flow: wrap;

            span {
              padding: 1.38vw;
              border-bottom-width: 0.27vw;
              font-size: 3.12vw;

              &:first-child {
                padding-left: 0;
              }

              &:last-child {
                padding-right: 0;
              }

              button {
                padding: 0 1.38vw;
                border-radius: 0.69vw;
                font-size: 3.12vw;
              }
            }
          }
        }

        .page {
          display: none;
        }

        .buttons {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;

          button {
            flex: 1;
            margin-top: 1.56vw;
            width: 100%;
            height: 8.33vw;
            border: 0;
            background-color: rgba(255, 255, 255, 1);
            font-family: 'Noto Sans KR';
            font-weight: 700;
            font-size: 3.88vw;
            color: rgba(0, 0, 0, 1);
          }
        }
      }
    }
  }
}
</style>
