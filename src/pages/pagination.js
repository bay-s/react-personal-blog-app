import React from 'react'

const Pagination = (props) => {
   const totalPage = props.totalPost - props.value.page
   const totalPages =  props.totalPost  / 2
    return(
      
<nav className="is-flex justify-center pagination is-medium " role="navigation" aria-label="pagination">
  <button className={props.value.page <= 1 ? "pagination-previous is-disabled" : "pagination-previous"} onClick={props.prevPage}>Previous</button>
  <button className={totalPage <= 2 ? "pagination-next  is-disabled" : "pagination-next"} onClick={totalPage <= 2 ? '' : props.nextPage}>Next page
  </button>
</nav>
    )
}

export default Pagination;

