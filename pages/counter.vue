<template>
    <div>
        <!-- <div>
            <h1>{{users}}</h1>
            <v-btn @click="singUp">sing up</v-btn>
        </div> -->
        <div>
            <h1>Counter Apps</h1>
            <h1 class="text-center display-1 black-text">
                {{counter}}
            </h1>
            <div class="d-flex justify-center mt-10">
                <v-btn class="mx-3" @click="increment">increment</v-btn>
                <v-btn class="mx-3" @click="decrement">decrement</v-btn>
            </div>
        </div>
    </div>
</template>


<script>
import { mapMutations } from 'vuex'

export default {
    name: 'counter',
    layout: 'user',
    computed: {
        counter () {
            return this.$store.getters.getCounter
        },
        // users (){
        //     return this.$store.state.user.users
        // }
    },
    methods: {
        // singUp(){
        //     this.$store.commit('user/singUp', {name: 'roman', email: 'example.com'})
        // },
        ...mapMutations(['increment',"decrement" ]),
    }
}
</script>