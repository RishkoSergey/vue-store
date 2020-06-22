<template>
  <div class="checkout">
    <h1>This is an about page</h1>
    <CartList />
    <Form />
  </div>
</template>

<script>
import CartList from "../components/CartList";
import Form from "../components/Form";

export default {
  name: "Checkout",
  components: {
    CartList,
    Form
  }
};
</script>

<style lang="scss" scoped>
.checkout {
  margin-top: 60px;
  padding: 0 20px;
}
</style>
