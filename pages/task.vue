<template>
  <div style="overflow-x: auto;" class="ma-0 d-flex align-center">
    <Todo v-for="stage in stages" :key="stage.id" :stage="stage.name"></Todo>
  </div>
</template>

<script>
export default {
  name: "task",
  layout: "user",
  data() {
    return {
      stages: [
        { id: 1, name: "todo" },
        { id: 2, name: "running" },
        { id: 4, name: "testing" },
        { id: 5, name: "complited" },
        { id: 34, name: "plited" },
      ],
    };
  },
};
</script>
