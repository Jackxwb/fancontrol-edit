<template>
  <div class="ItemForm">
    <el-form :inline="true" label-width="auto" v-if="item">
      <el-form-item label="风扇路径">
        <el-input v-model="item.FCFANS" />
      </el-form-item>
      <el-form-item label="使用的传感器">
        <el-input v-model="item.FCTEMPS" />
      </el-form-item>

      <el-space fill>
        <el-alert type="info" show-icon :closable="false">MINTEMP：低于该温度是采用 MINPWM 的转速</el-alert>
        <el-form-item label="最低温度">
          <el-input-number v-model="item.MINTEMP" :min="0" :step="1" :precision="0" step-strictly controls-position="right" >
            <template #suffix>
              <span>℃</span>
            </template>
          </el-input-number>
        </el-form-item>
      </el-space>
      <el-space fill>
        <el-alert type="info" show-icon :closable="false">MAXTEMP：处于最低和最高温度区间时自动分配转速</el-alert>
        <el-form-item label="最高温度">
          <el-input-number v-model="item.MAXTEMP" :min="0" :step="1" :precision="0" step-strictly controls-position="right" >
            <template #suffix>
              <span>℃</span>
            </template>
          </el-input-number>
        </el-form-item>
      </el-space>

      <el-space fill>
        <el-alert type="info" show-icon :closable="false">MINSTOP：风扇启动的最小速度，PWM小于该值时不启动</el-alert>
        <el-form-item label="最小起转速度">
          <el-input-number v-model="item.MINSTOP" :min="0" :max="255" :step="1" :precision="0" step-strictly controls-position="right" />
        </el-form-item>
      </el-space>
      <el-space fill>
        <el-alert type="info" show-icon :closable="false">MINSTART：风扇停止转动后PWM大于该值时风扇启动({{ item.MINSTOP }} ~ {{ item.MAXPWM }})</el-alert>
        <el-form-item label="起转速度">
          <el-input-number v-model="item.MINSTART" :min="0" :max="255" :step="1" :precision="0" step-strictly controls-position="right" />
        </el-form-item>
      </el-space>

      <el-space fill>
        <el-alert type="info" show-icon :closable="false">MINPWM：最小转速 (0 ~ {{ item.MINSTOP }})</el-alert>
        <el-form-item label="最小转速">
          <el-input-number v-model="item.MINPWM" :min="0" :max="255" :step="1" :precision="0" step-strictly controls-position="right" />
        </el-form-item>
      </el-space>
      <el-space fill>
        <el-alert type="info" show-icon :closable="false">MAXPWM：可使用的最大转速 ({{ item.MINSTOP }} ~ 255)</el-alert>
        <el-form-item label="最大转速">
          <el-input-number v-model="item.MAXPWM" :min="0" :max="255" :step="1" :precision="0" step-strictly controls-position="right" />
        </el-form-item>
      </el-space>

    </el-form>
  </div>
</template>
<script>
import {computed} from "vue";

export default {
  name: "ItemForm",
  //引入模块
  components: {},
  //父级传入数据
  props: {
    itemData: Object,
  },
  data() {
    return {
      //双向绑定处理
      item: computed({
        get: () => {
          // console.log("this.itemData", this.itemData)
          return this.itemData
        },
        set: val => {
          this.$emit("update:item-data", val);
        }
      }),
    }
  },
  //方法
  methods: {},
  //启动事件
  mounted() {
  },
  //销毁
  beforeUnmount() {
  }
}
</script>
<style scoped>
/*@import "@/style/ItemForm.css";*/
</style>