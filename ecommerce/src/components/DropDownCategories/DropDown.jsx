import React from "react";

function DropDown(props){
    return (
        <tr className='dropdown'>
            {props.catetories.map((category) => {
                return(
                    <tr className='rows' key={category.id}>
                        <td>{category.catetories}</td>
                    </tr>
                )
            }
            
            )}

        </tr>
    )
}

export default DropDown;