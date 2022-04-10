<template>
  <div class="container" :class="[type,{'disabled':inputDisabled}]">
    <div class="input-father">
      <div class="input-label pl-2.5" :style="{'width':labelWidth}" v-if="label" :class="{'self-start pt-0.5':type=='textarea'}">
        <span class="text-black font-bold" :class="[disabled?'text-opacity-40':'text-opacity-60']">{{label}}</span>
      </div>
      <div class="inp" :class="type">
        <textarea 
        :disabled="inputDisabled" 
        v-if="type=='textarea'" 
        :maxlength="maxlength" 
        class="input" 
        @keydown.enter="textareaKeydown" 
        v-model="value"
        :placeholder="placeholder" 
        :rows="type=='textarea'?rows:1"></textarea>
        <input 
        v-else
        :disabled="inputDisabled" 
        :maxlength="maxlength" 
        class="input" 
        @keydown.enter="textareaKeydown" 
        v-model="value" 
        :placeholder="placeholder"
        :type="type"
        :rows="type=='textarea'?rows:1"
        />

      </div>
      <div class="flex items-center">
        <div @click="clear" v-if="clearable&&length&&!inputDisabled" class="close-btn ml-2 inline-block">
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
import { computed, toRefs, ref,inject,ComponentOptions } from "vue";

// interface inputInterface{

// }

export type inputType = "text" | "textarea" | string;

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
  labelWidth?:string
}

let show = ref<boolean>(false);

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
  labelWidth:'50px'
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
.container {
  // pr-2.5
  @apply border py-2.5  rounded-md shadow-inner pr-2.5;
  &.disabled{
    .inp {
      @apply mr-2.5;
    }
  }
  &.disabled{
    .input[disabled]{
      @apply bg-white
    }
  }
  .input-father {
    @apply flex items-center -mr-2.5;
    .inp {
      @apply flex-1 flex items-center ml-2.5;
      height: 26px;
      &.textarea {
        @apply mt-0.5;
        height: auto;
      }
      .input {
        @apply placeholder-gray-500 resize-none;
        width: 100%;
        &.text-right{

        }
        &.textarea {
          // @apply mt-10;
          .input {
            @apply overflow-auto;
          }
        }
      }
    }
    .close-btn {
      @apply h-5 w-5 border rounded-full flex justify-center items-center mr-2.5;
    }
  }
  .word-limit {
    @apply flex justify-end text-xs text-gray-600 mr-2.5;
  }
}
</style>