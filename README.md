# React Class Components Workshop

## Intializing a React Class Component

```javascript
class Welcome extends React.Component {
	render() {
		return <h1>Hello, {this.props.name}</h1>;
	}
}
```

- `render()` is the only method you _must_ define in a React Class Component

## Component Lifecycle Methods

- Each component has several "lifecycle methods" that you can override in order to run code at particular times of rerendering.
  - This is accomplished with the Hook `useEffect()` in functional components

### Mounting

- These are called in the following order when an instance of a component is being created and inserted into the DOM. This is the initial function that runs in `useEffect()` on render

  - **`constructor()`**

    - Called before a component is mounted
    - If you don’t initialize state and you don’t bind methods, you don’t need to implement a constructor for your React component.
    - When implementing a component with a constructor, you should call `super(props)` before any other statements, otherwise `this.props` will be `undefined`
    - Only needs to be used when initializing local state with `this.state` and when binding event handler methods to an instance

      - This is the only place you should modify `this.state` directly. This is where we set initial state. Otherwise, use `this.setState()`
      - Avoid copying props to state:

        ```javascript
        constructor(props) {
          super(props);
          // Don't do this!
          this.state = { color: props.color };
        }
        ```

        - Updates to the `color` prop won't be reflected in state. Use `this.props.color` instead
        - You CAN use this pattern if you intentionally want to ignore prop updates. In this case we would rename the prop `initialColor` or `defaultColor`

  - `static getDerivedStateFromProps()`
  - **`render()`**
    - Examines `this.props` and `this.state` and returns React Elements and primitive data types
    - Should be a _pure function_, meaning it does not modify state and returns the same thing every time
    - `render()` will not be invoked if `shouldComponentUpdate()` returns `false`.
  - **`componentDidMount()`**
    - Immediately invoked after a component is mounted (inserted into the DOM tree). Initialization that requires a DOM node should go here, such as a fetch to grab data.
    - Also a great place to set up subscriptions (in which case, you will need to use `componentWillUnmount()` to set unsubscribe)
    - You may call `this.setState()` immediately in `componentDidMount()`. This will trigger an extra rendering, but it will happen before the browser updates the screen. This guarantees even though `render()` will be called twice, the user won't see the intermediate state of the component.

### Updating

- An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered. This is similar to adding items to the _dependancy array_ in `useEffect()`

  - `static getDerivedStateFromProps()`
  - `shouldComponentUpdate()`
  - **`render()`**
  - `getSnapshotBeforeUpdate()`
  - **`componentDidUpdate(prevProps, prevState, snapshot)`**

    - Immediately invoked after updating occurs. Not called during the initial render
    - Use this as an opportunity to operate on the DOM when the component has been updated
    - Can also be used to do network requests as long as you compare the previous props to the current props (may not be necessary if props haven't changed)

      ```javascript
      componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.userID !== prevProps.userID) {
          this.fetchData(this.props.userID);
        }
      }
      ```

    - You may call `this.setState()` in `componentDidUpdate()`, but it must be wrapped in a conditional, otherwise you're going to have an infinite loop.
    - Will not be invoked if `shouldComponentUpdate()` returns `false`

### Unmounting

- This method is called when a component is being removed from the DOM. This is emulated in `useEffect()` by returning a function at the end of the callback.
  - **`componentWillUnmount()`**
    - Invoked immediately before a component is unmounted and destroyed. This is where you want to perform any necessary cleanup, such as invalidating timers, cancelling network requests, and cleaning up subscriptions created in `componentDidMount()`
    - You should not call `this.setState()` in this method, because the component will not be re-rendered

### Error Handling

- These methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component
  - `static getDerivedStateFromProps()`
  - `componentDidCatch()`

## Other APIs

- Each component also provides these APIs:
  - `setState()`
    - Enqueues changes to the component state and tells React that this component and it's children need to be re-rendered with the updated state.
    - Primary method used to update the user interfact in response to event handlers and server responses
  - `forceUpdate()`

## Class Properties

- `defaultProps`
- `displayName`

## Instance Properties

- `props`
- `state`
