function addItem() {
    const userInput = document.querySelector("#user__input").value;
    if(userInput == "") {
        alert("You didn't enter anything. Do you want to be productive?");
    } else {
        console.log("working!")
        document.getElementById("item__list").innerHTML +=
            `<li class="list-group-item d-flex bd-highlight mb-3 align-items-center" id="item">
            <input class="form-check-input me-1 p-2 bd-highlight" type="checkbox" value="" aria-label="...">
            <div class="p-2 bd-highlight">${userInput}</div>
            <i class="bi bi-trash ms-auto p-2 bd-highlight" id="trash" onClick=delItem()></i>
            </li>`;
        document.getElementById("user__input").value = '';
        }
}

function delItem() {
    document.getElementById("trash").addEventListener("click", function() {
        document.getElementById("item").remove();
    })
}