<template>
  <div>
    <t-button>默认按钮</t-button>
    <t-button icon="jinggao">默认按钮</t-button>
    <t-button :loading="true">默认按钮</t-button>
    <t-button disabled>默认按钮</t-button>

    <pre>
    <code>{{content}}</code>
    </pre>
  </div>
</template>

<script lang="ts">
import Button from '../../../src/Button';
export default {
  components:{
    't-button': Button
  },
  data () {
    return {
      content: `
    <t-button>默认按钮</t-button>
    <t-button icon="jinggao">默认按钮</t-button>
    <t-button :loading="true">默认按钮</t-button>
    <t-button disabled>默认按钮</t-button>
      `
    }
  }
};
</script>

