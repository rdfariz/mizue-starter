<template>
  <v-container>
    <v-layout justify-center class="my-8">
      <v-flex xs12 md10>
        <v-card flat>
          <v-alert class="mz-container--shaped" type="error">
            <template v-if="error.statusCode === 404">
              {{ pageNotFound }} 🤔
            </template>
            <template v-else>
              {{ otherError }} 🤔
            </template>
          </v-alert>
          <v-card-text>
            <p>Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.</p>
            <div class="text-xs-right">
              <small>
                <NuxtLink to="/">
                  Home page
                </NuxtLink>
              </small>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
