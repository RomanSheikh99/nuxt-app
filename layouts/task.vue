<template>
  <v-app id="inspire">
    <v-navigation-drawer
      color="#556b72"
      class="drawer-bg"
      v-model="drawer"
      dark
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Application </v-list-item-title>
          <v-list-item-subtitle> subtext </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              <n-link style="text-decoration: none; color: white;" :to="item.to">
                {{ item.title }}
              </n-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark color="#6A7B80">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <div style="background-color: #8da1a2; min-height: 100%; width: 100%;">
        <Nuxt />
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: "Projects", icon: "mdi-view-dashboard", to: "/projects" },
      { title: "Task Board", icon: "mdi-image", to: "/taskbar" },
      { title: "Users", icon: "mdi-help-box", to: "/users" },
    ],
  }),
};
</script>
