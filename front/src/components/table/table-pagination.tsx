import { FaAnglesLeft, FaAngleLeft, FaAnglesRight, FaAngleRight   } from "react-icons/fa6";

const Pagination = ({table}) => {
    return (
        <div className={"pagination"}>
          <button className={"border border-panel-500 p-2 table-background disabled:opacity-50 select-none"}
                  disabled={table.getState().pagination.pageIndex === 0} 
                  onClick={() => table.setPageIndex(0)}
          >
            <FaAnglesLeft />
          </button>
          <button className={"border border-panel-500 p-2 table-background disabled:opacity-50 select-none"}
                  disabled={table.getState().pagination.pageIndex === 0} 
                  onClick={table.previousPage}
          >
            <FaAngleLeft />
          </button>
          {
            (Array.from(Array(3).keys())).map((el, index) => {
              const currentPageIndex = table.getState().pagination.pageIndex;
              const pageIndex = (currentPageIndex - index) - 1
              return (
                pageIndex > 0 ?
                (
                  <button className={"border border-panel-500 p-2 table-background disabled:opacity-50 select-none"}
                        key={`pagination-button-${pageIndex}`}
                        onClick={() => table.setPageIndex(pageIndex)}
                        disabled={table.getState().pagination.pageIndex === pageIndex}
                  >
                    {pageIndex + 1}
                  </button>
                )  :
                ('')
              )
            }).reverse()
          }
          {
            Array.from(Array(3).keys()).map((el, index) => {
              const currentPageIndex = table.getState().pagination.pageIndex;
              const pageIndex = currentPageIndex + index
              return (
                pageIndex < table.getPageCount() ?
                (
                  <button className={"border border-panel-500 p-2 table-background disabled:opacity-50 select-none"}
                        key={`pagination-button-${pageIndex}`}
                        onClick={() => table.setPageIndex(pageIndex)}
                        disabled={table.getState().pagination.pageIndex === pageIndex}
                  >
                    {pageIndex + 1}
                  </button>  
                )
                :
                ('')
              )
            })
          }

          <button className={"border border-panel-500 p-2 table-background disabled:opacity-50 select-none"}
                  disabled={((table.getState().pagination.pageIndex + 1) - (table.getPageCount() - 1)) - 1 === 0} 
                  onClick={table.nextPage}
          >
            <FaAngleRight  />
          </button>
          <button className={"border border-panel-500 p-2 table-background disabled:opacity-50 select-none"}
                  disabled={((table.getState().pagination.pageIndex + 1) - (table.getPageCount() - 1)) - 1 === 0} 
                  onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          >
            <FaAnglesRight  />
          </button>
        </div>
    )
}
export default Pagination;