import React, {FunctionComponent} from 'react';
import "./summaryStyle.css"

type props = {
    icon?:any
    content:any
    title?:string
    heading:string
}


export const SummaryCard: FunctionComponent<props>=({icon, content, title, heading})=>{

    return(
        <div className={"summary__container"}>
            <h3 className={"summary__heading"}>{heading}</h3>
            <div className={"item__container"}>

                <div>
                    {
                        icon
                           &&
                        icon
                    }
                </div>
                <div>
                    <h2>{content}</h2>
                </div>
            </div>

        </div>

    )
}