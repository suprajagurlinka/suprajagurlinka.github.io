import React, { useState } from 'react'

export default function Hooks(){
    
    let [count,setCount]=useState(0)
        return (
            <div>
                <button onClick={()=>setCount(count+1)}>Hooks increment{count}</button>
            </div>
        )
    }
