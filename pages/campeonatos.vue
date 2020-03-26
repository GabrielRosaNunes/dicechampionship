<template>
    <div>
        <v-dialog v-model="insertModal" persistent
        transition="dialog-bottom-transition"
        >
            <v-card>
                <v-card-title>
                    Incluir Campeonato
                </v-card-title>
                <v-card-text>
                    <v-text-field v-model="insertData.championshipName" label="Nome do Campeonato"></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="insertModal = !insertModal">
                        Cancelar
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="validateInsert()">
                        Salvar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
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
        <FloatActionButton @click.native="insertModal = !insertModal"  icon="mdi-plus" />
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
    data: () => {
        return {
            insertModal: false,
            insertData:{
                championshipName: ''
            }
        }
    },
    computed: {
        ...mapState({
            campeonatos: state => state.campeonatos
        })
    },
    methods: {
        ...mapMutations({
            adicionarCampeonato: 'adicionarCampeonato'
        }),
        validateInsert() {
            if (this.insertData.championshipName != '') {
                this.adicionarCampeonato(this.insertData.championshipName);
                this.insertData.championshipName = '';
                this.insertModal = !this.insertModal;
            }
        }
    }
}
</script>