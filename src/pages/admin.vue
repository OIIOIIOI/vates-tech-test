<template>
    <div class="container mx-auto px-6 mt-24 mb-8">
        <h1>Admin</h1>
        <div class="flex flex-col lg:grid lg:grid-cols-2 gap-6">
            <IngredientsCategory category="breads" />
            <IngredientsCategory category="sauces" />
            <IngredientsCategory category="cheeses" />
            <IngredientsCategory category="fillings" />
        </div>
    </div>
</template>

<script setup lang="ts">
import IngredientsCategory from '@/components/IngredientsCategory.vue'
</script>