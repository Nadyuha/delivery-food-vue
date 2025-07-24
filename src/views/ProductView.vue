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
                    <GoodsItems v-for="good in goodsRest" :key="good.id" :good="good" :btnActive="store.isOpen"/>
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
    import { toRaw} from 'vue';
</script>

<script >
export default {
    data() {
        return {
            arrRest: null,
        };
    },
    created() {
        this.arrRest = this.$route.params.restId;
    },
    computed: {
        arrItem() {
            const arr = store.rests.find(item => item.id === Number(this.arrRest))
            return arr;
        },
        goodsRest() {
        //     let goodsItem = []
        //     const arr = toRaw(store.goods).map(item => {
        //         for(let i = 0; i < item.name.length; i++) {
        //             if(item.name[i] === this.arrItem.title){
        //                 goodsItem.push(item)
        //             }
        //         }
        //     })
        //     return goodsItem;
        // }
            
            const goodsItem = toRaw(store.goods).filter(item => item.name === this.arrItem.title)
            return goodsItem;
        }
    },

}
</script>
