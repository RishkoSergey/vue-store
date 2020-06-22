<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Form />
    <CartList />
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
