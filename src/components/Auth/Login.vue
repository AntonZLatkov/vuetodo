<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-form>
          <v-card class="elevation-12">
            <v-toolbar dark color="blue">
              <v-toolbar-title>Login form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-text-field
                prepend-icon="mdi-account"
                name="email"
                label="Email"
                type="text"
                v-model="email"
                :rules="[rules.required, rules.email]"
              ></v-text-field>
              <v-text-field
                prepend-icon="mdi-lock"
                name="password"
                label="Password"
                type="password"
                v-model="password"
                :rules="[rules.required]"
              ></v-text-field>
            </v-card-text>
            <v-divider light></v-divider>
            <v-card-actions>
              <v-btn dark rounded color="indigo">Sign in</v-btn>
              <v-spacer></v-spacer>
              <v-btn dark rounded color="primary">
                Login
                <v-icon>mdi-menu-right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  name: "login",
  data: () => ({
    password: "",
    email: "",
    rules: {
      required: value => !!value || "Required",
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      }
    }
  })
};
</script>