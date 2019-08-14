<template>
  <main>
    <section>
      <h2>주문완료</h2>
      <article>
        <div class="infomation">
          <img src="/img/product/img_food01.jpg" alt="food">
          <table>
            <caption></caption>
            <tbody>
              <tr>
                <th scope="row">제품명</th>
                <td>기름지고 매콤해서 살찌는 소세지 새우 토마토 고추 파프리카로 달달 볶은 달달한 볶음밥 500g</td>
              </tr>
              <tr>
                <th scope="row">수량</th>
                <td>10개</td>
              </tr>
              <tr>
                <th scope="row">주문금액</th>
                <td>70,000원</td>
              </tr>
              <tr>
                <th scope="row">받는사람</th>
                <td>강민서</td>
              </tr>
              <tr>
                <th scope="row">주소</th>
                <td>서울 노원구 한글비석로 530 1204동 810호</td>
              </tr>
              <tr>
                <th scope="row">입금은행</th>
                <td>국민</td>
              </tr>
              <tr>
                <th scope="row">입금계좌</th>
                <td>987654-05-654321</td>
              </tr>
              <tr>
                <th scope="row">계좌주</th>
                <td>강민서</td>
              </tr>
              <tr>
                <th scope="row">입금기한</th>
                <td>~ 2020년 12월 31일</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="message">
          <p>주문이 완료되었습니다.</p>
        </div>
        <div class="buttons">
          <router-link to="/">제품목록</router-link>
          <router-link to="/history">주문내역</router-link>
        </div>
        <div class="guide">
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
      </article>
    </section>
  </main>
</template>

<script>
export default {
  name: 'complete'
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
      .infomation {
        display: flex;
        align-items: flex-start;

        img {
          width: 36rem;
        }

        table {
          flex: 1;
          margin-left: 1rem;
          border-collapse: collapse;
          border-top: 0.1rem solid rgba(255, 255, 255, 0.5);

          caption {
            display: none;
          }

          tbody {
            tr {
              display: flex;

              th {
                display: flex;
                align-items: center;
                box-sizing: border-box;
                height: 4rem;
                border-bottom: 0.1rem solid rgba(255, 255, 255, 0.5);
                font-family: 'Noto Sans KR';
                font-weight: 400;
                font-size: 1.4rem;
                text-align: left;
                color: rgba(255, 255, 255, 1);
              }

              td {
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                box-sizing: border-box;
                height: 4rem;
                border-bottom: 0.1rem solid rgba(255, 255, 255, 0.5);
                font-weight: 400;
                font-size: 1.4rem;
                text-align: right;
                color: rgba(255, 255, 255, 1);
              }
            }
          }
        }
      }

      .message {
        margin-top: 3rem;

        p {
          margin: 0;
          padding: 1rem 0;
          font-family: 'Noto Sans KR';
          font-weight: 400;
          font-size: 2rem;
          text-align: center;
          color: rgba(255, 255, 255, 1);
        }
      }

      .buttons {
        display: flex;
        justify-content: stretch;
        align-items: stretch;
        margin-top: 3rem;
        width: 100%;
        height: 4rem;

        button, a {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 1rem;
          border: 0;
          background-color: rgba(255, 255, 255, 1);
          font-family: 'Noto Sans KR';
          font-weight: 400;
          font-size: 1.4rem;
          text-decoration: none;
          color: rgba(0, 0, 0, 1);

          &:first-child {
            margin-left: 0;
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
        .infomation {
          img {
            display: none;
          }

          table {
            flex: initial;
            margin-left: 0;
            border-top-width: 0.27vw;

            tbody {
              tr {
                th {
                  padding: 1.38vw 0;
                  width: 13.88vw;
                  height: auto;
                  border-bottom-width: 0.27vw;
                  font-size: 3.12vw;
                }

                td {
                  padding: 1.38vw 0;
                  height: auto;
                  border-bottom-width: 0.27vw;
                  font-size: 3.12vw;
                }
              }
            }
          }
        }

        .message {
          margin-top: 4.16vw;

          p {
            padding: 1.37vw 0;
            font-size: 4.16vw;
          }
        }

        .buttons {
          position: fixed;
          bottom: 0;
          left: 0;
          z-index: 1;
          box-sizing: border-box;
          margin-top: 0;
          width: 100%;
          padding: 2.76vw;
          width: 100%;
          height: 15.62vw;
          border-top: 0.27vw solid rgba(255, 255, 255, 0.5);
          background-color: rgba(0, 0, 0, 1);

          button, a {
            margin-left: 2.76vw;
            font-size: 3.88vw;

            &:first-child {
              margin-left: 0;
            }
          }
        }

        .guide {
          margin-top: 4.16vw;
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
      }
    }
  }
}
</style>
