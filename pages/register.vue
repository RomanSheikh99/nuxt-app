<template>
    <v-container>
        <v-row>
            <v-col class="text-center mt-2">
                <h1>Create An Account</h1>
                <v-divider></v-divider>
                <v-card elevation="4" class="ma-10 pa-10">
    <form @submit.prevent="singUp">
       <v-row>
        <v-col cols="6">
            <v-text-field
            class="mx-3"
                v-model="newUser.name"
                label="Name"
                required
            ></v-text-field>
        </v-col>
        <v-col cols="6">
            <v-text-field
            class="mx-3"
          v-model="newUser.sel"
          label="Phone Number"
          required
        ></v-text-field>
        </v-col>
        <v-col cols="6">
            <v-text-field
            class="mx-3"
          v-model="newUser.email"
          label="E-mail"
          required
        ></v-text-field>
        </v-col>
        <v-col cols="6">
            <v-file-input
                accept="image/*"
                label="Your Photo"
                class="mx-3"
                v-model="newUser.photo"
            ></v-file-input>
        </v-col>
        <v-col cols="6">
            <v-text-field
            class="mx-3"
          v-model="newUser.pass"
          type="password"
          label="Password"
          required
        ></v-text-field>
        </v-col>
        <v-col cols="6">
            <v-text-field
            type="password"
            class="mx-3"
          v-model="password"
          label="Confirm Password"
          required
        ></v-text-field>
        </v-col>
       </v-row>
      <v-btn
        class="mr-4"
        type="submit"
      >
        submit
      </v-btn>
    </form>
                </v-card>
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
  layout: 'auth',
  data(){
    return {
        password: '',
        newUser: {
            name: '',
            email: '',
            pass: '',
            sel: '',
            photo: null
        }
    }
  },
  watch: {},
  computed: {
        users (){
            return this.$store.state.user.users
        }
    },
  methods: {
        singUp(){
            let checkEmail = this.users.find(u => u.email == this.newUser.email)
            if(!checkEmail){
                if(this.newUser.pass === this.password){
                this.$store.commit('user/singUp', this.newUser)
                this.$router.push("/profile");
            }
            else{
                alert('Password Incurrect')
            }
            }
            else{
                alert('this email is already taken')
            }
        },
    }
}
</script>