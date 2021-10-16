import { writable } from 'svelte/store'

// emojis list
export const randomSticker = writable(false)
export const selectedEmoji = writable(false)

// sticker details
export const selectedSticker = writable(false)
