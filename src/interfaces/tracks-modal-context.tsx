// import { useContext } from 'react'
// import { createContext } from 'react'

// export type SelectedCell = {
//   day: number
//   task: string
//   selectedMonth: number
//   selectedYear: number
//   hours?: number
// }

// export type Track = {
//   id: string
//   name: string
//   task: string
//   hours: number
//   date: string
// }

// export type TrackModalContext = {
//   cellClick: (selectedCell: SelectedCell) => void

//   trackClick: (track: Track) => void

//   createClick: () => void
// }

// const tracksModalContext = createContext<TrackModalContext | null>(null)

// export const useTrackModal = () => {
//   const context = useContext(tracksModalContext)
//   if (!context) {
//     throw new Error('useTrackModal must be used within a TrackModalProvider')
//   }
//   return context
// }

// export function TrackModalProvider({
//   children,
//   tracksModal
// }: {
//   children: React.ReactNode
//   tracksModal: TrackModalContext
// }) {
//   return (
//     <tracksModalContext.Provider value={tracksModal}>
//       {children}
//     </tracksModalContext.Provider>
//   )
// }
