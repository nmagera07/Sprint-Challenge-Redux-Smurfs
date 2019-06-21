1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.filter, .map, .concat. You can use .concat or the spread operator to create a new object while keeping the properties. 

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store holds the main state for your application. Reducers keep the logic for your state, and connect to the store when needed to update the state. Actions tell us about changes from an event, and sends those changes to the reducer. 

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state is state that lives within that specific component. Application state is across the entire app. For example, you'd like to keep the state for a form inside the component. There's no need to manage that state in the store, when the state is specific to that component. 

1.  What is middleware?

Middleware intercepts every action before it flows to the reducer. You can run a function at that point, or stop the process entirely. 

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk is used to make asynchronous calls to an API. Since JavaScript is synchronous, thunk is used for async processes. It changes action creators, by altering the syntax needed to make API calls. 

1.  Which `react-redux` method links up our `components` with our `redux store`?

The Connect method. 