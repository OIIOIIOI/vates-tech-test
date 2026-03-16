import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';
import type { Sandwich } from '@/types/sandwich';

const defaultBreads = [
    "Baguette",
    "Ciabatta",
    "Pain de seigle",
    "Wrap",
    "Pain aux céréales"
]

const defaultSauces = [
    "Mayonnaise",
    "Moutarde",
    "Pesto",
    "Sauce barbecue",
    "Sauce aigre-douce"
]

const defaultCheeses = [
    "Cheddar",
    "Mozzarella",
    "Gouda",
    "Emmental",
    "Roquefort"
]

const defaultFillings = [
    "Jambon",
    "Poulet",
    "Saumon",
    "Thon",
    "Bacon"
]

export const ingredientsStore = defineStore('ingredients', {
    state: () => ({
        breads: useLocalStorage<string[]>('breads', defaultBreads),
        sauces: useLocalStorage<string[]>('sauces', defaultSauces),
        cheeses: useLocalStorage<string[]>('cheeses', defaultCheeses),
        fillings: useLocalStorage<string[]>('fillings', defaultFillings)
    }),
    actions: {
        // Add ingredient to category
        addIngredient(category: 'breads' | 'sauces' | 'cheeses' | 'fillings', name: string) {
            const list = this[category] as string[]
            list.push(name)
        },
        // Remove ingredient from category
        removeIngredient(category: 'breads' | 'sauces' | 'cheeses' | 'fillings', name: string) {
            const list = this[category] as string[]
            list.splice(list.indexOf(name), 1)
        },
        // Pick a random ingredient
        pickRandomBread(): string {
            return this.breads[Math.floor(Math.random() * this.breads.length)]
        },
        pickRandomSauce(): string {
            return this.sauces[Math.floor(Math.random() * this.sauces.length)]
        },
        pickRandomCheese(): string {
            return this.cheeses[Math.floor(Math.random() * this.cheeses.length)]
        },
        pickRandomFilling(): string {
            return this.fillings[Math.floor(Math.random() * this.fillings.length)]
        },
        // Pick a random sandwich
        pickRandomSandwich(): Sandwich {
            return {
                bread: this.pickRandomBread(),
                sauce: this.pickRandomSauce(),
                cheese: this.pickRandomCheese(),
                filling: this.pickRandomFilling()
            }
        }
    }
})
