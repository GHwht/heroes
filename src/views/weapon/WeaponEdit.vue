<template>
     <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h2 class="sub-header">Edit Hero</h2>
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
                <input type="text" class="form-control" id="skill" v-model="formData.effect" placeholder="请输入技能">
            </div>
            <button @click.prevent="WeaponEdit" class="btn btn-success">修改</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    props:['id'],
    data() {
        return {
            formData: {
                name:'',
                price:'',
                effect:''
            }
        }
    },
    mounted() {
        this.getEdit()
        console.log(this.id)
    },
    methods: {
        getEdit() {
            axios
                .get('http://localhost:3000/weapon/' + this.id)
                .then( (res) => {
                    const {status, data} = res
                    if (status == 200) {
                        this. formData = data
                    }
                })
        },
        WeaponEdit() {
            axios
                .put(`http://localhost:3000/weapon/${this.id}`, this.formData)
                .then( (res) => {
                    this.$router.push({name:'weapon'})
                })

        }
    },
}
</script>

<style>

</style>
