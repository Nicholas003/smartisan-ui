import Cell from './Cell.vue'
import CellGroup from './CellGroup.vue'

CellGroup.name = 'SmCellGroup'

Cell.name = 'SmCell'

Cell.install = (Vue: any)=>{

  Vue.component(CellGroup.name, CellGroup)
  Vue.component(Cell.name, Cell)

}

export default Cell as any