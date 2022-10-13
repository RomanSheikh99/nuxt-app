<template>
  <div>
    <div class="d-flex px-4 pt-4 justify-space-around align-center">
      <v-autocomplete
        dark
        deletable-chips
        multiple
        small-chips
        clearable
        class="mx-4"
        v-model="filterUser"
        :items="users"
        label="Filter By User"
      ></v-autocomplete>
      <v-autocomplete
        dark
        deletable-chips
        multiple
        small-chips
        clearable
        class="mx-4"
        v-model="filterProject"
        :items="projects"
        label="Filter By Project"
      ></v-autocomplete>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>

      <v-btn v-if="!V_Stage" tile color="#EBECF0" @click="V_Stage = !V_Stage">
        <v-icon left> mdi-plus </v-icon>
        Create Stage
      </v-btn>

      <div v-if="V_Stage" class="d-flex align-center justify-start">
        <v-text-field label="Stage Name" v-model="stage_name"></v-text-field>
        <v-btn @click="addStage" color="green" dark>
          <v-icon> mdi-plus </v-icon>
        </v-btn>
      </div>
    </div>
    <div style="overflow-x: auto;" class="ma-0 d-flex align-center">
      <Todo v-for="stage in stages" :key="stage.id" :stage="stage.name"></Todo>
    </div>
  </div>
</template>

<script>
export default {
  name: "taskbar",
  layout: "task",
  data() {
    return {
      V_Stage: false,
      stage_name: "",
      filterUser: [],
      filterProject: [],
      stages: [],
    };
  },
  watch: {
    filterUser(nv) {
      this.$store.commit("setFilterUser", nv);
    },
    filterProject(nv) {
      this.$store.commit("setFilterProject", nv);
    },
    V_Stage(nv) {
      this.stages = [...this.$store.state.stage.stages];
    },
  },
  mounted() {
    this.stages = [...this.$store.state.stage.stages];
  },
  computed: {
    users() {
      const names = [];
      const users = this.$store.state.user.users;
      users.map((u) => names.push(u.name));
      return names;
    },
    projects() {
      const names = [];
      const projects = this.$store.state.projects.projects;
      projects.map((p) => names.push(p.title));
      return names;
    },
  },
  methods: {
    addStage() {
      this.$store.commit("stage/addStage", this.stage_name);
      this.V_Stage = !this.V_Stage;
    },
  },
};
</script>
