// Code Keypad Component Here

function Keypad (){
    function handleChange(event){
        console.log("Entering password...")
        console.log(`${event.target.value}`)
    }
    return (
        <input 
        type="password"
        placeholder="Enter password here!"
        onChange={handleChange} 
        />
    )
}

export default Keypad;