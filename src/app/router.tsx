import { createBrowserRouter, redirect } from 'react-router-dom'
import {
  TracksTable,
  TracksApiProvider,
  tracksApi
} from '@/features/tracks-table'

import { Layout } from './components/layout'
import { TaskListPage } from '@/pages/tasks'

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
        element: <TracksTable />
      },
      {
        path: '/tasks',
        element: <TaskListPage />
      }
    ]
  }
])
