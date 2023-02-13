<template>
    <div>
        <div v-for="task in allTasks" :key="task.id">
            <EveryTask :task="task" />
        </div>
    </div>
</template>

<script>
import EveryTask from '@/components/EveryTask.vue'
import { mapGetters } from 'vuex';
export default {
    components: {
        EveryTask
    },
    computed: {
        ...mapGetters(["allTasks"])
    }
};
</script>