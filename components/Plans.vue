<template>
    <div class="plans">
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<script>
    export default {
        methods: {
            selectPlan(plan) {
                this.$emit('selectPlan', plan)
            }
        }
    }
</script>

<style>

</style>