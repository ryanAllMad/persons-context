/* eslint-disable no-undef */
import { createContext, useState } from "react"


const PersonContext = createContext()

export const Provider = ({children}) => {
    const [retreatStatus, setRetreatStatus] = useState('not going')

    const data = {
        retreatStatus,
        changeRetreatStatus: () => {
            setRetreatStatus('going')
        }
    }

    return <PersonContext.Provider value={data}>{children}</PersonContext.Provider>
}

export default PersonContext