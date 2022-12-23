import React, { useContext } from "react"
import PersonContext from "../context/PersonContext"
import Person from "./Person"


const Ryan = () => {
    const { retreatStatus, changeRetreatStatus } = useContext(PersonContext)
    return  (
    <Person age="38" name="ryan" favoriteColor="green" hobbies="coding, music" gender="female">
        <button onClick={changeRetreatStatus}>{retreatStatus}</button>
    </Person>
    )

}

export default Ryan