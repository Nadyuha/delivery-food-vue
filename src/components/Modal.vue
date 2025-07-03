<template>
  <div
    class="cart-modal__overlay"
    :class="{ open: isOpen }"
    @click.self="closeModal()"
  >
    <div class="cart-modal">
      <div class="cart-modal__header">
        <h2 class="cart-modal__header-title">Корзина</h2>
        <button
          type="button"
          aria-label="Кнопка закрытия модального окна"
          class="cart-modal__header-close"
          @click="closeModal()"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.0035 13L25.3506 3.65245C25.6077 3.39513 25.7496 3.05184 25.75 2.68578C25.75 2.31952 25.6081 1.97582 25.3506 1.71891L24.5315 0.900011C24.274 0.642084 23.9307 0.500824 23.5642 0.500824C23.1984 0.500824 22.8551 0.642084 22.5976 0.900011L13.2504 10.247L3.90285 0.900011C3.64573 0.642084 3.30224 0.500824 2.93598 0.500824C2.57012 0.500824 2.22663 0.642084 1.96951 0.900011L1.15 1.71891C0.616667 2.25225 0.616667 3.11973 1.15 3.65245L10.4974 13L1.15 22.3472C0.892683 22.6049 0.751016 22.9482 0.751016 23.3142C0.751016 23.6803 0.892683 24.0236 1.15 24.2811L1.96931 25.1C2.22642 25.3577 2.57012 25.4992 2.93577 25.4992C3.30203 25.4992 3.64553 25.3577 3.90264 25.1L13.2502 15.7529L22.5974 25.1C22.8549 25.3577 23.1982 25.4992 23.564 25.4992H23.5644C23.9305 25.4992 24.2738 25.3577 24.5313 25.1L25.3504 24.2811C25.6075 24.0238 25.7494 23.6803 25.7494 23.3142C25.7494 22.9482 25.6075 22.6049 25.3504 22.3474L16.0035 13Z"
              fill="black"
            />
          </svg>
        </button>
      </div>

      <div class="cart-modal__body">
        <div class="cart-modal__item">
          <p class="cart-modal__item-title">Ролл угорь стандарт</p>
          <div class="cart-modal__item-controls">
            <div class="cart-modal__item-controls-price">250&nbsp;₽</div>
            <div class="cart-modal__item-controls-btns">
              <button
                class="cart-modal__item-controls-btn cart-modal__item-controls-btn-minus"
              >
                -
              </button>
              <div class="cart-modal__item-controls-count">1</div>
              <button
                class="cart-modal__item-controls-btn cart-modal__item-controls-btn-plus"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <!-- <div class="cart-modal__item">
          <p class="cart-modal__item-title">Ролл угорь стандарт</p>
          <div class="cart-modal__item-controls">
            <div class="cart-modal__item-controls-price">750&nbsp;₽</div>
            <div class="cart-modal__item-controls-btns">
              <button
                class="cart-modal__item-controls-btn cart-modal__item-controls-btn-minus"
              >
                -
              </button>
              <div class="cart-modal__item-controls-count">1</div>
              <button
                class="cart-modal__item-controls-btn cart-modal__item-controls-btn-plus"
              >
                +
              </button>
            </div>
          </div>
        </div> -->

        <!-- <div class="cart-modal__item">
          <p class="cart-modal__item-title">Ролл угорь стандарт</p>
          <div class="cart-modal__item-controls">
            <div class="cart-modal__item-controls-price">250&nbsp;₽</div>
            <div class="cart-modal__item-controls-btns">
              <button
                class="cart-modal__item-controls-btn cart-modal__item-controls-btn-minus"
              >
                -
              </button>
              <div class="cart-modal__item-controls-count">1</div>
              <button
                class="cart-modal__item-controls-btn cart-modal__item-controls-btn-plus"
              >
                +
              </button>
            </div>
          </div>
        </div> -->

        <!-- <div class="cart-modal__item">
          <p class="cart-modal__item-title">Ролл угорь стандарт</p>
          <div class="cart-modal__item-controls">
            <div class="cart-modal__item-controls-price">250&nbsp;₽</div>
            <div class="cart-modal__item-controls-btns">
              <button
                class="cart-modal__item-controls-btn cart-modal__item-controls-btn-minus"
              >
                -
              </button>
              <div class="cart-modal__item-controls-count">1</div>
              <button
                class="cart-modal__item-controls-btn cart-modal__item-controls-btn-plus"
              >
                +
              </button>
            </div>
          </div>
        </div> -->

        <div class="cart-modal__item">
          <p class="cart-modal__item-title">Ролл угорь стандарт</p>
          <div class="cart-modal__item-controls">
            <div class="cart-modal__item-controls-price">250&nbsp;₽</div>
            <div class="cart-modal__item-controls-btns">
              <button
                class="cart-modal__item-controls-btn cart-modal__item-controls-btn-minus"
              >
                -
              </button>
              <div class="cart-modal__item-controls-count">1</div>
              <button
                class="cart-modal__item-controls-btn cart-modal__item-controls-btn-plus"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="cart-modal__footer">
        <div class="cart-modal__footer-price">500&nbsp;₽</div>

        <div class="cart-modal__footer-controls">
          <button class="cart-modal__btn cart-modal__btn-sign">
            Оформить&nbsp;заказ
          </button>
          <button class="cart-modal__btn cart-modal__btn-cart">Отмена</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { isOpen } = defineProps({ isOpen: Boolean });
const emit = defineEmits(["toggleModal"]);
const closeModal = () => emit("toggleModal");
</script>

<style scoped>
.cart-modal__overlay {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
}

.cart-modal__overlay.open {
  display: flex;
}

.cart-modal {
  width: 100%;
  max-width: 780px;
  padding: 40px 45px;
  border-radius: 5px;
  background: #fff;
}

.cart-modal__body {
  padding: 48px 0 59px 0;
}

.cart-modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cart-modal__btn {
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

.cart-modal__btn-sign {
  max-width: 98px;
  background-color: #1890ff;
  color: #fff;
  border: 1px solid #1890ff;
}

.cart-modal__btn-cart {
  max-width: 116px;
  background-color: #fff;
  color: #595959;
  border: 1px solid #d9d9d9;
}

.cart-modal__header-title {
  font-weight: 700;
  font-size: 36px;
  color: #000;
}

.cart-modal__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 10px;
}

.cart-modal__footer-controls {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
}

.cart-modal__btn-sign {
  max-width: 159px;
}

.cart-modal__footer-price {
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 15px 20px;
  max-width: 106px;
  width: 100%;
  background: #262626;
  font-weight: 700;
  font-size: 20px;
  color: #fafafa;
}

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