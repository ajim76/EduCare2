import React ,{useState ,useEffect} from 'react'
import Card from './Card'
import Pagination from './Pagination'

/*
props to be passed to card:
1. img1
2. img2
3. Name of college
4. City
5. District
6. exact Fee
7. fee range
8. status - gov/private
9. Degree - BE/Btech
10. url
11. description
12. cutoffs
*/

const Cards = (props) => {

  const pageSize = 12; // Number of cards per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentCards = props.clg.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [props.clg]);

  return (
    <>
    <div className='flex flex-wrap  justify-start flex-grow'>
        {currentCards.map((item, index) => {
            return <Card 
            key={item.rank}
            rank={item.rank}
            name={item.name}
            url={item.url}
            img1={item.img1}
            city={item.location}
            fee={item.fee}
            status={item.status}
            degree={item.degree}
            />
            })}
        
    </div>
    <div className='text-center'>
    <Pagination
        totalCount={props.clg.length}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      />
    </div>
    </>
  )
}

export default Cards