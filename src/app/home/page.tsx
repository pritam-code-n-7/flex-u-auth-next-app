import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="max-w-lg mx-auto border border-gray-300 p-6 rounded-md shadow-md">
        <h1 className="text-3xl font-semibold text-center mb-6">Welcome To Our Home</h1>
        <Link href="/" className="block text-center py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-300">
          Back
        </Link>
      </div>
    </div>
  )
}

export default page
