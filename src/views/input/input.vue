<template>
  <div class="smart-bg-full">
    <sm-nav-bar title="Input"></sm-nav-bar>
    <Cell class="mt-0" :title="'基础用法'"></Cell>
    <div class="m-5">
      <smart-input :disabled="disabled" placeholder="单独使用" :label="'姓名'" clearable v-model="numValue"></smart-input>
    </div>
    
    <div class="m-5">
      <smart-input  :disabled="disabled" :label="'姓名'" maxlength="100" placeholder="文本框" clearable showWordLimit :type="'textarea'" rows="7"  v-model="value"></smart-input>
    </div>
    <smart-form class="m-5" :disabled="disabled">
     <smart-form-item :label-align="'right'" label="disabled">
       <Switch  v-model="disabled"/>
      </smart-form-item>
    </smart-form>
    <!-- <smart-form class="m-5">
    <smart-form-item :label-align="'right'" label="HH">
      <smart-input maxlength="100" showWordLimit placeholder="HH" clearable  :type="'textarea'" rows="7"  v-model="value">

      </smart-input>
    </smart-form-item>
    </smart-form> -->
    <div class="my-3 mx-5 text-gray-600">
      使用smart-form
    </div>
    <smart-form class="m-5" :label-align="align" :disabled="disabled">
      <smart-form-item :label="'你好哈'">
        <smart-input placeholder="请输入" label="HH"  v-model="value">
        </smart-input>
      </smart-form-item>
      <smart-form-item label="HH">
        <smart-input label="HH" maxlength="100"  showWordLimit placeholder="smart" clearable  :type="'textarea'" rows="7"  v-model="value">

        </smart-input>
      </smart-form-item>
      <smart-form-item :label-align="'right'"  maxlength="50000" showWordLimit label="自定义label-width" label-width="180px">
        <smart-input placeholder="这里写点什么"  v-model="value">
          
        </smart-input>
      </smart-form-item>
      <smart-form-item :label-align="'right'"  >
        <smart-input placeholder="没有label" v-model="value">
        </smart-input>
      </smart-form-item>
      <smart-form-item  >
        <smart-input input-align="right" placeholder="右对齐" clearable  v-model="value">
         
        </smart-input>
      </smart-form-item>
      <smart-form-item  :label="'手机号'">
        <smart-input  placeholder="请输入手机号" clearable type="number" v-model="value">
          <template #button>
            <SmartButton class="ml-2" type="success"  size="mini">
              发送验证码
            </SmartButton> 
          </template> 
        </smart-input>
      </smart-form-item>
      <smart-form-item required :label="'验证码'">
        <smart-input placeholder="请输入验证码" type="number" v-model="value">
         
        </smart-input>
      </smart-form-item>
      <smart-form-item :label-align="'right'" :label="'你好哈'" >
          <checkbox :checkedColor="'red'" v-model="one">
            <template #icon="{row:{active}}">
              <star class="start" :theme="active?'filled':'outline'" size="20" :strokeWidth="3" strokeLinecap="butt"/>
            </template>
          </checkbox>
      </smart-form-item>
      <smart-form-item :label-align="'right'" :label="'你好哈'" >
        <CheckboxGroup v-model="checkValue">
          <checkbox :name="'left'">
            多选
          </checkbox>
          <checkbox :name="'right'">
            2
          </checkbox>
        </CheckboxGroup>
          
      </smart-form-item>
      <smart-form-item  label-width="100px" :label="'label-align'">
         <radio-group  inline  v-model="align">
            <radio :name="'left'">
              left
            </radio>
            <radio :name="'right'">
              right
            </radio>
        </radio-group>
      </smart-form-item>
      <smart-form-item   :label="'你好哈'" >
        <div >
          <Switch  v-model="one"/>
        </div>
      </smart-form-item>
      <smart-form-item   :label="'进步器'">
        <div >
          <Stepper v-model="stepper"/>
        </div>
      </smart-form-item>
    </smart-form>
    <div class="p-5">
      <smart-input maxlength="50000" showWordLimit :type="'textarea'" :rows="1" v-model="value"></smart-input>
    </div>
  </div>
</template>

<script setup lang="ts">
import Stepper from '@/components/Stepper/Stepper.vue';
import SmartInput from "@/components/Input/Input.vue"
import SmartForm from '@/components/Form/Form.vue'
import SmartFormItem,{type labelAlignType} from '@/components/Form/FormItem.vue'
import SmartButton from "@/components/Button/Button.vue"
import CheckboxGroup from '@/components/Checkbox/CheckboxGroup.vue';
import Checkbox,{checkboxValueType} from '@/components/Checkbox/Checkbox.vue';
import Switch from "@/components/Switch/Switch.vue";
import RadioGroup from "@/components/Radio/RadioGroup.vue";
import Radio from "@/components/Radio/Radio.vue";
import { ref } from "vue";
import { User,Star } from "@icon-park/vue-next";


let value = ref<string>('')
let numValue = ref<number|any>('')

let one = ref<boolean>(true)
let checkValue = ref<string[]>(['left'])

let align = ref<labelAlignType>('left')

let disabled = ref<boolean>(false)
let stepper = ref<number>(0)
</script>

<style lang="scss" scoped>
.start{
  color: $yello;
}
</style>