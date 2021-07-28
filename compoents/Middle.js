import React from 'react'
import{Line} from 'react-chartjs-2'

const data = {
    labels:[

    ]
}
function Middle() {
    return (
      
        <div className=" bg-white ml-2   shadow-sm w-8/12 border rounded-xl border-gray-100">

        <div className="border-b p-3 border-gray-100">
            <p className="font-semibold  ">Elrond eGold </p>
        </div>
        <div>
            <Line data={data} />
        </div>
    </div>
)  
}

export default Middle
