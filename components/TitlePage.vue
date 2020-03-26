<template>
    <div class="title-page">
        {{ title }}
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type:String,
            required: true
        }
    }
}
</script>

<style scoped>
    .title-page {
        border-radius:15px;
        padding:10px;
        text-align: center;
        background-color: rgba(128, 128, 128, 0.356);
    }
</style>