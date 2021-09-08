<template>
  <td :tabindex="readonly ? 0 : -1" @focusin="handleFocusIn" @focusout="handleFocusOut">
    <template v-if="readonly">{{ model }}</template>
    <template v-else-if="column.type === 'string'">
      <input type="text" v-model="model" />
    </template>
    <template v-else-if="column.type === 'integer'">
      <input type="number" v-model="model" />
    </template>
    <template v-else-if="column.type === 'select'">
      <select v-model="model">
        <option v-for="(value, index) in options" :key="index" :value="value">{{ value }}</option>
      </select>
    </template>
    <template v-else>
      <pre>Error: did not match any type.</pre>
    </template>
  </td>
</template>
<script setup lang="ts">
import { Row, RowData, Selection, Column, Position } from './types'
import { toRefs, computed, defineEmits } from 'vue'

const props = defineProps<{
  row: Row;
  column: Column;
  data: RowData;
  position: Position,
  selection: Selection | null
}>()
const emit = defineEmits<{
  (event: 'update:data', data: RowData): void,
  (event: 'focus', position: Position): void,
  (event: 'blur', position: Position): void,
}>()

const { data, row, column, } = toRefs(props)

const readonly = computed(() => column.value.readonly || row.value.readonly)
const model = computed({
  get: () => data.value[column.value.value],
  set: (value) => {
    emit('update:data', { ...data.value, [column.value.value]: value })
  }
})
// TODO: options should be an optional prop, or similar.
// they need to be dynamic based on other values in the row, for custom validation.
const options = computed(() => ['one', 'two', 'three'])

function handleFocusIn() { emit('focus', props.position) }
function handleFocusOut() { emit('blur', props.position) }

</script>
