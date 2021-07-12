import React, {useState} from 'react'

function FuncArray() {
    const [Item, setItem] = useState([]);
    // expanding object using spread and appending values to it
    const incrementArray = () => {
        setItem([...Item, { 
            id: Item.length,
            number: Math.floor(Math.random() * 10) + 1
        }])
    }

    return (
        <div>
            <button onClick={incrementArray}> Click Me! </button>
            <ul>
                {
                Item.map(i => (
                <li key={i.id}> {i.number}</li>
                ))}
            </ul>
        </div>
    )
}

export default FuncArray
