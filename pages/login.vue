<template>
    <v-container>
        <v-row>
            <v-col class="text-center mt-12">
                <h1>Login Hare</h1>
                <v-divider></v-divider>
                <br>
                <h3>Don't Have An Account?
                    <NuxtLink to="/register">
                        Register Now
                    </NuxtLink>
                </h3>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
  name: 'login',
  layout: 'auth'
}
</script>