import Form from './Form.vue'
import FormItem from './FormItem.vue'

FormItem.name = 'SmFormItem'

Form.name = 'SmForm'

Form.install = (Vue: any)=>{

  Vue.component(Form.name, Form)
  Vue.component(FormItem.name, FormItem)

}

export default Form as any