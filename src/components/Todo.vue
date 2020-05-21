<template>
  <div>
    <Signup></Signup>
    <Login></Login>
  </div>
</template>


<script>
import Login from './Auth/Login';
import Signup from './Auth/Signup';

export default {
  name: "todo",
  components: {
    Signup,
    Login
  }
}
</script>