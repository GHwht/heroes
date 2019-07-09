<template>
     <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h2 class="sub-header">Add Equip</h2>
        <form>
            <div class="form-group">
                <label for="txtName">名称</label>
                <input v-focus type="text" class="form-control" id="txtName" v-model="formData.name" placeholder="请输入名称">
            </div>
            <div class="form-group">
                <label for="gender">价格</label>
                <input type="text" class="form-control" id="gender" v-model="formData.price" placeholder="请输入价格">
            </div>
            <div class="form-group">
                <label for="skill">作用</label>
                <input type="text" class="form-control" id="skill" v-model="formData.effect" placeholder="请输入装备效果">
            </div>
            <button @click.prevent="heroAdd" class="btn btn-success">添加</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            formData: {
                name:'',
                price:'',
                effect:''
            }
        }
    },
    methods: {
        heroAdd() {
            console.log(this.formData)
            // this.$router.push({name:'hero'})
            axios
                .post('http://localhost:3000/equip', this.formData) 
                .then( (res) => {
                    const {status, data} = res
                    console.log(res)
                    if (status == 201) {
                        console.log('fdaf')
                        this.$router.push({name:'equip'})
                    }
                })
        }
    },
}
</script>

<style>

</style>
