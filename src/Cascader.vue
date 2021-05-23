<template>
  <div class="cascader" ref="cascader">
    <div class="trigger" @click="toggle">
      {{ result  || '请选择'}}
    </div>
    <div class="popoverWrapper" v-if="popoverVisible">
      <t-cascader-item :items="source" class="popover" :loadData="loadData"
       :selected="selected" :height="popoverHeight"
        @update:selected="onUpdateSelected"></t-cascader-item>
    </div>
  </div>

</template>

<script>
import CascaderItem from './Cascader-item'

export default {
  name: 'Cascader.vue',
  components: {
    't-cascader-item': CascaderItem
  },
  data() {
    return {
      popoverVisible: false,
    }
  },
  methods: {
    onUpdateSelected (newSelected) {
      this.$emit('update:selected', newSelected)//更新selected

      let lastItem = newSelected[newSelected.length - 1]//单击时获取被单击的这一项 因为单击后会清空后面的项所以取最后一项
      let simplest = (children, id) => {
        return children.filter(item => item.id === id)[0]
      }//处理没有children属性的对象
      let complex = (children, id) => {
        //处理有children属性的对象
        //将数据分为有children属性跟没有children属性
        let noChildren = []
        let hasChildren = []

        children.forEach(item => {
          if (item.children) {
            hasChildren.push(item)
          } else {
            noChildren.push(item)
          }
        })
        let found = simplest(noChildren, id)//在没有children属性的数据里查找
        if (found) {
          return found
        } else {//找不到就去有children属性的数据里找
          found = simplest(hasChildren, id)
          if (found) { return found }
          else {//没找到继续去这些数据的children属性里找 通过递归 先遍历这些对象在获取他们的children属性对象 调用complex
            for (let i = 0; i < hasChildren.length; i++) {
              found = complex(hasChildren[i].children, id)
              if (found) {//如果找到就return 出去
                return found
              }
            }
            return undefined//找不到返回undefined
          }
        }
      }
      let updateSource = (result) => {//内部定义的updateSource 方法
        let copy = JSON.parse(JSON.stringify(this.source))//深拷贝数据
        let toUpdate = complex(copy, lastItem.id)
        toUpdate.children = result//将下一级的数据添加到上一级的children属性里
        this.$emit('update:source', copy)// 通过自定义事件修改顶层数据
      }
      if (!lastItem.isLeaf) {
        this.loadData && this.loadData(lastItem, updateSource) // 回调:把别人传给我的函数调用一下
        // 调回调的时候传一个函数,这个函数理论应该被调用
      }
    },
    onClickDocument (e) {
      let {cascader} = this.$refs
      let {target} = e
      if (cascader === target || cascader.contains(target)) { return }
      this.close()
    },
    open () {
      this.popoverVisible = true
      this.$nextTick(() => {
        document.addEventListener('click', this.onClickDocument)
      })
    },
    close () {
      this.popoverVisible = false
      document.removeEventListener('click', this.onClickDocument)
    },
    toggle () {
      if (this.popoverVisible === true) {
        this.close()
      } else {
        this.open()
      }
    },
  },
  props: {
    source: {
      type: Array
    },
    popoverHeight: {
      type: String
    },
    selected: {
      type: Array,
      default: () => []
    },
    loadData: {
      type: Function
    }
  },
  computed: {
    result () {
      return this.selected.map((item) => item.name).join('/')
    }
  }
};
</script>

<style lang="scss" scoped>
.cascader {
  position: relative;
  display: inline-block;
  .trigger {
    border: 1px solid black;
    min-width: 10em;
    height: 32px;
    border-radius: 2px;
    display: inline-flex;
    align-items: center;
    padding: 0 1em;
  }

  .popoverWrapper {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    display: flex;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
    margin-top: 8px;
  }
}
</style>
