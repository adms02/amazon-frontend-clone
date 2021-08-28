import React from "react";
import styled from "styled-components";
import ReactPaginate from "react-paginate";

function Pagination({ data, setPage }) {
  const onPageChangeHandler = (e) => {
    const page = e.selected + 1;
    setPage(page);
  };

  return (
    <S.Pagination>
      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={data?.limit}
        initialPage={0}
        onPageChange={onPageChangeHandler}
        breakClassName={"break-me"}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
        disabledClassName={"disabled"}
      />
    </S.Pagination>
  );
}

export default Pagination;

const S = {};

S.Pagination = styled.div`
  .pagination {
    margin: 25px auto;
    display: flex;
    list-style: none;
    outline: none;
    border: 1px solid #d5d9d9;
    white-space: nowrap;
    border-radius: 8px;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
  }

  /* .paginated > li {
    height: 100%;
  } */

  .pagination > li > a {
    padding: 5px 20px;
    height: 100%;
    outline: none;
    cursor: pointer;
    text-decoration: none;
    font-size: 14px;
    color: #0f1111;
    line-height: 46px;
  }

  .pagination > .active {
    border: 1px solid black;
  }

  .pagination > .active > a,
  .pagination > .active > span,
  .pagination > .active > a:hover,
  .pagination > .active > span:hover,
  .pagination > .active > a:focus,
  .pagination > .active > span:focus {
    /* background-color: #febd69; */
    /* border: 1px solid black; */
    outline: none;
    color: #0f1111;
  }
  .pagination > li > a,
  .pagination > li > span {
    color: black;
  }
  .pagination > li:first-child > a,
  .pagination > li:first-child > span,
  .pagination > li:last-child > a,
  .pagination > li:last-child > span {
    border-radius: unset;
  }

  .disabled a {
    color: #6f7373 !important;
    cursor: default !important;
  }
`;
