<template>
    <ul class="px-6 py-4 bg-green-light flex flex-col rounded-xl font-bold text-green">
        <li>{{ sandwich.bread }}</li>
        <li>{{ sandwich.sauce }}</li>
        <li>{{ sandwich.cheese }}</li>
        <li>{{ sandwich.filling }}</li>
    </ul>
</template>

<script setup lang="ts">
import type { Sandwich } from '@/types/sandwich'

defineProps<{ sandwich: Sandwich }>()
</script>