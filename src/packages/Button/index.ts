import Button from './Button.vue'

Button.name = 'SmButton'

Button.install = (Vue: any)=>{

  Vue.component(Button.name, Button)

}

export default Button as any