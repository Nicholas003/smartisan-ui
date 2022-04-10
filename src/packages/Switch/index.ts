import Switch from './Switch.vue'

Switch.name = 'SmSwitch'

Switch.install = (Vue: any)=>{

  Vue.component(Switch.name, Switch)

}

export default Switch as any