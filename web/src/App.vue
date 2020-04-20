<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      name: 'frank'
    };
  },
  methods: {
    authentication: function() {},
  }
}
</script>

<style lang="less" module>
.app {
  background-color: red;
  width: 100px;
  height: 100px;
}
</style>