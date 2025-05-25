import Link from "next/link"

function DashboardLandingPage() {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h1 className="text-2xl font-bold text-primary">Welcome to the Duka Seller Portal</h1>
        <p className="text-gray-700 mt-2">Here you can manage your products, orders, and customer inquiries.</p>
        <p className="text-gray-700 mb-4 mt-2">Please note that you need to create a store to get these features.</p>
        <Link href='/dashboard/shop/create' className="mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90">Create store</Link>
    </div>
  )
}

export default DashboardLandingPage