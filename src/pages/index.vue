<template>
  <h1>Générateur de Sandwich</h1>
  <h2>Sandwich actuel</h2>
  <SandwichViewer :sandwich="sandwich" />
  <br>
  <button @click="generateSandwich">Générer</button>&nbsp;
  <button @click="saveSandwich">Sauvegarder</button>
  <h2>Sandwichs sauvegardés</h2>
  <div v-if="user.sandwiches.length === 0">Aucun sandwich sauvegardé</div>
  <div v-else>
    <button @click="deleteAllSandwiches">Tout supprimer</button>
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
    <ul v-else>
      <li v-for="(sandwich, i) in filteredSandwiches" :key="`sandwich-${i}`">
        <SandwichViewer :sandwich="sandwich" />
        &nbsp;
      </li>
    </ul>
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