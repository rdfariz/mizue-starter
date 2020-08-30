<template>
  <v-container>
    <v-layout justify-center wrap>
      <v-flex xs12 md10>
        <v-layout justify-center class="my-8">
          <v-flex xs12>
            <v-card flat color="transparent">
              <v-alert class="mz-container--shaped" color="primary" type="info">
                Hello, say e to mizu 🤞
              </v-alert>
              <v-card-title class="headline">
                Welcome to the Mizue
              </v-card-title>
              <v-card-text>
                <p>Mizue is vue.js template for your dashboard, landing page, or another category for website. Build with nuxt.js & vuetify.<br>Thank you for developing with Mizue and I look forward to bringing more exciting features in the future.</p>
                <div class="text-xs-right">
                  <em><small>&mdash; mizu</small></em>
                </div>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
        <swiper
          ref="mySwiper"
          :options="swiperOptions"
          :delete-instance-on-destroy="true"
          :cleanup-styles-on-destroy="false"
          class="pa-10"
        >
          <swiper-slide v-for="(data, index) in headerInfoPotrait" :key="index">
            <card-product
              :src="data.src"
              :title="data.title"
              :text="data.text"
              :clipped="false"
              size-image="20"
              over-point="50"
              to="/"
            />
          </swiper-slide>
        </swiper>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import cardProduct from '@/components/card-product/index'

import kingdom from '@/static/images/icon/kingdom/kingdom.png'
import kingdom1 from '@/static/images/icon/kingdom/kingdom-1.png'
import kingdom2 from '@/static/images/icon/kingdom/kingdom-2.png'

export default {
  components: {
    cardProduct
  },
  data: () => ({
    headerInfoPotrait: [
      {
        title: 'Easy to use',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        src: kingdom2,
        color: 'blue'
      },
      {
        title: 'Clean base',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        src: kingdom1,
        color: 'orange'
      },
      {
        title: 'Reusable',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        src: kingdom,
        color: 'red'
      }
    ],
    swiperOptions: {
      speed: 1000,
      spaceBetween: 25,
      slidesPerView: 1,
      loop: false,
      pagination: {
        el: '.swiper-pagination'
      },
      breakpoints: {
        // when window width is >= 480px
        480: {
          slidesPerView: 1
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2
        },
        1200: {
          slidesPerView: 3
        }
      }
    }
  })
}
</script>
