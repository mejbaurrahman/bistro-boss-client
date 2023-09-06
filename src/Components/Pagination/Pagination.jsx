export default function Pagination({itemsPerPage, totalItems}) {
  const pageNumbers =[];
    for(let i=0; i<= Math.ceil(totalItems/ itemsPerPage); i++){
        pageNumbers.push(i)
    }

    return (
    <div className="join">
        {
            pageNumbers.map(number=><button className="join-item btn"
            key={number}
            >{number}</button> 
            )
        }
      </div>
  )
}
