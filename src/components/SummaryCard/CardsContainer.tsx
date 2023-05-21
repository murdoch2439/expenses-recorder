import React, {FunctionComponent} from 'react';
import {SummaryCard} from "./SummaryCard";
import {HiOutlineUserGroup} from "react-icons/hi";
import {GrTransaction} from "react-icons/gr";
import {AiOutlineUnorderedList} from "react-icons/ai";
import {CiMoneyBill} from "react-icons/ci";
import "./cardsStyle.css"
import {useUserContext} from "../../context/UserContext";

export const CardsContainer: FunctionComponent =()=>{
    const {information:{statistics, }, members} =useUserContext()
    const cards = [
        {
            icon: <CiMoneyBill className={"card__icon"}/>,
            heading: "Balance",
            title: "USD",
            content: `${statistics ? statistics.balance.toFixed(2):"0"} $`,
        },
        {
            icon: <AiOutlineUnorderedList className={"card__icon"}/>,
            heading: "Entries",
            title: "Posts",
            content: `${statistics ? statistics.entries: "0"}`
        },
        {
            icon: <HiOutlineUserGroup className={"card__icon"}/>,
            heading: "Contributors",
            title: "Posts",
            content: `${members ? members.length: "0"}`
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
        </div>

    )
}