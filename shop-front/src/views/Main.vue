<template>
  <main class="container">
    <section class="contents">
      <article class="wrapper" v-for="category in items" :key="category.code">
        <h3 class="category">{{ category.name }}</h3>
        <ul class="products">
          <li class="product" v-for="product in category.items" :key="product.code">
            <router-link class="anchor" to="/detail">
              <img class="image" :src="product.image" alt="food">
              <span class="info">
                <strong class="name">{{ product.name }}</strong>
                <em class="summary">{{ product.summary }}</em>
              </span>
            </router-link>
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
              summary: '설명...',
              url: '#'
            },
            {
              code: 'C0102',
              name: '제품명02',
              image: '/img/product/img_food02.jpg',
              summary: '설명...',
              url: '#'
            },
            {
              code: 'C0103',
              name: '제품명03',
              image: '/img/product/img_food03.jpg',
              summary: '설명...',
              url: '#'
            },
            {
              code: 'C0104',
              name: '제품명04',
              image: '/img/product/img_food04.jpg',
              summary: '설명...',
              url: '#'
            },
            {
              code: 'C0105',
              name: '제품명05',
              image: '/img/product/img_food01.jpg',
              summary: '설명...',
              url: '#'
            },
            {
              code: 'C0106',
              name: '제품명06',
              image: '/img/product/img_food02.jpg',
              summary: '설명...',
              url: '#'
            },
            {
              code: 'C0107',
              name: '제품명07',
              image: '/img/product/img_food03.jpg',
              summary: '설명...',
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
              summary: '설명...',
              url: '#'
            },
            {
              code: 'C0202',
              name: '제품명02',
              image: '/img/product/img_food02.jpg',
              summary: '설명...',
              url: '#'
            },
            {
              code: 'C0203',
              name: '제품명03',
              image: '/img/product/img_food03.jpg',
              summary: '설명...',
              url: '#'
            },
            {
              code: 'C0204',
              name: '제품명04',
              image: '/img/product/img_food04.jpg',
              summary: '설명...',
              url: '#'
            },
            {
              code: 'C0205',
              name: '제품명05',
              image: '/img/product/img_food01.jpg',
              summary: '설명...',
              url: '#'
            },
            {
              code: 'C0206',
              name: '제품명06',
              image: '/img/product/img_food02.jpg',
              summary: '설명...',
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
              summary: '설명...',
              url: '#'
            },
            {
              code: 'C0302',
              name: '제품명02',
              image: '/img/product/img_food02.jpg',
              summary: '설명...',
              url: '#'
            },
            {
              code: 'C0303',
              name: '제품명03',
              image: '/img/product/img_food03.jpg',
              summary: '설명...',
              url: '#'
            },
            {
              code: 'C0304',
              name: '제품명04',
              image: '/img/product/img_food04.jpg',
              summary: '설명...',
              url: '#'
            },
            {
              code: 'C0305',
              name: '제품명05',
              image: '/img/product/img_food01.jpg',
              summary: '설명...',
              url: '#'
            },
            {
              code: 'C0306',
              name: '제품명06',
              image: '/img/product/img_food02.jpg',
              summary: '설명...',
              url: '#'
            },
            {
              code: 'C0307',
              name: '제품명07',
              image: '/img/product/img_food03.jpg',
              summary: '설명...',
              url: '#'
            },
            {
              code: 'C0308',
              name: '제품명08',
              image: '/img/product/img_food04.jpg',
              summary: '설명...',
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
    width: 108rem;
    padding-bottom: 5rem;

    .wrapper {
      padding-top: 2rem;

      .category {
        margin: 0;
        padding: 1rem 0;
        border-bottom: 0.1rem solid rgba(255, 255, 255, 0.25);
        @include font(1.4rem, 300);
      }

      .products {
        display: flex;
        flex-flow: wrap;
        justify-content: flex-start;
        align-items: stretch;
        margin: 0 0 0 -1rem;
        padding: 0;

        .product {
          box-sizing: border-box;
          padding: 1rem 0 0 1rem;
          width: 25%;
          list-style: none;

          .anchor {
            display: flex;
            flex-flow: column;
            position: relative;
            box-sizing: border-box;
            height: 100%;
            padding-bottom: 2rem;
            background-color: rgba(0, 0, 0, 0.5);
            @include font (1.4rem, 300);

            &::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              box-sizing: border-box;
              width: 100%;
              height: 100%;
              border: 0.1rem solid rgba(0, 0, 0, 1);
            }

            .image {
              width: 100%;
            }

            .info {
              padding: 0 1rem;

              .name {
                display: block;
                margin-top: 1rem;
                @include font (1.4rem, 300);
              }

              .summary {
                display: block;
                margin-top: 1rem;
                @include font (1.4rem, 300);
              }
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
  .container {
    .contents {
      box-sizing: border-box;
      padding: 0 0.69vw 3.47vw;
      width: 100%;

      .title {
        padding: 0.69vw 0;
        @include font (1.38vw, 300);
      }

      .wrapper {
        padding-top: 1.38vw;

        .category {
          padding: 0.69vw 0;
          border-bottom-width: 0.13vw;
          @include font(1.66vw, 400);
        }

        .products {
          flex-flow: row wrap;
          margin: 0 0 0 -0.69vw;

          .product {
            padding: 0.69vw 0 0 0.69vw;
            width: 50%;

            .anchor {
              display: flex;
              flex-flow: row wrap;
              height: 100%;
              padding-bottom: 0;
              @include font (1.38vw, 300);

              &::before {
                border: 0.13vw solid rgba(0, 0, 0, 1);
              }

              .image {
                width: 13.75vw;
              }

              .info {
                flex: 1;
                padding: 0 0.69vw;

                .name {
                  margin-top: 0.69vw;
                  @include font (1.38vw, 300);
                }

                .summary {
                  margin-top: 0.69vw;
                  @include font (1.38vw, 300);
                }
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
  .container {
    .contents {
      box-sizing: border-box;
      padding: 0 1.38vw 6.94vw;
      width: 100%;

      .wrapper {
        padding-top: 2.77vw;

        .category {
          padding: 1.38vw 0;
          border-bottom-width: 0.27vw;
          @include font(3.33vw, 400);
        }

        .products {
          flex-flow: column;
          margin: 0;

          .product {
            padding: 1.38vw 0 0;
            width: 100%;

            .anchor {
              display: flex;
              flex-flow: row wrap;
              height: 100%;
              padding-bottom: 0;
              @include font (2.77vw, 300);

              &::before {
                border: 0.27vw solid rgba(0, 0, 0, 1);
              }

              .image {
                width: 27.5vw;
              }

              .info {
                flex: 1;
                padding: 0 1.38vw;

                .name {
                  margin-top: 1.38vw;
                  @include font (2.77vw, 300);
                }

                .summary {
                  margin-top: 1.38vw;
                  @include font (2.77vw, 300);
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
