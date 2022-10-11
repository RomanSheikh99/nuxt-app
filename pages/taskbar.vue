<template>
        <v-row class="ma-0">
            <Todo></Todo>
            <Running></Running>
            <Testing></Testing>
            <Complited></Complited>
        </v-row>
</template>
 
 
<script>
import Todo from '@/components/Todo.vue';
import Running from '@/components/Running.vue';
import Testing from '@/components/Testing.vue';
import Complited from '@/components/Complited.vue';

export default {
    name: 'taskbar',
    layout: 'task',
    components:{
    Todo,
    Running,
    Testing,
    Complited,
},
}
</script>