<template>
  <v-card
    flat
    :dark="dark"
    :color="color"
    class="pa-3 mz-card--hover"
    :to="to"
    outlined
    @click="onClick"
  >
    <v-layout row wrap justify-center align-center class="ma-0">
      <v-flex
        v-if="src || data.src"
        ref="imageContent"
        :style="!clipped ? `height: ${heightImageContent !== 0 && heightImageContent}px !important` : ''"
        xs12
      >
        <v-img
          contain
          :src="src || data.src"
          :width="sizeImage*10"
          :height="sizeImage*10/divider"
          :min-width="100"
          :min-height="100/divider"
          :max-height="250"
          :style="!clipped ? `top: -${overPoint > maxHeightOverPoint ? maxHeightOverPoint : overPoint}px !important` : ''"
          transition="slide-y-reverse-transition"
          class="ma-auto"
        />
      </v-flex>
      <v-card-title v-if="title || data.title" primary-title class="text-center justify-center">
        {{ title || data.title }}
      </v-card-title>
      <v-card-text v-if="text || data.text" class="text-center">
        {{ text || data.text }}
      </v-card-text>
    </v-layout>
  </v-card>
</template>

<style scoped lang="scss">
@import './styles';
</style>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '',
      required: false
    },
    sizeImage: {
      type: [Number, String],
      default: 25,
      required: false
    },
    title: {
      type: String,
      default: '',
      required: false
    },
    text: {
      type: String,
      default: '',
      required: false
    },
    color: {
      type: String,
      default: '',
      required: false
    },
    clipped: {
      type: Boolean,
      default: true,
      required: false
    },
    overPoint: {
      type: [Number, String],
      default: 28,
      required: false
    },
    dark: {
      type: Boolean,
      default: false,
      required: false
    },
    data: {
      type: Object,
      default: () => ({
      }),
      required: false
    },
    onClick: {
      type: Function,
      default: () => {},
      required: false
    },
    to: {
      type: String,
      default: null,
      required: false
    }
  },
  data: () => ({
    divider: 1.5,
    maxHeightImage: 250,
    maxHeightOverPoint: 100,
    heightImageContent: 0
  }),
  watch: {
    overPoint (newData) {
      this.syncHeightImageContent(newData)
    }
  },
  mounted () {
    this.syncHeightImageContent(this.overPoint)
  },
  methods: {
    syncHeightImageContent (overPoint) {
      if (this.src) {
        const clippedHeight = this.$refs.imageContent.clientHeight - overPoint
        this.heightImageContent = clippedHeight
      }
    }
  }
}
</script>
