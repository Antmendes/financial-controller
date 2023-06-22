import React, { useState } from "react";
import styled from 'styled-components'
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import Modal from 'react-modal';
import { NewTransactionModal } from "./components/NewTransactionModal";
import {  TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root'); // para questao de acessibilidade

 function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal () {
        setIsNewTransactionModalOpen(false);
    }

  return (
    <TransactionsProvider>  
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} /> 
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      
    </TransactionsProvider>
  );
}
                                 // contexto.provider vai em volta de onde queremos consumir o contexto, nesse caso toda a aplicaçao tem acesso
export default App
