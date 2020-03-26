<template>
    <div>
        <Menu />
        <v-container>
            <v-row>
                <v-col sm="12">
                    <TitlePage title="Campeonatos" />
                </v-col>
            </v-row>
            <v-row>
                <v-col sm="12">
                    <v-list >
                        <v-list-item v-for="campeonato in campeonatos" :key="campeonato">
                            <v-list-item-content>
                                <v-list-item-title v-text="campeonato" ></v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-btn @click="adicionarCampeonato('teste')" color="orange" fab small dark>
                                    <v-icon>mdi-pencil</v-icon>
                                </v-btn>
                            </v-list-item-action>
                        </v-list-item>

                    </v-list>
                </v-col>
            </v-row>
        </v-container>
        <FloatActionButton @click.native="adicionarCampeonato('teste')"  icon="mdi-plus" />
    </div>
</template>

<script>
import Menu from "../components/Menu";
import TitlePage from "../components/TitlePage";
import FloatActionButton from "../components/FloatActionButton";
import { mapMutations,mapState, mapActions } from "vuex";
export default {
    components: {
        Menu,
        TitlePage,
        FloatActionButton
    },
    computed: {
        ...mapState({
            campeonatos: state => state.campeonatos.campeonatos
        })
    },
    methods: {
        ...mapMutations({
            adicionarCampeonato: 'campeonatos/adicionarCampeonato'
        })
    }
}
</script>