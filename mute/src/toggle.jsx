import { useState } from "react"
import onBtn from './assets/on.svg'
import offBtn from './assets/off.svg'


function Button() {

    const [Btn, setBtn] = useState(onBtn)
    function Toggle() {
        if (Btn === offBtn){
        setBtn(onBtn)
        } else{
        setBtn(offBtn)
        }
    }
    return (
        <div>
            <img src={Btn} className="" alt="not working" onClick={Toggle}/>
        </div>
    )
}
export default Button