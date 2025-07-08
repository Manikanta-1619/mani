import { useState }  from "react"
const Toggle=()=>{
    const [show,setShow]=useState(false)
    function toggle(){
        setShow(!show);

    }
    return(
        <>
        <button onClick={toggle}>{show ? "hide": "show" } message</button>
        <h1>{show && "this is toggle component"}</h1>
        <input type={show ? "text":"password"}/>
        

        </>
    )
}
export default Toggle;
