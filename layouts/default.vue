<template>
  <v-app class="rounded" dark>
    <v-app-bar
      v-model="appBar"
      fixed
      app
      clipped-left
      :color="this.$vuetify.theme.dark ? 'dark' : 'white'"
    >
      <v-container grid-list-xs fluid class="pa-0">
        <v-layout row wrap align-center>
          <v-btn class="mr-2" icon @click="drawer = !drawer">
            <v-icon>{{ drawer ? 'mdi-backburger' : 'mdi-forwardburger' }}</v-icon>
          </v-btn>
        </v-layout>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      fixed
      app
      clipped
      width="225"
    >
      <v-list>
        <v-container grid-list-xs fluid>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>/ {{ title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider />
        </v-container>
      </v-list>
      <v-list dense shaped>
        <v-list-item-group v-model="itemSelected">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <template v-slot:append>
        <v-list dense shaped>
          <v-list-item @click="appBar = !appBar">
            <v-list-item-action>
              <v-icon>
                mdi-border-top-variant
              </v-icon>
            </v-list-item-action>
            <v-list-item-title>Appbar</v-list-item-title>
          </v-list-item>
          <v-list-item @click="toggleTheme">
            <v-list-item-action>
              <v-icon>mdi-brightness-6</v-icon>
            </v-list-item-action>
            <v-list-item-title>Toggle Theme</v-list-item-title>
          </v-list-item>
          <v-list-item @click="miniVariant = !miniVariant">
            <v-list-item-action>
              <v-icon>
                {{ miniVariant ? 'mdi-menu-right' : 'mdi-menu-left' }}
              </v-icon>
            </v-list-item-action>
            <v-list-item-title>Mini Variant</v-list-item-title>
          </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>
    <v-main>
      <v-container class="mz-container--shaped my-4 my-md-8">
        <nuxt />
      </v-container>
    </v-main>
    <v-overlay :value="loading" opacity="1" color="primary" :z-index="9999">
      <v-progress-circular indeterminate size="64" />
    </v-overlay>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      loading: true,
      appBar: false,
      clipped: false,
      drawer: true,
      itemSelected: 0,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        }
      ],
      miniVariant: false,
      title: 'Mizue'
    }
  },
  computed: {
    isMobile () {
      return this.$vuetify.breakpoint.mobile
    }
  },
  watch: {
    isMobile () {
      this.init()
    }
  },
  created () {
    this.init()
  },
  mounted () {
    this.loading = false
  },
  methods: {
    init () {
      if (this.isMobile) {
        this.appBar = true
        this.drawer = false
      } else {
        this.appBar = false
        this.drawer = true
      }
    },
    toggleTheme () {
      if (typeof Storage !== 'undefined') { // eslint-disable-line
        localStorage.setItem('mizuedarkmode', !this.$vuetify.theme.dark)
      }
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>
