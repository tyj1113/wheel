<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Col",
  data() {
    return {
      gutter: 0
    }
  },
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
    xs: {
      type: Object,
      validate(value) {
        let keys = Object.keys(value), valid = true
        keys.forEach(item => {
          if (!['span', 'offset'].includes(item)) {
            valid = false
          }
        })
        return valid
      }
    },
    sm: {
      type: Object,
      validate(value) {
        let keys = Object.keys(value), valid = true
        keys.forEach(item => {
          if (!['span', 'offset'].includes(item)) {
            valid = false
          }
        })
        return valid
      }
    },
    md: {
      type: Object,
      validate(value) {
        let keys = Object.keys(value), valid = true
        keys.forEach(item => {
          if (!['span', 'offset'].includes(item)) {
            valid = false
          }
        })
        return valid
      }
    },
    lg: {
      type: Object,
      validate(value) {
        let keys = Object.keys(value), valid = true
        keys.forEach(item => {
          if (!['span', 'offset'].includes(item)) {
            valid = false
          }
        })
        return valid
      }
    },
    xl: {
      type: Object,
      validate(value) {
        let keys = Object.keys(value), valid = true
        keys.forEach(item => {
          if (!['span', 'offset'].includes(item)) {
            valid = false
          }
        })
        return valid
      }
    },
    xxl: {
      type: Object,
      validate(value) {
        let keys = Object.keys(value), valid = true
        keys.forEach(item => {
          if (!['span', 'offset'].includes(item)) {
            valid = false
          }
        })
        return valid
      }
    }
  },
  computed: {
    colClass() {
      let {span, offset, xs, sm, md, lg, xl, xxl} = this
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`,
        xs && xs.span && `xs-col-${xs.span}`,
        xs && xs.offset && `xs-offset-${xs.offset}`,
        sm && sm.span && `sm-col-${sm.span}`,
        sm && sm.offset && `sm-offset-${sm.offset}`,
        md && md.span && `md-col-${md.span}`,
        md && md.offset && `md-offset-${md.offset}`,
        lg && lg.span && `lg-col-${lg.span}`,
        lg && lg.offset && `lg-offset-${lg.offset}`,
        xl && xl.span && `xl-col-${xl.span}`,
        xl && xl.offset && `xl-offset-${xl.offset}`,
        xxl && xxl.span && `xxl-col-${xxl.span}`,
        xxl && xxl.offset && `xxl-offset-${xxl.offset}`,
      ]
    },
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + 'px',
        paddingRight: this.gutter / 2 + 'px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.col {
  height: 100px;
  border: 1px solid #ccc;
}

$class-prefix: col-;
@for $n from 1 through 24 {
  &.#{$class-prefix}#{$n} {
    width: ($n/24)*100%
  }
}

$class-prefix: offset-;
@for $n from 1 through 24 {
  &.#{$class-prefix}#{$n} {
    margin-left: ($n/24)*100%
  }
}

@media (max-width: 575px) {
  $class-prefix: xs-col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24)*100%
    }
  }
  $class-prefix: xs-offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n/24)*100%
    }
  }
}

@media (min-width: 576px) {
  $class-prefix: sm-col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24)*100%
    }
  }
  $class-prefix: sm-offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n/24)*100%
    }
  }
}

@media (min-width: 767px) {
  $class-prefix: md-col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24)*100%
    }
  }
  $class-prefix: md-offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n/24)*100%
    }
  }
}

@media (min-width: 991px) {
  $class-prefix: lg-col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24)*100%
    }
  }
  $class-prefix: lg-offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n/24)*100%
    }
  }
}

@media (min-width: 1199px) {
  $class-prefix: xl-col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24)*100%
    }
  }
  $class-prefix: xl-offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n/24)*100%
    }
  }
}

@media (min-width: 1599px) {
  $class-prefix: xxl-col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24)*100%
    }
  }
  $class-prefix: xxl-offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n/24)*100%
    }
  }
}

</style>