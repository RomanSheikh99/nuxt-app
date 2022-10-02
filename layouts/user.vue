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
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item
                  v-for="n in 5"
                  :key="n"
                  link
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      List Item {{ n }}
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
                      <NuxtLink to="/login">
                        Login/Register
                      </NuxtLink>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <div class="text-center py-10">
                <h1>This Is User Layout</h1>
              </div>
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
      ],
    }
  }
}
</script>
