<template>
  <div class="checkout">
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
  padding: 0 20px;
  @media (max-width: 767px) {
    padding: 0;
  }
}
</style>
