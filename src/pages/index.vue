<template>
  <div class="container mx-auto px-6 mt-24 mb-8">
    <h1>Générateur de Sandwich</h1>
    <div class="flex flex-col lg:grid lg:grid-cols-4 gap-6">
      <div>
        <h2>Sandwich actuel</h2>
        <SandwichViewer :sandwich="sandwich" class="my-4" />
        <button @click="generateSandwich">Générer</button>&nbsp;
        <button @click="saveSandwich">Sauvegarder</button>
      </div>
      <div class="lg:col-span-3">
        <h2>Sandwichs sauvegardés</h2>
        <div v-if="user.sandwiches.length === 0">Aucun sandwich sauvegardé</div>
        <div v-else>
          <button class="bg-red-600 text-white" @click="deleteAllSandwiches">Tout supprimer</button>
          <h3>Filtrer par ingrédient</h3>
          <select v-model="selectedBread" name="bread" id="bread">
            <option value="">Tous les pains</option>
            <option v-for="bread in ingredients.breads" :key="bread" :value="bread">
              {{ bread }}
            </option>
          </select>
          &nbsp;
          <select v-model="selectedSauce" name="sauce" id="sauce">
            <option value="">Toutes les sauces</option>
            <option v-for="sauce in ingredients.sauces" :key="sauce" :value="sauce">
              {{ sauce }}
            </option>
          </select>
          &nbsp;
          <select v-model="selectedCheese" name="cheese" id="cheese">
            <option value="">Tous les fromages</option>
            <option v-for="cheese in ingredients.cheeses" :key="cheese" :value="cheese">
              {{ cheese }}
            </option>
          </select>
          &nbsp;
          <select v-model="selectedFilling" name="filling" id="filling">
            <option value="">Toutes les garnitures</option>
            <option v-for="filling in ingredients.fillings" :key="filling" :value="filling">
              {{ filling }}
            </option>
          </select>
          <p v-if="filteredSandwiches.length === 0">Aucun sandwich avec ces critères</p>
          <div v-else class="my-4 flex flex-col lg:grid lg:grid-cols-3 gap-6">
            <SandwichViewer v-for="(sandwich, i) in filteredSandwiches" :key="`sandwich-${i}`" :sandwich="sandwich" />
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script setup lang="ts">
import type { Sandwich } from '@/types/sandwich'
import { computed, ref } from 'vue'
import { ingredientsStore } from '@/stores/ingredients-store'
import { userStore } from '@/stores/user-store'
import SandwichViewer from '@/components/SandwichViewer.vue'

const ingredients = ingredientsStore()
const user = userStore()

const sandwich = ref<Sandwich>(ingredients.pickRandomSandwich())
const selectedBread = ref<string>('')
const selectedSauce = ref<string>('')
const selectedCheese = ref<string>('')
const selectedFilling = ref<string>('')

const filteredSandwiches = computed(() => {
  var filtered = user.sandwiches

  filtered = selectedBread.value
    ? filtered.filter((s) => s.bread === selectedBread.value)
    : filtered

  filtered = selectedSauce.value
    ? filtered.filter((s) => s.sauce === selectedSauce.value)
    : filtered

  filtered = selectedCheese.value
    ? filtered.filter((s) => s.cheese === selectedCheese.value)
    : filtered

  filtered = selectedFilling.value
    ? filtered.filter((s) => s.filling === selectedFilling.value)
    : filtered

  return filtered
})

const generateSandwich = () => {
  sandwich.value = ingredients.pickRandomSandwich()
}

const saveSandwich = () => {
  user.addSandwich(sandwich.value)
}

const deleteAllSandwiches = () => {
  user.removeAllSandwiches()
}
</script>