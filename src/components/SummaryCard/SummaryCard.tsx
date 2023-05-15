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
            {/*<h2>{heading}</h2>*/}
            <div className={"item__container"}>

                <div>
                    {
                        icon
                            ?
                        icon:
                        <h3>{title}</h3>
                    }
                </div>
                <div>
                    <h3>{content}</h3>
                </div>
            </div>

        </div>

    )
}