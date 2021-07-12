### ReactJS Hooks
Sample programs on various ReactJS hooks tested on functions and classes
##### Rules of Hooks
- Only call Hooks at the top level
  * Don't call Hooks inside loops, conditions or nested functions
- Only call Hooks from React Functions
  * Call them from within React functional components and not just any regular javascript function


```
$ npm create-react-app begin-react-hooks

```

### Points to remember on ReactJS hooks
- Hooks are new feature addition in 16.8 which allows you to use React features without having to write class code. Hooks doesn't work within classes. 
- Hooks are 100% backward compatible and does not contain breaking changes.
- Reason Set 1: 
- - understand how this works in javascript. 
- - Will have to remember how to bind event handlers in classes. 
- - Classes do not minify very well and make hot reloading unreliable.
- Reason Set 2: 
- - There is no particular way to reuse stateful component logic. 
- - HOC and render props patterns do address this problem. 
- - Makes the code harder to follow. 
- - There is a need to share stateful logic in a meaningful way.
- Reason Set 3: 
- - Create components for complex scenarios, code is scattered and will be difficult to understand
- - E.g. Data fetching (component didmount, component didupate), Data listeners (component didmount, component willunmount)
- applied on function components
- hooks must execute in the same order
- conditional checks should not be implemented when hooks are programmed
- rce short notation is used for create react class components

##### useState
- useState hook lets you add state to functional components
- In classes, state is always an object
- With the useState hook, the state doesn't have to be an object
- useState returns two values in array. a state variable and a function to update the state variable
```
const [flightStatus, setFlightStatus] = useState('active')
```
- any time you are modifying state or are using previous value of the state to create new value, you will have to use function version of setting the state (similar to what you do for class variable setting)
- useState is normally declared in constructor of the class, so it is called only once. In function based programming, special care need to be given when setting the initial values of the useState hook. If a complex function is carried when the useState is declared, then it can seriously bring down the performance as the useState declaration is called every time the state changes.
- any time you need to update state value based on previous state value always use the function to increment the value of the previous state value
- When dealing with objects or arrays, always make sure to spread your state variable and then call the setter function


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
- when creating class components, you need to remember three things
  * create a class component
  * declare a state variable 
  * create a function to modify the state variable  


* When using useState with objects, useState does not merge and update objects. This is key point to note in class components and remember that you need to use spread property.
* The "set" part of the operation does not merge and update the useState value. You will need to use the spread operator to merge and update values.
* When you read spread property, copy every property / replica of the object and only update a specific value in the object

##### useEffect
* The Effecthook lets you perform side effects in functional components.
* It is a close replacement for componentDidMount, ComponentDidUpdate, componentDidUnmount
* We will use temporary data from jsonplaceholder site [https://jsonplaceholder.typicode.com]
