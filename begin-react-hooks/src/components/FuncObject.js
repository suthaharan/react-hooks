import React, {useState} from 'react'

function FuncObject() {
    const [name, setName] = useState({firstName:"Bell", lastName:"Pepper"});
    // expanding object using spread and replacing
    return (
        <div>
            <input type="text" value={name.firstName} onChange={e => setName({...name, firstName: e.target.value})}/>
            {JSON.stringify(name)}
            <input type="text" value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})}/>
        </div>
    )
}

export default FuncObject
