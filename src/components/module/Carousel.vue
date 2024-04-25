<template>
  <div class="container py-100">
    <h2 class="center title">Комментарий моих клиентов</h2>
    <Carousel :wrap-around="true" :breakpoints="breakpoints" :autoplay="5000">
      <Slide v-for="slide in slides" :key="slide.id" class="carousel">
        <div class="carousel_wrap">
          <div class="carousel_title">{{ slide.title }}</div>
          <p class="carousel_subtitle">{{ slide.content }}</p>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Basic",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup() {
    const slides = ref([
      { id: "1", title: "Толганай очень помогла мне разобраться в своих мыслях и желаниях, направила их в нужное русло. Было очень приятно и комфортно с ней работать. Она чуткий, деликатный и внимательный человек, профессионал своего дела. Я нисколько не жалею о том, что обратилась именно к Толганай, очень благодарна за помощь!!)", content: "Айгуль" },
      { id: "2", title: "Была у Толганай 2 раза. Я не думала, что моя проблема так быстро решится. До этого ходила к психологу 3 месяца и становилось только хуже. Жалею только об этом-столько времени мучалась. Спасибо Вам, Толганай. Сил и процветания!", content: "Мария Андреевна" },
      {
        id: "3",
        title: "К Толганай я пришла в начале сентября, потерянная, уставшая, в слезах и не понимающая что со мной происходит. На сеансах вскрывались порой очень больчие раны, и всегда я чувствовала себя в полнейшей безопасности. Практически полгода длилась моя терапия , и это было начало захватывающего приключения - знакомство со своими желаниями..",
        content: "Ырыс Канаткызы",
      },
      { id: "4", title: "Моя история прихода к психологу Толганай, начинается с того ,что я запутался сам в себе. Я как бы знал что мне делать и в тоже время не знал... Наверное эта ситуация знакома многим. Буду краток, мне кажется что каждый из нас нуждается во взгляде на наш внутренний мир, и лучше когда это делает профессионал своего дела. Огромное спасибо за профессиональную консультацию. С признательностью и уважением Алтынбек. =))", content: "Алтынбек Розаев" },
      {
        id: "5",
        title: "В жизни бывают моменты, когда за советом и помощью стоит обратится к специалисту, а не к друзьям и здесь на помощь может придти психолог. Все проблемы решаемы, главное не опускать руки. Спасибо Толганай за ее внимание и поддержку! Я получил здесь необходимую помощь.",
        content: "Ярослав Минин",
      },
    ]);
    const breakpoints = ref({
      // 1024 and up
      1024: {
        itemsToShow: 1,
        snapAlign: "start",
      },
    });

    return {
      slides,
      breakpoints,
    };
  },
});
</script>

<style>
.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  color: #FFCE84;
  border: dashed;
}
</style>
