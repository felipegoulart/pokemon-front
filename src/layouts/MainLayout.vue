<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="flex justify-end items-center">
      <p>Teste2</p>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout'
}
</script>
