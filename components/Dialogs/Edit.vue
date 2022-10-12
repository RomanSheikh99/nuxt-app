<template>
    
    <v-dialog v-model="edit.editMode" width="50%">
              <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                  Edit Task
                </v-card-title>

                <v-card-text>
                    <v-text-field label="Change Title" v-model="edit.editedData.title"></v-text-field>
                    <v-textarea label="Change DescribTion" v-model="edit.editedData.des"></v-textarea>
                    <v-row>
                      <v-col cols="6">
                        <v-text-field v-model="edit.editedData.dedLine" label="Change Dedline" type="date"></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-autocomplete
                          v-model="edit.editedData.asignTo"
                          :items="users"
                          label="Change User"
                      ></v-autocomplete>
                      </v-col>
                      <v-col cols="5">
                        <v-autocomplete
                          v-model="edit.editedData.importancy"
                          :items="importancy"
                          label="Change Importancy"
                      ></v-autocomplete>
                      </v-col>
                      <v-col cols="7">
                          <label>Change Estimate Time</label>
                          <v-row class="align-center d-flex">
                            <v-col cols="5">
                              <v-text-field v-model="edit.editedData.estimateTime_hh" label="HH"></v-text-field>
                            </v-col>
                            <v-col cols="2">
                              <h1> : </h1>
                            </v-col>
                            <v-col cols="5">
                              <v-text-field v-model="edit.editedData.estimateTime_mm" label="MM"></v-text-field>
                            </v-col>
                          </v-row>
                      </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                  <v-btn text @click="edit.closeEditModal" >
                    Cancel
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="edit.submitEditedTask(edit.editedData.id)" >
                    Submit
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
</template>


<script>

export default {
    props: ['edit'],
    computed: {
        users (){
            const names = [];
            const users = this.$store.state.user.users;
            users.map(u => names.push(u.name))
            return names
        },
        importancy (){
            return this.$store.state.importancy
        },
    },
}
</script>
