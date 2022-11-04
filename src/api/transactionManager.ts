import axios from "axios"
import {ONLINE_BACK_END_PROD_PROXY } from "../constants/variableNames"

interface Expense {
    total_amount_usd:number | string,
    date:string,
    operation_type:string,
    currency:string,
    total_amount_cdf:number | string
}

export const TransactionService = {
    baseUrl: axios.create({
        baseURL:`http://${ONLINE_BACK_END_PROD_PROXY}:5000/api/transactions`
    }),
    addNewExpense: async function(expense:Expense){
        return await this.baseUrl.post("/add-expense", expense)
    }
}
