<template>
  <li class="product__item">
    <div class="product__item-img product__item-img-goods">
        <img :src="getUrl(good.image)" :alt="good.title">
    </div>
    <div class="product__item-descr">
        <div class="product__item-descr-upblock product__item-descr-upblock-goods">
            <h4 class="product__item-descr-title product__item-descr-title-goods">{{ good.title }}</h4>
            <div class="product__item-descr-text-goods">{{good.descr}}</div>
        </div>
            <div class="product__item-descr-info">
                <button type="button" class="product__item-descr-info-btn-goods" aria-label="Кнопка добавления в корзину">В&nbsp;корзину</button>
                <div class="product__item-descr-info-price-goods">{{good.price}}&nbsp;₽</div>
            </div>
    </div>
</li>
</template>

<script setup>

const getUrl = (name) => {
  return new URL(`../assets/images/goods/${name}`, import.meta.url)
}
</script>

<script>
export default {
  props: ['good']
}
</script>

<style>

</style>