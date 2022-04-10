<template>
  <!-- <div class="form-item"  :class="{'label-null':!label,disabled}">
    <div class="item-name"  :style="{'width':labelWidth}">
      <span class="name">{{label}}</span>
      <span v-if="required" class="asterisk">*</span>
    </div>
    <div class="slot" :class="[labelAlign]">
      <slot></slot>
    </div>
  </div> -->
  <div class="form-item" :class="{'label-null':!label,disabled}">
    <div class="label-name" :style="{'width':labelWidth}">
      <span class="name">{{label}}</span>
    </div>
    <div class="slot" :class="[labelAlign]">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, toRefs, ComponentOptions, computed } from "vue";

export type labelAlignType = "left" | "right";

// label
interface formItemInterface {
  label?: string;
  labelWidth?: string;
  labelAlign?: labelAlignType;
  required?: boolean;
}
let props = withDefaults(defineProps<formItemInterface>(), {
  label: "",
  labelWidth: "80px",
  labelAlign: "left",
  required: false,
});

let refProps = toRefs(props);

let formInstance = inject("smart-form") as ComponentOptions;

if (!formInstance) {
  throw new Error("FormItem必须在Form组件下");
}

let formProps = formInstance.props;

let disabled = computed(() => formProps.disabled);

let labelAlign = computed(
  () => formProps.labelAlign || refProps.labelAlign.value
);
</script>

<style lang="scss" scoped>
.form-item {
  @apply flex relative pr-2.5;
  min-height: 44px;
  &.label-null{
    @apply pl-2.5;
    .label-name{
      @apply hidden
    }
    .slot{
      // @apply w-full;
    }
  }
  &:deep(.smart-input-container) {
    @apply m-0 p-0 border-none shadow-none flex-1;
    &:not(.textarea){
      @apply flex items-center;
    }
    &.textarea{
      @apply mt-2.5;
    }
    .input {
      @apply m-0 p-0 border-none;
    }
  }
  .label-name {
    @apply flex items-center;
    line-height: 1;
    .name{
      @apply ml-2.5;
    }
  }
  .slot {
    @apply flex-1 flex items-center;

    &.right{
      @apply justify-end
    }
  }
}
</style>