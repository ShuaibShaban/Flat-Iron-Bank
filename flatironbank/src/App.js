import Header from './components/Header';
import './App.css';
import React,{useEffect, useState} from "react";
import Transactions from './components/Transactions';
import NewTransactionForm from './components/NewTransactionform';

function App() {
  const [transactions,setTransactions] = useState ([])
   useEffect(()=> {
    fetch("https://api.npoint.io/7b30209f83abd75e9ffe/transactions/")
    .then(response=>response.json())
    .then(trans=>setTransactions(trans))
   }, [])
   console.log(transactions);
   function handleUpdateOnSubmission(newTransaction){
     console.log(newTransaction);
     
// post is used to add new items 
     const serverOptions={
      method:"POST",
      headers:{
        "Content Type": "application/json"
      },
      body:JSON.stringify(newTransaction)
     }
     fetch("https://api.npoint.io/7b30209f83abd75e9ffe/transactions/",serverOptions)
     .then((response=>response.json))
     .then(newItem=>setTransactions(transactions => [...transactions,newItem]))
     .catch(error=>console.log(error))
   }
   
   function handleOnSearching(search){
      setTransactions(transactions=> transactions.filter(transaction=>transactions.description.includes = {search}))
   }
  return (
    <div className="App">
     <Header />
     <searchForm onSearching={handleOnSearching} />
     <Transactions transactions={transactions}/>
     <NewTransactionForm onSubmission={handleUpdateOnSubmission}/>
    </div> 
  );
}

export default App;
