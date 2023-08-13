const SearchForm = ({
  search,
  setSearch,
  isHideCompleted,
  setIsHideCompleted,
}) => {
  return (
    <div className="filter-form">
      <div className="filter-form-group">
        <label htmlFor="name">Name</label>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          id="name"
        />
      </div>
      <label>
        <input
          type="checkbox"
          checked={isHideCompleted}
          onChange={() => setIsHideCompleted((v) => !v)}
        />
        Hide Completed
      </label>
    </div>
  )
}

export default SearchForm
