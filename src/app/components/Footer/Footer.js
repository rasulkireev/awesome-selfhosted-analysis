import React from 'react';

export default function Footer() {
    return (
      <>
      <a className="fixed top-0 left-0 z-10 px-2 py-1 font-semibold text-gray-900 no-underline bg-gray-200 border-b border-l border-white border-solid rounded-br "
          href="https://rasulkireev.com?ref=awesome-selfhosted-analysis"
          target="_blank">
          <p className="inline m-0 ml-1 text-sm font-normal align-middle">by Rasul</p>
      </a>
      <footer className="bg-white">
        <div className="p-6 mx-auto max-w-7xl md:flex md:items-center md:justify-end lg:px-8">
          <div className="mt-8 prose prose-md md:mt-0">
            <p className="text-lg leading-5 text-center text-gray-500">
                By the <a className="underline" href="https://github.com/awesome-selfhosted/awesome-selfhosted">
                  awesome-selfhosted
                </a> community, licensed under <a className="underline" href="https://github.com/awesome-selfhosted/awesome-selfhosted/blob/master/LICENSE">
                  CC-BY-SA-3.0
                </a>
            </p>
          </div>
        </div>
      </footer>
      </>
    )
}