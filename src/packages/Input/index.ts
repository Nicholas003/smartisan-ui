import Input from './Input.vue'

Input.name = 'SmInput'

Input.install = (Vue: any)=>{

  Vue.component(Input.name, Input)

}

export default Input as any