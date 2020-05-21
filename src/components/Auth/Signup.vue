<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="blue">
            <v-toolbar-title>Signup form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-alert :value="true" color="error" dark icon="mdi-alert">This user already exists!</v-alert>

              <v-text-field
                :rules="[rules.required]"
                prepend-icon="mdi-account"
                name="login"
                label="Username"
                v-model="username"
              ></v-text-field>
              <v-text-field
                :rules="[rules.required, rules.email]"
                prepend-icon="mdi-email"
                name="email"
                label="Email"
                v-model="email"
              ></v-text-field>
              <v-text-field
                :rules="[rules.required]"
                prepend-icon="mdi-lock"
                name="password"
                label="Password"
                type="password"
                v-model="password"
              ></v-text-field>
              <v-text-field
                :rules="[rules.required]"
                prepend-icon="mdi-lock-check"
                name="password"
                label="Confirm Password"
                type="password"
                v-model="confirm_password"
                :error="!valid()"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-divider light></v-divider>
          <v-card-actions>
            <v-btn rounded color="black" dark>Sign in</v-btn>
            <v-spacer></v-spacer>
            <v-btn rounded color="success">
              Register
              <v-icon>mdi-menu-up</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "signup",
  data: () => ({
    password: "",
    confirm_password: "",
    username: "",
    email: "",
    rules: {
      required: value => !!value || "Required",
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      }
    }
  }),
  methods: {
    valid() {
      return this.password === this.confirm_password;
    }
  }
};
</script>