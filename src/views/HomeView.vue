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
          <RestItems v-for="rest in restArr" :key="rest.id" :rest="rest"/>
          <!-- <router-link
            :to="`/rest?id=${rest.id}`"
            class="product__item"
            v-for="rest in restArr"
            :key="rest.id"
          >
            <div class="product__item-img">
              <img :src="getUrl(rest.image)" :alt="(rest.title)" />
            </div>
            <div class="product__item-descr">
              <div class="product__item-descr-upblock">
                <h4 class="product__item-descr-title">{{rest.title}}</h4>
                <div class="product__item-descr-bage">{{rest.time}}</div>
              </div>
              <div class="product__item-descr-info">
                <div class="product__item-descr-info-rating">{{rest.rating}}</div>
                <div class="product__item-descr-info-price">
                  От&nbsp;{{rest.price}}&nbsp;₽
                </div>
                <div class="product__item-descr-info-group">{{rest.type}}</div>
              </div>
            </div>
          </router-link> -->
          <!-- <a href="./goods.html" class="product__item">
                        <div class="product__item-img">
                            <img src="../assets/images/rests/image-2.jpg" alt="Тануки">
                        </div>
                        <div class="product__item-descr">
                            <div class="product__item-descr-upblock">
                                <h4 class="product__item-descr-title">Тануки</h4>
                                <div class="product__item-descr-bage">50&nbsp;мин</div>
                            </div>
                            <div class="product__item-descr-info">
                                <div class="product__item-descr-info-rating">4.5</div>
                                <div class="product__item-descr-info-price">От&nbsp;900&nbsp;₽</div>
                                <div class="product__item-descr-info-group">Пицца</div>
                            </div>
                        </div>
                    </a>
                    <a href="./goods.html" class="product__item">
                        <div class="product__item-img">
                            <img src="../assets/images/rests/image-3.jpg" alt="FoodBand">
                        </div>
                        <div class="product__item-descr">
                            <div class="product__item-descr-upblock">
                                <h4 class="product__item-descr-title">FoodBand</h4>
                                <div class="product__item-descr-bage">50&nbsp;мин</div>
                            </div>
                            <div class="product__item-descr-info">
                                <div class="product__item-descr-info-rating">4.5</div>
                                <div class="product__item-descr-info-price">От&nbsp;900&nbsp;₽</div>
                                <div class="product__item-descr-info-group">Пицца</div>
                            </div>
                        </div>
                    </a>
                    <a href="./goods.html" class="product__item">
                        <div class="product__item-img">
                            <img src="../assets/images/rests/image-4.jpg" alt="Жадина-пицца">
                        </div>
                        <div class="product__item-descr">
                            <div class="product__item-descr-upblock">
                                <h4 class="product__item-descr-title">Жадина-пицца</h4>
                                <div class="product__item-descr-bage">50&nbsp;мин</div>
                            </div>
                            <div class="product__item-descr-info">
                                <div class="product__item-descr-info-rating">4.5</div>
                                <div class="product__item-descr-info-price">От&nbsp;900&nbsp;₽</div>
                                <div class="product__item-descr-info-group">Пицца</div>
                            </div>
                        </div>
                    </a>
                    <a href="./goods.html" class="product__item">
                        <div class="product__item-img">
                            <img src="../assets/images/rests/image-5.jpg" alt="Точка еды">
                        </div>
                        <div class="product__item-descr">
                            <div class="product__item-descr-upblock">
                                <h4 class="product__item-descr-title">Точка&nbsp;еды</h4>
                                <div class="product__item-descr-bage">50&nbsp;мин</div>
                            </div>
                            <div class="product__item-descr-info">
                                <div class="product__item-descr-info-rating">4.5</div>
                                <div class="product__item-descr-info-price">От&nbsp;900&nbsp;₽</div>
                                <div class="product__item-descr-info-group">Пицца</div>
                            </div>
                        </div>
                    </a>
                    <a href="./goods.html" class="product__item">
                        <div class="product__item-img">
                            <img src="../assets/images/rests/image-6.jpg" alt="PizzaBurger">
                        </div>
                        <div class="product__item-descr">
                            <div class="product__item-descr-upblock">
                                <h4 class="product__item-descr-title">PizzaBurger</h4>
                                <div class="product__item-descr-bage">50&nbsp;мин</div>
                            </div>
                            <div class="product__item-descr-info">
                                <div class="product__item-descr-info-rating">4.5</div>
                                <div class="product__item-descr-info-price">От&nbsp;900&nbsp;₽</div>
                                <div class="product__item-descr-info-group">Пицца</div>
                            </div>
                        </div>
                    </a> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { restArr } from "../constants/rest";
import RestItems from "../components/RestItems.vue";

const getUrl = (name) => {
  return new URL(`../assets/images/rests/${name}`, import.meta.url)
}
</script>

