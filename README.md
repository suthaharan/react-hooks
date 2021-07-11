### ReactJS Hooks
Sample programs on various ReactJS hooks tested on functions and classes

```
$ npm create-react-app begin-react-hooks

```

### Points to remember on ReactJS hooks
- applied on function components
- hooks must execute in the same order
- conditional checks should not be implemented when hooks are programmed
- 

##### useState
- useState returns two values in array. a state variable and a function to update the state variable
```
const [flightStatus, setFlightStatus] = useState('active')
```
- any time you are modifying state or are using previous value of the state to create new value, you will have to use function version of setting the state (similar to what you do for class variable setting)
- useState is normally declared in constructor of the class, so it is called only once. In function based programming, special care need to be given when setting the initial values of the useState hook. If a complex function is carried when the useState is declared, then it can seriously bring down the performance as the useState declaration is called every time the state changes.
```javascript
function initialCount(){
    console.log("Initial count setter called!");
    return 5;
  }

  const [count, setCount] = useState(initialCount()); //in this one number is passed each time

  const [count, setCount] = useState(initialCount); // in this one function is passed 

  const [count, setCount] = useState(() => initialCount()); // this one has similar result like the previous one but with arrow function usage
```

- when dealing with objects, useState works little differently. if you do want to work with objects in useState functions, then you need to spread out the previous state and then set the new state.


