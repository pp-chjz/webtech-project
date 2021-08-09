<template>
  <div>
    <reward-create-form></reward-create-form>
    <reward-history></reward-history>
    <reward-table></reward-table>
    
  </div>
</template>

<script>
import RewardCreateForm from '@/components/RewardCreateForm'
import RewardHistory from '@/components/RewardHistory'
import RewardTable from '@/components/RewardTable'
export default {
  components: {
    RewardCreateForm,
    RewardHistory,
    RewardTable
    
  }
}
</script>

<style>
</style>
