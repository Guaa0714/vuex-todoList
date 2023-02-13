<template>
    <div>
        <div class="row my-5 justify-content-between">
            <h2 v-if="!edit" class="col-auto">{{ task.title }}</h2>
            <input @change="taskNameChange" v-bind:value="taskName" v-else type="text" class="col form-control" />
            <div class="col-auto">
                <button @click="editEveryTask(task)" class="btn btn-primary mx-2">{{ edit?'OK':'Edit' }}</button>
                <button @click="delTask(task.id)" class="btn btn-danger">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    props: {
        task: {}
    },
    data() {
        return {
            taskName: "",
            edit: false
        };
    },
    methods: {
        ...mapActions(['delTask', 'editTask']),
        taskNameChange(e) {
            this.taskName = e.target.value;
        },
        editEveryTask(task) {
            this.edit = this.edit == true ? false : true;
            if(this.edit){
                this.taskName = task.title;
                this.editTask(task);
            } else {
                task.title = this.taskName;
            }
        }
    }
};
</script>

<style scoped>
</style>