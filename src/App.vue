<script setup>
//import { ref } from "vue";
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Modal from './components/Modal.vue';
import { store } from './store';
// const isOpen = ref(false)

</script>

<template>

  <h1 class="visually-hidden">Онлайн-сервис доставки еды на&nbsp;дом Delivery food</h1>

  <div class="page-wrapper">

    <Header @toggleModal="store.toggleModal(true)"/>

      <main class="main">
        
        <router-view></router-view>

      </main>

    <Modal :isOpen="store.isOpen" @toggleModal="store.toggleModal(false)"/>

      <Footer/>

  </div>

</template>

<style scoped>

</style>
