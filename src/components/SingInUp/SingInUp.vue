<template>
  <div class="main-container">
    <div class="container" id="container">
      <div class="form-container sign-up-container">
        <form @submit.prevent="singUp('singUp')" data-vv-scope="singUp">
          <h1>Create Account</h1>
          <div class="social-container">
            <a href="#" class="social">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="social">
              <i class="fab fa-google-plus-g"></i>
            </a>
            <a href="#" class="social">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your email for registration</span>
          <input
            type="text"
            v-model="singUpForm.name"
            v-validate="'required'"
            :class="{'is-danger': errors.has('singUp.name') }"
            name="name"
            placeholder="Name"
          >
          <Error v-bind:errorsType="errors.collect('singUp.name')"/>
          <input
            v-model="singUpForm.email"
            v-validate="'required|email'"
            :class="{'is-danger': errors.has('singUp.email') }"
            type="email"
            name="email"
            placeholder="Email"
          >
          <Error v-bind:errorsType="errors.collect('singUp.email')"/>
          <input
            v-validate="{ required: true, min: 6, max:16 }"
            type="password"
            v-model="singUpForm.password"
            :class="{'is-danger': errors.has('singUp.password') }"
            name="password"
            placeholder="Password"
          >
          <Error v-bind:errorsType="errors.collect('singUp.password')"/>
          <button type="submit" class="form-button">Sign Up</button>
        </form>
      </div>
      <div class="form-container sign-in-container">
        <form @submit.prevent="singIn('singIn')" data-vv-scope="singIn">
          <h1>Sign in</h1>
          <div class="social-container">
            <a href="#" class="social">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="social">
              <i class="fab fa-google-plus-g"></i>
            </a>
            <a href="#" class="social">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your account</span>
          <input
            v-model="singInForm.email"
            v-validate="'required|email'"
            :class="{'is-danger': errors.has('singIn.email') }"
            type="email"
            name="email"
            placeholder="Email"
          >
          <Error v-bind:errorsType="errors.collect('singIn.email')"/>
          <input
            v-validate="{ required: true }"
            type="password"
            v-model="singInForm.password"
            :class="{'is-danger': errors.has('singIn.password') }"
            name="password"
            placeholder="Password"
          >
          <Error v-bind:errorsType="errors.collect('singIn.password')"/>
          <a href="#">Forgot your password?</a>
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button class="ghost" id="signIn">Sign In</button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button class="ghost" id="signUp">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    <FullPageLoader v-bind:isShow="isLoading"/>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import Error from "../Error/Error.vue";
import FullPageLoader from "../FullPageLoader/FullPageLoader.vue";

export default {
  name: "SingInUp",

  components: {
    Error,
    FullPageLoader
  },

  data() {
    return {
      singUpForm: {
        name: null,
        email: null,
        password: null
      },
      singInForm: {
        email: null,
        password: null
      }
    };
  },

  methods: {
    ...mapActions("Auth", ["userJoin", "userLogin"]),

    singUp(scope) {
      this.$validator.validateAll(scope).then(result => {
        if (result) {
          this.userJoin(this.singUpForm);
        }
      });
    },

    singIn(scope) {
      this.$validator.validateAll(scope).then(result => {
        if (result) {
          this.userLogin(this.singInForm);
        }
      });
    },

    resetSingUpForm(scope) {
      this.singUpForm.name = null;
      this.singUpForm.email = null;
      this.singUpForm.password = null;
      errors.clear(scope);
    },

    resetSingIpForm(scope) {
      this.singInForm.name = null;
      this.singInForm.email = null;
      errors.clear(scope);
    }
  },

  computed: {
    ...mapState("Auth", ["isLoading"])
  },

  mounted() {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,800");

.main-container {
  text-align: -webkit-center;
  font-family: "Montserrat", sans-serif;
  padding: 50px;
}
.container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
}
.is-danger {
  border-color: #f22435 !important;
}
.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.form-button {
  margin-top: 5px;
}
.container.right-panel-active .sign-in-container {
  transform: translateX(100%);
}

.sign-up-container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.container.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.6s;
}

@keyframes show {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.container.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

.overlay {
  background: #ff416c;
  background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
  background: linear-gradient(to right, #ff4b2b, #ff416c);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay-panel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-left {
  transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
  transform: translateX(0);
}

.overlay-right {
  right: 0;
  transform: translateX(0);
}

.container.right-panel-active .overlay-right {
  transform: translateX(20%);
}

.social-container {
  margin: 20px 0;
}

.social-container a {
  border: 1px solid #dddddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}
</style>
