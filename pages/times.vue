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
                    <v-text-field color="orange" v-model="insertData.name" label="Nome do Time"></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="orange darken-1" text @click="insertModal = !insertModal">
                        Cancelar
                    </v-btn>
                    <v-btn color="orange darken-1" text @click="validateInsert()">
                        Salvar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="editModal" persistent
        transition="dialog-bottom-transition">
            <v-card>
                <v-card-title>
                    Incluir Campeonato
                </v-card-title>
                <v-card-text>
                    <v-text-field color="orange" v-model="editData.name" label="Nome do Time"></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="orange darken-1" text @click="editModal = !editModal">
                        Cancelar
                    </v-btn>
                    <v-btn color="orange darken-1" text @click="validateEdit()">
                        Salvar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <Menu />
        <v-container>
            <v-row>
                <v-col sm="12">
                    <TitlePage title="Times" />
                </v-col>
            </v-row>
            <v-row>
                <v-col sm="12">
                    <v-list>
                        <v-list-item v-for="time in times" :key="time.id">
                            <v-list-item-avatar>
                                <b>{{ time.id }}</b>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title>
                                    <b>{{ time.name.toUpperCase() }}</b>
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    Ganhou {{ time.winChampionship }} campeonatos
                                </v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-btn color="orange" @click="editar(time.id)" fab small dark>
                                    <v-icon>mdi-pencil</v-icon>
                                </v-btn>
                            </v-list-item-action>
                        </v-list-item>
                    </v-list>
                </v-col>
            </v-row>
        </v-container>
        <FloatActionButton @click.native="insertModal = !insertModal" icon="mdi-plus" />
    </div>
</template>

<script>
import Menu from '../components/Menu';
import TitlePage from '../components/TitlePage';
import FloatActionButton from '../components/FloatActionButton';
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
export default {
    components: {
        Menu,
        TitlePage,
        FloatActionButton
    },
    data() {
        return {
            insertModal: false,
            insertData: {
                name: ''
            },
            editModal: false,
            editData: {
                id: null,
                name: null
            }
        }
    },
    computed: {
        ...mapState({
            times: state => state.times
        })
    },
    methods: {
        ...mapMutations({
            adicionarTime: 'adicionarTime',
            editarTime: 'editarTime'
        }),
        obterTimePeloId(id) {
            return this.times.find(time => time.id === id);
        },
        editar(id) {
            this.editData = Object.assign(new Object,this.obterTimePeloId(id));
            if (this.editData.id != null) {
                this.editModal = !this.editModal;
            }
        },
        validateInsert() {
            if (this.insertData.name != '') {
                this.adicionarTime(this.insertData.name);
                this.insertData.name = '';
                this.insertModal = !this.insertModal;
            }
        },
        validateEdit() {
            this.editarTime(this.editData);
            this.editModal = !this.editModal;
        }
    }
}
</script>
