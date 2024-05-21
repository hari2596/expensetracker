import React from "react";
import Card from '../Card/Card';
import PieChartComp from '../PieChart/PieChart';
import "./Apphead.css"

function Apphead(props) {
  
    const { balance, expenses } = props;


  return (
    <div>
      <header className="Apphead">
        <Card text="Wallet balance" value={balance} />
        <Card text="Expenses" value={expenses} />
        <PieChartComp />
      </header>
</div>
  );
}

export default Apphead;
