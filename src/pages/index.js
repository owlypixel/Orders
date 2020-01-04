import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

export const query = graphql`
  query {
    allOrdersCsv {
      nodes {
        Amount
        Currency
        Customer_Email
        Customer_Name
        Order_Date
        id
      }
    }
  }
`;

export default ({ data }) => {
  const orderNodes = data.allOrdersCsv.nodes;

  return (
    <Layout>
      <table>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Currency</th>
            <th>Customer Email</th>
            <th>Customer Name</th>
            <th>Order Date</th>
          </tr>
        </thead>
        <tbody>
          {orderNodes.map(node => (
            <tr key={node.id}>
              <th>{node.Amount}</th>
              <th>{node.Currency}</th>
              <th>{node.Customer_Email}</th>
              <th>{node.Customer_Name}</th>
              <th>{node.Order_Date}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};
