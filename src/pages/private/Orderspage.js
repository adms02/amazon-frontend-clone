import React, { useState } from "react";
import Header from "../../components/Header";
import * as S from "../../assets/styles";
import OrderCard from "../../components/private/OrderCard";
import { useQuery } from "react-query";
import * as api from "../../api";
import Breadcrumbs from "../../components/Breadcrumbs";
import SubHeader from "../../components/SubHeader";
import Pagination from "../../components/Pagination";
import { Helmet } from "react-helmet-async";

function Orderspage() {
  const [page, setPage] = useState(1);

  const { data, isSuccess, isLoading, isError, error, isPreviousData } = useQuery(["getOrders", page], () => api.getOrders(page), {
    keepPreviousData: true,
    staleTime: 20 * 1000,
  });

  if (isLoading) console.log("loading");

  if (isError) console.log(error);

  const breadcrumbs = [
    { pathName: "Your account", link: "/gp/homepage" },
    { pathName: "Your Orders", link: "/gp/orders" },
  ];

  return (
    <>
      <Helmet title="Your Orders" />

      <Header />
      <SubHeader />
      <S.Orderspage>
        <div className="orders-header">
          <Breadcrumbs breadcrumbs={breadcrumbs} />

          <h1>Your Orders</h1>

          <div className="line" />
        </div>
        {data?.result?.map((x) => (
          <OrderCard
            key={x.payment_id}
            amount_shipping={x.amount_shipping}
            amount_total={x.amount_total}
            created_at={x.created_at}
            payment_id={x.payment_id}
            products={x.products}
          />
        ))}

        <div className="pagination-container">
          <Pagination data={data} setPage={setPage} />
        </div>
      </S.Orderspage>
    </>
  );
}

export default Orderspage;
