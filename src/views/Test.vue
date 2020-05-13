<template>
  <div >

    <div style="width: 200px; height: 500px;">
    <ul class="clist">
      <li v-for="(item,index) in dlist" :key="index" @click="listClick3(index)" :class="{selected: item.isturn}">
        {{item.title}}
        <div v-for="di in item.data" :key="di" v-show="item.isturn" @click.stop="">{{di}}</div>
      </li>
    </ul>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      dlist: [{
        title: '公告标题1', data: ['公告内容1']
      }, {
        title: '公告标题2', data: ['公告内容2']
      }, {
        title: '公告标题3', data: ['公告内容3']
      }
      ]
    }
  },
  methods: {
    listClick3: function (index) {
      var _title = this.dlist[index].title
      var _data = this.dlist[index].data
      var _isturn = !this.dlist[index].isturn
      this.dlist.splice(index, 1, { title: _title, data: _data, isturn: _isturn })
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
