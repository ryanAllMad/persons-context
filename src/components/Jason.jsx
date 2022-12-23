import React, { useContext } from "react"
import PersonContext from "../context/PersonContext"
import Person from "./Person"


const Jason = () => {
    const { retreatStatus, changeRetreatStatus } = useContext(PersonContext)
    return  (
    <Person age="32" name="jason" favoriteColor="black" hobbies="writing, making stacks" gender="male">
        <button onClick={changeRetreatStatus}>{retreatStatus}</button>
    </Person>
    )

}

export default Jason