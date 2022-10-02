<template>
  <v-app id="inspire">
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <div class="text-center py-10">
                <h1 class="red--text text-h1 display-4 font-weight-black">{{error.statusCode}}</h1>
                <v-divider></v-divider>
                <v-divider></v-divider>
                <br>
                <h3>{{error.message}}</h3>
                <br>
                <br>
                <h3>
                  আরে বেটা 
                    <NuxtLink to="/">
                        ঘরে
                    </NuxtLink>
                    যা 🤣
                </h3>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'error',
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
  }
}
</script>
