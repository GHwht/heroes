<template>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h2 class="sub-header">Weapon List</h2>
        <router-link class="btn btn-success" to="/weapon/add">Add</router-link>
        <div class="table-responsive">
            <table class="table table-striped">
            <thead>
                <tr>
                <th>排名</th>
                <th>名称</th>
                <th>价格</th>
                <th>作用</th>
                <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="( item, index ) in list" :key="item.id">
                <td>{{ index + 1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
                <td>{{ item.effect }}</td>
                <td>
                    <router-link :to="{ name:'WeaponEdit', params:{id:item.id} }">
                        <a>edit</a>
                    </router-link>
                    &nbsp;&nbsp;
                    <a href="javascript:window.confirm('Are you sure?')">delete</a>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
</template>

<script>

// 导入axios
import axios from 'axios'

export default {
   data() {
       return {
           list:[]
       }
   },
   mounted() {
       this.getData()
   },
   methods: {
       getData() {
           axios
            .get('http://localhost:3000/weapon')
            .then( (res) => {
                console.log(res)
                const {status, data} = res;
                if (status == 200) {
                    this.list = data;
                }
            })
       }
   },
}
</script>

<style scoped>

</style>


