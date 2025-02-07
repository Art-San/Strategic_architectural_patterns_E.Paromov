import { Header } from './header'
import { Outlet } from 'react-router-dom'
import styles from './layout.module.css'

// import {
//   AddTrackModal,
//   AddTrackToCellModal,
//   UpdateTrackModal
// } from '@/features/manage-track'

export const Layout = () => {
  // const { trackCreate, trackUpdate } = useTracks({ shouldFetch: false })

  return (
    <div>
      <Header />
      <main className={styles.mainContent}>
        <Outlet />
      </main>

      {/* <AddTrackModal trackCreate={trackCreate} /> */}
      {/* <UpdateTrackModal trackUpdate={trackUpdate} /> */}
      {/* <AddTrackToCellModal trackCreate={trackCreate} /> */}
    </div>
  )
}
