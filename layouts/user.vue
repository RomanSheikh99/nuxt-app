<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="dark"
      flat
    >
      <v-container class="py-0 fill-height">
        <v-avatar
          class="mr-10"
          color="grey darken-1"
          size="32"
        ></v-avatar>


        <v-btn
          v-for="link in links"
          :key="link.link"
          text
        >
        <NuxtLink :to="link.to">
          {{ link.link }}
        </NuxtLink>
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container fluid>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item
                  link
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      <NLink to="/weatherapp">
                        Weather App
                      </NLink>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item
                  link
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      <NLink to="/task">
                        Task Board
                      </NLink>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item
                  link
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      <NLink to="/counter">
                        counter
                      </NLink>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item
                  link
                  color="grey lighten-4"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      <NuxtLink v-if="!user" to="/login">
                        Login/Register
                      </NuxtLink>
                      <h3 v-else @click="logout">
                        Logout
                      </h3>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet
              class="grey lighten-3"
              min-height="80vh"
              rounded="lg"
            >
              <Nuxt />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
      links: [
        {link: 'Home', to: '/'},
        {link: 'Messages', to: '/messages'},
        {link: 'Profile', to: '/profile'},
        {link: 'About', to: '/about'},
        {link: 'Blogs', to: '/blogs'},
        {link: 'Task Board', to: '/taskbar'},
      ],
    }
  },
  computed: {
        user (){
            return this.$store.state.user.user
        }
    },
    methods: {
      logout(){
        this.$store.commit('user/logout')
      }
    }
}
</script>
