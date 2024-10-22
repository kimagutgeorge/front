<template>
    <div class="container lg-page">
      <div :class="['response-message', responseClass]" class="row position-absolute">{{ dbResponse }}</div>
    <div class="center-page">
        <div class="login-panel col-md-10 centered">
            <form @submit.prevent="loginUser" method="POST">
            <div class="form-group">
            <input type="text" class="form-control" placeholder="Username" v-model="email" required>
            </div>
            <div class="form-group">
            <input type="password" v-model="password" class="form-control" placeholder="Password" required>
            </div>
            <div class="form-group">
            <button type="submit" class="col-md-12 form-control btn btn-primary">Login <i class="fa-solid fa-unlock"></i></button>
            </div>
            <div class="fgt-text">
                <a href="/forgot" class="text-sm-left">Forgot Password?</a>
            </div>
            
        </form>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name:'Login',
  data() {
    return {
      email: '',
      password: '',
      dbResponse: '',
      responseClass: '', // Class to apply based on response
    };
  },
  methods: {
    async loginUser() {
      try {
        const response = await axios.post('http://localhost:5000/login', {
          email: this.email,
          password: this.password,
        });

        const data = response.data;

        if (data.message === '1') {
          // Redirect to dashboard on successful login
          this.$router.push('/home');

        } else {
          this.responseClass = 'bg-danger text-white'
          this.dbResponse = 'Wrong Credentials'
        }
      } catch (error) {
        this.responseClass = 'bg-danger text-white'
        this.dbResponse = 'Login failed. Please try again later.'
        if (error.response) {
          this.dbResponse = error.response.data.message;
        }
      }
    }
  }
};
</script>