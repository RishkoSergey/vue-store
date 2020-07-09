<template>
  <div class="form">
    <div :class="['form__email', isEmailValid()]">
      <input
        type="email"
        class="form-control"
        placeholder="Email Address"
        v-model="email"
      />
    </div>
    <div :class="['form__phone', isPhoneFull()]">
      <span>+7</span>
      <input
        type="tel"
        v-model="phone"
        name="phone"
        id="phone"
        placeholder="(111) 111-1111"
        autocomplete="tel"
        maxlength="14"
        class="form-control"
        v-phone
        pattern="[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}"
        required
      />
    </div>
    <button class="form__send" :disabled="isDisabled" @click="send">
      Отправить
    </button>
    <button class="form__main">
      <router-link to="/" style="text-decoration: none; color: black"
        >На главную
      </router-link>
    </button>
    <div v-if="showPopup" class="popup">
      <div class="popup__content">
        <p>Отправлено</p>
        <div class="popup__close" @click="showPopup = false">
          <img src="../assets/close.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Form",
  data: function() {
    return {
      email: "",
      reg: /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      phone: "",
      showPopup: false
    };
  },
  computed: {
    ...mapGetters(["getCart"]),
    isDisabled: function() {
      return !(
        this.isEmailValid() == "mail-success" &&
        this.isPhoneFull() == "phone-success" &&
        this.email.length > 0 &&
        this.phone.length > 0 &&
        this.getCart.length > 0
      );
    }
  },
  methods: {
    isEmailValid: function() {
      return this.reg.test(this.email) || this.email == ""
        ? "mail-success"
        : "mail-error";
    },
    isPhoneFull: function() {
      return this.phone.length > 13 || this.phone == ""
        ? "phone-success"
        : "phone-error";
    },
    send: function() {
      let promise = new Promise(function(resolve) {
        setTimeout(() => resolve("done!"), 2000);
      });
      promise.then(result => {
        if (result == "done!") {
          this.showPopup = true;
        }
      });
    }
  },
  directives: {
    phone: function(el) {
      el.oninput = function(e) {
        if (!e.isTrusted) {
          return;
        }
        let x = this.value
          .replace(/\D/g, "")
          .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        this.value = !x[2]
          ? x[1]
          : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
        el.dispatchEvent(new Event("input"));
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  background-color: #fff;
  padding: 10px;
  padding-top: 20px;
  &__email {
    margin-left: 18px;
    margin-bottom: 10px;
    input {
      &:focus {
        outline: none;
      }
    }
  }
  &__phone {
    input {
      &:focus {
        outline: none;
      }
    }
  }
  &__send,
  &__main {
    margin-top: 20px;
    margin-left: 18px;
  }
}
.mail-error,
.phone-error {
  input {
    border: 1px solid red;
    border-radius: 2px;
  }
}
.popup {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  z-index: 10;
  &__content {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 26px;
    background-color: white;
    width: 800px;
    max-width: 100%;
    min-height: 100px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__close {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    img {
      width: 30px;
      height: 30px;
    }
  }
  @media (max-width: 767px) {
    margin-left: -10px;
    &__content {
      box-shadow: none;
      border-radius: 8px;
      width: 100%;
      height: 100%;
      overflow-y: scroll;
    }
  }
}
</style>
