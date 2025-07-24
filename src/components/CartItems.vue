<template>
          <div class="cart-modal__item" ref="myElement">
          <p class="cart-modal__item-title">{{item.title}}</p>
          <div class="cart-modal__item-controls">
            <div class="cart-modal__item-controls-price">{{item.price*item.count}}&nbsp;₽</div>
            <div class="cart-modal__item-controls-btns">
              <button
                class="cart-modal__item-controls-btn cart-modal__item-controls-btn-minus"
                @click="countMinus"
              >
                -
              </button>
              <div class="cart-modal__item-controls-count">{{item.count}}</div>
              <button
                class="cart-modal__item-controls-btn cart-modal__item-controls-btn-plus"
                @click="countPlus"
              >
                +
              </button>
            </div>
          </div>
        </div> 
</template>


<script>
  import { store } from '@/store';
  import { toRaw } from 'vue';
export default {
  props: ['item'],
  mounted() {
    this.totalPrice();
  },
  methods: {
    totalPrice() {
      const totalPrice = toRaw(store.cartItem).reduce((acc, item) => {
            return acc + item.price * item.count;
        }, 0)
        store.totalPrice = totalPrice;
    },
    countMinus() {
      if (this.item.count !== '0' ) {
        this.item.count--;
        localStorage.setItem('cartItem', JSON.stringify(store.cartItem));
        const localCart = JSON.parse(localStorage.getItem('cartItem')) || [];
        store.cartItem = localCart;
        this.totalPrice();
      }
      if (this.item.count <= '0') {
        const localCart = JSON.parse(localStorage.getItem('cartItem')) || [];
        const filteredCart = localCart.filter((item) => item.id !== this.item.id);
        localStorage.setItem('cartItem', JSON.stringify(filteredCart));
        store.cartItem = filteredCart;
        
          // let delData = store.delItem;//
          // delData.push(this.item)//
          // delData = store.delItem;//
          // //console.log( store.delItem);
          // localStorage.setItem('itemDel', JSON.stringify(store.delItem));//
          
        this.$refs.myElement.remove();
      }      
    },
    countPlus() {
      this.item.count++;
        localStorage.setItem('cartItem', JSON.stringify(store.cartItem));
        const localCart = JSON.parse(localStorage.getItem('cartItem')) || [];
        store.cartItem = localCart;
        this.totalPrice();
    },
  }
}
</script>

<style scoped>
.cart-modal__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;
  color: #000;
  padding: 15px 0 10px 0;
  border-bottom: 1px solid #d9d9d9;
}

.cart-modal__item-title {
  font-weight: 400;
  font-size: 18px;
  line-height: 1.77778;
}

.cart-modal__item-controls {
  display: flex;
  justify-content: space-around;
  gap: 30px;
}

.cart-modal__item-controls-price {
  font-weight: 700;
  font-size: 20px;
  line-height: 1.6;
}

.cart-modal__item-controls-count {
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  text-align: end;
}

.cart-modal__item-controls-btns {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
}

.cart-modal__item-controls-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border: 1px solid #40a9ff;
  border-radius: 2px;
  padding: 5px 16px;
  width: 36px;
  height: 32px;
  color: #40a9ff;
}
</style>