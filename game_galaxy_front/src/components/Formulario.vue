<template>
  <div class="container">
    <div class="login__content">
      <img src="../assets/bg-login.png" alt="Imagen Login" class="login__img">

      <form action="" class="login__form">
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
                <i :class="showPassword ? 'ri-eye-line login__eye' : 'ri-eye-off-line login__eye'" @click="togglePasswordVisibility"></i>
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
          <a href="#" class="login__forgot">Has olvidado tu contraseña?</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPassword: false
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    }
  }
};
</script>

<style scoped>
@import '../styles/login.css';
</style>
