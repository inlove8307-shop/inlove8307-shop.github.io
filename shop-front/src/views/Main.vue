<template>
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
      <article v-for="category in items" :key="category.code">
        <h3>{{ category.name }}</h3>
        <ul>
          <li v-for="product in category.items" :key="product.code">
            <span class="food">
              <span><img :src="product.image" alt="food"></span>
              <strong>{{ product.name }}</strong>
              <p>{{ product.text }}</p>
              <router-link to="/detail">자세히</router-link>
            </span>
          </li>
        </ul>
      </article>
    </section>
  </main>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'main',
  data(){
    return {
      items: [
        {
          code: 'C01',
          name: '카테고리01',
          items: [
            {
              code: 'C0101',
              name: '제품명01',
              image: '/img/product/img_food01.jpg',
              text: '설명...',
              url: '#'
            },
            {
              code: 'C0102',
              name: '제품명02',
              image: '/img/product/img_food02.jpg',
              text: '설명...',
              url: '#'
            },
            {
              code: 'C0103',
              name: '제품명03',
              image: '/img/product/img_food03.jpg',
              text: '설명...',
              url: '#'
            },
            {
              code: 'C0104',
              name: '제품명04',
              image: '/img/product/img_food04.jpg',
              text: '설명...',
              url: '#'
            }
          ]
        },
        {
          code: 'C02',
          name: '카테고리02',
          items: [
            {
              code: 'C0201',
              name: '제품명01',
              image: '/img/product/img_food01.jpg',
              text: '설명...',
              url: '#'
            },
            {
              code: 'C0202',
              name: '제품명02',
              image: '/img/product/img_food02.jpg',
              text: '설명...',
              url: '#'
            },
            {
              code: 'C0203',
              name: '제품명03',
              image: '/img/product/img_food03.jpg',
              text: '설명...',
              url: '#'
            },
            {
              code: 'C0204',
              name: '제품명04',
              image: '/img/product/img_food04.jpg',
              text: '설명...',
              url: '#'
            }
          ]
        },
        {
          code: 'C03',
          name: '카테고리03',
          items: [
            {
              code: 'C0301',
              name: '제품명01',
              image: '/img/product/img_food01.jpg',
              text: '설명...',
              url: '#'
            },
            {
              code: 'C0302',
              name: '제품명02',
              image: '/img/product/img_food02.jpg',
              text: '설명...',
              url: '#'
            },
            {
              code: 'C0303',
              name: '제품명03',
              image: '/img/product/img_food03.jpg',
              text: '설명...',
              url: '#'
            },
            {
              code: 'C0304',
              name: '제품명04',
              image: '/img/product/img_food04.jpg',
              text: '설명...',
              url: '#'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  flex: 1;

  nav {
    a {}
  }
  section {
    padding: 1rem 0 5rem 0;

    h2 {
      position: relative;
      margin: 0 1rem 0 1rem;
      height: 30rem;
      background-image: url('/img/main/bg_section.jpg');
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
        border-bottom: 0.1rem solid rgba(255, 255, 255, 0.3);
        background: -moz-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 1) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        font-family: 'Noto Sans KR';
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
        border-bottom: 0.1rem solid rgba(255, 255, 255, 0.3);
        font-family: 'Noto Sans KR';
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
              height: 15.62vw;
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
}
@media (min-width: 320px) and (max-width: 480px) {
  /* ##Device = Most of the Smartphones Mobiles (Portrait) ##Screen = B/w 320px to 479px */
  main {
    section {
      padding: 1.56vw 0 3.9vw 0;

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
}
</style>
