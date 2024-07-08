import React from "react";
import { Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setCurrentPage } from "../../store/slices/pageSlices";

const PaginationPage = () => {
  const totalCount = useSelector(
    (state: RootState) => state.currentPage.currentPageTotalCount
  );
  const limit = useSelector(
    (state: RootState) => state.currentPage.currentPageLimit
  );
  const dispatch = useDispatch()
  const currentPage = useSelector((state:RootState)=> state.currentPage.currentPage)
  const pageCount = Math.ceil(totalCount / limit);
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }
  return (
    <Pagination>
      {pages.map((page: any) => (
        <Pagination.Item
        key={page}
        active={currentPage === page}
        onClick={()=> dispatch(setCurrentPage(page))}
        >{page}</Pagination.Item>
      ))}
    </Pagination>
  );
};

export default PaginationPage;
