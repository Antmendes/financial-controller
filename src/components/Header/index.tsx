import React, { useState } from "react";
import logoImg from '../../assets/logo.svg'
import { Container, Content } from "./styles";
import Modal from 'react-modal';


interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}



export function Header({onOpenNewTransactionModal}: HeaderProps) { // recebe a propriedade e passa para o button
    
    return (
        <Container>
            <Content>
            <img src={logoImg} alt="financial controller" />
            <button type="button" onClick={onOpenNewTransactionModal}>
                Nova transação
            </button>

           
            </Content>
        </Container>
    )
}