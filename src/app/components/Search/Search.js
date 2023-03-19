import React from 'react';
import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";
import { InstantSearch, Configure, SearchBox, InfiniteHits, SortBy } from 'react-instantsearch-hooks-web';

import Table from '../Table'

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: "BIZKrznddXvifP7KEXAZn3pItniYP8nJ",
    nodes: [
      {
        host: "typesense.rasulkireev.com",
        port: "443",
        protocol: "https",
      },
    ],
    cacheSearchResultsForSeconds: 2 * 60, // Cache search results from server. Defaults to 2 minutes. Set to 0 to disable caching.
  },
  // The following parameters are directly passed to Typesense's search API endpoint.
  //  So you can pass any parameters supported by the search endpoint below.
  //  query_by is required.
  additionalSearchParameters: {
    query_by: "name,description,topics,language",
  },
});
const searchClient = typesenseInstantsearchAdapter.searchClient;

function Hit({ hit }) {
  return (<>
    <a className="flex px-6 py-4 mt-4 border border-gray-200 rounded bg-white hover:bg-gray-50 sm:space-x-8" href={ hit.repo_url }>
      <div className="self-start flex-1 min-w-0 space-y-3">
        <div className="space-x-2 flex items-center">
          <h2 className="text-xl font-medium text-gray-900 sm:text-xl line-clamp-2 break-word">{ hit.owner } / { hit.name }</h2>
          <span className="inline-flex items-center rounded-md bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800">
              { hit.language }
          </span>
          <span className="inline-flex items-center rounded-md bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-1.5 h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
              { hit.stars }
          </span>
        </div>
        <div className="flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <div className="space-x-2 space-y-2 text-lg text-gray-700 sm:text-base">
            {hit.topics.map((topic) => (
              <span className="inline-flex items-center rounded-md bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800" key={topic}>
                { topic }
              </span>
              ))}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-lg text-gray-700 sm:text-base">
            <p className="break-words line-clamp-3">{ hit.description }</p>
          </div>
        </div>
      </div>
    </a>
  </>);
}

export default function Search() {
    return (
      <InstantSearch
        indexName="awesome_selfhosted_repos"
        searchClient={searchClient}
      >
        <Configure hitsPerPage={10}/>
          <SearchBox
            placeholder="Search for Name, Description, Topics, Language"
            classNames={{
              root: "max-w-xl rounded mx-auto w-full",
              input: "w-full border border-gray-200 p-2 rounded",
              reset: "hidden",
              submit: "hidden"
            }}
          />
          <SortBy
            items={[
              { label: 'Stars (asc)', value: 'awesome_selfhosted_repos/sort/stars:asc' },
              { label: 'Stars (desc)', value: 'awesome_selfhosted_repos/sort/stars:desc' },
            ]}
            classNames={{
              "root":"text-right",
              "select":"px-1 py-2 border border-gray-200 rounded"
            }}
          />
        <InfiniteHits
            showPrevious={false}
            hitComponent={Hit}
        />
      </InstantSearch>
    )
}