import { useEffect, useState } from "react";
import dummychartdata from "../dummychartdata.json";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const ChartData = () => {
  const [data, setData] = useState(dummychartdata);
  const [order, setOrder] = useState("ASC");
  const [totalClicks, setTotalClicks] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [totalConversions, setTotalConversions] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);

  // function for sorting columns
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setData(sorted);
      setOrder("DSC");
    } else if (order === "DSC") {
      const sorted = [...data].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setData(sorted);
      setOrder("ASC");
    }
  };

  useEffect(() => {
    let totalClicksSum = 0;
    let totalCostSum = 0;
    let totalConversionsSum = 0;
    let totalRevenueSum = 0;

    dummychartdata.forEach((data) => {
      totalClicksSum += data.clicks;
      totalCostSum += data.cost;
      totalConversionsSum += data.conversions;
      totalRevenueSum += data.revenue;
    });

    setTotalClicks(totalClicksSum);
    setTotalConversions(totalConversionsSum);
    setTotalRevenue(totalRevenueSum);
    setTotalCost(totalCostSum);
  }, []);

  return (
    <>
      <table>
        <thead>
          <th onClick={() => sorting("group")}>
            <div>
              <p>Group</p>
              <p>
                {order === "ASC" ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              </p>
            </div>
          </th>
          <th onClick={() => sorting("clicks")}>
            <div>
              <p>Clicks</p>
              <p>
                {order === "ASC" ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              </p>
            </div>
          </th>
          <th onClick={() => sorting("costs")}>
            <div>
              <p>Cost</p>
              <p>
                {order === "ASC" ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              </p>
            </div>
          </th>
          <th onClick={() => sorting("conversions")}>
            <div className="">
              <p>Conversions</p>
              <p>
                {order === "ASC" ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              </p>
            </div>
          </th>
          <th onClick={() => sorting("revenue")}>
            <div className="">
              <p>Revenue</p>
              <p>
                {order === "ASC" ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              </p>
            </div>
          </th>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.group}>
              <td>{d.group}</td>
              <td>{d.clicks}</td>
              <td>USD {d.cost}</td>
              <td>{d.conversions}</td>
              <td>USD {d.revenue}</td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td>{totalClicks}</td>
            <td>USD {totalCost}</td>
            <td>{totalConversions}</td>
            <td>USD {totalRevenue}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ChartData;
