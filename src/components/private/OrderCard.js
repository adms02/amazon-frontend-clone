import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Currency from "react-currency-formatter";
import dataFormat from "dateformat";
import reorder_icon from "../../assets/images/reorder_icon.png";

function OrderCard({ amount_shipping, amount_total, created_at, payment_id, products }) {
  const created_at_Formatted = dataFormat(created_at, "ddS mmmm yyyy");

  return (
    <S.OrderCard>
      <div className="order-top">
        <div className="top-left">
          <div className="date">
            <p className="order-title">ORDER PLACED</p>
            <p className="order-desc">{created_at_Formatted}</p>
          </div>
          <div className="title">test</div>
          <div className="total">
            <p className="order-title">TOTAL</p>
            <p className="order-desc">
              <Currency quantity={Number(amount_total)} currency="GBP" />
            </p>
          </div>
        </div>

        <div className="top-right">
          <div className="order-title">ORDER #{payment_id.slice(0, 20)}</div>

          <div className="action-btns">
            <a>View order details</a>
            <div className="line" />
            <a>Invoice</a>
          </div>
        </div>
      </div>

      <div className="order-content">
        <div className="order-content-left">
          {products?.map((x) => (
            <S.Item key={x.product_id}>
              <div className="item-img">
                <img src={x.images.id1} alt="" />
                <span className="item-quantity">{x.quantity}</span>
              </div>

              <div className="basic-actions">
                <Link className="item-title" to={`/${x.title}/dp/${x.product_id}`}>
                  {x.title}
                </Link>

                <Link to={`/${x.title}/dp/${x.product_id}`}>
                  <button className="flat-btn reorder-btn">
                    <div className="reorder-icon" style={{ backgroundImage: `url(${reorder_icon})` }} />
                    Buy it again
                  </button>
                </Link>
              </div>
            </S.Item>
          ))}
        </div>
      </div>
    </S.OrderCard>
  );
}

export default OrderCard;

const S = {};

S.OrderCard = styled.div`
  border: 1px solid #d5d9d9;
  border-radius: 10px;
  margin-top: 20px;

  .order-top {
    background-color: #f0f2f2;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 10px 33px 10px 33px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .order-title {
    font-size: 12px;
    line-height: 16px;
    color: #565959;
  }

  .order-desc {
    font-size: 14px;
    color: #565959;
    line-height: 20px;
  }

  .top-left {
    display: flex;
  }

  .top-right {
    display: flex;
    flex-direction: column;
  }

  .date,
  .total,
  .recipient {
    margin-right: 33px;
  }

  .action-btns {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
  }

  .action-btns a {
    color: #007185;
    font-size: 14px;
    line-height: 20px;
  }

  .line {
    border-right: 1px solid #dddddd;
  }

  .order-content {
    padding: 20px 10px 20px 10px;
  }

  .order-content-left {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 526px) {
    .order-top {
      flex-direction: column;
    }

    .top-left {
      flex-direction: column;
      align-items: center;
    }
    .top-right {
      flex-direction: column;
    }

    .order-title {
      text-align: center;
    }

    .date,
    .total,
    .recipient {
      margin-right: 0;
    }
  }
`;

S.Item = styled.div`
  display: flex;
  margin-top: 15px;

  .item-img {
    height: 100px;
    width: 100px;
    background-color: #fff;
    margin-right: 22px;
    position: relative;
  }

  .item-quantity {
    position: absolute;
    bottom: -3px;
    right: -3px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    border: 1px solid #ccc;
    bottom: 0;
    font-size: 0.8em;
    height: 20px;
    line-height: 20px;
    min-width: 20px;
    padding: 0 5px;
  }

  .item-img img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .item-title {
    font-size: 14px;
    color: #007185;
    line-height: 20px;
    margin-bottom: 5px;
  }

  .basic-actions {
    max-width: 523px;
    display: flex;
    flex-direction: column;
  }

  .reorder-btn {
    border-radius: 20px;
    width: 150px;
    position: relative;
    overflow: hidden;
  }

  .reorder-icon {
    background-size: 25px;
    height: 25px;
    width: 25px;
    left: 2px;
    top: 2px;
    position: absolute;
  }

  @media (max-width: 526px) {
    flex-direction: column;
    margin-top: 30px;

    align-items: center;

    .item-img {
      margin-right: 0;
    }

    .item-title {
      margin: 20px 0;
    }
  }
`;
