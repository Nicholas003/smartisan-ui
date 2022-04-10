<template>
<!-- :class="[type,{'disabled':inputDisabled}]" -->
  <div class="smart-input-container" :class="[`input-${inputAlign}`,type]">
    <div class="input-father">
      <!-- <pre class="content">{{ value }}</pre> -->
        <textarea 
        auto-height="true"
        :disabled="inputDisabled" 
        :maxlength="maxlength" 
        class="input"
        ref="textarea"
        @keydown.enter="textareaKeydown" 
        v-model="value"
        :placeholder="placeholder" 
        
        :rows="type=='textarea'?rows:1">
        </textarea>
      <div class="close">
        <div @click="clear" v-if="clearable&&length&&!inputDisabled&&type!=='textarea'" class="close-btn">
          <Close size="10px" class="text-gray-500" stroke-linecap="butt" :stroke-width="5" />
        </div>
        <slot name="button"></slot>
      </div>
    </div>
    <div v-if="showWordLimit&&maxlength" class="word-limit">
      <div>
        {{length}}/{{maxlength}}
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import { Close } from "@icon-park/vue-next";
import { computed, toRefs, ref,inject,ComponentOptions, nextTick, TextareaHTMLAttributes, ButtonHTMLAttributes, onMounted } from "vue";



export type inputType = "text" | "textarea" | string;

export type inputAlignType = 'left'|'right';

interface inputInterface {
  disabled?: boolean;
  type?: inputType;
  modelValue: string|number;
  placeholder?: string;
  rows?: string | number;
  showWordLimit?: boolean;
  maxlength?: number | string;
  clearable?: boolean;
  // readonly?:boolean;
  label?:string,
  labelWidth?:string,
  inputAlign?:inputAlignType,
  autosize?:boolean
}

let show = ref<boolean>(false);

let textarea = ref<HTMLElement>()

interface emitInterface {
  (e: "update:modelValue", value: string): void;
}

let props = withDefaults(defineProps<inputInterface>(), {
  type: "text",
  disabled: false,
  modelValue: undefined,
  placeholder: "",
  rows: 1,
  showWordLimit: false,
  maxlength: "",
  clearable: false,
  readonly:false,
  label:"",
  labelWidth:'50px',
  inputAlign:'left',
  autosize:true,
});

let emit = defineEmits<emitInterface>();

let refProps = toRefs(props);

let inputDisabled = computed(()=>refProps.disabled.value)

let formInstance = inject('smart-form') as ComponentOptions|undefined

if(formInstance){
  // console.log(formInstance)
  formInstance = formInstance as ComponentOptions

  let formProps = formInstance.props

  inputDisabled = computed(()=>formProps.disabled||refProps.disabled.value)

}

let value = computed<any>({
  get() {
    return refProps.type.value == 'number'? props.modelValue as number : `${props.modelValue}` as string;
  },
  set(v: string) {
    if(!inputDisabled.value){
      emit("update:modelValue", v);
    }
  },
});

let length = computed(()=>(`${value.value}`).length)

let clear = () => {
  if(!inputDisabled.value){
    emit("update:modelValue", '');
  }
};






let textareaKeydown = (...arg: any[]) => {
  let e = arg[0];
  if (
    (e.key == "Enter" || e.code == "Enter" || e.keyCode == 13) &&
    refProps.type.value != "textarea"
  ) {
    e.returnValue = false;
    return false;
  }
};
</script>

<style lang="scss" scoped>
.smart-input-container {
  @apply border box-border shadow-inner rounded-md pr-2.5 bg-white;
  min-height: 44px;
  &.input-right{
    .input{
      @apply text-right;
    }
    
  }
  
  .input-father{
    @apply flex relative;
    word-wrap:break-word; word-break:normal;
    .content{
      @apply absolute w-full h-full left-0 top-0 -z-10;
    }
    .close{
      @apply flex items-center;
    }
  }
  .input{
    @apply resize-none my-2.5 flex-1 ml-2.5;
    &[disabled]{
      @apply bg-white
    }
  }
  .word-limit{
    @apply flex justify-end mb-2.5 text-sm text-black text-opacity-60;
  }
  .close-btn {
    @apply h-5 w-5 border rounded-full flex justify-center items-center ml-2.5;
  }
}
</style>