<template>
    <div class="task-board grey lighten-3">
        <v-row class="mx-4">
            <Todo></Todo>
            <Running></Running>
            <Testing></Testing>
            <Complited></Complited>
        </v-row>
    </div>
</template>
 
 
<script>

export default {
    name: 'task',
    layout: 'user',
}
</script>
 
 
<style scoped>
  .task-board {
    /* background: #f2f5f8; */
    padding: 20px 10px;
    padding-bottom: 40px;
    height: 100%;
    width: 100%;
    border-radius: 6px;
  }
</style>