import React from "react";

const Table = () => {
  return (
    <div>
      <div className="text-xl">Billing history</div>

      <div class="relative overflow-x-auto shadow-md outline outline-1 outline-slate-200 sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 ">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" class="p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                  />
                  <label for="checkbox-all-search" class="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" class="px-6 py-3 text-gray-500 font-normal">
                Invoice
              </th>
              <th scope="col" class="px-6 py-3 text-gray-500 font-normal">
                Amount
              </th>
              <th scope="col" class="px-6 py-3 text-gray-500 font-normal">
                Date
              </th>
              <th scope="col" class="px-6 py-3 text-gray-500 font-normal">
                Status
              </th>
              <th scope="col" class="px-6 py-3 text-gray-500 font-normal">
                Users on plan
              </th>
              <th scope="col" class="px-6 py-3 text-gray-500 font-normal">
                
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b  hover:bg-gray-50">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 accent-purple-500"
                  />
                  <label for="checkbox-table-search-1" class="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 font-semibold whitespace-nowrap"
              >
                Basic Plan - Dec 2022
              </th>
              <td class="px-6 py-4">USD $10.00</td>
              <td class="px-6 py-4">Dec 1, 2022</td>
              <td class="px-6 py-4">
                <img src="/Badge.png" alt="badge" />
              </td>
              <td class="px-6 py-4">
                <img src="/Avatar group1.png" alt="users" />
              </td>
              <td class="flex items-center px-6 py-4 space-x-3">
                <img src="/Icon.png" alt="copy" />
              </td>
            </tr>
            <tr class="bg-white border-b  hover:bg-gray-50">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-search-2"
                    type="checkbox"
                    class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                  />
                  <label for="checkbox-table-search-2" class="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 font-semibold whitespace-nowrap"
              >
                Basic Plan - Nov 2022
              </th>
              <td class="px-6 py-4">USD $10.00</td>
              <td class="px-6 py-4">Nov 1, 2022</td>
              <td class="px-6 py-4">
              <img src="/Badge.png" alt="badge" /></td>
              <td class="px-6 py-4"><img src="/Avatar group2.png" alt="users" /></td>
              <td class="flex items-center px-6 py-4 space-x-3">
                <img src="/Icon.png" alt="copy" />
              </td>
            </tr>
            <tr class="bg-white border-b  hover:bg-gray-50">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                  />
                  <label for="checkbox-table-search-3" class="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 font-semibold whitespace-nowrap"
              >
                Basic Plan - Oct 2022
              </th>
              <td class="px-6 py-4">USD $10.00</td>
              <td class="px-6 py-4">Oct 1, 2022</td>
              <td class="px-6 py-4">
              <img src="/Badge.png" alt="badge" /></td>
              <td class="px-6 py-4"><img src="/Avatar group3.png" alt="users" /></td>
              <td class="flex items-center px-6 py-4 space-x-3">
                <img src="/Icon.png" alt="copy" />
              </td>
            </tr>
            <tr class="bg-white border-b  hover:bg-gray-50">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                  />
                  <label for="checkbox-table-search-3" class="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 font-semibold whitespace-nowrap"
              >
                Basic Plan - Sep 2022
              </th>
              <td class="px-6 py-4">USD $10.00</td>
              <td class="px-6 py-4">Sep 1, 2022</td>
              <td class="px-6 py-4"><img src="/Badge.png" alt="badge" /></td>
              <td class="px-6 py-4"><img src="/Avatar group4.png" alt="users" /></td>
              <td class="flex items-center px-6 py-4 space-x-3">
                <img src="/Icon.png" alt="copy" />
              </td>
            </tr>
            <tr class="bg-white border-b  hover:bg-gray-50">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                  />
                  <label for="checkbox-table-search-3" class="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 font-semibold whitespace-nowrap"
              >
                Basic Plan - Aug 2022
              </th>
              <td class="px-6 py-4">USD $10.00</td>
              <td class="px-6 py-4">Aug 1, 2022</td>
              <td class="px-6 py-4"><img src="/Badge.png" alt="badge" /></td>
              <td class="px-6 py-4"><img src="/Avatar group5.png" alt="users" /></td>
              <td class="flex items-center px-6 py-4 space-x-3">
                <img src="/Icon.png" alt="copy" />
              </td>
            </tr>
            <tr class="bg-white border-b  hover:bg-gray-50">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                  />
                  <label for="checkbox-table-search-3" class="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 font-semibold whitespace-nowrap"
              >
                Basic Plan - Jul 2022
              </th>
              <td class="px-6 py-4">USD $10.00</td>
              <td class="px-6 py-4">jul 1, 2022</td>
              <td class="px-6 py-4"><img src="/Badge.png" alt="badge" /></td>
              <td class="px-6 py-4"><img src="/Avatar group6.png" alt="users" /></td>
              <td class="flex items-center px-6 py-4 space-x-3">
                <img src="/Icon.png" alt="copy" />
              </td>
            </tr>
            <tr class="bg-white border-b  hover:bg-gray-50">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                  />
                  <label for="checkbox-table-search-3" class="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 font-semibold whitespace-nowrap"
              >
                Basic Plan - Jun 2022
              </th>
              <td class="px-6 py-4">USD $10.00</td>
              <td class="px-6 py-4">Jun 1, 2022</td>
              <td class="px-6 py-4"><img src="/Badge.png" alt="badge" /></td>
              <td class="px-6 py-4"><img src="/Avatar group7.png" alt="users" /></td>
              <td class="flex items-center px-6 py-4 space-x-3">
                <img src="/Icon.png" alt="copy" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
