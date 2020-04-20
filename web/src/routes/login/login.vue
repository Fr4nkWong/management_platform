<template>
  <div class="login">
    <form>
      <input type="text" name="account" value="frank" />
    </form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      name: 'login page'
    };
  },
  methods: {
    login: function() {

    },
  },
}
</script>

<style lang="less" module>
.wrapper {
  width: 100%;
  height: 100%;
}
</style>