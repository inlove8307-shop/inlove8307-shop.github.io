<template>
  <main>
    <section>
      <article>
        <p>페이지를 찾을 수 없습니다</p>
      </article>
    </section>
  </main>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'blank'
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

    article {
      p {
        font-weight: 400;
        font-size: 1.6rem;
        color: rgba(255, 255, 255, 1);
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
      article {
        p {
          font-size: 1.56vw;
        }
      }
    }
  }
}
@media (min-width: 320px) and (max-width: 480px) {
  /* ##Device = Most of the Smartphones Mobiles (Portrait) ##Screen = B/w 320px to 479px */
  main {
    section {
      article {
        p {
          font-size: 3.12vw;
        }
      }
    }
  }
}
</style>