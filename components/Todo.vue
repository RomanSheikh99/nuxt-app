<template>
  <div style="min-width: 250px; margin: 20px 10px;">
    <v-card color="#EBECF0" class="px-3 py-2" elevation="0">
      <v-card-title>
        <span class="text-capitalize">{{ stage }} {{ viewTodos.length }}</span>
        <v-spacer></v-spacer>
        <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on" @click="dialog = !dialog">
                  <v-icon>mdi-plus-thick</v-icon>
                </v-btn>
              </template>
              <span>Add New</span>
            </v-tooltip>
          </template>
        </v-menu>
      </v-card-title>
      <v-dialog v-model="dialog" width="50%">
        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Add New ToDo
          </v-card-title>
          <v-card-text>
            <v-text-field
              label="ToDo Title"
              v-model="data.title"
            ></v-text-field>
            <v-textarea
              label="Add Some DescribTion"
              v-model="data.des"
            ></v-textarea>
            <v-row>
              <v-col cols="4">
                <v-text-field
                  v-model="data.dedLine"
                  label="Add Dedline"
                  type="date"
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-autocomplete
                  v-model="data.asignTo"
                  :items="users"
                  label="Asign To"
                ></v-autocomplete>
              </v-col>
              <v-col cols="4">
                <v-autocomplete
                  v-model="data.importancy"
                  :items="importancy"
                  label="Importancy"
                ></v-autocomplete>
              </v-col>
              <v-col cols="5">
                <label>Estimate Time</label>
                <v-row class="align-center d-flex">
                  <v-col cols="5">
                    <v-text-field
                      v-model="data.estimateTime_hh"
                      label="HH"
                      type="number"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="2">
                    <h1>:</h1>
                  </v-col>
                  <v-col cols="5">
                    <v-text-field
                      v-model="data.estimateTime_mm"
                      label="MM"
                      type="number"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="7">
                <v-autocomplete
                  v-model="data.project"
                  :items="projects"
                  label="Project"
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-btn text @click="dialog = !dialog"> Cancel </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="addTodo"> Submit </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-spacer></v-spacer>
      <draggable
        style="min-height: 70vh;"
        :list="viewTodos"
        group="todo"
        @change="log"
      >
        <v-list-item
          v-for="(item, i) in viewTodos"
          :key="item.title"
          link
          elevation="8"
          class="white rounded mb-3"
        >
          <v-row>
            <v-col cols="12" class="d-flex align-center justify-space-around">
              <h4>{{ i + 1 }}.</h4>
              <v-list-item-content @click="showDetails(item.id)">
                <v-list-item-title class="text-capitalize">{{
                  " " + item.title
                }}</v-list-item-title>
              </v-list-item-content>
              <v-menu bottom left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <v-list class="">
                  <v-list-item link @click="openEditModal(item.id)">
                    <v-list-item-title>Edit Task</v-list-item-title>
                  </v-list-item>
                  <v-list-item link @click="addTime(item.id)">
                    <v-list-item-title>Add Time</v-list-item-title>
                  </v-list-item>
                  <v-list-item link @click="deleteTask(item.id)">
                    <v-list-item-title>Delete Task</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-col>
            <v-col
              cols="12"
              class="d-flex align-center justify-space-around mb-2"
            >
              <small>S: {{ item.startDate }}</small>
              <v-spacer></v-spacer>
              <small>D: {{ item.dedLine }}</small>
            </v-col>
          </v-row>
        </v-list-item>
      </draggable>
      <v-dialog v-model="addTimeModal" width="50%">
        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Add Work Time
          </v-card-title>
          <v-card-text>
            <v-row class="align-center d-flex">
              <v-col cols="5">
                <v-text-field
                  v-model="hour"
                  label="HH"
                  type="number"
                ></v-text-field>
              </v-col>
              <v-col cols="2">
                <h1>:</h1>
              </v-col>
              <v-col cols="5">
                <v-text-field
                  v-model="min"
                  label="MM"
                  type="number"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-btn text @click="addTimeModal = !addTimeModal"> Cancel </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="addWorkTime(addedTimeData)">
              Submit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <Edit
        :edit="{
          editMode: editMode,
          editedData: editedData,
          closeEditModal: closeEditModal,
          submitEditedTask: submitEditedTask,
        }"
      ></Edit>
      <Details :details="details"></Details>
    </v-card>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: { draggable },
  props: ["stage"],
  data: () => ({
    details: {
      state: false,
      data: {},
    },
    editMode: false,
    addTimeModal: false,
    dialog: false,
    editedData: {},
    addedTimeData: {},
    min: "",
    hour: "",
    data: {
      title: "",
      des: "",
      dedLine: "",
      asignTo: "",
      importancy: "",
      project: "",
      estimateTime_hh: "",
      estimateTime_mm: "",
    },
    todos: [],
    viewTodos: [],
  }),
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
    user() {
      return this.$store.state.user.user;
    },
    importancy() {
      return this.$store.state.importancy;
    },
    filterUser() {
      return this.$store.state.filterUser;
    },
    filterProject() {
      return this.$store.state.filterProject;
    },
  },
  mounted() {
    this.editedData = { ...this.$store.state.todo.editedData };
    this.addedTimeData = { ...this.$store.state.todo.addedTimeData };
    this.showTask();
  },
  watch: {
    filterUser(nv) {
      this.showTask();
    },
    filterProject(nv) {
      this.showTask();
    },
    todos(nv) {
      this.$store.commit("todo/addTodos", [...nv]);
    },
    editMode(nv) {
      this.editedData = { ...this.$store.state.todo.editedData };
      this.showTask();
    },
    addTimeModal(nv) {
      this.addedTimeData = { ...this.$store.state.todo.addedTimeData };
      this.showTask();
    },
  },
  methods: {
    showTask() {
      this.todos = [...this.$store.state.todo.todos];
      if (this.filterProject.length < 1 && this.filterUser.length < 1) {
        this.viewTodos = this.todos.filter((todo) => todo.stage === this.stage);
      } else if (this.filterProject.length < 1 && this.filterUser.length > 0) {
        const todos = this.todos;
        const filterTodos = [];
        for (let todo of todos) {
          for (let user of this.filterUser) {
            if (todo.asignTo == user) {
              filterTodos.push(todo);
            }
          }
        }
        this.viewTodos = filterTodos.filter(
          (todo) => todo.stage === this.stage
        );
      } else if (this.filterProject.length > 0 && this.filterUser.length < 1) {
        const todos = this.todos;
        const filterTodos = [];
        for (let todo of todos) {
          for (let project of this.filterProject) {
            if (todo.project == project) {
              filterTodos.push(todo);
            }
          }
        }
        this.viewTodos = filterTodos.filter(
          (todo) => todo.stage === this.stage
        );
      } else {
        const todos = this.todos;
        const filterByProject = [];
        for (let todo of todos) {
          for (let project of this.filterProject) {
            if (todo.project == project) {
              filterByProject.push(todo);
            }
          }
        }
        const filterTodos = [];
        for (let todo of filterByProject) {
          for (let user of this.filterUser) {
            if (todo.asignTo == user) {
              filterTodos.push(todo);
            }
          }
        }
        this.viewTodos = filterTodos.filter(
          (todo) => todo.stage === this.stage
        );
      }
    },
    log(evt) {
      this.$store.commit("todo/log", {
        evt: evt,
        user: this.user,
        stage: this.stage,
      });
    },
    openEditModal(id) {
      this.$store.commit("todo/setEditedData", id);
      this.editMode = true;
    },
    addTime(id) {
      this.$store.commit("todo/setAddedTimeData", id);
      this.addTimeModal = true;
    },
    closeEditModal() {
      this.editMode = false;
      this.editedData = {};
    },
    addTodo() {
      const todo = this.data;
      let d = new Date();
      todo.id = d.getTime();
      todo.startDate = d.toLocaleDateString();
      todo.startTime = d.toLocaleTimeString();
      todo.updatedTime = d.toLocaleTimeString();
      todo.stage = this.stage;
      todo.changes = [];
      this.$store.commit("todo/addNewTodo", todo);
      this.showTask();
      this.dialog = !this.dialog;
      this.data = {};
    },
    deleteTask(id) {
      this.$store.commit("todo/deleteTodo", id);
      this.showTask();
    },
    submitEditedTask(id) {
      this.$store.commit("todo/editTodo", { id: id, data: this.editedData });
      this.editMode = false;
    },
    addWorkTime(data) {
      data.workTime_hh = parseInt(this.hour);
      data.workTime_mm = parseInt(this.min);
      this.$store.commit(`todo/addWorkTime`, data);
      this.addTimeModal = false;
      this.hour = "";
      this.min = "";
    },
    showDetails(id) {
      this.details.data = this.todos.find((d) => d.id === id);
      this.details.state = !this.details.state;
    },
  },
};
</script>
