<template>

    <section class="products">
        <div class="container">
            <div class="product__item-descr-info" id="goods-info">
                <h4 class="product__item-descr-title product__item-descr-title-main-goods">{{arrItem.title}}</h4>
                <div class="product__item-descr-info-rating">{{arrItem.rating}}</div>
                <div class="product__item-descr-info-price">От&nbsp;{{arrItem.price}}&nbsp;₽</div>
                <div class="product__item-descr-info-group">{{arrItem.type}}</div>
            </div>
            <div class="products-wrapper">
                <ul class="products__list" id="goods-container">
                    <GoodsItems v-for="good in store.goods" :key="good.id" :good="good"/>
                </ul>
            </div>
        </div>
    </section>

</template>

<script setup>
    //import {goodsArr} from '../constants/goods'
    //import { restArr } from "../constants/rest";
    import GoodsItems from '../components/GoodsItems.vue';
    import { store } from '../store/index';

</script>

<script >
export default {
    data() {
        return {
            arrRest: null
        };
    },
    created() {
        this.arrRest = this.$route.params.restId
    },
    computed: {
        arrItem() {
            const arr = store.rests.find(item => item.id === Number(this.arrRest))
            return arr;
        }
    }

}
</script>
