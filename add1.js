

async function increment () {
        let query = fetch("http://localhost:5000/increment_counter", {method:"POST"})
        let response = await query 
        let data = await response.json()

        
        document.getElementById("ok").innerText= data.value
}

async function  refreshvalue () {
        let query = fetch("http://localhost:5000/get_counter", {method:"GET"})
        let response = await query 
        let data = await response.json()

        document.getElementById("ok").innerText= data.value

}

refreshvalue()
setInterval(refreshvalue, 1000)
