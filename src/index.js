


import LayoutLeftRight from './packages/layout-left-right/index'
import LayoutTopBottom from './packages/layout-top-bottom/index'

const components = {
    install:function(Vue){

        Vue.component(LayoutLeftRight.name, LayoutLeftRight)
        Vue.component(LayoutTopBottom.name, LayoutTopBottom)

    }
}

// 导出该组件
export default components 
