<template>
  <div class="product__item" @click="objGet(rest)" >
    <router-link
    :to="{ name: 'rest', params: { restId: `${rest.id}`}}"
    >
      <div class="product__item-img">
        <img :src="getUrl(rest.image)" :alt="rest.title" />
      </div>
      <div class="product__item-descr">
        <div class="product__item-descr-upblock">
          <h4 class="product__item-descr-title">{{ rest.title }}</h4>
          <div class="product__item-descr-bage">{{ rest.time }}&nbsp;мин</div>
        </div>
        <div class="product__item-descr-info">
          <div class="product__item-descr-info-rating">{{ rest.rating }}</div>
          <div class="product__item-descr-info-price">
            От&nbsp;{{ rest.price }}&nbsp;₽
          </div>
          <div class="product__item-descr-info-group">{{ rest.type }}</div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script setup>

const getUrl = (name) => {
  return new URL(`../assets/images/rests/${name}`, import.meta.url)
}  

const objGet = (rest) => {
      const obj = {
                    title: rest.title,
                    rating: rest.rating,
                    price: rest.price }

      // console.log(obj); 
      return obj;                 
  }
</script>

<script >
export default {
  props: ['rest'],
}

</script>

<style></style>
