<template>
  <v-navigation-drawer permanent style="width: 100%; height:100%;">
    <v-toolbar color="pink" dark>
      <v-toolbar-title>Options</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>

    <v-card tile flat>
      <v-list>
        <v-list-group
          v-for="(item, key) in items"
          v-bind:key="key"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="(subItem, key) in item.items"
            v-bind:key="key"
            v-on="item.action === 'sort' ? { click: () => sort(subItem.by) } : { click: () => filter(subItem.by) }"
          >
            <v-list-item-title>{{subItem.title}}</v-list-item-title>
          </v-list-item>
        </v-list-group>
        <v-divider></v-divider>
        <v-list-group prepend-icon="mdi-image-multiple-outline" no-action>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>List options</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item>
            <v-list-item-title>Remove list</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Change background</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Descending</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-card>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "optionsBar",
  data: () => ({
    items: [
      {
        action: "mdi-sort-variant",
        title: "Sort by",
        active: true,
        items: [
          {
            title: "Date",
            by: "date"
          },
          {
            title: "Name",
            by: "name"
          }
        ]
      },
      {
        action: "mdi-filter-variant",
        title: "Filter by",
        active: false,
        items: [
          {
            title: "Remaining",
            by: "remaining"
          },
          {
            title: "Completed",
            by: "completed"
          },
          {
            title: "All",
            by: "all"
          }
        ]
      }
    ]
  }),
  methods: {
    sort(value) {
      console.log("Sort by " + value);
    },
    filter(value) {
      console.log("Filter by " + value);
    }
  }
};
</script>