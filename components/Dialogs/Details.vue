<template>
    <v-dialog v-model="details.state" width="60%">
<v-card>
  <div class="d-flex pa-2 px-4 grey lighten-2 align-center justify-space-between">
    <div class="text-capitalize">
    <h2 class="text-h4">{{details.data?.title}}</h2>
    <small class="blue--text text-h6">In Stage {{details.data?.stage}}</small>
    </div>
    <div>
      <v-btn @click="details.state = !details.state;" plain>
        <v-icon class="blue--text text-h2 black-text">mdi-close</v-icon>
      </v-btn>
    </div>
  </div>
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
      <h2 class="blue--text text-capitalize">
        <small class="black--text">Estimate Time:</small>
        {{details.data?.estimateTime_hh}}<small>h</small> 
        {{details.data?.estimateTime_mm}}<small>m</small>
      </h2>
    </div>
    <v-divider></v-divider>
    <div class="d-flex align-center justify-space-between my-3">
      <h2 class="yellow--text text-capitalize">
        <small class="black--text">Added Time:</small>
        {{details.data?.startTime}}
      </h2>
      <h2 class="red--text text-capitalize">
        <small class="black--text">Last Updated:</small>
        {{details.data?.updatedTime}}
      </h2>
      <h2 class="red--text text-capitalize">
        <small class="black--text">Work Time:</small>
        {{details.data?.totalWorkTime_hh ? details.data?.totalWorkTime_hh : 0}}h
        {{details.data?.totalWorkTime_mm ? details.data?.totalWorkTime_mm : 0}}m
      </h2>
    </div>
    <v-divider></v-divider>
    <div class="d-flex align-center justify-space-between my-3">
      <h2 class="blue--text text-capitalize">
        <small class="black--text">Project:</small>
        {{details.data?.project}}
      </h2>
      <h2 class="blue--text text-capitalize">
        <small class="black--text">Asign To:</small>
        {{details.data?.asignTo}}
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
</template>

<script>

export default {
    name: 'Details',
    props: ['details'],
    computed: {
        headers (){
            return this.$store.state.headers
        },
    }
}
</script>
