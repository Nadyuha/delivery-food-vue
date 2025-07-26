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
                <button type="button" class="product__item-descr-info-btn-goods" aria-label="Кнопка добавления в корзину" 
                @click="addCartItem()" 
                :disabled="isDisabled"
                ref="myBtn"
                >{{buttonText}}</button>
                <div class="product__item-descr-info-price-goods">{{good.price}}&nbsp;₽</div>
            </div>
    </div>
</li>
</template>

<!-- <script setup>

const getUrl = (name) => {
  return new URL(`../assets/images/goods/${name}`, import.meta.url)
}
</script> -->

<script>
import { store } from '@/store';
import { isProxy, toRaw } from 'vue';
export default {
  props: ['good', 'btnActive'],
  data() {
    return {
      isDisabled: false,
      buttonText: 'В\u00A0корзину'
    };
  },
  watch: { 
    btnActive: function(newVal, oldVal) { 
    if(newVal === false) {
      const existingItem = toRaw(store.cartItem).find((item) => item.id === this.good.id);
        if(existingItem) {
          this.isDisabled = true;
          this.buttonText = 'В\u00A0корзине';
          this.$refs.myBtn.style.cursor = 'not-allowed';
          this.$refs.myBtn.style.opacity = '0.5'
        }
    } else {
          this.isDisabled = false;
          this.buttonText = 'В\u00A0корзину';
          this.$refs.myBtn.style.cursor = 'pointer';
          this.$refs.myBtn.style.opacity = '1'
        }
    }
  },
  mounted() {
    const existingItem = toRaw(store.cartItem).find((item) => item.id === this.good.id);
    if(existingItem) {
      this.isDisabled = true;
      this.buttonText = 'В\u00A0корзине';
      this.$refs.myBtn.style.cursor = 'not-allowed';
      this.$refs.myBtn.style.opacity = '0.5'
    } 
  },
  methods: {
    getUrl(name){
      return new URL(`../assets/images/goods/${name}`, import.meta.url)
    },
    addCartItem() {
      this.isDisabled = true;
      this.buttonText = 'В\u00A0корзине';
      this.$refs.myBtn.style.cursor = 'not-allowed';
      this.$refs.myBtn.style.opacity = '0.5';
      const existingItem = toRaw(store.cartItem).find((item) => item.id === this.good.id);
      if(existingItem) {
        existingItem.count += 1;
        localStorage.setItem('cartItem', JSON.stringify(store.cartItem));
        const localCart = JSON.parse(localStorage.getItem('cartItem')) || [];
        store.cartItem = localCart;
      } else {
          store.cartItem.push({
          id: this.good.id,
          price: this.good.price,
          title: this.good.title,
          count: 1
        })
        const totalPrice = toRaw(store.cartItem).reduce((acc, item) => {
            return acc + item.price * item.count;
        }, 0)
        store.totalPrice = totalPrice;
      }
      let cartData = store.cartItem
      if (isProxy(store.cartItem)){
          cartData = toRaw(store.cartItem)
        }
      localStorage.setItem('cartItem', JSON.stringify(store.cartItem));
      return cartData;
    }
  }
  
}
</script>

<style>

</style>