import Radio from './Radio.vue'
import RadioGroup from './RadioGroup.vue'

RadioGroup.name = 'SmRadioGroup'

Radio.name = 'SmRadio'

Radio.install = (Vue: any) => {
  Vue.component(Radio.name, Radio)
  Vue.component(RadioGroup.name, RadioGroup)
}

export default Radio as any
