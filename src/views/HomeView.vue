<template>
  <section class="banner">
    <div class="container">
      <div class="banner__item">
        <div class="bunner__item-group">
          <h2 class="banner__title">Онлайн-сервис доставки еды на&nbsp;дом</h2>
          <p class="banner__descr">
            Блюда из&nbsp;любимого ресторана привезет курьер в&nbsp;перчатках,
            маске и&nbsp;с&nbsp;антисептиком
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="products">
    <div class="container">
      <div class="products__header">
        <h3 class="products__header-title">Рестораны</h3>
        <input
          type="text"
          class="products__header-search"
          placeholder="Поиск блюд и ресторанов"
        />
      </div>

      <div class="products-wrapper">
        <div class="products__list" id="rests-container">
          <RestItems v-for="rest in store.rests" :key="rest.id" :rest="rest"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
//import { restArr } from "../constants/rest";
import RestItems from "../components/RestItems.vue";
import { store } from "../store/index";

// const getUrl = (name) => {
//   return new URL(`../assets/images/rests/${name}`, import.meta.url)
// }
</script>

