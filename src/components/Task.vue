<template>
  <v-list-item two-line @click.prevent="toggle(index)">
    <v-list-item-action>
          <v-btn icon>
            <v-icon color="pink">mdi-pencil</v-icon>
          </v-btn>
        </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title>
        {{ task.title }}
      </v-list-item-title>
      <v-list-item-subtitle>
        {{ task.sub_title }}
      </v-list-item-subtitle>
    </v-list-item-content>

    <v-list-item-action>
      <v-btn icon>
        <v-icon color="green" v-if="task.isComplete">mdi-checkbox-marked-circle</v-icon>
        <v-icon color="gray" v-else>mdi-checkbox-marked-circle</v-icon>
      </v-btn>
    </v-list-item-action>

  </v-list-item>
</template>


<script>
export default {
  name: "task",
  props: {
    task: Object,
    index: Number
  },
  methods: {
    toggle(index) {
      console.log(index)
    }
  }
}
</script>