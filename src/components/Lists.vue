<template>
  <v-navigation-drawer permanent style="width: 100%; height:100%;">
    <v-toolbar color="blue" dark>
      <v-toolbar-title>Todo lists</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>

    <v-card tile>
      <v-list-item>
        <v-list-item-content class="color-blue small-text">
          Create a new list
        </v-list-item-content>

        <v-list-item-action>
          <v-list-item-title>
            <v-icon>mdi-plus</v-icon>
          </v-list-item-title>
        </v-list-item-action>
      </v-list-item>
    </v-card>
    <v-divider></v-divider>

    <v-card flat tile>
      <v-list style="max-height: 81vh;" dense class="overflow-y-auto">
        <v-list-item-group>
          <v-list-item v-bind:key="key" v-for="(list, key) in lists">
            <v-list-item-content>
              <v-list-item-title>{{ list.title }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-list-item-title>{{ list.tasks }}</v-list-item-title>
            </v-list-item-action>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-navigation-drawer>
</template>


<script>
export default {
  name: "lists",
  data: () => ({
    lists: [
      {
        id: 1,
        title: "Groceries",
        tasks: 10
      },
      {
        id: 2,
        title: "Workout",
        tasks: 35
      },
      {
        id: 3,
        title: "Work",
        tasks: 66
      },
      {
        id: 4,
        title: "Home",
        tasks: 3
      },

      {
        id: 1,
        title: "Groceries",
        tasks: 10
      },
      {
        id: 2,
        title: "Workout",
        tasks: 35
      },
      {
        id: 3,
        title: "Work",
        tasks: 66
      },
      {
        id: 4,
        title: "Home",
        tasks: 3
      },
      {
        id: 1,
        title: "Groceries",
        tasks: 10
      },
      {
        id: 2,
        title: "Workout",
        tasks: 35
      },
      {
        id: 3,
        title: "Work",
        tasks: 66
      },
      {
        id: 4,
        title: "Home",
        tasks: 3
      }
    ]
  })
};
</script>