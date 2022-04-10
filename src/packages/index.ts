import Cell from './Cell/index'
import Checkbox from './Checkbox/index'
import Form from './Form/index'
import Input from './Input/index'
import NavBar from './NavBar/index'
import Radio from './Radio/index'
import Stepper from './Stepper/index'
import Switch from './Switch/index'
import Tab from './Tab/index'
import TabBar from './TabBar/index'
import Button from './Button/index'
import './style/tailwind.css'
import './style/main.scss'
import './style/color.scss'

let components = {
  Cell,Checkbox,Form,Input,NavBar,Radio,Stepper,Switch,Tab,TabBar,Button
}
export {
  Cell,Checkbox,Form,Input,NavBar,Radio,Stepper,Switch,Tab,TabBar,Button
}


export default {
  install(Vue:any){
    Object.values(components).forEach((component)=>{
      component.install(Vue)
    })
  }
}