import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import Sidebar from './components/sidebar'

function Dashboard({children}) {
    const query = new QueryClient()
  return (
    <HydrationBoundary state={dehydrate(query)}>
        <div className='flex h-screen w-screen'>
            <Sidebar/>
            <div className='w-full pt-28 p-6 overflow-y-scroll overflow-x-hidden'>
                <div className='mt-4'>{children}</div>
            </div>
        </div>
    </HydrationBoundary>
  )
}

export default Dashboard