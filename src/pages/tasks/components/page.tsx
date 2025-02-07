import React from 'react'
import styles from './page.module.css'
import { TaskList } from '@/features/tasks-list'
import { AddTrackWithParamsModal } from '@/features/manage-track'
import { useTracks } from '@/features/tracks-table'

export const TaskListPage: React.FC = () => {
  const tracks = useTracks({ shouldFetch: false })
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tasks</h1>
      <TaskList />

      <AddTrackWithParamsModal trackCreate={tracks.trackCreate} />
    </div>
  )
}
