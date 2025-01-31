import { createBrowserRouter, redirect } from 'react-router-dom'
import {
  TracksTable,
  TracksApiProvider,
  tracksApi
} from '@/modules/tracks-table'
import { TaskList } from '@/modules/tasks-list'
import { Layout } from './components/layout'
import { TrackModalProvider } from '@/modules/tracks-modal'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <TracksApiProvider value={tracksApi}>
        <TrackModalProvider>
          <Layout />
        </TrackModalProvider>
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
        element: <TaskList />
      }
    ]
  }
])
