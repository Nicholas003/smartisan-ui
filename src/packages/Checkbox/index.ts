import Checkbox from './Checkbox.vue'
import CheckboxGroup from './CheckboxGroup.vue'

CheckboxGroup.name = 'SmCheckboxGroup'

Checkbox.name = 'SmCheckbox'

Checkbox.install = (Vue: any)=>{

  Vue.component(Checkbox.name, Checkbox)
  Vue.component(CheckboxGroup.name, CheckboxGroup)

}

export default Checkbox as any