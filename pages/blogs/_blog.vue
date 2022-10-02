<template>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6" class="text-center purple--text">
        <h1>Blog No. {{title}}</h1>
        <span>Author: {{blog.author}}</span>
        <h2><v-icon>fas fa-search</v-icon> {{blog.post}}</h2>
      </v-col>
    </v-row>
  </template>
  
  <script>
  export default {
    layout: 'user',
    fetch(){
       this.blog = this.blogs.find(b => b.id == this.$route.params.blog)
    },
    computed: {
        title(){
            return this.$route.params.blog
        }
    },
    data(){
        return {
            blogs: [
    {
      id: 1,
      post: "Life isn’t about getting and having, it’s about giving and being.",
      author: "Kevin Kruse"
    },
    {
      id: 2,
      post: "Whatever the mind of man can conceive and believe, it can achieve.",
      author: "Napoleon Hill"
    },
    {
      id: 3,
      post: "Strive not to be a success, but rather to be of value.",
      author: "Albert Einstein"
    },
    {
      id: 4,
      post: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
      author: "Robert Frost"
    },
    {
      id: 5,
      post: "I attribute my success to this: I never gave or took any excuse.",
      author: "Florence Nightingale"
    },
    {
      id: 6,
      post: "You miss 100% of the shots you don’t take.",
      author: "Wayne Gretzky"
    },
    {
      id: 7,
      post: "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
      author: "Michael Jordan"
    },
    {
      id: 8,
      post: "The most difficult thing is the decision to act, the rest is merely tenacity.",
      author: "Amelia Earhart"
    },
    {
      id: 9,
      post: "Every strike brings me closer to the next home run.",
      author: "Babe Ruth"
    },
    {
      id: 10,
      post: "Definiteness of purpose is the starting point of all achievement.",
      author: "W. Clement Stone"
    },
    {
      id: 11,
      post: "We must balance conspicuous consumption with conscious capitalism.",
      author: "Kevin Kruse"
    },
    {
      id: 12,
      post: "Life is what happens to you while you’re busy making other plans.",
      author: "John Lennon"
    },
    {
      id: 13,
      post: "We become what we think about.",
      author: "Earl Nightingale"
    },
    {
      id: 14,
      post: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.",
      author: "Mark Twain"
    },
    {
      id: 15,
      post: "Life is 10% what happens to me and 90% of how I react to it.",
      author: "Charles Swindoll"
    },
    {
      id: 16,
      post: "The most common way people give up their power is by thinking they don’t have any.",
      author: "Alice Walker"
    },
    {
      id: 17,
      post: "The mind is everything. What you think you become.",
      author: "Buddha"
    },
    {
      id: 18,
      post: "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb"
    },
    {
      id: 19,
      post: "An unexamined life is not worth living.",
      author: "Socrates"
    },
    {
      id: 20,
      post: "Eighty percent of success is showing up.",
      author: "Woody Allen"
    },
    {
      id: 21,
      post: "Your time is limited, so don’t waste it living someone else’s life.",
      author: "Steve Jobs"
    },
    {
      id: 22,
      post: "Winning isn’t everything, but wanting to win is.",
      author: "Vince Lombardi"
    },
    {
      id: 23,
      post: "I am not a product of my circumstances. I am a product of my decisions.",
      author: "Stephen Covey"
    },
    {
      id: 24,
      post: "Every child is an artist.  The problem is how to remain an artist once he grows up.",
      author: "Pablo Picasso"
    },
    {
      id: 25,
      post: "You can never cross the ocean until you have the courage to lose sight of the shore.",
      author: "Christopher Columbus"
    },
    {
      id: 26,
      post: "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
      author: "Maya Angelou"
    },
    {
      id: 27,
      post: "Either you run the day, or the day runs you.",
      author: "Jim Rohn"
    },
    {
      id: 28,
      post: "Whether you think you can or you think you can’t, you’re right.",
      author: "Henry Ford"
    },
    {
      id: 29,
      post: "The two most important days in your life are the day you are born and the day you find out why.",
      author: "Mark Twain"
    },
    {
      id: 30,
      post: "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.",
      author: "Johann Wolfgang von Goethe"
    }
  ],
  blog: {}
        }
    }
  }
  </script>