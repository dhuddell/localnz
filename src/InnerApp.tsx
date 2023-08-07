import { useDispatch, useSelector } from "react-redux"
import { RootState } from "./store"
import { increment } from "./reducers/counter"
import logo from './assets/logo.png';
import lolLogo from './assets/lol.svg';
import danceLogo from './assets/dance.svg';

const InnerApp = () => {
    const count = useSelector((state: RootState) => state.counter.count)
    console.log(count)
    const dispatch = useDispatch()
    return (
        <div className="content">
            <h1 className="header">
                <img className='logo' src={logo} alt="logo" />
                
                <p className='title'>localnoize</p>
            </h1>
            <p className="description">What should we do tonight?</p>
            <section className="inner-content">
                <div className='left'>
                  <button className='button' onClick={() => { 
                    console.log('click clack')
                    dispatch(increment())}}
                    >
                      <div className="inner-button">
                        <img className='logo' src={lolLogo} alt="logo" />
                        Laugh
                      </div>
                    </button>
                </div>
                <div className='right'>
                  <button className='button' onClick={() => { 
                    console.log('click clack')
                    dispatch(increment())}}
                  >
                    <div className="inner-button">
                      <img className='logo' src={danceLogo} alt="logo" />
                      Dance
                    </div>
                  </button>
                </div>
            </section>
        </div> 
    )
}

export default InnerApp