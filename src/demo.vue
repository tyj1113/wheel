<template>
    <div>

      <t-cascader :source="source" popover-height="200px" :selected.sync="selected"
                 ></t-cascader>

    </div>
</template>

<script >
import Cascader from './Cascader.vue';
import db from './db'


function ajax (parentId = 0) {
  return db.filter((item) => item.parent_id == parentId)
}
console.log(ajax())
export default {
  name: "demo",
  data() {
    return {
      source:ajax(),
      selected:[]
    };
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