"use client"

import Search from './components/Search'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <div className="py-10">
        <header>
      <div className="bg-white pt-24 px-6 pb-8 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Awesome Self-Hosted</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            This is my attempt to do some cool stuff with Typesense and Next.js
          </p>
        </div>
      </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <Search />
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}
