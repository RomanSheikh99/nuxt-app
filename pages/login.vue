<template>
    <v-container v-if="!user">
        <v-row>
            <v-col class="text-center mt-12">
                <h1>Login Hare</h1>
                <v-divider></v-divider>
                <br>
                <v-card elevation="4" class="ma-10 pa-10">
    <form @submit.prevent="userLogin">
       <v-row class="d-flex justify-center">
            <v-col cols="8">
              <v-text-field
            class="mx-3"
                v-model="login.email"
                label="E-Mail"
                required
            ></v-text-field>
            <v-text-field
            class="mx-3"
          v-model="login.pass"
          label="Password"
          type="password"
          required
        ></v-text-field>
      <v-btn
        class="mr-4"
        type="submit"
      >
        submit
      </v-btn>
            </v-col>
    </v-row>
    </form>
                </v-card>
                <br>
                <v-divider></v-divider>
                <h3>Don't Have An Account?
                    <NuxtLink to="/register">
                        Register First
                    </NuxtLink>
                </h3>
            </v-col>
        </v-row>
    </v-container>
    <v-container v-else>
      <h2 @click="back">Your Are IN, Please Go Back</h2>
    </v-container>
</template>

<script>
export default {
  name: 'login',
  layout: 'auth',
  data() {
    return {
      login: {
        email: '',
        pass: ''
      }
    }
  },
  computed: {
        users (){
            return this.$store.state.user.users
        },
        user (){
            return this.$store.state.user.user
        }
    },
  methods: {
    userLogin() {
      const checkUser = this.users.find(u => u.email == this.login.email);
      if(checkUser){
        if(checkUser.pass == this.login.pass){
          this.$store.commit('user/login', checkUser)
          this.$router.push('/');
        }
        else{
          alert('Password Incorred')
        }
      }
      else{
        alert("User Not Find")
      }
      
    },
    back(){
      this.$router.push('/');
    }
  }
}
</script>