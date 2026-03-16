import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';
import type { Sandwich } from '@/types/sandwich';

export const userStore = defineStore('user', {
    state: () => ({
        sandwiches: useLocalStorage<Sandwich[]>('sandwiches', []),
    }),
    actions: {
        addSandwich(sandwich: Sandwich) {
            this.sandwiches.push(sandwich)
        },
        removeAllSandwiches() {
            this.sandwiches = []
        }
    }
})
