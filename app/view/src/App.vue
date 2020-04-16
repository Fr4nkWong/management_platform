<template>
  <div class="wrapper">{{name}}</div>
</template>

<script>
export default {
  data: function() {
    return {
      name: 'frank'
    };
  }
}
</script>

<style lang="less">
.wrapper {
  width: 100%;
  height: 100%;
}
</style>