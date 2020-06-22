<template>
  <div class="form">
    <div :class="isEmailValid()">
      <input
        type="email"
        class="form-control"
        placeholder="Email Address"
        v-model="email"
      />
    </div>
    <div :class="isPhoneFull()">
      <span class="input-phone-addon"><span>+7</span></span>
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
    <button :disabled="isDisabled">Отправить</button>
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
      phone: ""
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
.has-error {
  border: 1px solid red;
}
</style>
