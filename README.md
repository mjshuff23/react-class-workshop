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
  - `static getDerivedStateFromProps()`
  - **`render()`**
  - **`componentDidMount()`**

### Updating

- An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered. This is similar to adding items to the _dependancy array_ in `useEffect()`
  - `static getDerivedStateFromProps()`
  - `shouldComponentUpdate()`
  - **`render()`**
  - `getSnapshotBeforeUpdate()`
  - **`componentDidUpdate()`**
