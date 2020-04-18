1. What problem does the context API help solve?
  - It allows you to have global state that you don't have to pass down chains of components to use.
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
  - Actions are objects that contain a type and a payload and when dispatched to a reducer will tell the reducer what logic needs to be executed to create a new state tree, which then gets passed to the store, which then passes it along to any connected components.
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
  - Application state is information that multiple, disconnected components may each want to use. Component state is information that only a particular component cares about, or direct children of it.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
  - Redux thunk lets redux be able to deal with logic that can have multiple outcomes like success or failure.
1. What is your favorite state management system you've learned and this sprint? Please explain why!
  - Redux isn't as bad as I originally thought, but context does what redux does (at least in our limited uses), but with only a few, intuitive steps.
