export const state = () => ({
    campeonatos: ['Campeonato 1','Campeonato 3']
});

export const mutations = {
    adicionarCampeonato(state,campeonato) {
        state.campeonatos.push(campeonato);
    }
}