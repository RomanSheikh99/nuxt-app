<template>
    <v-app>
        <v-row class="ma-5">
            <v-col cols="5">
                <v-card elevation="2">
                    <v-card-title class="mt-4">Create Project</v-card-title>
                    <v-card-text>
                        <v-text-field label="Project Name" v-model="data.title"></v-text-field>
                        <v-textarea label="Add Some DescribTion" v-model="data.des"></v-textarea>
                        <v-text-field v-model="data.dedLine" label="Add Dedline" type="date"></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text @click="data = {}" >
                            Clear
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" text @click="addProject" >
                            Submit
                        </v-btn>
                </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="7">
                <v-card elevation="2">
                    <v-card-title class="mt-4">ALL Projects</v-card-title>
                    <v-card-text>
                        {{projects}}
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-app>
</template>


<script>
export default {
    layout: 'task',
    data(){
        return {
            data: {
                title: '',
                des: '',
                dedLine: '',
            },
        }
    },
    computed: {
        projects(){
            return this.$store.state.projects.projects;
        }
    },
    methods: {
        addProject(){
            this.$store.commit('projects/addProject', this.data)
            this.data = {};
        }
    }
}
</script>