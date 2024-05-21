import { useContext, useEffect, useState } from 'react';
//contexts
import { TransactionsContext } from '../AllContexts';

const useChartData = (initialData) => {
  //context
  const [transactionData] = useContext(TransactionsContext);
  //states
  const [chartData, setChartData] = useState(initialData);

  // functions
  const calculateCategories = (transactionData) => {
    let foodTotal = 0, entertainmentTotal = 0, travelTotal = 0;
    transactionData.forEach(item => {
      if (item.category === "food") {
        foodTotal += Number(item.price);
      }
      if (item.category === "entertainment") {
        entertainmentTotal += Number(item.price);
      }
      if (item.category === "travel") {
        travelTotal += Number(item.price);
      }
    });
    setChartData([
      { name: 'Entertainment', value: entertainmentTotal },
      { name: 'Food', value: foodTotal },
      { name: 'Travel', value: travelTotal },
    ]);
  }

  //everytime transactionData updates
  useEffect(() => {
    calculateCategories(transactionData);
  }, [transactionData]);

  return chartData;
}

export default useChartData;
