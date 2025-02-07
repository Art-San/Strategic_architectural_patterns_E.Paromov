import { TracksTable, useTracks } from '@/features/tracks-table'
import styles from './page.module.css'
import {
  AddTrackModal,
  AddTrackWithParamsModal,
  UpdateTrackModal
} from '@/features/manage-track'

export function TracksTablePage() {
  const { trackCreate, trackUpdate } = useTracks({ shouldFetch: false })
  return (
    <div className={styles.container}>
      <TracksTable />
      <AddTrackModal trackCreate={trackCreate} />
      <UpdateTrackModal trackUpdate={trackUpdate} />
      <AddTrackWithParamsModal trackCreate={trackCreate} />
    </div>
  )
}
