import { Header } from './header'
import { Outlet } from 'react-router-dom'
import styles from './layout.module.css'
import { useTracks } from '@/modules/tracks-table'
import {
  AddTrackModal,
  AddTrackToCellModal,
  UpdateTrackModal
} from '@/modules/tracks-modal'

export const Layout = () => {
  const { trackCreate, trackUpdate } = useTracks({ shouldFetch: false })

  return (
    <div>
      <Header />
      <main className={styles.mainContent}>
        <Outlet />
      </main>

      <AddTrackModal trackCreate={trackCreate} />
      <AddTrackToCellModal trackCreate={trackCreate} />
      <UpdateTrackModal trackUpdate={trackUpdate} />
    </div>
  )
}
