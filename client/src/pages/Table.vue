<template>
  <q-page class="q-pa-md">
    <q-input></q-input>
    <canvas-datagrid :data.prop="rows" :schema.prop="columns" @beforeendedit="handleEdit"></canvas-datagrid>
    <q-input></q-input>
  </q-page>
</template>

<script lang="ts">
import 'canvas-datagrid'
import {
  defineComponent,
  ref,
} from 'vue';

interface Person {
  id: number,
  firstName: string,
  lastName: string,
  age: number,
  gender: 'M' | 'F' | 'X' | null
}

export default defineComponent({
  setup() {

    const rows = ref<Person[]>([
      {
        id: 1,
        firstName: 'jon',
        lastName: 'doe',
        age: 23,
        gender: null,
      },
      {
        id: 2,
        firstName: '',
        lastName: '',
        age: 0,
        gender: null,
      },
      {
        id: 3,
        firstName: '',
        lastName: '',
        age: 0,
        gender: null,
      },
      {
        id: 4,
        firstName: '',
        lastName: '',
        age: 0,
        gender: null,
      },
      {
        id: 5,
        firstName: '',
        lastName: '',
        age: 0,
        gender: null,
      },
    ])
    const columns = ref([
      {
        name: 'id',
        label: 'ID',
      },
      {
        name: 'firstName',
        label: 'First Name',
      },
      {
        name: 'lastName',
        label: 'Last Name',
      },
      {
        name: 'age',
        label: 'Age',
      },
      {
        name: 'gender',
        label: 'Gender',
      }
    ])
    function handleEdit(e: unknown) {
      console.log('there was an edit', e)
    }
    return {
      handleEdit,
      rows,
      columns,
    }
  },
});
</script>
