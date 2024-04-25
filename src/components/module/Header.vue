<template>
  <header class="header">
    <div class="container">
      <div class="d-flex align-center justify-between">
        <div class="d-flex align-center">
          <img
            src="../../assets/img/svg/icon.svg"
            alt="icon"
            class="header_icon"
          />
          <div>
            <div class="header_name">Толганай Баетова</div>
            <div class="header_status">Психолог | Рилив-терапевт</div>
          </div>
        </div>
        <ul class="header_ul">
          <li v-for="(link, index) in links" :key="index" @click="scrollToSection(link.title)">{{ link.title }}</li>
        </ul>
        <div>
          <a
            href="https://api.whatsapp.com/send?phone=17579290496"
            class="d-flex align-center"
          >
            <img
              src="../../assets/img/svg/whats_con.svg"
              alt="icon"
              class="header_icon-whats"
            />
            <span class="header_whats">+17579290496</span>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Header",
  setup() {
    const links = [
      {
        title: "Консультации",
        targetId: "consultation-section" 
      },
      {
        title: "Услуги",
        targetId: "services-section"
      },
      {
        title: "Обо мне",
        targetId: "about-me-section"
      },
      {
        title: "Цены",
        targetId: "price-section"
      },
      {
        title: "Отзывы",
        targetId: "reviews-section"
      },
    ];

    const scrollToSection = (title: string) => {
      const link = links.find(item => item.title === title);
      if (link && link.targetId) {
        const targetElement = document.getElementById(link.targetId);
        if (targetElement) {
          scrollToMiddle(targetElement);
        }
      }
    };

    const scrollToMiddle = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetY = rect.top + scrollTop + rect.height / 2 - window.innerHeight / 2;
      window.scrollTo({ top: targetY, behavior: "smooth" });
    };

    return {
      links,
      scrollToSection
    };
  },
});
</script>
