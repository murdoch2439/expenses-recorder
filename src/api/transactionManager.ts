import axios from "axios"
import {LOCAL_BACK_END_PROD_PROXY, ONLINE_BACK_END_PROD_PROXY } from "../constants/variableNames"

interface Expense {
    total_amount_usd:number | string,
    date:string,
    operation_type:string,
    currency:string,
    total_amount_cdf:number | string
}

interface Contribution {
    amount:number | string,
    date:string,
    operation_type:string,
    currency:string,
    member:number | string
}

export const TransactionService = {
    baseUrl: axios.create({
        // baseURL:`http://${LOCAL_BACK_END_PROD_PROXY}:5000/api`
        baseURL:`https://${ONLINE_BACK_END_PROD_PROXY}/api`
    }),
    addNewExpense: async function(expense:Expense){
        return await this.baseUrl.post("/transactions/add-expense", expense)
    },
    addNewContribution: async function(contribution: Contribution){
        return await this.baseUrl.post("/transactions/add-contribution", contribution)
    },
    getAllExpenses: async function(){
        return await this.baseUrl.get("/transactions/get-all-contributions")
    },
    getAllMembers: async function(){
        return await this.baseUrl.get("/users/get-all-members")
    }
}
