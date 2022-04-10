import Tab from './Tab.vue'
import Tabs from './Tabs.vue'

Tab.name = 'SmTab'

Tabs.name = 'SmTabs'

Tab.install = (Vue: any) => {
  Vue.component(Tab.name, Tab)
  Vue.component(Tabs.name, Tabs)
}

export default Tab as any
