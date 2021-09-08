<template>
  <pre>Auth State: {{ auth }}</pre>
  <pre>Auth State2: {{ data }}</pre>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { auth } from './state';
import { useAuthStateQuery } from './operations.generated'
export default defineComponent({
  setup() {
    const { data } = useAuthStateQuery()
    return { auth, data };
  },
});
</script>
