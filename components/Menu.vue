<template>
    <div>
        <v-app-bar
        dense
        >
            <v-app-bar-nav-icon class="ma-2" @click.stop="drawer = !drawer">

            </v-app-bar-nav-icon>
            <v-icon class="ma-2">mdi-dice-multiple-outline</v-icon>
            <v-toolbar-title>
                Campeonato de Dados
            </v-toolbar-title>
            <v-spacer></v-spacer>
        </v-app-bar>
        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            >
            <v-list nav dense>
                <v-list-item v-for="item in menu" :key="item.text">
                    <v-icon class="ma-2">{{ item.icon }}</v-icon>
                    <nuxt-link :to="item.to" >{{ item.text }}</nuxt-link>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            drawer: null,
            menu: [
                {to:"/campeonatos",icon:"mdi-clipboard-list-outline",text:"Campeonatos"},
                {to:"/times",icon:"mdi-format-list-bulleted",text:"Times"},
                {to:"/partidas",icon:"mdi-clipboard-play-multiple",text:"Partidas"}
            ]
        }
    }
}
</script>

<style  scoped>
    .v-list-item a {
        color:white;
        text-decoration:none;
    }
</style>