
function getDetails(){
    let data = {
        name: document.getElementById("name").value,
        id: document.getElementById("id_no").value,
        branch: document.getElementById("branch").value,
        event: document.getElementById("events").value
    }

    document.getElementById("getName").textContent = data.name;
    document.getElementById("getId").textContent = data.id;
    document.getElementById("getBranch").textContent = data.branch;
    document.getElementById("getEvent").textContent = data.event;
    
}