<template>
<h1>Welcome to {{email}}</h1>
<button class="log-out" @click="logout()">Log Out</button>
</template>

<script>
 export default {
  name: 'WelcomePage',
  //props passed from the router
  props: {
    email: String
  },

  methods: {
    logout() {
      this.$router.push('/login');
      window.localStorage.removeItem('logged-in');
    }
  },
  mounted() {
        if(!window.localStorage.getItem('logged-in'))
        this.$router.push('/');
    }
  
}
</script>