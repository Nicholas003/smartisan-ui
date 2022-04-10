import Stepper from './Stepper.vue'

Stepper.name = 'SmStepper'

Stepper.install = (Vue: any)=>{

  Vue.component(Stepper.name, Stepper)

}

export default Stepper as any