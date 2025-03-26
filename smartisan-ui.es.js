import { inject, createVNode, defineComponent, ref, toRefs as toRefs$1, useSlots, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, renderSlot, toDisplayString, createCommentVNode, computed, withModifiers, normalizeStyle, provide, getCurrentInstance, withDirectives, withKeys, isRef as isRef$1, vModelText, watch, createStaticVNode, onMounted, onBeforeUnmount, Fragment, renderList } from "vue";
import { useRouter } from "vue-router";
var DEFAULT_ICON_CONFIGS = {
  size: "1em",
  strokeWidth: 4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  rtl: false,
  theme: "outline",
  colors: {
    outline: {
      fill: "#333",
      background: "transparent"
    },
    filled: {
      fill: "#333",
      background: "#FFF"
    },
    twoTone: {
      fill: "#333",
      twoTone: "#2F88FF"
    },
    multiColor: {
      outStrokeColor: "#333",
      outFillColor: "#2F88FF",
      innerStrokeColor: "#FFF",
      innerFillColor: "#43CCF8"
    }
  },
  prefix: "i"
};
function guid() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function IconConverter(id, icon, config) {
  var fill = typeof icon.fill === "string" ? [icon.fill] : icon.fill || [];
  var colors = [];
  var theme = icon.theme || config.theme;
  switch (theme) {
    case "outline":
      colors.push(typeof fill[0] === "string" ? fill[0] : "currentColor");
      colors.push("none");
      colors.push(typeof fill[0] === "string" ? fill[0] : "currentColor");
      colors.push("none");
      break;
    case "filled":
      colors.push(typeof fill[0] === "string" ? fill[0] : "currentColor");
      colors.push(typeof fill[0] === "string" ? fill[0] : "currentColor");
      colors.push("#FFF");
      colors.push("#FFF");
      break;
    case "two-tone":
      colors.push(typeof fill[0] === "string" ? fill[0] : "currentColor");
      colors.push(typeof fill[1] === "string" ? fill[1] : config.colors.twoTone.twoTone);
      colors.push(typeof fill[0] === "string" ? fill[0] : "currentColor");
      colors.push(typeof fill[1] === "string" ? fill[1] : config.colors.twoTone.twoTone);
      break;
    case "multi-color":
      colors.push(typeof fill[0] === "string" ? fill[0] : "currentColor");
      colors.push(typeof fill[1] === "string" ? fill[1] : config.colors.multiColor.outFillColor);
      colors.push(typeof fill[2] === "string" ? fill[2] : config.colors.multiColor.innerStrokeColor);
      colors.push(typeof fill[3] === "string" ? fill[3] : config.colors.multiColor.innerFillColor);
      break;
  }
  return {
    size: icon.size || config.size,
    strokeWidth: icon.strokeWidth || config.strokeWidth,
    strokeLinecap: icon.strokeLinecap || config.strokeLinecap,
    strokeLinejoin: icon.strokeLinejoin || config.strokeLinejoin,
    colors,
    id
  };
}
var IconContext = Symbol("icon-context");
function IconWrapper(name, rtl, render) {
  var options = {
    name: "icon-" + name,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function setup(props) {
      var id = guid();
      var ICON_CONFIGS = inject(IconContext, DEFAULT_ICON_CONFIGS);
      return function() {
        var size = props.size, strokeWidth = props.strokeWidth, strokeLinecap = props.strokeLinecap, strokeLinejoin = props.strokeLinejoin, theme = props.theme, fill = props.fill, spin = props.spin;
        var svgProps = IconConverter(id, {
          size,
          strokeWidth,
          strokeLinecap,
          strokeLinejoin,
          theme,
          fill
        }, ICON_CONFIGS);
        var cls = [ICON_CONFIGS.prefix + "-icon"];
        cls.push(ICON_CONFIGS.prefix + "-icon-" + name);
        if (rtl && ICON_CONFIGS.rtl) {
          cls.push(ICON_CONFIGS.prefix + "-icon-rtl");
        }
        if (spin) {
          cls.push(ICON_CONFIGS.prefix + "-icon-spin");
        }
        return createVNode("span", {
          "class": cls.join(" ")
        }, [render(svgProps)]);
      };
    }
  };
  return options;
}
var CheckSmall = IconWrapper("check-small", true, function(props) {
  return createVNode("svg", {
    "width": props.size,
    "height": props.size,
    "viewBox": "0 0 48 48",
    "fill": "none"
  }, [createVNode("path", {
    "d": "M10 24L20 34L40 14",
    "stroke": props.colors[0],
    "stroke-width": props.strokeWidth,
    "stroke-linecap": props.strokeLinecap,
    "stroke-linejoin": props.strokeLinejoin
  }, null)]);
});
var Close = IconWrapper("close", false, function(props) {
  return createVNode("svg", {
    "width": props.size,
    "height": props.size,
    "viewBox": "0 0 48 48",
    "fill": "none"
  }, [createVNode("path", {
    "d": "M8 8L40 40",
    "stroke": props.colors[0],
    "stroke-width": props.strokeWidth,
    "stroke-linecap": props.strokeLinecap,
    "stroke-linejoin": props.strokeLinejoin
  }, null), createVNode("path", {
    "d": "M8 40L40 8",
    "stroke": props.colors[0],
    "stroke-width": props.strokeWidth,
    "stroke-linecap": props.strokeLinecap,
    "stroke-linejoin": props.strokeLinejoin
  }, null)]);
});
var LeftSmall = IconWrapper("left-small", true, function(props) {
  return createVNode("svg", {
    "width": props.size,
    "height": props.size,
    "viewBox": "0 0 48 48",
    "fill": "none"
  }, [createVNode("path", {
    "d": "M12 23.9917L36 23.9917",
    "stroke": props.colors[0],
    "stroke-width": props.strokeWidth,
    "stroke-linecap": props.strokeLinecap,
    "stroke-linejoin": props.strokeLinejoin
  }, null), createVNode("path", {
    "d": "M24 36L12 24L24 12",
    "stroke": props.colors[0],
    "stroke-width": props.strokeWidth,
    "stroke-linecap": props.strokeLinecap,
    "stroke-linejoin": props.strokeLinejoin
  }, null)]);
});
var LoadingOne = IconWrapper("loading-one", false, function(props) {
  return createVNode("svg", {
    "width": props.size,
    "height": props.size,
    "viewBox": "0 0 48 48",
    "fill": "none"
  }, [createVNode("path", {
    "d": "M24 4V8",
    "stroke": props.colors[0],
    "stroke-width": props.strokeWidth,
    "stroke-linecap": props.strokeLinecap,
    "stroke-linejoin": props.strokeLinejoin
  }, null), createVNode("path", {
    "d": "M34 6.67944L32 10.1435",
    "stroke": props.colors[0],
    "stroke-width": props.strokeWidth,
    "stroke-linecap": props.strokeLinecap,
    "stroke-linejoin": props.strokeLinejoin
  }, null), createVNode("path", {
    "d": "M41.3206 14L37.8565 16",
    "stroke": props.colors[0],
    "stroke-width": props.strokeWidth,
    "stroke-linecap": props.strokeLinecap,
    "stroke-linejoin": props.strokeLinejoin
  }, null), createVNode("path", {
    "d": "M44 24H40",
    "stroke": props.colors[0],
    "stroke-width": props.strokeWidth,
    "stroke-linecap": props.strokeLinecap,
    "stroke-linejoin": props.strokeLinejoin
  }, null), createVNode("path", {
    "d": "M41.3206 34L37.8565 32",
    "stroke": props.colors[0],
    "stroke-width": props.strokeWidth,
    "stroke-linecap": props.strokeLinecap,
    "stroke-linejoin": props.strokeLinejoin
  }, null), createVNode("path", {
    "d": "M34 41.3206L32 37.8565",
    "stroke": props.colors[0],
    "stroke-width": props.strokeWidth,
    "stroke-linecap": props.strokeLinecap,
    "stroke-linejoin": props.strokeLinejoin
  }, null), createVNode("path", {
    "d": "M24 44V40",
    "stroke": props.colors[0],
    "stroke-width": props.strokeWidth,
    "stroke-linecap": props.strokeLinecap,
    "stroke-linejoin": props.strokeLinejoin
  }, null), createVNode("path", {
    "d": "M14 41.3206L16 37.8565",
    "stroke": props.colors[0],
    "stroke-width": props.strokeWidth,
    "stroke-linecap": props.strokeLinecap,
    "stroke-linejoin": props.strokeLinejoin
  }, null), createVNode("path", {
    "d": "M6.67944 34L10.1435 32",
    "stroke": props.colors[0],
    "stroke-width": props.strokeWidth,
    "stroke-linecap": props.strokeLinecap,
    "stroke-linejoin": props.strokeLinejoin
  }, null), createVNode("path", {
    "d": "M4 24H8",
    "stroke": props.colors[0],
    "stroke-width": props.strokeWidth,
    "stroke-linecap": props.strokeLinecap,
    "stroke-linejoin": props.strokeLinejoin
  }, null), createVNode("path", {
    "d": "M6.67944 14L10.1435 16",
    "stroke": props.colors[0],
    "stroke-width": props.strokeWidth,
    "stroke-linecap": props.strokeLinecap,
    "stroke-linejoin": props.strokeLinejoin
  }, null), createVNode("path", {
    "d": "M14 6.67944L16 10.1435",
    "stroke": props.colors[0],
    "stroke-width": props.strokeWidth,
    "stroke-linecap": props.strokeLinecap,
    "stroke-linejoin": props.strokeLinejoin
  }, null)]);
});
var Minus = IconWrapper("minus", false, function(props) {
  return createVNode("svg", {
    "width": props.size,
    "height": props.size,
    "viewBox": "0 0 48 48",
    "fill": "none"
  }, [createVNode("path", {
    "d": "M10.5 24L38.5 24",
    "stroke": props.colors[0],
    "stroke-width": props.strokeWidth,
    "stroke-linecap": props.strokeLinecap,
    "stroke-linejoin": props.strokeLinejoin
  }, null)]);
});
var Plus = IconWrapper("plus", false, function(props) {
  return createVNode("svg", {
    "width": props.size,
    "height": props.size,
    "viewBox": "0 0 48 48",
    "fill": "none"
  }, [createVNode("path", {
    "d": "M24.0607 10L24.024 38",
    "stroke": props.colors[0],
    "stroke-width": props.strokeWidth,
    "stroke-linecap": props.strokeLinecap,
    "stroke-linejoin": props.strokeLinejoin
  }, null), createVNode("path", {
    "d": "M10 24L38 24",
    "stroke": props.colors[0],
    "stroke-width": props.strokeWidth,
    "stroke-linecap": props.strokeLinecap,
    "stroke-linejoin": props.strokeLinejoin
  }, null)]);
});
var Right = IconWrapper("right", true, function(props) {
  return createVNode("svg", {
    "width": props.size,
    "height": props.size,
    "viewBox": "0 0 48 48",
    "fill": "none"
  }, [createVNode("path", {
    "d": "M19 12L31 24L19 36",
    "stroke": props.colors[0],
    "stroke-width": props.strokeWidth,
    "stroke-linecap": props.strokeLinecap,
    "stroke-linejoin": props.strokeLinejoin
  }, null)]);
});
var Cell_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1$e = { class: "cell" };
const _hoisted_2$8 = { class: "font-bold text-black text-opacity-70 flex items-center" };
const _hoisted_3$4 = { class: "text-base text-black text-opacity-40" };
const _hoisted_4$3 = { class: "flex items-center" };
const _hoisted_5 = { class: "font-bold text-black text-opacity-40" };
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  props: {
    title: { default: "" },
    value: { default: "" },
    arrowDirection: { default: "right" },
    showArrow: { type: Boolean, default: false },
    clickable: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    ref(null);
    toRefs$1(props);
    useSlots();
    ref(false);
    let topBorder = ref(true);
    let bottomBorder = ref(true);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$e, [
        (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([{ "border-solid-b-05": unref(bottomBorder), "border-solid-t-05": unref(topBorder), clickable: __props.clickable }, "title"])
        }, [
          createElementVNode("div", _hoisted_2$8, [
            createElementVNode("div", _hoisted_3$4, [
              renderSlot(_ctx.$slots, "left-icon", {}, void 0, true)
            ]),
            createElementVNode("div", null, [
              createElementVNode("div", null, [
                renderSlot(_ctx.$slots, "default", {}, () => [
                  createElementVNode("span", null, toDisplayString(__props.title), 1)
                ], true)
              ])
            ])
          ]),
          createElementVNode("div", _hoisted_4$3, [
            renderSlot(_ctx.$slots, "right", {}, () => [
              createElementVNode("div", _hoisted_5, [
                createElementVNode("span", null, toDisplayString(__props.value), 1)
              ])
            ], true),
            __props.showArrow ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass([__props.arrowDirection, "transition-all"])
            }, [
              createVNode(unref(Right), {
                class: "text-base text-black text-opacity-40",
                "stroke-linecap": "butt",
                "stroke-width": 5
              })
            ], 2)) : createCommentVNode("", true)
          ])
        ], 2))
      ]);
    };
  }
});
var Cell = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-43db278c"]]);
var CellGroup_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  props: {
    showTopBorder: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["cell-group", { "border-solid-t-05": __props.showTopBorder }]),
        ref: "slotRef"
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 2);
    };
  }
});
var CellGroup = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-919ab74c"]]);
CellGroup.name = "SmCellGroup";
Cell.name = "SmCell";
Cell.install = (Vue) => {
  Vue.component(CellGroup.name, CellGroup);
  Vue.component(Cell.name, Cell);
};
var Checkbox_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$d = { class: "icon" };
const _hoisted_2$7 = { class: "text" };
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  props: {
    name: null,
    checkedColor: { default: "" },
    disabled: { type: Boolean, default: false },
    modelValue: { type: [null, Boolean], default: void 0 }
  },
  setup(__props, { emit }) {
    const props = __props;
    toRefs$1(props);
    if (props.modelValue !== void 0 && props.name !== void 0) {
      throw new Error("\u4E0D\u80FD\u540C\u65F6\u4F20\u5165v-model\u548Cname");
    }
    let hasGroup = props.modelValue === void 0;
    let checkboxGroupInstanceProps = {};
    let setCheckboxInject;
    let getCheckboxGroupInstance;
    let disabled = computed(() => props.disabled);
    let inline = computed(() => hasGroup ? false : "");
    if (hasGroup) {
      setCheckboxInject = inject("setCheckbox");
      getCheckboxGroupInstance = inject("getCheckboxGroup") || {};
      checkboxGroupInstanceProps = getCheckboxGroupInstance.props || {};
      disabled = computed(() => checkboxGroupInstanceProps.disabled || props.disabled);
      inline = computed(() => checkboxGroupInstanceProps.inline);
    }
    let aloneChangeCheckbox = () => {
      if (!props.disabled) {
        emit("change", !props.modelValue);
        emit("update:modelValue", !props.modelValue);
      }
    };
    let groupChangeCheckbox = () => {
      setCheckboxInject(props.name);
    };
    let active = computed(() => {
      if (hasGroup) {
        return checkboxGroupInstanceProps.modelValue.includes(props.name);
      } else {
        return props.modelValue;
      }
    });
    let setCheckbox = hasGroup ? groupChangeCheckbox : aloneChangeCheckbox;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["radio-father", { inline: unref(inline) }])
      }, [
        createElementVNode("div", {
          class: normalizeClass(["radio", { disabled: unref(disabled) }]),
          onClick: _cache[0] || (_cache[0] = withModifiers((...args) => unref(setCheckbox) && unref(setCheckbox)(...args), ["stop"]))
        }, [
          renderSlot(_ctx.$slots, "icon", {
            row: { active: unref(active), disabled: unref(disabled) }
          }, () => [
            createElementVNode("div", {
              class: normalizeClass(["check", { active: unref(active) }]),
              style: normalizeStyle(`${__props.checkedColor ? "--sm-active-color" : ""}:${__props.checkedColor}`)
            }, [
              createElementVNode("span", _hoisted_1$d, [
                createVNode(unref(CheckSmall), {
                  "stroke-linecap": "butt",
                  "stroke-width": 5
                })
              ])
            ], 6)
          ], true),
          createElementVNode("div", _hoisted_2$7, [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ])
        ], 2)
      ], 2);
    };
  }
});
var Checkbox = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-085f3079"]]);
const _hoisted_1$c = { class: "contents" };
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  props: {
    modelValue: null,
    disabled: { type: Boolean, default: false },
    inline: { type: Boolean, default: true }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { expose, emit }) {
    const props = __props;
    toRefs$1(props);
    provide("hasCheckboxGroup", true);
    let setCheckbox = (name) => {
      if (!props.disabled) {
        let value = JSON.parse(JSON.stringify(props.modelValue));
        let index2 = value.findIndex((v) => v == name);
        if (index2 == -1) {
          value.push(name);
        } else {
          value.splice(index2, 1);
        }
        emit("change", value);
        emit("update:modelValue", value);
      }
    };
    provide("setCheckbox", setCheckbox);
    let instance = getCurrentInstance();
    provide("getCheckboxGroup", instance);
    expose({ setCheckbox });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$c, [
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
_sfc_main$c.name = "SmCheckboxGroup";
Checkbox.name = "SmCheckbox";
Checkbox.install = (Vue) => {
  Vue.component(Checkbox.name, Checkbox);
  Vue.component(_sfc_main$c.name, _sfc_main$c);
};
var Form_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$b = { class: "smart-form" };
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  props: {
    labelAlign: { default: void 0 },
    disabled: { type: Boolean, default: false }
  },
  setup(__props) {
    let instance = getCurrentInstance();
    provide("smart-form", instance);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$b, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]);
    };
  }
});
var Form = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-e80e6396"]]);
var FormItem_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$a = { class: "name" };
const _hoisted_2$6 = {
  key: 0,
  class: "asterisk"
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  props: {
    label: { default: "" },
    labelWidth: { default: "80px" },
    labelAlign: { default: "left" },
    required: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    let refProps = toRefs$1(props);
    let formInstance = inject("smart-form");
    if (!formInstance) {
      throw new Error("FormItem\u5FC5\u987B\u5728Form\u7EC4\u4EF6\u4E0B");
    }
    let formProps = formInstance.props;
    let disabled = computed(() => formProps.disabled);
    let labelAlign = computed(() => formProps.labelAlign || refProps.labelAlign.value);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["form-item", { "label-null": !__props.label, disabled: unref(disabled) }])
      }, [
        createElementVNode("div", {
          class: "label-name",
          style: normalizeStyle({ "width": __props.labelWidth })
        }, [
          createElementVNode("span", _hoisted_1$a, toDisplayString(__props.label), 1),
          __props.required ? (openBlock(), createElementBlock("span", _hoisted_2$6, "*")) : createCommentVNode("", true)
        ], 4),
        createElementVNode("div", {
          class: normalizeClass(["slot", [unref(labelAlign)]])
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 2)
      ], 2);
    };
  }
});
var FormItem = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-17460b8c"]]);
FormItem.name = "SmFormItem";
Form.name = "SmForm";
Form.install = (Vue) => {
  Vue.component(Form.name, Form);
  Vue.component(FormItem.name, FormItem);
};
var Input_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$9 = { class: "input-father" };
const _hoisted_2$5 = ["disabled", "maxlength", "placeholder", "rows"];
const _hoisted_3$3 = { class: "close" };
const _hoisted_4$2 = {
  key: 0,
  class: "word-limit"
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  props: {
    disabled: { type: Boolean, default: false },
    type: { default: "text" },
    modelValue: { default: void 0 },
    placeholder: { default: "" },
    rows: { default: 1 },
    showWordLimit: { type: Boolean, default: false },
    maxlength: { default: "" },
    clearable: { type: Boolean, default: false },
    label: { default: "" },
    labelWidth: { default: "50px" },
    inputAlign: { default: "left" },
    autosize: { type: Boolean, default: true }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    ref(false);
    let textarea = ref();
    let refProps = toRefs$1(props);
    let inputDisabled = computed(() => refProps.disabled.value);
    let formInstance = inject("smart-form");
    if (formInstance) {
      formInstance = formInstance;
      let formProps = formInstance.props;
      inputDisabled = computed(() => formProps.disabled || refProps.disabled.value);
    }
    let value = computed({
      get() {
        return refProps.type.value == "number" ? props.modelValue : `${props.modelValue}`;
      },
      set(v) {
        if (!inputDisabled.value) {
          emit("update:modelValue", v);
        }
      }
    });
    let length = computed(() => `${value.value}`.length);
    let clear = () => {
      if (!inputDisabled.value) {
        emit("update:modelValue", "");
      }
    };
    let textareaKeydown = (...arg) => {
      let e = arg[0];
      if ((e.key == "Enter" || e.code == "Enter" || e.keyCode == 13) && refProps.type.value != "textarea") {
        e.returnValue = false;
        return false;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["smart-input-container", [`input-${__props.inputAlign}`, __props.type]])
      }, [
        createElementVNode("div", _hoisted_1$9, [
          withDirectives(createElementVNode("textarea", {
            "auto-height": "true",
            disabled: unref(inputDisabled),
            maxlength: __props.maxlength,
            class: "input",
            ref_key: "textarea",
            ref: textarea,
            onKeydown: _cache[0] || (_cache[0] = withKeys((...args) => unref(textareaKeydown) && unref(textareaKeydown)(...args), ["enter"])),
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef$1(value) ? value.value = $event : value = $event),
            placeholder: __props.placeholder,
            rows: __props.type == "textarea" ? __props.rows : 1
          }, "\n        ", 40, _hoisted_2$5), [
            [vModelText, unref(value)]
          ]),
          createElementVNode("div", _hoisted_3$3, [
            __props.clearable && unref(length) && !unref(inputDisabled) && __props.type !== "textarea" ? (openBlock(), createElementBlock("div", {
              key: 0,
              onClick: _cache[2] || (_cache[2] = (...args) => unref(clear) && unref(clear)(...args)),
              class: "close-btn"
            }, [
              createVNode(unref(Close), {
                size: "10px",
                class: "text-gray-500",
                "stroke-linecap": "butt",
                "stroke-width": 5
              })
            ])) : createCommentVNode("", true),
            renderSlot(_ctx.$slots, "button", {}, void 0, true)
          ])
        ]),
        __props.showWordLimit && __props.maxlength ? (openBlock(), createElementBlock("div", _hoisted_4$2, [
          createElementVNode("div", null, toDisplayString(unref(length)) + "/" + toDisplayString(__props.maxlength), 1)
        ])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
var Input = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-54407e1a"]]);
Input.name = "SmInput";
Input.install = (Vue) => {
  Vue.component(Input.name, Input);
};
var NavBar_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$8 = { class: "middle text-ellipsis text-center w-full" };
const _hoisted_2$4 = { class: "font-bold text-gray-500 text-lg" };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  props: {
    title: { default: "" },
    border: { type: Boolean, default: true },
    fixed: { type: Boolean, default: true },
    real: { type: Boolean, default: true },
    showLeft: { type: Boolean, default: true },
    back: { type: Boolean, default: true }
  },
  emits: ["leftClick", "rightClick"],
  setup(__props, { emit }) {
    const props = __props;
    let refProps = toRefs$1(props);
    let router = useRouter();
    let leftClick = (event) => {
      if (refProps.back.value) {
        router.back();
      }
      emit("leftClick", event);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["w-full z-50 relative", { "h-11": __props.real }])
      }, [
        createElementVNode("div", {
          class: normalizeClass(["bg-white h-11 w-full flex items-center", [{ "nav-bar-shadow": __props.border }, [__props.fixed ? "fixed z-50" : "relative"]]])
        }, [
          __props.showLeft ? (openBlock(), createElementBlock("div", {
            key: 0,
            onClick: _cache[0] || (_cache[0] = (...args) => unref(leftClick) && unref(leftClick)(...args)),
            class: "left absolute top-0 bottom-0 flex items-center left-3"
          }, [
            renderSlot(_ctx.$slots, "left", {}, () => [
              createVNode(unref(LeftSmall), {
                class: "text-2xl text-gray-500",
                "stroke-linecap": "butt",
                "stroke-width": 5
              })
            ], true)
          ])) : createCommentVNode("", true),
          createElementVNode("div", _hoisted_1$8, [
            renderSlot(_ctx.$slots, "middle", {}, () => [
              createElementVNode("span", _hoisted_2$4, toDisplayString(__props.title), 1)
            ], true)
          ]),
          createElementVNode("div", {
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("rightClick", $event)),
            class: "right absolute top-0 bottom-0 flex items-center right-3"
          }, [
            renderSlot(_ctx.$slots, "right", {}, void 0, true)
          ])
        ], 2)
      ], 2);
    };
  }
});
var NavBar = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-221c3366"]]);
NavBar.name = "SmNavBar";
NavBar.install = (Vue) => {
  Vue.component(NavBar.name, NavBar);
};
var Radio_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$7 = { class: "icon" };
const _hoisted_2$3 = { class: "text" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  props: {
    name: null,
    checkedColor: { default: "" },
    disabled: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    toRefs$1(props);
    let setRadioInject = inject("setRadio");
    let radioGropInstance = inject("getRadioGroup");
    let radioGropProps = radioGropInstance.props;
    let disabled = computed(() => radioGropProps.disabled || props.disabled);
    let active = computed(() => radioGropProps.modelValue == props.name);
    let inline = computed(() => radioGropProps.inline);
    let setRadio = () => {
      if (!disabled.value) {
        setRadioInject(props.name);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["radio-father", { inline: unref(inline) }])
      }, [
        createElementVNode("div", {
          class: normalizeClass(["radio", { disabled: unref(disabled) }]),
          onClick: _cache[0] || (_cache[0] = withModifiers((...args) => unref(setRadio) && unref(setRadio)(...args), ["stop"]))
        }, [
          renderSlot(_ctx.$slots, "icon", {
            row: { active: unref(active) }
          }, () => [
            createElementVNode("div", {
              class: normalizeClass(["check", { active: unref(active) }]),
              style: normalizeStyle(`${__props.checkedColor ? "--sm-active-color" : ""}:${__props.checkedColor}`)
            }, [
              createElementVNode("span", _hoisted_1$7, [
                createVNode(unref(CheckSmall), {
                  "stroke-linecap": "butt",
                  "stroke-width": 5
                })
              ])
            ], 6)
          ], true),
          createElementVNode("div", _hoisted_2$3, [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ])
        ], 2)
      ], 2);
    };
  }
});
var Radio = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-680d6e78"]]);
const _hoisted_1$6 = { class: "contents" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  props: {
    modelValue: null,
    disabled: { type: Boolean, default: false },
    inline: { type: Boolean, default: false }
  },
  emits: ["change", "update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    toRefs$1(props);
    provide("setRadio", (name) => {
      if (!props.disabled) {
        emit("change", name);
        emit("update:modelValue", name);
      }
    });
    let instance = getCurrentInstance();
    provide("getRadioGroup", instance);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
_sfc_main$6.name = "SmRadioGroup";
Radio.name = "SmRadio";
Radio.install = (Vue) => {
  Vue.component(Radio.name, Radio);
  Vue.component(_sfc_main$6.name, _sfc_main$6);
};
var isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, mathceil = Math.ceil, mathfloor = Math.floor, bignumberError = "[BigNumber Error] ", tooManyDigits = bignumberError + "Number primitive has more than 15 significant digits: ", BASE = 1e14, LOG_BASE = 14, MAX_SAFE_INTEGER = 9007199254740991, POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], SQRT_BASE = 1e7, MAX = 1e9;
function clone(configObject) {
  var div, convertBase, parseNumeric, P = BigNumber2.prototype = { constructor: BigNumber2, toString: null, valueOf: null }, ONE = new BigNumber2(1), DECIMAL_PLACES = 20, ROUNDING_MODE = 4, TO_EXP_NEG = -7, TO_EXP_POS = 21, MIN_EXP = -1e7, MAX_EXP = 1e7, CRYPTO = false, MODULO_MODE = 1, POW_PRECISION = 0, FORMAT = {
    prefix: "",
    groupSize: 3,
    secondaryGroupSize: 0,
    groupSeparator: ",",
    decimalSeparator: ".",
    fractionGroupSize: 0,
    fractionGroupSeparator: "\xA0",
    suffix: ""
  }, ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz", alphabetHasNormalDecimalDigits = true;
  function BigNumber2(v, b) {
    var alphabet, c, caseChanged, e, i, isNum, len, str, x = this;
    if (!(x instanceof BigNumber2))
      return new BigNumber2(v, b);
    if (b == null) {
      if (v && v._isBigNumber === true) {
        x.s = v.s;
        if (!v.c || v.e > MAX_EXP) {
          x.c = x.e = null;
        } else if (v.e < MIN_EXP) {
          x.c = [x.e = 0];
        } else {
          x.e = v.e;
          x.c = v.c.slice();
        }
        return;
      }
      if ((isNum = typeof v == "number") && v * 0 == 0) {
        x.s = 1 / v < 0 ? (v = -v, -1) : 1;
        if (v === ~~v) {
          for (e = 0, i = v; i >= 10; i /= 10, e++)
            ;
          if (e > MAX_EXP) {
            x.c = x.e = null;
          } else {
            x.e = e;
            x.c = [v];
          }
          return;
        }
        str = String(v);
      } else {
        if (!isNumeric.test(str = String(v)))
          return parseNumeric(x, str, isNum);
        x.s = str.charCodeAt(0) == 45 ? (str = str.slice(1), -1) : 1;
      }
      if ((e = str.indexOf(".")) > -1)
        str = str.replace(".", "");
      if ((i = str.search(/e/i)) > 0) {
        if (e < 0)
          e = i;
        e += +str.slice(i + 1);
        str = str.substring(0, i);
      } else if (e < 0) {
        e = str.length;
      }
    } else {
      intCheck(b, 2, ALPHABET.length, "Base");
      if (b == 10 && alphabetHasNormalDecimalDigits) {
        x = new BigNumber2(v);
        return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
      }
      str = String(v);
      if (isNum = typeof v == "number") {
        if (v * 0 != 0)
          return parseNumeric(x, str, isNum, b);
        x.s = 1 / v < 0 ? (str = str.slice(1), -1) : 1;
        if (BigNumber2.DEBUG && str.replace(/^0\.0*|\./, "").length > 15) {
          throw Error(tooManyDigits + v);
        }
      } else {
        x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
      }
      alphabet = ALPHABET.slice(0, b);
      e = i = 0;
      for (len = str.length; i < len; i++) {
        if (alphabet.indexOf(c = str.charAt(i)) < 0) {
          if (c == ".") {
            if (i > e) {
              e = len;
              continue;
            }
          } else if (!caseChanged) {
            if (str == str.toUpperCase() && (str = str.toLowerCase()) || str == str.toLowerCase() && (str = str.toUpperCase())) {
              caseChanged = true;
              i = -1;
              e = 0;
              continue;
            }
          }
          return parseNumeric(x, String(v), isNum, b);
        }
      }
      isNum = false;
      str = convertBase(str, b, 10, x.s);
      if ((e = str.indexOf(".")) > -1)
        str = str.replace(".", "");
      else
        e = str.length;
    }
    for (i = 0; str.charCodeAt(i) === 48; i++)
      ;
    for (len = str.length; str.charCodeAt(--len) === 48; )
      ;
    if (str = str.slice(i, ++len)) {
      len -= i;
      if (isNum && BigNumber2.DEBUG && len > 15 && (v > MAX_SAFE_INTEGER || v !== mathfloor(v))) {
        throw Error(tooManyDigits + x.s * v);
      }
      if ((e = e - i - 1) > MAX_EXP) {
        x.c = x.e = null;
      } else if (e < MIN_EXP) {
        x.c = [x.e = 0];
      } else {
        x.e = e;
        x.c = [];
        i = (e + 1) % LOG_BASE;
        if (e < 0)
          i += LOG_BASE;
        if (i < len) {
          if (i)
            x.c.push(+str.slice(0, i));
          for (len -= LOG_BASE; i < len; ) {
            x.c.push(+str.slice(i, i += LOG_BASE));
          }
          i = LOG_BASE - (str = str.slice(i)).length;
        } else {
          i -= len;
        }
        for (; i--; str += "0")
          ;
        x.c.push(+str);
      }
    } else {
      x.c = [x.e = 0];
    }
  }
  BigNumber2.clone = clone;
  BigNumber2.ROUND_UP = 0;
  BigNumber2.ROUND_DOWN = 1;
  BigNumber2.ROUND_CEIL = 2;
  BigNumber2.ROUND_FLOOR = 3;
  BigNumber2.ROUND_HALF_UP = 4;
  BigNumber2.ROUND_HALF_DOWN = 5;
  BigNumber2.ROUND_HALF_EVEN = 6;
  BigNumber2.ROUND_HALF_CEIL = 7;
  BigNumber2.ROUND_HALF_FLOOR = 8;
  BigNumber2.EUCLID = 9;
  BigNumber2.config = BigNumber2.set = function(obj) {
    var p, v;
    if (obj != null) {
      if (typeof obj == "object") {
        if (obj.hasOwnProperty(p = "DECIMAL_PLACES")) {
          v = obj[p];
          intCheck(v, 0, MAX, p);
          DECIMAL_PLACES = v;
        }
        if (obj.hasOwnProperty(p = "ROUNDING_MODE")) {
          v = obj[p];
          intCheck(v, 0, 8, p);
          ROUNDING_MODE = v;
        }
        if (obj.hasOwnProperty(p = "EXPONENTIAL_AT")) {
          v = obj[p];
          if (v && v.pop) {
            intCheck(v[0], -MAX, 0, p);
            intCheck(v[1], 0, MAX, p);
            TO_EXP_NEG = v[0];
            TO_EXP_POS = v[1];
          } else {
            intCheck(v, -MAX, MAX, p);
            TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
          }
        }
        if (obj.hasOwnProperty(p = "RANGE")) {
          v = obj[p];
          if (v && v.pop) {
            intCheck(v[0], -MAX, -1, p);
            intCheck(v[1], 1, MAX, p);
            MIN_EXP = v[0];
            MAX_EXP = v[1];
          } else {
            intCheck(v, -MAX, MAX, p);
            if (v) {
              MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
            } else {
              throw Error(bignumberError + p + " cannot be zero: " + v);
            }
          }
        }
        if (obj.hasOwnProperty(p = "CRYPTO")) {
          v = obj[p];
          if (v === !!v) {
            if (v) {
              if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
                CRYPTO = v;
              } else {
                CRYPTO = !v;
                throw Error(bignumberError + "crypto unavailable");
              }
            } else {
              CRYPTO = v;
            }
          } else {
            throw Error(bignumberError + p + " not true or false: " + v);
          }
        }
        if (obj.hasOwnProperty(p = "MODULO_MODE")) {
          v = obj[p];
          intCheck(v, 0, 9, p);
          MODULO_MODE = v;
        }
        if (obj.hasOwnProperty(p = "POW_PRECISION")) {
          v = obj[p];
          intCheck(v, 0, MAX, p);
          POW_PRECISION = v;
        }
        if (obj.hasOwnProperty(p = "FORMAT")) {
          v = obj[p];
          if (typeof v == "object")
            FORMAT = v;
          else
            throw Error(bignumberError + p + " not an object: " + v);
        }
        if (obj.hasOwnProperty(p = "ALPHABET")) {
          v = obj[p];
          if (typeof v == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(v)) {
            alphabetHasNormalDecimalDigits = v.slice(0, 10) == "0123456789";
            ALPHABET = v;
          } else {
            throw Error(bignumberError + p + " invalid: " + v);
          }
        }
      } else {
        throw Error(bignumberError + "Object expected: " + obj);
      }
    }
    return {
      DECIMAL_PLACES,
      ROUNDING_MODE,
      EXPONENTIAL_AT: [TO_EXP_NEG, TO_EXP_POS],
      RANGE: [MIN_EXP, MAX_EXP],
      CRYPTO,
      MODULO_MODE,
      POW_PRECISION,
      FORMAT,
      ALPHABET
    };
  };
  BigNumber2.isBigNumber = function(v) {
    if (!v || v._isBigNumber !== true)
      return false;
    if (!BigNumber2.DEBUG)
      return true;
    var i, n, c = v.c, e = v.e, s = v.s;
    out:
      if ({}.toString.call(c) == "[object Array]") {
        if ((s === 1 || s === -1) && e >= -MAX && e <= MAX && e === mathfloor(e)) {
          if (c[0] === 0) {
            if (e === 0 && c.length === 1)
              return true;
            break out;
          }
          i = (e + 1) % LOG_BASE;
          if (i < 1)
            i += LOG_BASE;
          if (String(c[0]).length == i) {
            for (i = 0; i < c.length; i++) {
              n = c[i];
              if (n < 0 || n >= BASE || n !== mathfloor(n))
                break out;
            }
            if (n !== 0)
              return true;
          }
        }
      } else if (c === null && e === null && (s === null || s === 1 || s === -1)) {
        return true;
      }
    throw Error(bignumberError + "Invalid BigNumber: " + v);
  };
  BigNumber2.maximum = BigNumber2.max = function() {
    return maxOrMin(arguments, P.lt);
  };
  BigNumber2.minimum = BigNumber2.min = function() {
    return maxOrMin(arguments, P.gt);
  };
  BigNumber2.random = function() {
    var pow2_53 = 9007199254740992;
    var random53bitInt = Math.random() * pow2_53 & 2097151 ? function() {
      return mathfloor(Math.random() * pow2_53);
    } : function() {
      return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
    };
    return function(dp) {
      var a, b, e, k, v, i = 0, c = [], rand = new BigNumber2(ONE);
      if (dp == null)
        dp = DECIMAL_PLACES;
      else
        intCheck(dp, 0, MAX);
      k = mathceil(dp / LOG_BASE);
      if (CRYPTO) {
        if (crypto.getRandomValues) {
          a = crypto.getRandomValues(new Uint32Array(k *= 2));
          for (; i < k; ) {
            v = a[i] * 131072 + (a[i + 1] >>> 11);
            if (v >= 9e15) {
              b = crypto.getRandomValues(new Uint32Array(2));
              a[i] = b[0];
              a[i + 1] = b[1];
            } else {
              c.push(v % 1e14);
              i += 2;
            }
          }
          i = k / 2;
        } else if (crypto.randomBytes) {
          a = crypto.randomBytes(k *= 7);
          for (; i < k; ) {
            v = (a[i] & 31) * 281474976710656 + a[i + 1] * 1099511627776 + a[i + 2] * 4294967296 + a[i + 3] * 16777216 + (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];
            if (v >= 9e15) {
              crypto.randomBytes(7).copy(a, i);
            } else {
              c.push(v % 1e14);
              i += 7;
            }
          }
          i = k / 7;
        } else {
          CRYPTO = false;
          throw Error(bignumberError + "crypto unavailable");
        }
      }
      if (!CRYPTO) {
        for (; i < k; ) {
          v = random53bitInt();
          if (v < 9e15)
            c[i++] = v % 1e14;
        }
      }
      k = c[--i];
      dp %= LOG_BASE;
      if (k && dp) {
        v = POWS_TEN[LOG_BASE - dp];
        c[i] = mathfloor(k / v) * v;
      }
      for (; c[i] === 0; c.pop(), i--)
        ;
      if (i < 0) {
        c = [e = 0];
      } else {
        for (e = -1; c[0] === 0; c.splice(0, 1), e -= LOG_BASE)
          ;
        for (i = 1, v = c[0]; v >= 10; v /= 10, i++)
          ;
        if (i < LOG_BASE)
          e -= LOG_BASE - i;
      }
      rand.e = e;
      rand.c = c;
      return rand;
    };
  }();
  BigNumber2.sum = function() {
    var i = 1, args = arguments, sum = new BigNumber2(args[0]);
    for (; i < args.length; )
      sum = sum.plus(args[i++]);
    return sum;
  };
  convertBase = function() {
    var decimal = "0123456789";
    function toBaseOut(str, baseIn, baseOut, alphabet) {
      var j, arr = [0], arrL, i = 0, len = str.length;
      for (; i < len; ) {
        for (arrL = arr.length; arrL--; arr[arrL] *= baseIn)
          ;
        arr[0] += alphabet.indexOf(str.charAt(i++));
        for (j = 0; j < arr.length; j++) {
          if (arr[j] > baseOut - 1) {
            if (arr[j + 1] == null)
              arr[j + 1] = 0;
            arr[j + 1] += arr[j] / baseOut | 0;
            arr[j] %= baseOut;
          }
        }
      }
      return arr.reverse();
    }
    return function(str, baseIn, baseOut, sign, callerIsToString) {
      var alphabet, d, e, k, r, x, xc, y, i = str.indexOf("."), dp = DECIMAL_PLACES, rm = ROUNDING_MODE;
      if (i >= 0) {
        k = POW_PRECISION;
        POW_PRECISION = 0;
        str = str.replace(".", "");
        y = new BigNumber2(baseIn);
        x = y.pow(str.length - i);
        POW_PRECISION = k;
        y.c = toBaseOut(toFixedPoint(coeffToString(x.c), x.e, "0"), 10, baseOut, decimal);
        y.e = y.c.length;
      }
      xc = toBaseOut(str, baseIn, baseOut, callerIsToString ? (alphabet = ALPHABET, decimal) : (alphabet = decimal, ALPHABET));
      e = k = xc.length;
      for (; xc[--k] == 0; xc.pop())
        ;
      if (!xc[0])
        return alphabet.charAt(0);
      if (i < 0) {
        --e;
      } else {
        x.c = xc;
        x.e = e;
        x.s = sign;
        x = div(x, y, dp, rm, baseOut);
        xc = x.c;
        r = x.r;
        e = x.e;
      }
      d = e + dp + 1;
      i = xc[d];
      k = baseOut / 2;
      r = r || d < 0 || xc[d + 1] != null;
      r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : i > k || i == k && (rm == 4 || r || rm == 6 && xc[d - 1] & 1 || rm == (x.s < 0 ? 8 : 7));
      if (d < 1 || !xc[0]) {
        str = r ? toFixedPoint(alphabet.charAt(1), -dp, alphabet.charAt(0)) : alphabet.charAt(0);
      } else {
        xc.length = d;
        if (r) {
          for (--baseOut; ++xc[--d] > baseOut; ) {
            xc[d] = 0;
            if (!d) {
              ++e;
              xc = [1].concat(xc);
            }
          }
        }
        for (k = xc.length; !xc[--k]; )
          ;
        for (i = 0, str = ""; i <= k; str += alphabet.charAt(xc[i++]))
          ;
        str = toFixedPoint(str, e, alphabet.charAt(0));
      }
      return str;
    };
  }();
  div = function() {
    function multiply(x, k, base) {
      var m, temp, xlo, xhi, carry = 0, i = x.length, klo = k % SQRT_BASE, khi = k / SQRT_BASE | 0;
      for (x = x.slice(); i--; ) {
        xlo = x[i] % SQRT_BASE;
        xhi = x[i] / SQRT_BASE | 0;
        m = khi * xlo + xhi * klo;
        temp = klo * xlo + m % SQRT_BASE * SQRT_BASE + carry;
        carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
        x[i] = temp % base;
      }
      if (carry)
        x = [carry].concat(x);
      return x;
    }
    function compare2(a, b, aL, bL) {
      var i, cmp;
      if (aL != bL) {
        cmp = aL > bL ? 1 : -1;
      } else {
        for (i = cmp = 0; i < aL; i++) {
          if (a[i] != b[i]) {
            cmp = a[i] > b[i] ? 1 : -1;
            break;
          }
        }
      }
      return cmp;
    }
    function subtract(a, b, aL, base) {
      var i = 0;
      for (; aL--; ) {
        a[aL] -= i;
        i = a[aL] < b[aL] ? 1 : 0;
        a[aL] = i * base + a[aL] - b[aL];
      }
      for (; !a[0] && a.length > 1; a.splice(0, 1))
        ;
    }
    return function(x, y, dp, rm, base) {
      var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0, yL, yz, s = x.s == y.s ? 1 : -1, xc = x.c, yc = y.c;
      if (!xc || !xc[0] || !yc || !yc[0]) {
        return new BigNumber2(!x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN : xc && xc[0] == 0 || !yc ? s * 0 : s / 0);
      }
      q = new BigNumber2(s);
      qc = q.c = [];
      e = x.e - y.e;
      s = dp + e + 1;
      if (!base) {
        base = BASE;
        e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
        s = s / LOG_BASE | 0;
      }
      for (i = 0; yc[i] == (xc[i] || 0); i++)
        ;
      if (yc[i] > (xc[i] || 0))
        e--;
      if (s < 0) {
        qc.push(1);
        more = true;
      } else {
        xL = xc.length;
        yL = yc.length;
        i = 0;
        s += 2;
        n = mathfloor(base / (yc[0] + 1));
        if (n > 1) {
          yc = multiply(yc, n, base);
          xc = multiply(xc, n, base);
          yL = yc.length;
          xL = xc.length;
        }
        xi = yL;
        rem = xc.slice(0, yL);
        remL = rem.length;
        for (; remL < yL; rem[remL++] = 0)
          ;
        yz = yc.slice();
        yz = [0].concat(yz);
        yc0 = yc[0];
        if (yc[1] >= base / 2)
          yc0++;
        do {
          n = 0;
          cmp = compare2(yc, rem, yL, remL);
          if (cmp < 0) {
            rem0 = rem[0];
            if (yL != remL)
              rem0 = rem0 * base + (rem[1] || 0);
            n = mathfloor(rem0 / yc0);
            if (n > 1) {
              if (n >= base)
                n = base - 1;
              prod = multiply(yc, n, base);
              prodL = prod.length;
              remL = rem.length;
              while (compare2(prod, rem, prodL, remL) == 1) {
                n--;
                subtract(prod, yL < prodL ? yz : yc, prodL, base);
                prodL = prod.length;
                cmp = 1;
              }
            } else {
              if (n == 0) {
                cmp = n = 1;
              }
              prod = yc.slice();
              prodL = prod.length;
            }
            if (prodL < remL)
              prod = [0].concat(prod);
            subtract(rem, prod, remL, base);
            remL = rem.length;
            if (cmp == -1) {
              while (compare2(yc, rem, yL, remL) < 1) {
                n++;
                subtract(rem, yL < remL ? yz : yc, remL, base);
                remL = rem.length;
              }
            }
          } else if (cmp === 0) {
            n++;
            rem = [0];
          }
          qc[i++] = n;
          if (rem[0]) {
            rem[remL++] = xc[xi] || 0;
          } else {
            rem = [xc[xi]];
            remL = 1;
          }
        } while ((xi++ < xL || rem[0] != null) && s--);
        more = rem[0] != null;
        if (!qc[0])
          qc.splice(0, 1);
      }
      if (base == BASE) {
        for (i = 1, s = qc[0]; s >= 10; s /= 10, i++)
          ;
        round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);
      } else {
        q.e = e;
        q.r = +more;
      }
      return q;
    };
  }();
  function format(n, i, rm, id) {
    var c0, e, ne, len, str;
    if (rm == null)
      rm = ROUNDING_MODE;
    else
      intCheck(rm, 0, 8);
    if (!n.c)
      return n.toString();
    c0 = n.c[0];
    ne = n.e;
    if (i == null) {
      str = coeffToString(n.c);
      str = id == 1 || id == 2 && (ne <= TO_EXP_NEG || ne >= TO_EXP_POS) ? toExponential(str, ne) : toFixedPoint(str, ne, "0");
    } else {
      n = round(new BigNumber2(n), i, rm);
      e = n.e;
      str = coeffToString(n.c);
      len = str.length;
      if (id == 1 || id == 2 && (i <= e || e <= TO_EXP_NEG)) {
        for (; len < i; str += "0", len++)
          ;
        str = toExponential(str, e);
      } else {
        i -= ne;
        str = toFixedPoint(str, e, "0");
        if (e + 1 > len) {
          if (--i > 0)
            for (str += "."; i--; str += "0")
              ;
        } else {
          i += e - len;
          if (i > 0) {
            if (e + 1 == len)
              str += ".";
            for (; i--; str += "0")
              ;
          }
        }
      }
    }
    return n.s < 0 && c0 ? "-" + str : str;
  }
  function maxOrMin(args, method) {
    var n, i = 1, m = new BigNumber2(args[0]);
    for (; i < args.length; i++) {
      n = new BigNumber2(args[i]);
      if (!n.s) {
        m = n;
        break;
      } else if (method.call(m, n)) {
        m = n;
      }
    }
    return m;
  }
  function normalise(n, c, e) {
    var i = 1, j = c.length;
    for (; !c[--j]; c.pop())
      ;
    for (j = c[0]; j >= 10; j /= 10, i++)
      ;
    if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {
      n.c = n.e = null;
    } else if (e < MIN_EXP) {
      n.c = [n.e = 0];
    } else {
      n.e = e;
      n.c = c;
    }
    return n;
  }
  parseNumeric = function() {
    var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i, dotAfter = /^([^.]+)\.$/, dotBefore = /^\.([^.]+)$/, isInfinityOrNaN = /^-?(Infinity|NaN)$/, whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(x, str, isNum, b) {
      var base, s = isNum ? str : str.replace(whitespaceOrPlus, "");
      if (isInfinityOrNaN.test(s)) {
        x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
      } else {
        if (!isNum) {
          s = s.replace(basePrefix, function(m, p1, p2) {
            base = (p2 = p2.toLowerCase()) == "x" ? 16 : p2 == "b" ? 2 : 8;
            return !b || b == base ? p1 : m;
          });
          if (b) {
            base = b;
            s = s.replace(dotAfter, "$1").replace(dotBefore, "0.$1");
          }
          if (str != s)
            return new BigNumber2(s, base);
        }
        if (BigNumber2.DEBUG) {
          throw Error(bignumberError + "Not a" + (b ? " base " + b : "") + " number: " + str);
        }
        x.s = null;
      }
      x.c = x.e = null;
    };
  }();
  function round(x, sd, rm, r) {
    var d, i, j, k, n, ni, rd, xc = x.c, pows10 = POWS_TEN;
    if (xc) {
      out: {
        for (d = 1, k = xc[0]; k >= 10; k /= 10, d++)
          ;
        i = sd - d;
        if (i < 0) {
          i += LOG_BASE;
          j = sd;
          n = xc[ni = 0];
          rd = n / pows10[d - j - 1] % 10 | 0;
        } else {
          ni = mathceil((i + 1) / LOG_BASE);
          if (ni >= xc.length) {
            if (r) {
              for (; xc.length <= ni; xc.push(0))
                ;
              n = rd = 0;
              d = 1;
              i %= LOG_BASE;
              j = i - LOG_BASE + 1;
            } else {
              break out;
            }
          } else {
            n = k = xc[ni];
            for (d = 1; k >= 10; k /= 10, d++)
              ;
            i %= LOG_BASE;
            j = i - LOG_BASE + d;
            rd = j < 0 ? 0 : n / pows10[d - j - 1] % 10 | 0;
          }
        }
        r = r || sd < 0 || xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);
        r = rm < 4 ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 && (i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
        if (sd < 1 || !xc[0]) {
          xc.length = 0;
          if (r) {
            sd -= x.e + 1;
            xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
            x.e = -sd || 0;
          } else {
            xc[0] = x.e = 0;
          }
          return x;
        }
        if (i == 0) {
          xc.length = ni;
          k = 1;
          ni--;
        } else {
          xc.length = ni + 1;
          k = pows10[LOG_BASE - i];
          xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
        }
        if (r) {
          for (; ; ) {
            if (ni == 0) {
              for (i = 1, j = xc[0]; j >= 10; j /= 10, i++)
                ;
              j = xc[0] += k;
              for (k = 1; j >= 10; j /= 10, k++)
                ;
              if (i != k) {
                x.e++;
                if (xc[0] == BASE)
                  xc[0] = 1;
              }
              break;
            } else {
              xc[ni] += k;
              if (xc[ni] != BASE)
                break;
              xc[ni--] = 0;
              k = 1;
            }
          }
        }
        for (i = xc.length; xc[--i] === 0; xc.pop())
          ;
      }
      if (x.e > MAX_EXP) {
        x.c = x.e = null;
      } else if (x.e < MIN_EXP) {
        x.c = [x.e = 0];
      }
    }
    return x;
  }
  function valueOf(n) {
    var str, e = n.e;
    if (e === null)
      return n.toString();
    str = coeffToString(n.c);
    str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(str, e) : toFixedPoint(str, e, "0");
    return n.s < 0 ? "-" + str : str;
  }
  P.absoluteValue = P.abs = function() {
    var x = new BigNumber2(this);
    if (x.s < 0)
      x.s = 1;
    return x;
  };
  P.comparedTo = function(y, b) {
    return compare(this, new BigNumber2(y, b));
  };
  P.decimalPlaces = P.dp = function(dp, rm) {
    var c, n, v, x = this;
    if (dp != null) {
      intCheck(dp, 0, MAX);
      if (rm == null)
        rm = ROUNDING_MODE;
      else
        intCheck(rm, 0, 8);
      return round(new BigNumber2(x), dp + x.e + 1, rm);
    }
    if (!(c = x.c))
      return null;
    n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;
    if (v = c[v])
      for (; v % 10 == 0; v /= 10, n--)
        ;
    if (n < 0)
      n = 0;
    return n;
  };
  P.dividedBy = P.div = function(y, b) {
    return div(this, new BigNumber2(y, b), DECIMAL_PLACES, ROUNDING_MODE);
  };
  P.dividedToIntegerBy = P.idiv = function(y, b) {
    return div(this, new BigNumber2(y, b), 0, 1);
  };
  P.exponentiatedBy = P.pow = function(n, m) {
    var half, isModExp, i, k, more, nIsBig, nIsNeg, nIsOdd, y, x = this;
    n = new BigNumber2(n);
    if (n.c && !n.isInteger()) {
      throw Error(bignumberError + "Exponent not an integer: " + valueOf(n));
    }
    if (m != null)
      m = new BigNumber2(m);
    nIsBig = n.e > 14;
    if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {
      y = new BigNumber2(Math.pow(+valueOf(x), nIsBig ? 2 - isOdd(n) : +valueOf(n)));
      return m ? y.mod(m) : y;
    }
    nIsNeg = n.s < 0;
    if (m) {
      if (m.c ? !m.c[0] : !m.s)
        return new BigNumber2(NaN);
      isModExp = !nIsNeg && x.isInteger() && m.isInteger();
      if (isModExp)
        x = x.mod(m);
    } else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0 ? x.c[0] > 1 || nIsBig && x.c[1] >= 24e7 : x.c[0] < 8e13 || nIsBig && x.c[0] <= 9999975e7))) {
      k = x.s < 0 && isOdd(n) ? -0 : 0;
      if (x.e > -1)
        k = 1 / k;
      return new BigNumber2(nIsNeg ? 1 / k : k);
    } else if (POW_PRECISION) {
      k = mathceil(POW_PRECISION / LOG_BASE + 2);
    }
    if (nIsBig) {
      half = new BigNumber2(0.5);
      if (nIsNeg)
        n.s = 1;
      nIsOdd = isOdd(n);
    } else {
      i = Math.abs(+valueOf(n));
      nIsOdd = i % 2;
    }
    y = new BigNumber2(ONE);
    for (; ; ) {
      if (nIsOdd) {
        y = y.times(x);
        if (!y.c)
          break;
        if (k) {
          if (y.c.length > k)
            y.c.length = k;
        } else if (isModExp) {
          y = y.mod(m);
        }
      }
      if (i) {
        i = mathfloor(i / 2);
        if (i === 0)
          break;
        nIsOdd = i % 2;
      } else {
        n = n.times(half);
        round(n, n.e + 1, 1);
        if (n.e > 14) {
          nIsOdd = isOdd(n);
        } else {
          i = +valueOf(n);
          if (i === 0)
            break;
          nIsOdd = i % 2;
        }
      }
      x = x.times(x);
      if (k) {
        if (x.c && x.c.length > k)
          x.c.length = k;
      } else if (isModExp) {
        x = x.mod(m);
      }
    }
    if (isModExp)
      return y;
    if (nIsNeg)
      y = ONE.div(y);
    return m ? y.mod(m) : k ? round(y, POW_PRECISION, ROUNDING_MODE, more) : y;
  };
  P.integerValue = function(rm) {
    var n = new BigNumber2(this);
    if (rm == null)
      rm = ROUNDING_MODE;
    else
      intCheck(rm, 0, 8);
    return round(n, n.e + 1, rm);
  };
  P.isEqualTo = P.eq = function(y, b) {
    return compare(this, new BigNumber2(y, b)) === 0;
  };
  P.isFinite = function() {
    return !!this.c;
  };
  P.isGreaterThan = P.gt = function(y, b) {
    return compare(this, new BigNumber2(y, b)) > 0;
  };
  P.isGreaterThanOrEqualTo = P.gte = function(y, b) {
    return (b = compare(this, new BigNumber2(y, b))) === 1 || b === 0;
  };
  P.isInteger = function() {
    return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
  };
  P.isLessThan = P.lt = function(y, b) {
    return compare(this, new BigNumber2(y, b)) < 0;
  };
  P.isLessThanOrEqualTo = P.lte = function(y, b) {
    return (b = compare(this, new BigNumber2(y, b))) === -1 || b === 0;
  };
  P.isNaN = function() {
    return !this.s;
  };
  P.isNegative = function() {
    return this.s < 0;
  };
  P.isPositive = function() {
    return this.s > 0;
  };
  P.isZero = function() {
    return !!this.c && this.c[0] == 0;
  };
  P.minus = function(y, b) {
    var i, j, t, xLTy, x = this, a = x.s;
    y = new BigNumber2(y, b);
    b = y.s;
    if (!a || !b)
      return new BigNumber2(NaN);
    if (a != b) {
      y.s = -b;
      return x.plus(y);
    }
    var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
    if (!xe || !ye) {
      if (!xc || !yc)
        return xc ? (y.s = -b, y) : new BigNumber2(yc ? x : NaN);
      if (!xc[0] || !yc[0]) {
        return yc[0] ? (y.s = -b, y) : new BigNumber2(xc[0] ? x : ROUNDING_MODE == 3 ? -0 : 0);
      }
    }
    xe = bitFloor(xe);
    ye = bitFloor(ye);
    xc = xc.slice();
    if (a = xe - ye) {
      if (xLTy = a < 0) {
        a = -a;
        t = xc;
      } else {
        ye = xe;
        t = yc;
      }
      t.reverse();
      for (b = a; b--; t.push(0))
        ;
      t.reverse();
    } else {
      j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;
      for (a = b = 0; b < j; b++) {
        if (xc[b] != yc[b]) {
          xLTy = xc[b] < yc[b];
          break;
        }
      }
    }
    if (xLTy)
      t = xc, xc = yc, yc = t, y.s = -y.s;
    b = (j = yc.length) - (i = xc.length);
    if (b > 0)
      for (; b--; xc[i++] = 0)
        ;
    b = BASE - 1;
    for (; j > a; ) {
      if (xc[--j] < yc[j]) {
        for (i = j; i && !xc[--i]; xc[i] = b)
          ;
        --xc[i];
        xc[j] += BASE;
      }
      xc[j] -= yc[j];
    }
    for (; xc[0] == 0; xc.splice(0, 1), --ye)
      ;
    if (!xc[0]) {
      y.s = ROUNDING_MODE == 3 ? -1 : 1;
      y.c = [y.e = 0];
      return y;
    }
    return normalise(y, xc, ye);
  };
  P.modulo = P.mod = function(y, b) {
    var q, s, x = this;
    y = new BigNumber2(y, b);
    if (!x.c || !y.s || y.c && !y.c[0]) {
      return new BigNumber2(NaN);
    } else if (!y.c || x.c && !x.c[0]) {
      return new BigNumber2(x);
    }
    if (MODULO_MODE == 9) {
      s = y.s;
      y.s = 1;
      q = div(x, y, 0, 3);
      y.s = s;
      q.s *= s;
    } else {
      q = div(x, y, 0, MODULO_MODE);
    }
    y = x.minus(q.times(y));
    if (!y.c[0] && MODULO_MODE == 1)
      y.s = x.s;
    return y;
  };
  P.multipliedBy = P.times = function(y, b) {
    var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc, base, sqrtBase, x = this, xc = x.c, yc = (y = new BigNumber2(y, b)).c;
    if (!xc || !yc || !xc[0] || !yc[0]) {
      if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
        y.c = y.e = y.s = null;
      } else {
        y.s *= x.s;
        if (!xc || !yc) {
          y.c = y.e = null;
        } else {
          y.c = [0];
          y.e = 0;
        }
      }
      return y;
    }
    e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
    y.s *= x.s;
    xcL = xc.length;
    ycL = yc.length;
    if (xcL < ycL)
      zc = xc, xc = yc, yc = zc, i = xcL, xcL = ycL, ycL = i;
    for (i = xcL + ycL, zc = []; i--; zc.push(0))
      ;
    base = BASE;
    sqrtBase = SQRT_BASE;
    for (i = ycL; --i >= 0; ) {
      c = 0;
      ylo = yc[i] % sqrtBase;
      yhi = yc[i] / sqrtBase | 0;
      for (k = xcL, j = i + k; j > i; ) {
        xlo = xc[--k] % sqrtBase;
        xhi = xc[k] / sqrtBase | 0;
        m = yhi * xlo + xhi * ylo;
        xlo = ylo * xlo + m % sqrtBase * sqrtBase + zc[j] + c;
        c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
        zc[j--] = xlo % base;
      }
      zc[j] = c;
    }
    if (c) {
      ++e;
    } else {
      zc.splice(0, 1);
    }
    return normalise(y, zc, e);
  };
  P.negated = function() {
    var x = new BigNumber2(this);
    x.s = -x.s || null;
    return x;
  };
  P.plus = function(y, b) {
    var t, x = this, a = x.s;
    y = new BigNumber2(y, b);
    b = y.s;
    if (!a || !b)
      return new BigNumber2(NaN);
    if (a != b) {
      y.s = -b;
      return x.minus(y);
    }
    var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
    if (!xe || !ye) {
      if (!xc || !yc)
        return new BigNumber2(a / 0);
      if (!xc[0] || !yc[0])
        return yc[0] ? y : new BigNumber2(xc[0] ? x : a * 0);
    }
    xe = bitFloor(xe);
    ye = bitFloor(ye);
    xc = xc.slice();
    if (a = xe - ye) {
      if (a > 0) {
        ye = xe;
        t = yc;
      } else {
        a = -a;
        t = xc;
      }
      t.reverse();
      for (; a--; t.push(0))
        ;
      t.reverse();
    }
    a = xc.length;
    b = yc.length;
    if (a - b < 0)
      t = yc, yc = xc, xc = t, b = a;
    for (a = 0; b; ) {
      a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
      xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
    }
    if (a) {
      xc = [a].concat(xc);
      ++ye;
    }
    return normalise(y, xc, ye);
  };
  P.precision = P.sd = function(sd, rm) {
    var c, n, v, x = this;
    if (sd != null && sd !== !!sd) {
      intCheck(sd, 1, MAX);
      if (rm == null)
        rm = ROUNDING_MODE;
      else
        intCheck(rm, 0, 8);
      return round(new BigNumber2(x), sd, rm);
    }
    if (!(c = x.c))
      return null;
    v = c.length - 1;
    n = v * LOG_BASE + 1;
    if (v = c[v]) {
      for (; v % 10 == 0; v /= 10, n--)
        ;
      for (v = c[0]; v >= 10; v /= 10, n++)
        ;
    }
    if (sd && x.e + 1 > n)
      n = x.e + 1;
    return n;
  };
  P.shiftedBy = function(k) {
    intCheck(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
    return this.times("1e" + k);
  };
  P.squareRoot = P.sqrt = function() {
    var m, n, r, rep, t, x = this, c = x.c, s = x.s, e = x.e, dp = DECIMAL_PLACES + 4, half = new BigNumber2("0.5");
    if (s !== 1 || !c || !c[0]) {
      return new BigNumber2(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
    }
    s = Math.sqrt(+valueOf(x));
    if (s == 0 || s == 1 / 0) {
      n = coeffToString(c);
      if ((n.length + e) % 2 == 0)
        n += "0";
      s = Math.sqrt(+n);
      e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);
      if (s == 1 / 0) {
        n = "5e" + e;
      } else {
        n = s.toExponential();
        n = n.slice(0, n.indexOf("e") + 1) + e;
      }
      r = new BigNumber2(n);
    } else {
      r = new BigNumber2(s + "");
    }
    if (r.c[0]) {
      e = r.e;
      s = e + dp;
      if (s < 3)
        s = 0;
      for (; ; ) {
        t = r;
        r = half.times(t.plus(div(x, t, dp, 1)));
        if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {
          if (r.e < e)
            --s;
          n = n.slice(s - 3, s + 1);
          if (n == "9999" || !rep && n == "4999") {
            if (!rep) {
              round(t, t.e + DECIMAL_PLACES + 2, 0);
              if (t.times(t).eq(x)) {
                r = t;
                break;
              }
            }
            dp += 4;
            s += 4;
            rep = 1;
          } else {
            if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
              round(r, r.e + DECIMAL_PLACES + 2, 1);
              m = !r.times(r).eq(x);
            }
            break;
          }
        }
      }
    }
    return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
  };
  P.toExponential = function(dp, rm) {
    if (dp != null) {
      intCheck(dp, 0, MAX);
      dp++;
    }
    return format(this, dp, rm, 1);
  };
  P.toFixed = function(dp, rm) {
    if (dp != null) {
      intCheck(dp, 0, MAX);
      dp = dp + this.e + 1;
    }
    return format(this, dp, rm);
  };
  P.toFormat = function(dp, rm, format2) {
    var str, x = this;
    if (format2 == null) {
      if (dp != null && rm && typeof rm == "object") {
        format2 = rm;
        rm = null;
      } else if (dp && typeof dp == "object") {
        format2 = dp;
        dp = rm = null;
      } else {
        format2 = FORMAT;
      }
    } else if (typeof format2 != "object") {
      throw Error(bignumberError + "Argument not an object: " + format2);
    }
    str = x.toFixed(dp, rm);
    if (x.c) {
      var i, arr = str.split("."), g1 = +format2.groupSize, g2 = +format2.secondaryGroupSize, groupSeparator = format2.groupSeparator || "", intPart = arr[0], fractionPart = arr[1], isNeg = x.s < 0, intDigits = isNeg ? intPart.slice(1) : intPart, len = intDigits.length;
      if (g2)
        i = g1, g1 = g2, g2 = i, len -= i;
      if (g1 > 0 && len > 0) {
        i = len % g1 || g1;
        intPart = intDigits.substr(0, i);
        for (; i < len; i += g1)
          intPart += groupSeparator + intDigits.substr(i, g1);
        if (g2 > 0)
          intPart += groupSeparator + intDigits.slice(i);
        if (isNeg)
          intPart = "-" + intPart;
      }
      str = fractionPart ? intPart + (format2.decimalSeparator || "") + ((g2 = +format2.fractionGroupSize) ? fractionPart.replace(new RegExp("\\d{" + g2 + "}\\B", "g"), "$&" + (format2.fractionGroupSeparator || "")) : fractionPart) : intPart;
    }
    return (format2.prefix || "") + str + (format2.suffix || "");
  };
  P.toFraction = function(md) {
    var d, d0, d1, d2, e, exp, n, n0, n1, q, r, s, x = this, xc = x.c;
    if (md != null) {
      n = new BigNumber2(md);
      if (!n.isInteger() && (n.c || n.s !== 1) || n.lt(ONE)) {
        throw Error(bignumberError + "Argument " + (n.isInteger() ? "out of range: " : "not an integer: ") + valueOf(n));
      }
    }
    if (!xc)
      return new BigNumber2(x);
    d = new BigNumber2(ONE);
    n1 = d0 = new BigNumber2(ONE);
    d1 = n0 = new BigNumber2(ONE);
    s = coeffToString(xc);
    e = d.e = s.length - x.e - 1;
    d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
    md = !md || n.comparedTo(d) > 0 ? e > 0 ? d : n1 : n;
    exp = MAX_EXP;
    MAX_EXP = 1 / 0;
    n = new BigNumber2(s);
    n0.c[0] = 0;
    for (; ; ) {
      q = div(n, d, 0, 1);
      d2 = d0.plus(q.times(d1));
      if (d2.comparedTo(md) == 1)
        break;
      d0 = d1;
      d1 = d2;
      n1 = n0.plus(q.times(d2 = n1));
      n0 = d2;
      d = n.minus(q.times(d2 = d));
      n = d2;
    }
    d2 = div(md.minus(d0), d1, 0, 1);
    n0 = n0.plus(d2.times(n1));
    d0 = d0.plus(d2.times(d1));
    n0.s = n1.s = x.s;
    e = e * 2;
    r = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().comparedTo(div(n0, d0, e, ROUNDING_MODE).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];
    MAX_EXP = exp;
    return r;
  };
  P.toNumber = function() {
    return +valueOf(this);
  };
  P.toPrecision = function(sd, rm) {
    if (sd != null)
      intCheck(sd, 1, MAX);
    return format(this, sd, rm, 2);
  };
  P.toString = function(b) {
    var str, n = this, s = n.s, e = n.e;
    if (e === null) {
      if (s) {
        str = "Infinity";
        if (s < 0)
          str = "-" + str;
      } else {
        str = "NaN";
      }
    } else {
      if (b == null) {
        str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(coeffToString(n.c), e) : toFixedPoint(coeffToString(n.c), e, "0");
      } else if (b === 10 && alphabetHasNormalDecimalDigits) {
        n = round(new BigNumber2(n), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
        str = toFixedPoint(coeffToString(n.c), n.e, "0");
      } else {
        intCheck(b, 2, ALPHABET.length, "Base");
        str = convertBase(toFixedPoint(coeffToString(n.c), e, "0"), 10, b, s, true);
      }
      if (s < 0 && n.c[0])
        str = "-" + str;
    }
    return str;
  };
  P.valueOf = P.toJSON = function() {
    return valueOf(this);
  };
  P._isBigNumber = true;
  P[Symbol.toStringTag] = "BigNumber";
  P[Symbol.for("nodejs.util.inspect.custom")] = P.valueOf;
  if (configObject != null)
    BigNumber2.set(configObject);
  return BigNumber2;
}
function bitFloor(n) {
  var i = n | 0;
  return n > 0 || n === i ? i : i - 1;
}
function coeffToString(a) {
  var s, z, i = 1, j = a.length, r = a[0] + "";
  for (; i < j; ) {
    s = a[i++] + "";
    z = LOG_BASE - s.length;
    for (; z--; s = "0" + s)
      ;
    r += s;
  }
  for (j = r.length; r.charCodeAt(--j) === 48; )
    ;
  return r.slice(0, j + 1 || 1);
}
function compare(x, y) {
  var a, b, xc = x.c, yc = y.c, i = x.s, j = y.s, k = x.e, l = y.e;
  if (!i || !j)
    return null;
  a = xc && !xc[0];
  b = yc && !yc[0];
  if (a || b)
    return a ? b ? 0 : -j : i;
  if (i != j)
    return i;
  a = i < 0;
  b = k == l;
  if (!xc || !yc)
    return b ? 0 : !xc ^ a ? 1 : -1;
  if (!b)
    return k > l ^ a ? 1 : -1;
  j = (k = xc.length) < (l = yc.length) ? k : l;
  for (i = 0; i < j; i++)
    if (xc[i] != yc[i])
      return xc[i] > yc[i] ^ a ? 1 : -1;
  return k == l ? 0 : k > l ^ a ? 1 : -1;
}
function intCheck(n, min, max, name) {
  if (n < min || n > max || n !== mathfloor(n)) {
    throw Error(bignumberError + (name || "Argument") + (typeof n == "number" ? n < min || n > max ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(n));
  }
}
function isOdd(n) {
  var k = n.c.length - 1;
  return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
}
function toExponential(str, e) {
  return (str.length > 1 ? str.charAt(0) + "." + str.slice(1) : str) + (e < 0 ? "e" : "e+") + e;
}
function toFixedPoint(str, e, z) {
  var len, zs;
  if (e < 0) {
    for (zs = z + "."; ++e; zs += z)
      ;
    str = zs + str;
  } else {
    len = str.length;
    if (++e > len) {
      for (zs = z, e -= len; --e; zs += z)
        ;
      str += zs;
    } else if (e < len) {
      str = str.slice(0, e) + "." + str.slice(e);
    }
  }
  return str;
}
var BigNumber = clone();
var Stepper_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$5 = { class: "stepper" };
const _hoisted_2$2 = ["disabled"];
const _hoisted_3$2 = {
  key: 1,
  class: "input"
};
const _hoisted_4$1 = ["disabled"];
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  props: {
    disabled: { type: Boolean, default: false },
    inputDisabled: { type: Boolean, default: false },
    modelValue: null,
    step: { default: 1 },
    max: { default: Infinity },
    min: { default: 0 },
    width: { default: "50px" },
    integer: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    let refProps = toRefs$1(props);
    let numValue = ref(refProps.modelValue.value);
    watch(numValue, (newValue, oldValue) => {
      let v = numValue.value;
      if (refProps.integer.value) {
        v = Number(String(numValue.value).replace(/[^0-9]/g, ""));
      }
      upModelValue(v);
    });
    watch(refProps.modelValue, (newValue) => {
      upModelValue(newValue);
    });
    let upModelValue = (v) => {
      let { min, max } = refProps;
      let nv = v;
      if (numValue.value < min.value) {
        nv = min.value;
      }
      if (numValue.value > max.value) {
        nv = max.value;
      }
      numValue.value = nv;
      emit("update:modelValue", nv);
    };
    let inpuBlur = () => {
      upModelValue(numValue.value);
    };
    inpuBlur();
    let plusClick = () => {
      let { modelValue, step } = refProps;
      let newValue = Number(BigNumber.sum(modelValue.value, step.value));
      upModelValue(newValue);
    };
    let minusClick = () => {
      let { modelValue, step } = refProps;
      let num = new BigNumber(modelValue.value);
      let newValue = Number(num.minus(step.value));
      upModelValue(newValue);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createElementVNode("button", {
          class: "minus",
          disabled: unref(numValue) <= __props.min || __props.disabled,
          onClick: _cache[0] || (_cache[0] = (...args) => unref(minusClick) && unref(minusClick)(...args))
        }, [
          createVNode(unref(Minus), {
            class: "icon",
            theme: "filled",
            fill: "#333",
            strokeWidth: 3,
            strokeLinecap: "butt"
          })
        ], 8, _hoisted_2$2),
        createElementVNode("div", {
          class: "num",
          style: normalizeStyle({ width: __props.width })
        }, [
          !__props.disabled && !__props.inputDisabled ? withDirectives((openBlock(), createElementBlock("input", {
            key: 0,
            class: "input",
            type: "number",
            onBlur: _cache[1] || (_cache[1] = (...args) => unref(inpuBlur) && unref(inpuBlur)(...args)),
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef$1(numValue) ? numValue.value = $event : numValue = $event)
          }, null, 544)), [
            [vModelText, unref(numValue)]
          ]) : (openBlock(), createElementBlock("div", _hoisted_3$2, toDisplayString(unref(numValue)), 1))
        ], 4),
        createElementVNode("button", {
          disabled: unref(numValue) >= __props.max || __props.disabled,
          class: "plus",
          onClick: _cache[3] || (_cache[3] = (...args) => unref(plusClick) && unref(plusClick)(...args))
        }, [
          createVNode(unref(Plus), {
            class: "icon",
            theme: "filled",
            fill: "#333",
            strokeWidth: 3,
            strokeLinecap: "butt"
          })
        ], 8, _hoisted_4$1)
      ]);
    };
  }
});
var Stepper = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-41a7a542"]]);
Stepper.name = "SmStepper";
Stepper.install = (Vue) => {
  Vue.component(Stepper.name, Stepper);
};
var Switch_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$4 = /* @__PURE__ */ createStaticVNode('<div class="base" data-v-a90cc082><div class="lamp con" data-v-a90cc082></div><div class="close-sunken con" data-v-a90cc082></div></div><div class="handle" data-v-a90cc082><div class="sunken" data-v-a90cc082></div></div>', 2);
const _hoisted_3$1 = [
  _hoisted_1$4
];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  props: {
    size: { default: "20px" },
    color: { default: "#587de6e3" },
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit }) {
    const props = __props;
    toRefs$1(props);
    let style = computed(() => `--switch-height:${props.size};--color:${props.color}`);
    let change = () => {
      if (!props.disabled) {
        emit("change", !props.modelValue);
        emit("update:modelValue", !props.modelValue);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["smart-switch", { "active": __props.modelValue, disabled: __props.disabled }]),
        style: normalizeStyle(unref(style)),
        onClick: _cache[0] || (_cache[0] = (...args) => unref(change) && unref(change)(...args))
      }, _hoisted_3$1, 6);
    };
  }
});
var Switch = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-a90cc082"]]);
Switch.name = "SmSwitch";
Switch.install = (Vue) => {
  Vue.component(Switch.name, Switch);
};
var Tab_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$3 = {
  key: 0,
  class: "content"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    name: null,
    title: null
  },
  setup(__props) {
    const props = __props;
    toRefs$1(props);
    let tabInstance = inject("tabs");
    let active = computed(() => tabInstance.props.active);
    let slot = useSlots();
    let hasSlot = slot.default ? true : false;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        unref(active) == __props.name && unref(hasSlot) ? (openBlock(), createElementBlock("div", _hoisted_1$3, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
var Tab = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-972d5e8c"]]);
var Tabs_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$2 = { class: "tabs border-solid-b-05" };
const _hoisted_2$1 = ["onClick"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    active: null
  },
  emits: ["update:active", "change", "tab-click"],
  setup(__props, { emit }) {
    const props = __props;
    let refProps = toRefs$1(props);
    let instance = getCurrentInstance();
    let getSlot = instance.slots.default;
    let tabProps = ref([]);
    let tabsRef = ref(null);
    let observer = new MutationObserver(() => {
      reset();
    });
    let config = { attributes: false, childList: true, subtree: true };
    onMounted(() => {
      observer.observe(tabsRef.value, config);
    });
    onBeforeUnmount(() => {
      observer.disconnect();
    });
    let reset = () => {
      let slot = getSlot();
      if (!slot[0].props) {
        slot = slot[0].children;
      }
      tabProps.value = slot.map(({ props: props2 }) => props2);
    };
    reset();
    let setTabsActive = (item) => {
      if (item.name != refProps.active.value) {
        emit("update:active", item.name);
        emit("change", item);
      }
      emit("tab-click", item);
    };
    provide("tabs", instance);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "tabsRef",
        ref: tabsRef
      }, [
        createElementVNode("div", _hoisted_1$2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(tabProps), (item, index2) => {
            return openBlock(), createElementBlock("div", {
              class: normalizeClass(["tab", { "active": __props.active == item.name }]),
              onClick: ($event) => unref(setTabsActive)(item),
              key: index2
            }, toDisplayString(item.title), 11, _hoisted_2$1);
          }), 128))
        ]),
        createElementVNode("div", null, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])
      ], 512);
    };
  }
});
var Tabs = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-54c08175"]]);
Tab.name = "SmTab";
Tabs.name = "SmTabs";
Tab.install = (Vue) => {
  Vue.component(Tab.name, Tab);
  Vue.component(Tabs.name, Tabs);
};
const isArray = Array.isArray;
const isSymbol = (val) => typeof val === "symbol";
new Set(Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(isSymbol));
function isRef(r) {
  return !!(r && r.__v_isRef === true);
}
function toRefs(object) {
  const ret = isArray(object) ? new Array(object.length) : {};
  for (const key in object) {
    ret[key] = toRef(object, key);
  }
  return ret;
}
class ObjectRefImpl {
  constructor(_object, _key, _defaultValue) {
    this._object = _object;
    this._key = _key;
    this._defaultValue = _defaultValue;
    this.__v_isRef = true;
  }
  get value() {
    const val = this._object[this._key];
    return val === void 0 ? this._defaultValue : val;
  }
  set value(newVal) {
    this._object[this._key] = newVal;
  }
}
function toRef(object, key, defaultValue) {
  const val = object[key];
  return isRef(val) ? val : new ObjectRefImpl(object, key, defaultValue);
}
Promise.resolve();
var TabBar_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$1 = { class: "tab-bar-father" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    active: null,
    fixed: { type: Boolean, default: false },
    shadow: { type: Boolean, default: true }
  },
  emits: ["update:active", "change", "tab-click"],
  setup(__props, { emit }) {
    const props = __props;
    let { active } = toRefs(props);
    let instance = getCurrentInstance();
    provide("tabBar", instance);
    let setTabBarActive = (item) => {
      if (item.name != active.value) {
        emit("update:active", item.name);
        emit("change", item);
      }
      emit("tab-click", item);
    };
    provide("setTabBarActive", setTabBarActive);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createElementVNode("div", {
          class: normalizeClass(["fixed-self", { "fixed bottom-0": __props.fixed }])
        }, [
          createElementVNode("div", {
            class: normalizeClass([{ "tab-shadow": __props.shadow }, "tab-bar border-solid-t-05 border-solid-b-05"])
          }, [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ], 2)
        ], 2)
      ]);
    };
  }
});
var TabBar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7cdea2a5"]]);
TabBar.name = "TabBar";
TabBar.install = (Vue) => {
  Vue.component(TabBar.name, TabBar);
};
var Button_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1 = ["disabled"];
const _hoisted_2 = { class: "btn-text" };
const _hoisted_3 = { class: "flex items-center relative" };
const _hoisted_4 = {
  key: 0,
  class: "animate-spin"
};
var buttonEnum = /* @__PURE__ */ ((buttonEnum2) => {
  buttonEnum2["default"] = "white";
  buttonEnum2["primary"] = "blue";
  buttonEnum2["success"] = "green";
  buttonEnum2["warning"] = "yello";
  buttonEnum2["danger"] = "red";
  return buttonEnum2;
})(buttonEnum || {});
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    type: { default: "default" },
    line: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    size: { default: "normal" },
    block: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    round: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    let refProps = toRefs$1(props);
    let btnClass = computed(() => buttonEnum[refProps.type.value]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(["smart-btn", [
          unref(btnClass),
          { "w-full": __props.size == "large", block: __props.block, disabled: __props.disabled, line: __props.line, round: __props.round }
        ]]),
        disabled: __props.disabled
      }, [
        createElementVNode("div", {
          class: normalizeClass(["flex-center", __props.size])
        }, [
          createElementVNode("div", _hoisted_2, [
            createElementVNode("div", _hoisted_3, [
              __props.loading ? (openBlock(), createElementBlock("div", _hoisted_4, [
                createVNode(unref(LoadingOne), { size: "10px" })
              ])) : createCommentVNode("", true),
              createElementVNode("div", null, [
                renderSlot(_ctx.$slots, "default", {}, void 0, true)
              ])
            ])
          ])
        ], 2)
      ], 10, _hoisted_1);
    };
  }
});
var Button = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a4f72b02"]]);
Button.name = "SmButton";
Button.install = (Vue) => {
  Vue.component(Button.name, Button);
};
var tailwind = "";
var main = "";
var color = "";
let components = {
  Cell,
  Checkbox,
  Form,
  Input,
  NavBar,
  Radio,
  Stepper,
  Switch,
  Tab,
  TabBar,
  Button
};
var index = {
  install(Vue) {
    Object.values(components).forEach((component) => {
      component.install(Vue);
    });
  }
};
export { Button, Cell, Checkbox, Form, Input, NavBar, Radio, Stepper, Switch, Tab, TabBar, index as default };
