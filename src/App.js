import { useEffect, useState, useCallback } from 'react';
//styles
import './App.css';
//components
import Navbar from './Navbar/Navbar';
import AppHead from './Apphead/Apphead';
import AppBody from './Appbody/Appbody';
//contexts
import { TransactionsContext, MoneyContext } from './AllContexts';
//variables
import { dummyData } from './dummyTranactions';

const LOCAL_STORAGE_KEY = 'allData';

function App() {
  const [money, setMoney] = useState({
    balance: 3800,
    expenses: 1200
  });
  const [transactionData, setTransactionData] = useState(dummyData);
  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    if (isInitialRender) {
      onLoad();
      setIsInitialRender(false);
    }
  }, [isInitialRender]);

  const saveToLocalStorage = useCallback(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ money, transactionData }));
  }, [money, transactionData]);

  useEffect(() => {
    if (!isInitialRender) {
      saveToLocalStorage();
    }
  }, [money, transactionData, isInitialRender, saveToLocalStorage]);

  const onLoad = () => {
    const localData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (localData) {
      const { money, transactionData } = JSON.parse(localData);
      setMoney(money);
      setTransactionData(transactionData);
    }
  };

  return (
    <main className='App'>
      <MoneyContext.Provider value={[money, setMoney]}>
        <TransactionsContext.Provider value={[transactionData, setTransactionData]}>
          <Navbar />
          <AppHead balance={money.balance} expenses={money.expenses} />
          <AppBody transactionData={transactionData} />
        </TransactionsContext.Provider>
      </MoneyContext.Provider>
    </main>
  );
}

export default App;
