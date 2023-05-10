import React, {FunctionComponent} from 'react';
import {SummaryCard} from "./SummaryCard";
import {HiOutlineUserGroup} from "react-icons/hi";
import "./cardsStyle.css"
import {useUserContext} from "../../context/UserContext";

export const CardsContainer: FunctionComponent =()=>{
    const {information:{statistics}} =useUserContext()
    return(
        <div className={"cardsContainer"}>
            <SummaryCard heading={"Total in"} title={"USD"} content={statistics ?statistics.total_balance_usd.toFixed(2):""} />
            <SummaryCard heading={"Total in"} title={"CDF"} content={statistics ? statistics.total_balance_cdf.toLocaleString():""} />
            <SummaryCard heading={"Members"} icon={<HiOutlineUserGroup className={"card__icon"} />} content={"10"} />
        </div>

    )
}