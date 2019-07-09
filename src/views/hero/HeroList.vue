<template>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h2 class="sub-header">Hero List</h2>
        <router-link to="/hero/add" class=" add btn btn-success">
            <a>Add</a>
        </router-link>
        <div class="table-responsive">
            <table class="table table-striped">
            <thead>
                <tr>
                <th>排名</th>
                <th>名称</th>
                <th>性别</th>
                <th>技能</th>
                <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="( item, index ) in list" :key="item.id">
                <td>{{ index + 1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.gender }}</td>
                <td>{{ item.skill }}</td>
                <td>
                    <router-link :to="{name:'HeroEdit', params:{id:item.id} }">
                        <a>edit</a>
                    </router-link>
                    &nbsp;&nbsp;
                    <a href="javascript:" @click="del(item.id)">delete</a>
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
            .get('http://localhost:3000/heroes')
            .then( (res) => {
                console.log(res)
                const {status, data} = res;
                if (status == 200) {
                    this.list = data;
                }
            })
       },
       del(ID) {
            // 弹出确认框 判断是否删除
            if(!confirm('确认删除该数据吗?')) {
                return false
            }
            // 发送axios请求
            axios
                .delete('http://localhost:3000/heroes/' + ID)
                .then( (res) => {
                    console.log('删除成功')
                    this.getData()
                })
       }
   },
}
</script>

<style scoped>
    .add a {
        color: white;
    }
</style>


