<template>
  <main>
    <section>
      <h2>주문내역</h2>
      <article>
        <table>
          <caption></caption>
          <colgroup>
            <col style="width:auto">
            <col style="width:10%">
            <col style="width:10%">
            <col style="width:8%">
            <col style="width:8%">
          </colgroup>
          <thead>
            <tr>
              <th scope="col"><span>제품명</span></th>
              <th scope="col"><span>주문금액</span></th>
              <th scope="col"><span>주문일</span></th>
              <th scope="col" colspan="2"><span>배송</span></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>제품명</td>
              <td>15,000원</td>
              <td>0000.00.00</td>
              <td>입금대기</td>
              <td><button>취소</button></td>
            </tr>
            <tr>
              <td>제품명</td>
              <td>15,000원</td>
              <td>0000.00.00</td>
              <td>입금확인</td>
              <td><button>취소</button></td>
            </tr>
            <tr>
              <td>제품명</td>
              <td>15,000원</td>
              <td>0000.00.00</td>
              <td>배송준비</td>
              <td><button disabled>취소</button></td>
            </tr>
            <tr>
              <td>제품명</td>
              <td>15,000원</td>
              <td>0000.00.00</td>
              <td>배송완료</td>
              <td><button disabled>취소</button></td>
            </tr>
            <tr>
              <td>제품명</td>
              <td>15,000원</td>
              <td>0000.00.00</td>
              <td>배송완료</td>
              <td><button disabled>취소</button></td>
            </tr>
            <tr>
              <td>제품명</td>
              <td>15,000원</td>
              <td>0000.00.00</td>
              <td>배송완료</td>
              <td><button disabled>취소</button></td>
            </tr>
            <tr>
              <td>제품명</td>
              <td>15,000원</td>
              <td>0000.00.00</td>
              <td>배송완료</td>
              <td><button disabled>취소</button></td>
            </tr>
            <tr>
              <td>제품명</td>
              <td>15,000원</td>
              <td>0000.00.00</td>
              <td>배송완료</td>
              <td><button disabled>취소</button></td>
            </tr>
            <tr>
              <td>제품명</td>
              <td>15,000원</td>
              <td>0000.00.00</td>
              <td>배송완료</td>
              <td><button disabled>취소</button></td>
            </tr>
            <tr>
              <td>제품명</td>
              <td>15,000원</td>
              <td>0000.00.00</td>
              <td>배송완료</td>
              <td><button disabled>취소</button></td>
            </tr>
          </tbody>
        </table>
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
      color: white;
    }

    article {
      table {
        width: 100%;
        border-collapse: collapse;

        caption {
          display: none;
        }

        thead {
          tr {
            th {
              position: relative;
              padding: 1rem 0;
              background-color: rgba(255, 255, 255, 0.75);
              font-family: 'Noto Sans KR';
              font-weight: 400;
              font-size: 1.4rem;
              color: rgba(0, 0, 0, 1);

              span {
                display: block;
                border-left: 0.1rem solid rgba(0, 0, 0, 1);
              }

              &:first-child span {
                border-left: 0;
              }
            }
          }
        }

        tbody {
          tr {
            td {
              padding: 1rem;
              border-bottom: 0.1rem solid rgba(255, 255, 255, 1);
              background-color: rgba(0, 0, 0, 0.75);
              font-family: 'Noto Sans KR';
              font-weight: 400;
              font-size: 1.4rem;
              text-align: center;
              color: rgba(255, 255, 255, 1);

              &:nth-child(1) {
                text-align: left;
              }
              &:nth-child(2) {
                text-align: right;
              }

              button {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
                width: 100%;
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

}
</style>
