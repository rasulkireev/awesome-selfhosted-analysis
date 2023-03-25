"use client"

import Search from './components/Search'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <div className="pt-10">
        <header>
            <div className="px-6 pt-24 pb-8 bg-white lg:px-8">
              <div className="max-w-2xl mx-auto text-center">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Awesome Self-Hosted Search</h1>
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
