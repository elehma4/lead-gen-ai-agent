'use client';

import React, { useState } from 'react';

type DataRow = {
  keyword: string;
  dateTime: string | Date;
  website: string;
  researchTopic: string;
};

type DataTableProps = {
  data: DataRow[];
};

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 10;

  const handleNextPage = () => {
    if ((currentPage + 1) * rowsPerPage < data.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startRow = currentPage * rowsPerPage;
  const endRow = startRow + rowsPerPage;
  const currentData = data.slice(startRow, endRow);

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-200 rounded-md">
      <div className="flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                    Keyword
                  </th>
                  <th scope="col" className="px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Research Topic
                  </th>
                  <th scope="col" className="px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Website
                  </th>
                  <th scope="col" className="px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Date/Time
                  </th>
                  <th scope="col" className="relative py-3.5 pl-2 pr-4 sm:pr-3">
                    <span className="sr-only">View</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {currentData.map((row, index) => (
                  <tr key={index} className="even:bg-gray-50">
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                      {row.keyword}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{row.researchTopic}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{row.website}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{row.dateTime}</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                      <button className="text-indigo-600 hover:text-indigo-900">
                        View<span className="sr-only">, {row.keyword}</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex gap-2 ml-px mt-4">
              <button
                onClick={handlePreviousPage}
                className="px-3 py-2 bg-gray-300 text-gray-900 rounded-md disabled:opacity-50"
                disabled={currentPage === 0}
              >
                Previous
              </button>
              <button
                onClick={handleNextPage}
                className="px-3 py-2 bg-gray-300 text-gray-900 rounded-md disabled:opacity-50"
                disabled={endRow >= data.length}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;