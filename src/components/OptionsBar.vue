<template>
  <v-navigation-drawer permanent style="width: 100%; height:100%;">
    <v-toolbar color="pink" dark>
      <v-toolbar-title>Options</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>

    <v-card tile flat>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            Some title
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card>

  </v-navigation-drawer>
</template>

<script>
export default {
  name: "optionsBar"
}
</script>