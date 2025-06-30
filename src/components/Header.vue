<template>
  <header class="header">
    <div class="container">
      <div class="header__box">
        <router-link to="/" class="header__logo logo">
          <img src="../assets/images/logo.png" alt="logo" />
        </router-link>
        <div class="header__controls">
          <button
            class="header__btn header__btn-sign"
            aria-label="Кнопка регистрации"
          >
            Войти
          </button>
          <button
            class="header__btn header__btn-cart"
            aria-label="Кнопка входа в корзину"
            @click="openModal()"
          >
            Корзина
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>

const emit = defineEmits(['toggleModal']);
const openModal = () => emit('toggleModal');

</script>

<style scoped>

.header {
  display: flex;
  align-items: center;
  min-height: 124px;
}

.header__box {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}

.header__controls {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
}

.header__btn, .cart-modal__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: 2px;
  padding: 8px 16px;
  width: 100%;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  outline: none;
}

.header__btn-sign, .cart-modal__btn-sign {
  max-width: 98px;
  background-color: #1890ff;
  color: #fff;
  border: 1px solid #1890ff;
}

.header__btn-sign::before {
  content: '';
  display: block;
  width: 16px;
  height: 16px;
  background: url('../assets/images/icons/user.svg') no-repeat left/contain;
}

.header__btn-cart, .cart-modal__btn-cart {
  max-width: 116px;
  background-color: #fff;
  color: #595959;
  border: 1px solid #d9d9d9;
}

.header__btn-cart::before {
  content: '';
  display: block;
  width: 16px;
  height: 16px;
  background: url('../assets/images/icons/shopping-cart.svg') no-repeat left/contain;
}

</style>