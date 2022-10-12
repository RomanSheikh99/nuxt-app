<template>
  <v-col cols="3">
    <v-card color="#EBECF0" class="px-3 py-2" elevation="0">
      <v-card-title>
        <span class="text-capitalize">testing</span>
        <v-spacer></v-spacer>
        <v-menu bottom left>
              <template v-slot:activator="{ on, attrs }">
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      icon
                      v-bind="attrs"
                      v-on="on"
                      @click="dialog = !dialog"
                    >
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
                    <v-text-field label="ToDo Title" v-model="data.title"></v-text-field>
                    <v-textarea label="Add Some DescribTion" v-model="data.des"></v-textarea>
                    <v-row>
                      <v-col cols="4">
                        <v-text-field v-model="data.dedLine" label="Add Dedline" type="date"></v-text-field>
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
                              <v-text-field v-model="data.estimateTime_hh" label="HH"></v-text-field>
                            </v-col>
                            <v-col cols="2">
                              <h1> : </h1>
                            </v-col>
                            <v-col cols="5">
                              <v-text-field v-model="data.estimateTime_mm" label="MM"></v-text-field>
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
                  <v-btn text @click="dialog = !dialog" >
                    Cancel
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="addTodo" >
                    Submit
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

        <v-spacer></v-spacer>
      <draggable style="min-height: 68vh;" :list="viewTodos" group="todo" @change="log">
        <v-list-item
          v-for="(item , i) in viewTodos"
          :key="item.title"
          link
          elevation="8"
          class="white rounded mb-3"
        >
        <v-row>
          <v-col cols="12" class="d-flex align-center justify-space-around">
          <h4>{{i + 1}}.</h4>
          <v-list-item-content @click="showDetails(item.id)">
            <v-list-item-title class="text-capitalize">{{' ' + item.title }}</v-list-item-title>
          </v-list-item-content>
          <v-menu
            bottom
            left
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list class="">
              <v-list-item link @click="openEditModal(item.id)">
                <v-list-item-title>Edit Task</v-list-item-title>
              </v-list-item>
              <v-list-item link @click="addTime(i)">
                <v-list-item-title>Add Time</v-list-item-title>
              </v-list-item>
              <v-list-item link @click="deleteTask(i)">
                <v-list-item-title>Delete Task</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
      </v-col>
          <v-col cols="12" class="d-flex align-center justify-space-around mb-2">
              <small>S: {{item.startDate}}</small>
          <v-spacer></v-spacer>
          <small>D: {{item.dedLine}}</small>
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
                              <v-text-field v-model="hour" label="HH"></v-text-field>
                            </v-col>
                            <v-col cols="2">
                              <h1> : </h1>
                            </v-col>
                            <v-col cols="5">
                              <v-text-field v-model="min" label="MM"></v-text-field>
                            </v-col>
                          </v-row>
                </v-card-text>
                <v-card-actions>
                  <v-btn text @click="addTimeModal = !addTimeModal" >
                    Cancel
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="addWorkTime(addedTimeData)" >
                    Submit
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <Edit :edit="{editMode: editMode, editedData: editedData, closeEditModal: closeEditModal, submitEditedTask: submitEditedTask}"></Edit>
            <Details :details="details"></Details>
    </v-card>
  </v-col>
</template>


<script>
    import draggable from "vuedraggable";

    export default {
      components: {draggable,},
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
    min: '',
    hour: '',
    data: {
      title: '',
      des: '',
      dedLine: '',
      asignTo: '',
      importancy: '',
      project: '',
      estimateTime_hh: '',
      estimateTime_mm: '',
    },
    todos:[],
    viewTodos:[],
  }),
  computed: {
        users (){
            const names = [];
            const users = this.$store.state.user.users;
            users.map(u => names.push(u.name))
            return names
        },
        projects (){
            const names = [];
            const projects = this.$store.state.projects.projects;
            projects.map(p => names.push(p.title))
            return names
        },
        user (){
            return this.$store.state.user.user
        },
        importancy (){
            return this.$store.state.importancy
        },
        filterUser (){
            return this.$store.state.filterUser
        },
        filterProject (){
            return this.$store.state.filterProject
        },
    },
    mounted(){
          this.editedData = {...this.$store.state.testingTodos.editedData}
          this.todos = [...this.$store.state.testingTodos.todos]
          this.showTask()
    },
    watch:{
      filterUser(nv){
        this.showTask();
      },
      filterProject(nv){
        this.showTask();
      },
      todos(nv){
        this.$store.commit('testingTodos/addTodos', [...nv])
      },
      editMode(nv){
        this.editedData = {...this.$store.state.testingTodos.editedData}
        this.todos = [...this.$store.state.testingTodos.todos]
        this.showTask()
      }
    },
    methods:{
      showTask(){
        if(!this.filterProject && !this.filterUser){
          this.viewTodos = this.todos
        }
        else if(!this.filterProject && this.filterUser){
          const todos = this.todos
          const filterTodos = todos.filter(todo => todo.asignTo === this.filterUser)
          this.viewTodos = filterTodos;
        }
        else if(this.filterProject && !this.filterUser){
          const todos = this.todos
          const filterTodos = todos.filter(todo => todo.project === this.filterProject)
          this.viewTodos = filterTodos;
        }
        else{
          const todos = this.todos
          const filterByProject = todos.filter(todo => todo.project === this.filterProject)
          const filterTodos = filterByProject.filter(todo => todo.asignTo === this.filterUser)
          this.viewTodos = filterTodos;
        }
      },
        log(evt){
          this.$store.commit('testingTodos/log', {evt: evt, user: this.user, stage: 'testing'})
        },
        openEditModal(id){
          this.$store.commit('testingTodos/setEditedData', id)
          this.editMode = true;
        },
        addTime(i){
          this.addTimeModal = true;
          this.addedTimeData = this.todos[i];
        },
        closeEditModal(){
          this.editMode = false;
          this.editedData = {};
        },
        addTodo(){
          const todo = this.data
          let d = new Date();
          todo.id = d.getTime();
          todo.startDate = d.toLocaleDateString();
          todo.startTime = d.toLocaleTimeString();
          todo.updatedTime = d.toLocaleTimeString();
          todo.stage = 'testing';
          todo.changes = [];
          this.todos.push(todo)
          this.dialog = !this.dialog;
          this.data= {}
        },
        deleteTask(i){
          this.todos.splice(i,1);
        },
        submitEditedTask(id){
          this.$store.commit('testingTodos/editTodo', {id: id, data: this.editedData})
          this.editMode = false;
        },
        addWorkTime(data){
          data.workTime_hh = this.hour;
          data.workTime_mm = this.min;
          let index = this.todos.indexOf(data)
          this.todos[index] = data;
          this.addTimeModal = false;
        },
        showDetails(id){
          this.details.data = this.todos.find(d => d.id === id);
          this.details.state = !this.details.state;
        }
    },
    }
  </script>
