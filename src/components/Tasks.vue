<template>
  <v-navigation-drawer permanent style="width: 100%; height:100%;">
    <v-toolbar color="blue" dark>
      <v-toolbar-title>Title of the list</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>

    <v-card style="max-height: 77vh; height: 100%;; overflow-y: scroll;" tile flat>
      <template v-for="(task, key) in tasks">
        <Task v-bind:key="key" :task="task" :index="key"></Task>
      </template>
    </v-card>

    <v-divider></v-divider>

    <v-card-actions>
      <v-layout>
        <v-flex>
          <NewTask />
        </v-flex>
      </v-layout>
    </v-card-actions>
  </v-navigation-drawer>
</template>


<script>
import Task from "./Task";
import NewTask from "./NewTask";

export default {
  name: "tasks",
  components: {
    Task,
    NewTask
  },
  data: () => ({
    tasks: [
      {
        id: 1,
        title: "Task title 1",
        sub_title: "This task contains 8 notes",
        isComplete: true
      },
      {
        id: 2,
        title: "Task title 2",
        sub_title: "This task contains 8 notes",
        isComplete: true
      },
      {
        id: 3,
        title: "Task title 3",
        sub_title: "This task contains 8 notes",
        isComplete: false
      },
      {
        id: 4,
        title: "Task title 4",
        sub_title: "This task contains 8 notes",
        isComplete: true
      },
      {
        id: 5,
        title: "Task title 5",
        sub_title: "This task contains 8 notes",
        isComplete: false
      },
      {
        id: 6,
        title: "Task title 6",
        sub_title: "This task contains 8 notes",
        isComplete: true
      },
      {
        id: 7,
        title: "Task title 7",
        sub_title: "This task contains 8 notes",
        isComplete: false
      },
      {
        id: 8,
        title: "Task title 8",
        sub_title: "This task contains 8 notes",
        isComplete: true
      },
      {
        id: 9,
        title: "Task title 9",
        sub_title: "This task contains 8 notes",
        isComplete: false
      },
      {
        id: 10,
        title: "Task title 10",
        sub_title: "This task contains 8 notes",
        isComplete: true
      },
      {
        id: 11,
        title: "Task title 11",
        sub_title: "This task contains 8 notes",
        isComplete: false
      },
      {
        id: 12,
        title: "Task title 12",
        sub_title: "This task contains 8 notes",
        isComplete: true
      }
    ]
  })
};
</script>