import { createBrowserRouter, redirect } from 'react-router-dom'

import { Layout } from './components/layout'
import { TaskListPage } from '@/pages/tasks'
import { TracksTablePage } from '@/pages/tracks'
import {
  AddTrackModal,
  AddTrackWithParamsModal,
  UpdateTrackModal
} from '@/features/manage-track'
import { TracksApiProvider, tracksApi } from '@/services/track'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <TracksApiProvider value={tracksApi}>
        <Layout />
        <AddTrackModal />
        <UpdateTrackModal />
        <AddTrackWithParamsModal />
      </TracksApiProvider>
    ),
    children: [
      {
        index: true,
        loader: () => redirect('/tracks')
      },
      {
        path: '/tracks',
        element: <TracksTablePage />
      },
      {
        path: '/tasks',
        element: <TaskListPage />
      }
    ]
  }
])
