import React, {useState, useEffect} from 'react'


export const HookEffect2 = () => {

    const [growth, setGrowth] = useState(0);
    const [nirvana, setNirvana] = useState(false);

    useEffect(() => {
        console.log("I'm a new born!");
        setGrowth(1);
    }, []);

    useEffect(() => {
        if(growth>0){
            console.log("Make a mistake, Grow!");
        }
    });

    useEffect(() => {
        if(growth > 70){
            console.log("Attained nirvana!");
            document.title = "Attained nirvana!";
            setNirvana(true);
        }
    }, [nirvana, growth]);

    const growthHandle = () => {
        setGrowth(prevGrowth => prevGrowth + 10);
    }
    
    return (
        <div>
            <span>Growth: {growth}</span>
            <button onClick={growthHandle}>Grow!</button>
        </div>
    )
}

