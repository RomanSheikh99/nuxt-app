<template>
  <v-col cols="3">
    <v-card color="#EBECF0" class="px-3 py-2" elevation="0">
      <v-card-title>
        <span class="text-capitalize">running</span>
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
      <draggable style="min-height: 68vh;" :list="todos" group="todo" @change="log">
        <v-list-item
          v-for="(item , i) in todos"
          :key="item.title"
          link
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
              <v-list-item link @click="openEditModal(i)">
                <v-list-item-title>Edit Task</v-list-item-title>
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
            <v-dialog v-model="editMode" width="50%">
              <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                  Edit Task
                </v-card-title>

                <v-card-text>
                    <v-text-field v-model="editedData.title"></v-text-field>
                    <v-textarea v-model="editedData.des"></v-textarea>
                </v-card-text>

                <v-card-actions>
                  <v-btn text @click="closeEditModal" >
                    Cancel
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="submitEditedTask(editedData.id)" >
                    Submit
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
      <v-dialog v-model="details.state" width="60%">
        <v-card>
          <v-card-title class="text-capitalize text-h5 grey lighten-2">
            {{details.data?.title}}
          </v-card-title>
          <v-card-text>
            <h4 class="text-center text-capitalize my-3">{{details.data.des ? details.data.des : "No Details Added"}}</h4>
            <div class="d-flex align-center justify-space-between my-2">
              <h2 class="yellow--text text-capitalize">
                <small class="black--text">Start Date:</small>
                {{details.data?.startDate}}
              </h2>
              <h2 class="red--text text-capitalize">
                <small class="black--text">Ded Line:</small>
                {{details.data?.dedLine}}
              </h2>
            </div>
            <div class="d-flex align-center justify-space-between my-3">
              <h2 class="yellow--text text-capitalize">
                <small class="black--text">Added Time:</small>
                {{details.data?.startTime}}
              </h2>
              <h2 class="red--text text-capitalize">
                <small class="black--text">Last Updated:</small>
                {{details.data?.updatedTime}}
              </h2>
            </div>
            <div class="d-flex align-center justify-space-between my-3">
              <h2 class="blue--text text-capitalize">
                <small class="black--text">Asign To:</small>
                {{details.data?.asignTo}}
              </h2>
              <h2 class="blue--text text-capitalize">
                <small class="black--text">Stage:</small>
                {{details.data?.stage}}
              </h2>
              <h2 class="blue--text text-capitalize">
                <small class="black--text">Importancy:</small>
                {{details.data?.importancy}}
              </h2>
            </div>
          </v-card-text>
          <v-data-table
    :headers="headers"
    :items="details.data.changes"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
        </v-card>
      </v-dialog>
    </v-card>
  </v-col>
</template>


<script>
    import draggable from "vuedraggable";

    export default {
        components: {
        draggable
        },
  data: () => ({
    details: {
          state: false,
          data: {},
        },
    editMode: false,
    dialog: false,
    editedData: {},
    data: {
      title: '',
      des: '',
      dedLine: '',
      asignTo: '',
      importancy: '',
    },
    todos:[],
  }),
  computed: {
        users (){
            const names = [];
            const users = this.$store.state.user.users;
            users.map(u => names.push(u.name))
            return names
        },
        user (){
            return this.$store.state.user.user
        },
        headers (){
            return this.$store.state.headers
        },
        importancy (){
            return this.$store.state.importancy
        },
    },
    mounted(){
        this.todos = [...this.$store.state.runningTodos.todos]
    },
    watch:{
      todos(nv){
        this.$store.commit('runningTodos/addTodos', [...nv])
      }
    },
    methods:{
        log(evt){
          this.$store.commit('runningTodos/log', {evt: evt, user: this.user, stage: 'running'})
        },
        openEditModal(i){
          this.editMode = true;
          this.editedData = this.todos[i];
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
          todo.stage = 'running';
          todo.changes = [];
          this.todos.push(todo)
          this.dialog = !this.dialog;
          this.data= {}
        },
        deleteTask(i){
          this.todos.splice(i,1);
        },
        submitEditedTask(id){
          let targetData = this.todos.find(d => d.id == id);
          let d = new Date();
          targetData.updatedTime = d.toLocaleTimeString();
          let index = this.todos.indexOf(targetData)
          this.todos[index] = this.editedData;
          this.editMode = false;
        },
        showDetails(id){
          this.details.data = this.todos.find(d => d.id === id);
          this.details.state = !this.details.state;
        }
    },
    }
  </script>
