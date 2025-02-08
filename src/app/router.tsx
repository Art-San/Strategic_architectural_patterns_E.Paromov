import { createBrowserRouter, redirect } from 'react-router-dom'
import { TracksApiProvider, tracksApi } from '@/features/tracks-table'

import { Layout } from './components/layout'
import { TaskListPage } from '@/pages/tasks'
import { TracksTablePage } from '@/pages/tracks'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <TracksApiProvider value={tracksApi}>
        <Layout />
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
