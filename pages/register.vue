<template>
    <v-container>
        <v-row>
            <v-col class="text-center mt-12">
                <h1>Register Now</h1>
                <v-divider></v-divider>
                <br>
                <h3>Allready Registared?
                    <NuxtLink to="/login">
                        Login Now
                    </NuxtLink>
                </h3>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
  name: 'register',
  layout: 'auth'
}
</script>