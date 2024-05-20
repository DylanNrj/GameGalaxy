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
              <input type="text" placeholder="Ingresa su Usuario" required class="login__input">
            </div>

            <div>
              <label for="" class="login__label">Contraseña</label>
              <div class="login__box">
                <input type="password" placeholder="Ingrese su Contraseña" required class="login__input"
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
            <button class="login__button login__button-ghost">Registro</button>
          </div>
          <a href="#" @click="forgotPassword" class="login__forgot">Has olvidado tu contraseña?</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [], // Inicialmente vacío
      showPassword: false,
      rememberUser: false,
      forgotEmail: '',
      user: null // Inicialmente null
    };
  },
  methods: {
    login() {
      const username = document.querySelector('.login__input[type="text"]').value;
      const password = document.querySelector('.login__input[type="password"]').value;

      const validUser = this.users.find(user => user.user === username && user.password === password);

      if (validUser) {
        window.location.href = "http://localhost:8080/#/home";
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    },

    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },

    forgotPassword() {
      const email = prompt("Por favor, ingrese su correo electrónico:");

      if (email === null || email.trim() === '') {
        return; 
      }

      const user = this.users.find(user => user.email === email);

      if (user) {
        alert(`Tu contraseña es: ${user.password}`);
      } else {
        alert("El correo electrónico ingresado no está registrado.");
      }
    }
  },
  created() {
    axios
      .get('http://localhost:3000/api/users')
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