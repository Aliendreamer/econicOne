/* eslint-disable react/prop-types */
import { useState, useMemo } from 'react'
import { sortRows, filterRows } from './helpers'

export const Table = ({ columns,caption,setAdd, rows }) => {
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState({ order: 'asc', orderBy: 'id' })
  const filteredRows = useMemo(() => filterRows(rows, filters), [rows, filters])
  const sortedRows = useMemo(() => sortRows(filteredRows, sort), [filteredRows, sort])
  const handleSearch = (value, accessor) => {
    if (value) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [accessor]: value,
      }))
    } else {
      setFilters((prevFilters) => {
        const updatedFilters = { ...prevFilters }
        delete updatedFilters[accessor]
        return updatedFilters
      })
    }
  }

  const handleSort = (accessor) => {
    setSort((prevSort) => ({
      order: prevSort.order === 'asc' && prevSort.orderBy === accessor ? 'desc' : 'asc',
      orderBy: accessor,
    }))
  }

  const clearAll = () => {
    setSort({ order: 'asc', orderBy: 'id' })
    setFilters({})
  }

  return (
    <>
	<h2 className='text-xl underline text-center mb-2'>{caption}</h2>
      <table className=' max-w-4xl box-border border-black border-solid'>
        <thead className='box-border border-black border-solid'>
          <tr>
            {columns.map((column) => {
              const sortIcon = () => {
                if (column.accessor === sort.orderBy) {
                  if (sort.order === 'asc') {
                    return '⬆️'
                  }
                  return '⬇️'
                } else {
                  return '️↕️'
                }
              }
              return (
                <th key={column.accessor} className='box-border border-black border-solid border-2'>
                  <span className='text-center'>{column.label}</span>
                  <button onClick={() => handleSort(column.accessor)}>{sortIcon()}</button>
                </th>
              )
            })}
          </tr>
          <tr>
            {columns.map((column,index) => {
              return (
                <th key={index}>
                  <input
                    key={`${column.accessor}-search`}
                    type="search"
					className="text-left text-sm w-full border-black border-2 border-solid"
                    placeholder={`Search`}
                    value={filters[column.accessor]}
                    onChange={(event) => handleSearch(event.target.value, column.accessor)}
                  />
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {sortedRows.map((row) => {
            return (
              <tr key={row.id}>
                {columns.map((column) => {
                  return <td className='border-black max-w-xs text-base text-center border-box border-2 py-2 wrap overflow-hidden truncate ' key={column.accessor}>{row[column.accessor]}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className='my-4 flex space-x-2 justify-start'>
          <button className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={clearAll}>Clear all filters </button>
			<button className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={setAdd}>Add new Bike </button>
      </div>
    </>
  )
}
