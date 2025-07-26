import { goodsArr } from "@/constants/goods";
import { restArr } from "@/constants/rest";
import { reactive } from "vue";

export const store = reactive({
  isOpen: false,
  rests: restArr,
  goods: goodsArr,
  cartItem: [],
  totalPrice: 0,
  toggleModal(value) {
    this.isOpen = value;
  }
})