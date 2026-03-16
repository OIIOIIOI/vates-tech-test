<template>
    <div>
        <h2 class="capitalize">{{ category }}</h2>
        <ul class="flex flex-col gap-1 my-4">
            <li v-for="ingredient in items" :key="ingredient" class="flex gap-2 items-center">
                <button @click="ingredients.removeIngredient(category, ingredient)"
                    class="bg-red-600 text-white font-black font-sans">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-4">
                        <path fill-rule="evenodd"
                            d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z"
                            clip-rule="evenodd" />
                    </svg>
                </button>
                <span class="grow">{{ ingredient }}</span>
            </li>
        </ul>
        <div class="flex gap-2 items-center">
            <input v-model="newIngredient" type="text" name="ingredient" id="ingredient">
            <button @click="ingredients.addIngredient(category, newIngredient)">Ajouter</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ingredientsStore } from '@/stores/ingredients-store';
import { computed, ref } from 'vue';

const props = defineProps<{ category: 'breads' | 'sauces' | 'cheeses' | 'fillings' }>()

const ingredients = ingredientsStore()
const newIngredient = ref<string>('')

const items = computed(() => ingredients[props.category] as string[])
</script>