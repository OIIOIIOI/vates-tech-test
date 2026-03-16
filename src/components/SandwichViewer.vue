<template>
    <div>
        <div>{{ sandwich.bread }}</div>
        <div>{{ sandwich.sauce }}</div>
        <div>{{ sandwich.cheese }}</div>
        <div>{{ sandwich.filling }}</div>
    </div>
</template>

<script setup lang="ts">
import type { Sandwich } from '@/types/sandwich'

defineProps<{ sandwich: Sandwich }>()
</script>