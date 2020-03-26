export const state = () => ({
    times: [
        {
            id: 1,
            name: 'Inazuma Eleven',
            winChampionship: 0
        },
        {
            id: 2,
            name: 'Gênesis',
            winChampionship: 0
        }
    ],
    campeonatos: ['Campeonato 1','Campeonato 3']
});

export const mutations = {
    adicionarTime(state,time) {
        let lastId = state.times[(state.times.length - 1)].id;
        state.times.push({
            id: lastId + 1,
            name: time,
            winChampionship: 0
        });
    },
    
    adicionarCampeonato(state,campeonato) {
        state.campeonatos.push(campeonato);
    },
    editarTime(state,{ id,name }) {
        state.times = state.times.map((elemento) => {
            if (elemento.id === id) {
                elemento.name = name;
            }
            return elemento;
        });
    }
}