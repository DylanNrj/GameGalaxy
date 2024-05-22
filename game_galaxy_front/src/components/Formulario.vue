<template>
  <div class="container">
    <div class="login__content">
      <img src="../assets/bg-login.png" alt="Imagen Login" class="login__img">

      <form @submit.prevent="login" class="login__form">
        {{ user }}
        <div>
          <h1 class="login__title">
            <span>Bienvenido</span> De Nuevo
          </h1>
          <p class="login__description">
            Bienvenido! Por favor inicie sesión para continuar.
          </p>
        </div>

        <div>
          <div class="login__inputs">
            <div>
              <label for="" class="login__label">Usuario</label>
              <input type="text" placeholder="Ingresa su Usuario" v-model="username" required class="login__input">
            </div>

            <div>
              <label for="" class="login__label">Contraseña</label>
              <div class="login__box">
                <input type="password" placeholder="Ingrese su Contraseña" v-model="password" required class="login__input"
                  :type="showPassword ? 'text' : 'password'" id="input-pass">
                <i :class="showPassword ? 'ri-eye-line login__eye' : 'ri-eye-off-line login__eye'"
                  @click="togglePasswordVisibility"></i>
              </div>
            </div>
          </div>

          <div class="login__check">
            <input type="checkbox" class="login__check-input">
            <label for="" class="login__check-label">Recuerdame</label>
          </div>
        </div>
        <div>
          <div class="login__buttons">
            <button class="login__button">Inicio de sesión</button>
            <button type="button" class="login__button login__button-ghost" @click="showRegisterModal">Registro</button>
          </div>
          <a href="#" @click.prevent="showForgotPasswordModal" class="login__forgot">¿Has olvidado tu contraseña?</a>
        </div>
      </form>

      <div v-if="errorMessage" class="modal">
        <div class="modal__content">
          <span class="modal__close" @click="closeError">&times;</span>
          <p>{{ errorMessage }}</p>
        </div>
      </div>

      <div v-if="showForgotPassword" class="modal">
        <div class="modal__content">
          <span class="modal__close" @click="closeForgotPasswordModal">&times;</span>
          <h2>Recuperar Contraseña</h2>
          <input type="email" v-model="forgotEmail" placeholder="Ingrese su correo electrónico" class="login__input">
          <button @click="retrievePassword" class="login__button">Recuperar</button>
          <p v-if="forgotPasswordMessage">{{ forgotPasswordMessage }}</p>
        </div>
      </div>

        <div v-if="showRegister" class="modal">
        <div class="modal__content">
          <span class="modal__close" @click="closeRegisterModal">&times;</span>
          <h2>Registro</h2>
          <input type="text" v-model="registerData.user" placeholder="Nombre de usuario" class="login__input">
          <input type="email" v-model="registerData.email" placeholder="Correo electrónico" class="login__input">
          <input type="password" v-model="registerData.password" placeholder="Contraseña" class="login__input">
          <button @click="register" class="login__button">Registrar</button>
          <p v-if="registerMessage">{{ registerMessage }}</p>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
      showPassword: false,
      rememberUser: false,
      forgotEmail: '',
      username: '',
      password: '',
      errorMessage: '',
      showForgotPassword: false,
      forgotPasswordMessage: '',
      showRegister: false,
      registerData: {
        user: '',
        email: '',
        password: ''
      },
      registerMessage: '',
      user: null
    };
  },
  methods: {
    login() {
      const validUser = this.users.find(user => user.user === this.username && user.password === this.password);

      if (validUser) {
        window.location.href = "http://localhost:8080/#/home";
      } else {
        this.errorMessage = "Usuario o contraseña incorrectos";
      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    showForgotPasswordModal() {
      this.showForgotPassword = true;
    },
    closeForgotPasswordModal() {
      this.showForgotPassword = false;
      this.forgotPasswordMessage = '';
    },
    retrievePassword() {
      const user = this.users.find(user => user.email === this.forgotEmail);
      if (user) {
        this.forgotPasswordMessage = `Tu contraseña es: ${user.password}`;
      } else {
        this.forgotPasswordMessage = "El correo electrónico ingresado no está registrado.";
      }
    },
    showRegisterModal() {
      this.showRegister = true;
    },
    closeRegisterModal() {
      this.showRegister = false;
      this.registerMessage = '';
    },
    register() {
      axios.post('http://localhost:3000/api/users', this.registerData)
        .then(response => {
          this.registerMessage = 'Registro exitoso';
          this.showRegister = false;
          this.users.push(response.data);
        })
        .catch(error => {
          this.registerMessage = 'Error en el registro';
          console.error('Error al registrar:', error);
        });
    },
    closeError() {
      this.errorMessage = '';
    }
  },
  created() {
    axios.get('http://localhost:3000/api/users')
      .then(response => {
        this.users = response.data;
      })
      .catch(error => {
        console.error('Error al obtener los usuarios:', error);
      });
  }
};
</script>



<style scoped>
@import '../styles/login.css';
</style>
