import React, { useContext } from 'react';
import incomeImg from '../../assets/entradas.svg'
import outcomeImg from '../../assets/saidas.svg'
import totalImg from '../../assets/total.svg'

import { Container } from "./styles";
import { TransactionsContext } from '../../TransactionsContext';

export function Summary() {

    const { transactions } = useContext(TransactionsContext);

    const totalDeposits = transactions.reduce((acc, transaction) => {
        if (transaction.type == 'deposit') {
            return acc + transaction.amount;
        }

        return acc;
    }, 0);

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>{totalDeposits}</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>- R$500,00</strong>
            </div>
            <div className="highLight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    );
}