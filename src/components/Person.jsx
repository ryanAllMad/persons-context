/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState  } from "react"
import { useEffect } from "react"


const Person = ({ name, children, age, favoriteColor, hobbies, gender }) => {
    const [pronouns, setPronouns] = useState({subject: 'they', object: 'them'})
    const changePronouns = () => {
    if( gender === 'male') {
        setPronouns ({
            subject: 'he',
            object: 'him'
        })
    }
    if(gender ==='female') {
        setPronouns({
            subject: 'she',
            object: 'her'
        })
    }
   } 
   useEffect(() => changePronouns(), [])

    return (
    <div className={name}>
        <h3>{`${name.toUpperCase()}`}</h3>
        <h4>{age}</h4>
        <p>Gender: {`${gender}`}</p>
        <p>{`${name.toUpperCase()}`}'S favorite color is {`${favoriteColor}`}. {`${pronouns.subject.toUpperCase()}`} enjoys {`${hobbies}`}. 
        Today {`${pronouns.subject}`} is {children}
            to the company retreat. 
            {/*Unless a friend decides to go with {`${pronouns.object}`}.*/}
        </p>
    </div>
    )
}

export default Person