<template>
    <h2 style="text-transform: capitalize;">{{ category }}</h2>
    <ul>
        <li v-for="ingredient in items" :key="ingredient">
            <span>{{ ingredient }}</span>&nbsp;<button
                @click="ingredients.removeIngredient(category, ingredient)">X</button>
        </li>
    </ul>
    <input v-model="newIngredient" type="text" name="ingredient" id="ingredient">&nbsp;
    <button @click="ingredients.addIngredient(category, newIngredient)">Ajouter</button>
</template>

<script setup lang="ts">
import { ingredientsStore } from '@/stores/ingredients-store';
import { computed, ref } from 'vue';

const props = defineProps<{ category: 'breads' | 'sauces' | 'cheeses' | 'fillings' }>()

const ingredients = ingredientsStore()
const newIngredient = ref<string>('')

const items = computed(() => ingredients[props.category] as string[])
</script>