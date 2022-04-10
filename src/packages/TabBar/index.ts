import TabBar from './TabBar.vue'

TabBar.name = 'TabBar'

TabBar.install = (Vue: any)=>{

  Vue.component(TabBar.name, TabBar)

}

export default TabBar as any