<template>
    <div>

      <t-cascader :source.sync="source" popover-height="200px" :selected.sync="selected"
      :load-data="loadData" style="margin-bottom: 50px"
      ></t-cascader>
<!--      <br>-->
<!--      <t-cascader :source.sync="source" popover-height="200px" :selected.sync="selected"-->
<!--                  :load-data="loadData"-->
<!--      ></t-cascader>-->

    </div>
</template>

<script >
import Cascader from './Cascader.vue';
import db from './db'


function ajax (parentId = 0) {
  return new Promise((success, fail) => {
    setTimeout(() => {
      let result = db.filter((item) => item.parent_id === parentId)
      result.forEach(node => {
        if (db.filter(item => item.parent_id === node.id).length > 0) {
          node.isLeaf = false
        }else{
          node.isLeaf = true
        }
      })
      // console.log(result)
      success(result)
    }, 3000)//模拟异步获取数据
  })
}
export default {
  name: "demo",
  created () {
    ajax(0).then(result => {
      this.source = result
    })
  },
  data() {
    return {
      // source: [
      //   {
      //     name: "浙江",
      //     children: [
      //       {
      //         name: "杭州",
      //         children: [{name: "上城"}, {name: "下城"}, {name: "江干"}]
      //       },
      //       {
      //         name: "嘉兴",
      //         children: [{name: "南湖"}, {name: "秀洲"}, {name: "嘉善"}]
      //       }
      //     ]
      //   },
      //   {
      //     name: "福建",
      //     children: [
      //       {
      //         name: "福州",
      //         children: [{name: "鼓楼"}, {name: "台江"}, {name: "仓山"}]
      //       }
      //     ]
      //   },
      //   {
      //     name: "安徽",
      //     children: [
      //       {
      //         name: "合肥",
      //         children: [
      //           {
      //             name: "瑶海"
      //           },
      //           {
      //             name: "庐阳"
      //           }
      //         ]
      //       }
      //     ]
      //   }
      // ],
       source:[],
      selected:[]
    };
  },
  methods: {
    loadData ({id}, updateSource) {
      ajax(id).then(result => {
        updateSource(result) // 回调:把别人传给我的函数调用一下
      })
    },
  },
  components:{
    't-cascader':Cascader
  }
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {

}

#app {
}
</style>
