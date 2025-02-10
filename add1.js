

async function myFunction () {
        let query = fetch("http://localhost:5000/increment_counter", {method:"POST"})
        let response = await query 
        let data = await response.json()

        
        document.getElementById("ok").innerText= data.value
}

async function myFunct2 () {
        let query = fetch("http://localhost:5000/get_counter", {method:"GET"})
        let response = await query 
        let data = await response.json()

        document.getElementById("ok").innerText= data.value

}

myFunct2()