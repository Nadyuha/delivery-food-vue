<template>
  <footer class="footer">

    <div class="container">

        <div class="footer__box">
            <router-link to="/" class="footer__logo logo">
                <img src="../assets/images/logo.png" alt="logo">
            </router-link>

            <div class="footer__nav">

                <ul class="footer__nav-list">
                    <li class="footer__nav-item">
                        <a href="#" class="footer__nav-item-link">Ресторанам </a>
                    </li>
                    <li class="footer__nav-item">
                        <a href="#" class="footer__nav-item-link">Курьерам</a>
                    </li>
                    <li class="footer__nav-item">
                        <a href="#" class="footer__nav-item-link">Пресс-центр</a>
                    </li>
                    <li class="footer__nav-item">
                        <a href="#" class="footer__nav-item-link">Контакты</a>
                    </li>
                </ul>

            </div>

            <div class="footer__social">

                <ul class="footer__social-list">
                    <li class="footer__social-item">
                        <a href="#" class="footer__social-link" aria-label="ссылка на Инстаграмм">
                          <svg  class="footer__social-link-img" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.1353 0.314819H8.76025C4.44619 0.314819 0.947754 3.81326 0.947754 8.12732V17.5023C0.947754 21.8164 4.44619 25.3148 8.76025 25.3148H18.1353C22.4493 25.3148 25.9478 21.8164 25.9478 17.5023V8.12732C25.9478 3.81326 22.4493 0.314819 18.1353 0.314819ZM23.604 17.5023C23.604 20.5179 21.1509 22.9711 18.1353 22.9711H8.76025C5.74463 22.9711 3.2915 20.5179 3.2915 17.5023V8.12732C3.2915 5.11169 5.74463 2.65857 8.76025 2.65857H18.1353C21.1509 2.65857 23.604 5.11169 23.604 8.12732V17.5023Z" fill="url(#paint0_linear_243_55)" />
                            <path d="M13.4478 6.56482C9.99619 6.56482 7.19775 9.36326 7.19775 12.8148C7.19775 16.2664 9.99619 19.0648 13.4478 19.0648C16.8993 19.0648 19.6978 16.2664 19.6978 12.8148C19.6978 9.36326 16.8993 6.56482 13.4478 6.56482ZM13.4478 16.7211C11.2946 16.7211 9.5415 14.9679 9.5415 12.8148C9.5415 10.6601 11.2946 8.90857 13.4478 8.90857C15.6009 8.90857 17.354 10.6601 17.354 12.8148C17.354 14.9679 15.6009 16.7211 13.4478 16.7211Z" fill="url(#paint1_linear_243_55)" />
                            <path d="M20.1666 6.92892C20.6265 6.92892 20.9994 6.55606 20.9994 6.09611C20.9994 5.63617 20.6265 5.26331 20.1666 5.26331C19.7066 5.26331 19.3337 5.63617 19.3337 6.09611C19.3337 6.55606 19.7066 6.92892 20.1666 6.92892Z" fill="url(#paint2_linear_243_55)" />
                            <defs>
                              <linearGradient id="paint0_linear_243_55" x1="3.23627" y1="23.0265" x2="23.6592" y2="2.60318" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FFC107" />
                                <stop offset="0.507" stop-color="#F44336" />
                                <stop offset="0.99" stop-color="#9C27B0" />
                              </linearGradient>
                              <linearGradient id="paint1_linear_243_55" x1="9.02846" y1="17.2341" x2="17.8671" y2="8.39552" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FFC107" />
                                <stop offset="0.507" stop-color="#F44336" />
                                <stop offset="0.99" stop-color="#9C27B0" />
                              </linearGradient>
                              <linearGradient id="paint2_linear_243_55" x1="19.5777" y1="6.6851" x2="20.7554" y2="5.50728" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FFC107" />
                                <stop offset="0.507" stop-color="#F44336" />
                                <stop offset="0.99" stop-color="#9C27B0" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </a>
                    </li>
                    <li class="footer__social-item">
                        <a href="#" class="footer__social-link" aria-label="Ссылка на Фэйсбук">
                            <svg class="footer__social-link-img" width="26" height="26" viewBox="0 0 26 26"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M22.8228 0.314819H4.07275C2.34932 0.314819 0.947754 1.71638 0.947754 3.43982V22.1898C0.947754 23.9133 2.34932 25.3148 4.07275 25.3148H22.8228C24.5462 25.3148 25.9478 23.9133 25.9478 22.1898V3.43982C25.9478 1.71638 24.5462 0.314819 22.8228 0.314819Z"
                                    fill="#1976D2" />
                                <path
                                    d="M22.0415 12.8148H18.1353V9.68982C18.1353 8.82732 18.8353 8.90857 19.6978 8.90857H21.2603V5.00232H18.1353C15.5462 5.00232 13.4478 7.10076 13.4478 9.68982V12.8148H10.3228V16.7211H13.4478V25.3148H18.1353V16.7211H20.479L22.0415 12.8148Z"
                                    fill="#FAFAFA" />
                            </svg>
                        </a>
                    </li>
                    <li class="footer__social-item">
                        <a href="#" class="footer__social-link" aria-label="Ссылка на Вк">
                            <svg class="footer__social-link-img footer__social-link-img-vk" width="36"
                                height="21" viewBox="0 0 36 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.0988 20.7306H20.1934C20.1934 20.7306 20.8266 20.6605 21.1486 20.3121C21.4466 19.9922 21.4356 19.3919 21.4356 19.3919C21.4356 19.3919 21.394 16.5809 22.6998 16.1669C23.9859 15.7593 25.6378 18.8836 27.3884 20.0864C28.7117 20.9957 29.7173 20.7963 29.7173 20.7963L34.3994 20.7306C34.3994 20.7306 36.8488 20.5794 35.6876 18.6536C35.5934 18.4958 35.0106 17.2295 32.2062 14.6266C29.2704 11.9011 29.6648 12.3437 33.2009 7.63099C35.3546 4.76087 36.2156 3.00813 35.9462 2.25883C35.6898 1.54458 34.1058 1.733 34.1058 1.733L28.8388 1.76368C28.8388 1.76368 28.4488 1.7111 28.1574 1.88418C27.8748 2.05507 27.6929 2.44944 27.6929 2.44944C27.6929 2.44944 26.8582 4.67104 25.7452 6.55962C23.3987 10.5449 22.4588 10.7553 22.0754 10.5077C21.1837 9.93147 21.4071 8.18968 21.4071 6.95399C21.4071 3.09138 21.9921 1.48105 20.2657 1.06477C19.6917 0.926742 19.271 0.834723 17.8053 0.819387C15.9254 0.799668 14.3326 0.82596 13.4322 1.26634C12.8318 1.55992 12.3696 2.21501 12.6522 2.25226C13.0005 2.29827 13.7893 2.46478 14.2078 3.03442C14.7489 3.76838 14.7292 5.42034 14.7292 5.42034C14.7292 5.42034 15.0403 9.96652 14.004 10.5318C13.2919 10.9196 12.317 10.1286 10.2246 6.51142C9.15328 4.66009 8.34263 2.61157 8.34263 2.61157C8.34263 2.61157 8.18708 2.23035 7.90883 2.02659C7.57142 1.77901 7.09818 1.70014 7.09818 1.70014L2.08972 1.73081C2.08972 1.73081 1.33823 1.75272 1.06217 2.07917C0.816787 2.37057 1.04245 2.97088 1.04245 2.97088C1.04245 2.97088 4.96422 12.1443 9.40304 16.7694C13.476 21.0088 18.0988 20.7306 18.0988 20.7306Z"
                                    fill="#1E88E5" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>

        </div>

    </div>

</footer>
</template>

<script>
export default {};
</script>

<style scoped>

.footer {
  display: flex;
  align-items: center;
  min-height: 156px;
}

.footer__box {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  gap: 35px;
}

.footer__nav {
  flex-grow: 1;
}

.footer__nav-list {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 15px;
}

.footer__nav-item {
  font-weight: 400;
  color: #595959;
}

.footer__social-list {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
}

.footer__social-link-img {
  width: 26px;
  height: 26px;
}

.footer__social-link-img-vk {
  width: 36px;
  height: 21px;
}

@media(max-width: 991px) {
  .footer {
    padding: 60px 0;
  }
}

</style>