// 导入Vue
import Vue from 'vue'

// 导入 vue-router
import VueRouter from 'vue-router'

// 在 vue 中注册 VueRouter
Vue.use(VueRouter)

// 导入组件
import HeroList from './views/hero/HeroList'
import HeroAdd from './views/hero/HeroAdd'
import HeroEdit from './views/hero/HeroEdit'

import WeaponList from './views/weapon/WeaponList'
import WeaponAdd from './views/weapon/WeaponAdd'
import WeaponEdit from './views/weapon/WeaponEdit'

import EquipList from './views/equip/EquipList'
import EquipAdd from './views/equip/EquipAdd'
import EquipEdit from './views/equip/EquipEdit'

// 创建路由对象
const router = new VueRouter({
    routes:[
        { path:'/', redirect:'/hero' },
        { name:'hero', path:'/hero', component:HeroList },
        { name:'HeroAdd', path:'/hero/add', component:HeroAdd },
        { name:'HeroEdit', path:'/hero/edit/:id', component:HeroEdit, props:true },
        { name:'weapon', path:'/weapon', component:WeaponList },
        { name:'WeaponAdd', path:'/weapon/add', component:WeaponAdd },
        { name:'WeaponEdit', path:'/weapon/edit/:id', component:WeaponEdit, props:true },
        { name:'equip', path:'/equip', component:EquipList },
        { name:'EquipAdd', path:'/equip/add', component:EquipAdd },
        { name:'EquipEdit', path:'/equip/edit/:id', component:EquipEdit, props:true },
    ],
    linkActiveClass:'active'
})

export default router