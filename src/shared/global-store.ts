export const createGlobalStore = <T>(value: T) => {
  const store = {
    value: value as T,

    listeners: [] as (() => void)[],
    getSnapshot: () => {
      return store.value
    },
    subscribe: (callback: () => void): (() => void) => {
      store.listeners.push(callback)
      return () => {
        store.listeners = store.listeners.filter(
          (listener) => listener !== callback
        )
      }
    },

    set: (value: T) => {
      store.value = value
      store.listeners.forEach((listener) => listener())
    }
  }

  return store
}

// первоночально выглядила так и была в другом use-tracks.tsx
// если не понимаете как это используй zustand
// const tracksStore = {
//   value: [] as Track[],

//   listeners: [] as (() => void)[],
//   getSnapshot: () => {
//     return tracksStore.value
//   },
//   subscribe: (callback: () => void): (() => void) => {
//     tracksStore.listeners.push(callback)
//     return () => {
//       tracksStore.listeners = tracksStore.listeners.filter(
//         (listener) => listener !== callback
//       )
//     }
//   },

//   setTracks: (tracks: Track[]) => {
//     tracksStore.value = tracks
//     tracksStore.listeners.forEach((listener) => listener())
//   }
// }
