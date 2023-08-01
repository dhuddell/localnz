import { useDispatch, useSelector } from "react-redux"
import { RootState } from "./store"
import { increment } from "./reducers/counter"
import logo from './logo.svg';

const InnerApp = () => {
    const count = useSelector((state: RootState) => state.counter.count)
    const dispatch = useDispatch()
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <button onClick={() => { 
            console.log('click clack')
            dispatch(increment())}}
            >
                clickit
            </button>
            <p>
                {`${count} times`}
            </p>
        </header>
    )
}

export default InnerApp