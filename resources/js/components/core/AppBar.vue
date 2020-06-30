<template>
  <v-app-bar
    id="app-bar"
    absolute
    app
    color="yellow"
    flat
    height="75"
  >
    <v-btn
      class="mr-3"
      elevation="1"
      fab
      small
    >
      <v-icon v-if="value">
        mdi-view-list
      </v-icon>

      <v-icon v-else>
        mdi-view-list
      </v-icon>
    </v-btn>

    <v-toolbar-title
      class="hidden-sm-and-down font-weight-light"
      v-text="$route.name"
    />

    <v-spacer />

      <template
        v-if="$vuetify.breakpoint.mdAndUp"
        v-slot:append-outer
      >
      </template>


    <div class="mx-3" />

    <v-btn
      class="ml-2"
      min-width="0"
      text
      to="/"
    >
      <v-icon>mdi-home</v-icon>
    </v-btn>

    

   <button @click="logout" type="button" class="ml-2 v-btn v-btn--flat v-btn--text theme--light v-size--default" style="min-width: 0px;"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate mdi mdi-logout theme--light"></i></span></button>

  </v-app-bar>
</template>

<script>
  // Components
  import { VHover, VListItem } from 'vuetify/lib'

  // Utilities

  export default {
    name: 'DashboardCoreAppBar',

    components: {
      AppBarItem: {
        render (h) {
          return h(VHover, {
            scopedSlots: {
              default: ({ hover }) => {
                return h(VListItem, {
                  attrs: this.$attrs,
                  class: {
                    'black--text': !hover,
                    'white--text secondary elevation-12': hover,
                  },
                  props: {
                    activeClass: '',
                    dark: hover,
                    link: true,
                    ...this.$attrs,
                  },
                }, this.$slots.default)
              },
            },
          })
        },
      },
    },

    props: {
      value: {
        type: Boolean,
        default: false,
      },
    },

    methods : {
      async logout() {
            await this.$store.dispatch('logout');
            this.$router.push('/login');
        }
    }

  }
</script>
