import { useState} from 'react'

function Filter() {
	const [filter, setFilter] = useState({});

    const handleChangeFilter = event => {
        setFilter(event.target.value);
      }

	return (
	<div>
      <label htmlFor="filter">Filter: </label>
      <select
        name="filter"
        value={filter}
        onChange={handleChangeFilter}
      >
        <option value="available">Available</option>
        <option value="pending">Pending</option>
        <option value="sold">Sold</option>
      </select>
    </div>
	)
}

export default Filter