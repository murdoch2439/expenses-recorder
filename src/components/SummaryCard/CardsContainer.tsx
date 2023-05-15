import React, {FunctionComponent} from 'react';
import {SummaryCard} from "./SummaryCard";
import {HiOutlineUserGroup} from "react-icons/hi";
import "./cardsStyle.css"
import {useUserContext} from "../../context/UserContext";

export const CardsContainer: FunctionComponent =()=>{
    const {information:{statistics}} =useUserContext()
    const cards = [
        {
            heading: "Total in",
            title: "USD",
            content: `${statistics ?statistics.total_balance_usd.toFixed(2):""}`,
        },
        {
            heading: "Total in",
            title: "CDF",
            content: `${statistics ?statistics.total_balance_cdf.toLocaleString():""}`,
        },
        {
            icon: <HiOutlineUserGroup className={"card__icon"}/>,
            heading: "Members",
            title: "Posts",
            content: "10"
        },

    ]
    return(
        <div className={"cardsContainer"}>
            {
                cards.map((card, index)=>{
                    return(
                        <SummaryCard key={index} {...card}/>
                    )
                })
            }


            {/*<SummaryC />*/}
        </div>

    )
}