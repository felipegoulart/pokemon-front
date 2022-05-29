<template>
   <div class="q-pa-md">
    <q-table
      :rows="pokemonsList"
      :columns="columns"
      row-key="Pokemon"
      :pagination="initialPagination"
    />
  </div>
</template>

<script>
export default {
  name: 'PokemonsList',

  data () {
    return {
      initialPagination: {
        sortBy: 'desc',
        descending: false,
        page: 2,
        rowsPerPage: 3
      },
      pokemonsList: [
        {
          '#': '001',
          Pokemon: 'Bulbasaur',
          'Type I': 'Grass',
          'Type II': 'Poison',
          HP: 45,
          Atk: 49,
          Def: 49,
          SpA: 65,
          SpD: 65,
          Spe: 45,
          'Total Status': 318
        },
        {
          '#': '002',
          Pokemon: 'Ivysaur',
          'Type I': 'Grass',
          'Type II': 'Poison',
          HP: 60,
          Atk: 62,
          Def: 63,
          SpA: 80,
          SpD: 80,
          Spe: 60,
          'Total Status': 405
        },
        {
          '#': '003',
          Pokemon: 'Venusaur',
          'Type I': 'Grass',
          'Type II': 'Poison',
          HP: 80,
          Atk: 82,
          Def: 83,
          SpA: 100,
          SpD: 100,
          Spe: 80,
          'Total Status': 525
        },
        {
          '#': '004',
          Pokemon: 'Charmander',
          'Type I': 'Fire',
          'Type II': '',
          HP: 39,
          Atk: 52,
          Def: 43,
          SpA: 60,
          SpD: 50,
          Spe: 65,
          'Total Status': 309
        },
        {
          '#': '005',
          Pokemon: 'Charmeleon',
          'Type I': 'Fire',
          'Type II': '',
          HP: 58,
          Atk: 64,
          Def: 58,
          SpA: 80,
          SpD: 65,
          Spe: 80,
          'Total Status': 405
        },
        {
          '#': '006',
          Pokemon: 'Charizard',
          'Type I': 'Fire',
          'Type II': 'Flying',
          HP: 78,
          Atk: 84,
          Def: 78,
          SpA: 109,
          SpD: 85,
          Spe: 100,
          'Total Status': 534
        },
        {
          '#': '007',
          Pokemon: 'Squirtle',
          'Type I': 'Water',
          'Type II': '',
          HP: 44,
          Atk: 48,
          Def: 65,
          SpA: 60,
          SpD: 54,
          Spe: 43,
          'Total Status': 314
        },
        {
          '#': '008',
          Pokemon: 'Wartortle',
          'Type I': 'Water',
          'Type II': '',
          HP: 59,
          Atk: 63,
          Def: 80,
          SpA: 65,
          SpD: 80,
          Spe: 58,
          'Total Status': 405
        }
      ]
    }
  },

  computed: {
    columns () {
      return [
        { name: 'Id', field: '#' },
        { name: 'Pokemon', field: 'Pokemon' },
        { name: 'Type I', field: 'Type I' },
        { name: 'Type II', field: 'Type II' },
        { name: 'HP', field: 'HP' },
        { name: 'Atk', field: 'Atk' },
        { name: 'Def', field: 'Def' },
        { name: 'SpA', field: 'SpA' },
        { name: 'SpD', field: 'SpD' },
        { name: 'Spe', field: 'Spe' },
        { name: 'Total Status', field: 'Total Status' }
      ]
    }
  }
}
</script>

<style>

</style>
