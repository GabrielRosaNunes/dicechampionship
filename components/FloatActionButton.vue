<template>
    <div class="float-action-btn">
        <v-btn
            fab dark color="green"
        >
            <v-icon>{{ icon }}</v-icon>
        </v-btn>
    </div>
</template>

<script>
export default {
    props: {
        icon: {
            type:String,
            required:true
        }
    }
}
</script>

<style scoped>
    .float-action-btn {
        z-index: 9;
        position: fixed;
        text-align: center;
        bottom:20px;
        left: 48%;
        right:48%;
    }
</style>