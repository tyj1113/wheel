<template>
  <div class="wheel-date-picker" style="border: 1px solid red;" ref="wrapper">
    <Popover ref="popover" position="bottom" :container="popoverContainer" @open="onOpen">
      <Input type="text" :value="formattedValue" @input="onInput" @change="onChange" ref="input"/>
      <template slot="content">
        <div class="wheel-date-picker-pop" @selectstart.prevent>
          <div class="wheel-date-picker-nav">
 <span :class="c('prevYear', 'navItem')" @click="onClickPrevYear">
              <Icon name="leftleft"/>
            </span>
            <span :class="c('prevMonth', 'navItem')" @click="onClickPrevMonth">
              <Icon name="left"/>
            </span>
            <span :class="c('yearAndMonth')" @click="onClickMonth">
              <span>{{display.year}}年</span>
              <span>{{display.month+1}}月</span>
            </span>
            <span :class="c('nextMonth', 'navItem')" @click="onClickNextMonth">
              <Icon name="right"/>
            </span>
            <span :class="c('nextYear', 'navItem')" @click="onClickNextYear">
              <Icon name="rightright"/>
            </span>
          </div>
          <div class="wheel-date-picker-panels">
            <div class="wheel-date-picker-content">
              <template v-if="mode==='month'">
                <div :class="c('selectMonth')">
                  <div :class="c('selects')">
                    <select @change="onSelectYear" :value="display.year">
                      <option v-for="year in years" :value="year" :key="year">{{year}}</option>
                    </select>年
                    <select @change="onSelectMonth" :value="display.month">
                      <option
                          v-for="month in helper.range(0,12)"
                          :value="month"
                          :key="month"
                      >{{month+1}}</option>
                    </select>月
                  </div>
                  <div :class="c('returnToDayMode')">
                    <button @click.stop="onClickMonth($event)" :class="c('returnModeButton')" >返回</button>
<!--                    <span @click="mode ='day'">返回</span>-->
                  </div>
                </div>
              </template>
              <template v-else>
                <div :class="c('weekdays')">
                  <span :class="c('weekday')" v-for="i in [1,2,3,4,5,6,0]" :key="i">{{weekdays[i]}}</span>
                </div>
                <div :class="c('row')" v-for="i in helper.range(1, 7)" :key="i">
                  <span
                      :class="[c('cell'), {
                      currentMonth: isCurrentMonth(getVisibleDay(i,j)),
                      selected: isSelected(getVisibleDay(i,j)),
                      today: isToday(getVisibleDay(i,j))
                      }]"
                      v-for="j in helper.range(1,8)"
                      :key="j"
                      @click="onClickCell(getVisibleDay(i,j))"
                  >{{getVisibleDay(i,j).getDate()}}</span>
                </div>
              </template>
            </div>
          </div>
          <div class="wheel-date-picker-actions">
            <Button @click="onClickToday">今天</Button>
            <Button @click="onClickClear">清除</Button>
          </div>
        </div>
      </template>
    </Popover>
  </div>
</template>

<script>
import Input from './Input'
import Icon from './Icon'
import Popover from './Popover'
import Button from "./Button";
import helper from '../utils/date-helper'
export default {
  components: {Input, Icon, Popover,Button},
  name: "DatePicker",
  props: {
    firstDayOfWeek: {
      type: Number,
      default: 1
    },
    value: {
      type: Date
    },
    scope: {
      type: Array,
      default: () => [new Date(1900, 0, 1), helper.addYear(new Date(), 100)]
    }
  },
  data () {
    let [year, month] = helper.getYearMonthDate(this.value || new Date());
    return {
      mode: "days",
      helper: helper,
      popoverContainer: null,
      weekdays: ["日", "一", "二", "三", "四", "五", "六"],
      display: { year, month }
    };
  },
  mounted () {
    this.popoverContainer = this.$refs.wrapper;
  },
  methods: {
    c(...classNames) {
      return classNames.map(className => `wheel-date-picker-${className}`);
    },
    onInput(value) {
      var regex = /^\d{4}-\d{2}-\d{2}$/g;
      if (value.match(regex)) {
        let [year, month, day] = value.split("-");
        month = month - 1;
        year = year - 0;
        this.display = { year, month };
        this.$emit("input", new Date(year, month, day));
      }
    },
    onChange() {
      this.$refs.input.setRawValue(this.formattedValue);
    },
    onClickMonth(e) {
      console.log(e);
      // e.cancelBubble()
      if (this.mode !== "month") {
        this.mode = "month";
      } else {
        this.mode = "day";
      }
    },
    onClickCell(date) {
      if (this.isCurrentMonth(date)) {
        this.$emit("input", date);
        this.$refs.popover.close();
      }
    },
    getVisibleDay(row, col) {
      return this.visibleDays[(row - 1) * 7 + col - 1];
    },
    isCurrentMonth(date) {
      let [year1, month1] = helper.getYearMonthDate(date);
      return year1 === this.display.year && month1 === this.display.month;
    },
    isSelected(date) {
      if (!this.value) {
        return false;
      }
      let [y, m, d] = helper.getYearMonthDate(date);
      let [y2, m2, d2] = helper.getYearMonthDate(this.value);
      return y === y2 && m === m2 && d === d2;
    },
    isToday(date) {
      let [y, m, d] = helper.getYearMonthDate(date);
      let [y2, m2, d2] = helper.getYearMonthDate(new Date());
      return y === y2 && m === m2 && d === d2;
    },
    onClickPrevYear() {
      const oldDate = new Date(this.display.year, this.display.month);
      const newDate = helper.addYear(oldDate, -1);
      const [year, month] = helper.getYearMonthDate(newDate);
      this.display = { year, month };
    },
    onClickPrevMonth() {
      const oldDate = new Date(this.display.year, this.display.month);
      const newDate = helper.addMonth(oldDate, -1);
      const [year, month] = helper.getYearMonthDate(newDate);
      this.display = { year, month };
    },
    onClickNextMonth() {
      const oldDate = new Date(this.display.year, this.display.month);
      const newDate = helper.addMonth(oldDate, 1);
      const [year, month] = helper.getYearMonthDate(newDate);
      this.display = { year, month };
    },
    onClickNextYear() {
      const oldDate = new Date(this.display.year, this.display.month);
      const newDate = helper.addYear(oldDate, 1);
      const [year, month] = helper.getYearMonthDate(newDate);
      this.display = { year, month };
    },
    onSelectYear(e) {
      const year = e.target.value - 0;
      const d = new Date(year, this.display.month);
      if (d >= this.scope[0] && d <= this.scope[1]) {
        this.display.year = year;
      } else {
        alert("no");
        e.target.value = this.display.year;
      }
    },
    onSelectMonth(e) {
      const month = e.target.value - 0;
      const d = new Date(this.display.year, month);
      if (d >= this.scope[0] && d <= this.scope[1]) {
        this.display.month = month;
      } else {
        alert("no");
        e.target.value = this.display.month;
      }
    },
    onClickToday() {
      const now = new Date();
      const [year, month, day] = helper.getYearMonthDate(now);
      this.display = { year, month };
      this.$emit("input", new Date(year, month, day));
    },
    onClickClear() {
      console.log(444);
      this.$emit("input", undefined);
      this.$refs.popover.close();
    },
    onOpen() {
      this.mode = "day";
    }
  },
  computed: {
    visibleDays() {
      let date = new Date(this.display.year, this.display.month, 1);
      let first = helper.firstDayOfMonth(date);
      let last = helper.lastDayOfMonth(date);
      let [year, month, day] = helper.getYearMonthDate(date);
      let n = first.getDay();
      let array = [];
      let x = first - (n === 0 ? 6 : n - 1) * 3600 * 24 * 1000;
      for (let i = 0; i < 42; i++) {
        array.push(new Date(x + i * 3600 * 24 * 1000));
      }
      return array;
    },
    formattedValue() {
      if (!this.value) {
        return "";
      }
      const [year, month, day] = helper.getYearMonthDate(this.value);
      return `${year}-${helper.pad2(month + 1)}-${helper.pad2(day)}`;
    },
    years() {
      return helper.range(
          this.scope[0].getFullYear(),
          this.scope[1].getFullYear() + 1
      );
    }
  }
}
</script>

<style scoped lang="scss">
.wheel-date-picker {
  &-nav {
  }
  &-popWrapper {
    padding: 0;
  }
  &-navItem,
  &-cell,
  &-weekday {
    width: 32px;
    height: 32px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
  &-cell {
    color: #ddd;
    cursor: not-allowed;
    border-radius: 30%;
    &.currentMonth {
      color: black;
      &:hover {
        background: #4a90e2;
        cursor: pointer;
        color: white;
      }
    }
    &.today {
      background: #e3dddd;
    }
    &.selected {
      border: 1px solid #4a90e2;
    }
  }
  &-nav {
    display: flex;
  }
  &-yearAndMonth {
    margin: auto;
    cursor: pointer;
  }
  &-selectMonth {
    width: 224px;
    height: 224px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  &-selects {
    select{
      height:24px;
      font-size: 16px;
    }
    select:first-child{
      width: 60px;
    }
    select:last-child{
      width: 48px;
    }
  }
  &-returnToDayMode {
    margin-top: 8px;
  }
  ::v-deep .wheel-popover-content-wrapper {
    padding: 0;
  }
  &-actions {
    padding: 8px;
    text-align: right;
  }
  &-returnModeButton{
    font-size: 12px;
    width: 50px;
    height: 24px;
  }
}

</style>
