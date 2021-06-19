
<template>
  <div style="margin: 20px;">
<!--    <Pager :total-page="10" :current-page.sync="currentPage"></Pager>-->
    <div style="margin: 20px;">
      <Table :columns="columns" :data-source="dataSource" bordered :selected-items.sync="selected"></Table>
    </div>
    <div style="margin: 20px;" >
      <Table :columns="columns" :data-source="dataSource"   :striped="false"
             numberVisible
      ></Table>
    </div>
  </div>
</template>
<script>
import Pager from './Pager'
import Table from "@/Table";
export default {
  name: "demo",
  components: {Pager,Table},
  data () {
    return {
      currentPage: 1,
      selected: [],
      columns: [
        {text: '姓名', field: 'name'},
        {text: '分数', field: 'score'},
      ],
      dataSource: [
        {id: 1, name: '方方', score: 100},
        {id: 2, name: '圆圆', score: 99},
        {id: 3, name: '张三', score: 100},
        {id: 4, name: '李四', score: 99},
        {id: 5, name: '超人', score: 100},
        {id: 6, name: '蝙蝠侠', score: 99},
        {id: 7, name: '蜘蛛侠', score: 100},
        {id: 8, name: '钢铁侠', score: 99},
      ]
    }
  }
};
</script>
<style>
* {margin: 0; padding: 0; box-sizing: border-box;}
body {background: white;}
</style>
