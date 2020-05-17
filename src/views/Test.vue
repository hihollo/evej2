<template>
  <div>
    <button @click="click"> 点击</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [[12, 23, 43], [43, 545, 65], [92, 23, 33]]
    }
  },
  methods: {
    click () {
      console.log(this.data)
    }
  }
}
</script>

<style lang="scss" scoped>
  .clist li{
    width: 100%;
    line-height: 30px;
    border: 1px solid #dddddd;
  }

  .clist li.selected{
    color: #000000;
  }
</style>
