import React, {FunctionComponent} from 'react';
import {SummaryCard} from "./SummaryCard";
import {HiOutlineUserGroup} from "react-icons/hi";
import "./cardsStyle.css"

export const CardsContainer: FunctionComponent =()=>{
    return(
        <div className={"cardsContainer"}>
            <SummaryCard heading={"Total in"} title={"USD"} content={"600.00"} />
            <SummaryCard heading={"Total in"} title={"CDF"} content={"42,000"} />
            <SummaryCard heading={"Members"} icon={<HiOutlineUserGroup className={"card__icon"} />} content={"10"} />
        </div>

    )
}