<template>
  <div>
  <point-table></point-table>
  </div>
</template>

<script>
// @ is an alias to /src
import PointTable from '@/components/PointTable.vue'

export default {
  name: 'Home',
  components: {
    PointTable,
  }
}
</script>
