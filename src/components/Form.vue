<template>
  <div class="form-group">
    <div :class="['input-group', isEmailValid()]">
      <span class="input-group-addon" id="basic-addon1"
        ><span class="fa fa-envelope"></span
      ></span>
      <input
        type="email"
        class="form-control"
        placeholder="Email Address"
        v-model="email"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  data: function() {
    return {
      email: "",
      reg: /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    };
  },
  methods: {
    isEmailValid: function() {
      console.log(
        this.email == ""
          ? ""
          : this.reg.test(this.email)
          ? "has-success"
          : "has-error"
      );
      return this.email == ""
        ? ""
        : this.reg.test(this.email)
        ? "has-success"
        : "has-error";
    }
  }
};
</script>
