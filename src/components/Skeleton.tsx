import React from "react";

type Props = {};

export default function Skeleton({}: Props) {
  return (
    <>
      <div className="bg-[#0a3785] min-h-screen text-white w-full pb-5">
        <div className="container max-w-5xl mx-auto">
          <nav className="animate-pulse">
            <form className="flex items-center">
              <div className="relative w-full">
                <div className="h-10 bg-gray-200 rounded flex-grow" />
              </div>
              <div className="inline-flex items-center py-2.5 px-3 ml-2">
                <div className="h-10 bg-blue-500 rounded" />
              </div>
            </form>
          </nav>
          <div className="bg-white bg-opacity-20 rounded-lg py-5 pr-5 mt-2 animate-pulse">
            <div className="ml-5">
              <div className="h-6 bg-gray-200 rounded w-1/2" />
              <div className="mt-2 h-5 bg-gray-200 rounded w-2/3" />
            </div>
            <div className="flex flex-wrap md:flex-nowrap justify-between items-center">
              <div className="flex w-full justify-center md:justify-start pl-5 pt-4  items-center">
                <div className="h-48 w-48 bg-gray-200 rounded" />
                <div className="ml-5">
                  <div className="h-16 bg-gray-200 rounded w-1/4" />
                  <div className="mt-2 h-4 bg-gray-200 rounded w-1/3" />
                </div>
              </div>
              <div className="flex w-full justify-center md:justify-end gap-4">
                <div className="flex flex-col">
                  <div className="h-4 bg-gray-200 rounded w-1/4" />
                  <div className="mt-2 h-16 bg-gray-200 rounded w-1/2" />
                </div>
                <div className="min-h-full border bg-gray-200 w-px" />
                <div className="flex flex-col">
                  <div className="h-4 bg-gray-200 rounded w-1/4" />
                  <div className="mt-2 h-16 bg-gray-200 rounded w-1/2" />
                </div>
              </div>
            </div>
          </div>
          {/* time */}
          <div className="flex justify-between gap-8 mt-2 w-full animate-pulse">
            <div className="bg-white max-w-28 min-w-28 bg-opacity-20 rounded-lg text-center p-5">
              <div className="h-4 bg-gray-200 rounded mb-2" />
              <div className="h-20 bg-gray-200 rounded mb-2" />
              <div className="h-4 bg-gray-200 rounded" />
            </div>
            <div className="bg-white max-w-28 min-w-28 bg-opacity-20 rounded-lg text-center p-5">
              <div className="h-4 bg-gray-200 rounded mb-2" />
              <div className="h-20 bg-gray-200 rounded mb-2" />
              <div className="h-4 bg-gray-200 rounded" />
            </div>
            <div className="bg-white max-w-28 min-w-28 bg-opacity-20 rounded-lg text-center p-5">
              <div className="h-4 bg-gray-200 rounded mb-2" />
              <div className="h-20 bg-gray-200 rounded mb-2" />
              <div className="h-4 bg-gray-200 rounded" />
            </div>
            <div className="bg-white max-w-28 min-w-28 bg-opacity-20 rounded-lg text-center p-5">
              <div className="h-4 bg-gray-200 rounded mb-2" />
              <div className="h-20 bg-gray-200 rounded mb-2" />
              <div className="h-4 bg-gray-200 rounded" />
            </div>
            <div className="bg-white max-w-28 min-w-28 bg-opacity-20 rounded-lg text-center p-5">
              <div className="h-4 bg-gray-200 rounded mb-2" />
              <div className="h-20 bg-gray-200 rounded mb-2" />
              <div className="h-4 bg-gray-200 rounded" />
            </div>
            <div className="bg-white max-w-28 min-w-28 bg-opacity-20 rounded-lg text-center p-5">
              <div className="h-4 bg-gray-200 rounded mb-2" />
              <div className="h-20 bg-gray-200 rounded mb-2" />
              <div className="h-4 bg-gray-200 rounded" />
            </div>
            <div className="bg-white max-w-28 min-w-28 bg-opacity-20 rounded-lg text-center p-5">
              <div className="h-4 bg-gray-200 rounded mb-2" />
              <div className="h-20 bg-gray-200 rounded mb-2" />
              <div className="h-4 bg-gray-200 rounded" />
            </div>
          </div>
          {/* weeekly */}
          <div className="flex flex-wrap gap-2 animate-pulse">
            <div className="flex-auto flex w-80 bg-gray-200 rounded-lg p-5">
              <div className="w-24 h-24 bg-gray-300 rounded mr-5" />
              <div className="flex flex-col w-full gap-5">
                <div className="leading-3">
                  <div className="h-6 bg-gray-300 rounded w-3/4" />
                  <div className="h-4 bg-gray-300 rounded w-full mt-2" />
                </div>
                <div className="flex justify-between w-full gap-4">
                  <div className="h-10 bg-gray-300 rounded w-1/2" />
                  <div className="h-10 bg-gray-300 rounded w-1/2" />
                </div>
              </div>
            </div>
            <div className="flex-auto flex w-80 bg-gray-200 rounded-lg p-5">
              <div className="w-24 h-24 bg-gray-300 rounded mr-5" />
              <div className="flex flex-col w-full gap-5">
                <div className="leading-3">
                  <div className="h-6 bg-gray-300 rounded w-3/4" />
                  <div className="h-4 bg-gray-300 rounded w-full mt-2" />
                </div>
                <div className="flex justify-between w-full gap-4">
                  <div className="h-10 bg-gray-300 rounded w-1/2" />
                  <div className="h-10 bg-gray-300 rounded w-1/2" />
                </div>
              </div>
            </div>
            <div className="flex-auto flex w-80 bg-gray-200 rounded-lg p-5">
              <div className="w-24 h-24 bg-gray-300 rounded mr-5" />
              <div className="flex flex-col w-full gap-5">
                <div className="leading-3">
                  <div className="h-6 bg-gray-300 rounded w-3/4" />
                  <div className="h-4 bg-gray-300 rounded w-full mt-2" />
                </div>
                <div className="flex justify-between w-full gap-4">
                  <div className="h-10 bg-gray-300 rounded w-1/2" />
                  <div className="h-10 bg-gray-300 rounded w-1/2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
