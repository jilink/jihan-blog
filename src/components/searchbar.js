import React from "react"

const SearchBar = ({
  filterField = item => item,
  list,
  setList,
  placeholder = "Recherche",
}) => {
  const [value, setValue] = React.useState("")

  const filterList = () => {
    return list.filter(item =>
      filterField(item).toLowerCase().includes(value.toLowerCase())
    )
  }

  const handleChange = event => {
    setValue(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    setList(filterList())
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={placeholder}
        name="search"
        value={value}
        onChange={handleChange}
      />
      <button type="submit">Chercher</button>
    </form>
  )
}

export default SearchBar
