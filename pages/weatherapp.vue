<template>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6" class="text-center purple--text">


        <v-autocomplete
  filled
  rounded
  solo
  v-model="c"
  :items="cities"
></v-autocomplete>

            <img :src="imgUrl" alt="">
            <h1 id="city-name">{{city.name}}<sup class="black--text">{{city.sys.country}}</sup></h1>
            <h3><span id="city-temp">{{city.main.temp}}</span>&deg;C</h3>
            <h1 id="city-weather" class="lead">{{city.weather[0].main}}</h1>
      </v-col>
    </v-row>
  </template>
  
  <script>

  export default {
    layout: 'user',
    asyncData({$axios}){
        return $axios.$get('https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=efd8db67abb1188c9d4bd00b43f9de6b&units=metric').then(res => {
            console.log(res)
            return {
                city: res,
            }
        })
    },
    computed: {
        imgUrl(){  
            let img = `https://openweathermap.org/img/wn/${this.city.weather[0].icon}@2x.png`
            
            return img;
        }
    },
    data(){
        return {
         c: '',
         cities: [
        "Barisal",
        "Chittagong",
        "Comilla",
        "Dhaka",
        "Jessore",
        "Gazipur",
        "Mymensingh",
        "Narayanganj",
        "Rajshahi",
        "Tejgaon",
        "Uttara"
      ]
        }
    },
    watch:{
        c(nv){
            this.getWeather(nv)
        }
    },
    methods:{
        async getWeather(nv){
            await this.$axios.$get(`https://api.openweathermap.org/data/2.5/weather?q=${nv}&appid=efd8db67abb1188c9d4bd00b43f9de6b&units=metric`).then(res => {
                this.city = res;
            })

        }
    }

  }
  </script>