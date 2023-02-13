<template>
    <div>
        <div class="row">
            <input @change="taskNameChange" v-bind:value="taskName" class="col form-control mx-2" type="text" />
            <button @click="addEveryTask" class="col-auto btn btn-primary">Add</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import { v1 } from "uuid";

export default {
    data() {
        return {
            taskName: ""
        };
    },
    methods: {
        ...mapActions(['addTask']),
        taskNameChange(e) {
            this.taskName = e.target.value;
        },
        addEveryTask() {
            this.addTask({
                id: v1(),
                title: this.taskName
            });
            this.taskName = "";
        }
    }
};
</script>