import NavBar from './NavBar.vue'

NavBar.name = 'SmNavBar'

NavBar.install = (Vue: any)=>{

  Vue.component(NavBar.name, NavBar)

}

export default NavBar as any