//Stuff That Just There
let TotalDiv = document.getElementById("TotalDiv");
let TotalText = document.getElementById("TotalText"); 
let NotesDiv = document.getElementById("NotesDiv");
let Overlay = document.getElementById("Overlay");
let TotalMoney = 0

//Stuff That Appears After Something Happens
let EditDiv = document.getElementById("EditDiv");
let EditInput = document.getElementById("EditInput");
TotalDiv.addEventListener("click", (event) =>{
    EditDiv.style.visibility = "visible"
    Overlay.style.visibility = "visible";
    EditInput.focus()
})
EditInput.addEventListener("keydown", function (event) {
    if (event.code === "Enter") {
        if (EditInput.value !== "") {
            TotalMoney = Number(EditInput.value)
            TotalText.textContent = "Total Money: " + String(TotalMoney) + " $"
        }
        else {
            window.alert("You cannot add empty values")
        }
    }
})

let NoteAddDiv = document.getElementById("NoteAddDiv");
let NoteAddInput = document.getElementById("NoteAddInput");
let NotesList = document.getElementById("NotesList");
NotesDiv.addEventListener("click", (event) => {
    NoteAddDiv.style.visibility = "visible"
    Overlay.style.visibility = "visible"
    NoteAddInput.focus()
})
NoteAddInput.addEventListener("keydown", function (event) {
    if ( event.code === "Enter") {
        if (NoteAddInput.value !== "") {
            let NewSpan = document.createElement("span")
            NewSpan.setAttribute("class","NewSpan")
            let NewDeleteButton = document.createElement("button");
            NewDeleteButton.textContent = "🗑️"
            NewDeleteButton.setAttribute("class","NewDeleteButton");
            let NewListElement = document.createElement("li");
            NewListElement.setAttribute("class","NewListElement");
            NewListElement.textContent = NoteAddInput.value;
            NewSpan.append(NewListElement);
            NewSpan.append(NewDeleteButton);
            NotesList.append(NewSpan)
            NoteAddInput.value = "";

            NewDeleteButton.addEventListener("click", (event) => {
                NewSpan.remove()
                event.stopPropagation();
            })
        }
        else {
            window.alert("You cannot add empty notes")
        }
    }
})

let HistoryDiv = document.getElementById("HistoryDiv");
let HistoryList = document.getElementById("HistoryList");
let AddRemoveDiv = document.getElementById("AddRemoveDiv");
let IncomeExpenseDiv = document.getElementById("IncomeExpenseDiv");
let IncomeInput = document.getElementById("IncomeInput");
let ExpenseInput = document.getElementById("ExpenseInput");
AddRemoveDiv.addEventListener("click", (event) => {
    IncomeExpenseDiv.style.visibility = "visible"
    Overlay.style.visibility = "visible"
});
IncomeInput.addEventListener("keypress", function (event) {
    if (event.code === "Enter") {
        if (IncomeInput.value !== "") {
            TotalMoney += Number(IncomeInput.value)
            TotalText.textContent = "Total Money: " + String(TotalMoney) + " $"
            IncomeInput.placeholder = "Negative numbers are not accepted"

            let NewHistorySpan = document.createElement("span")
            NewHistorySpan.setAttribute("class","NewHistorySpan");
            let NewHistoryList = document.createElement("li");
            NewHistoryList.textContent = "Added: " + IncomeInput.value + "$";
            NewHistoryList.setAttribute("class","NewHistoryList");
            let NewHistoryDeleteButton = document.createElement("button");
            NewHistoryDeleteButton.textContent = "X";
            NewHistoryDeleteButton.setAttribute("class","NewHistoryDeleteButton");
            NewHistorySpan.append(NewHistoryList);
            NewHistorySpan.append(NewHistoryDeleteButton)
            HistoryList.append(NewHistorySpan)

            IncomeInput.value = "";
            NewHistoryDeleteButton.addEventListener("click", (event) => {
                NewHistorySpan.remove()
                event.stopPropagation();
            })
        }
        else {
            IncomeInput.placeholder = "Please enter a value"
        }
    }
})
ExpenseInput.addEventListener("keypress", function (event) {
    if (event.code === "Enter") {
        if (ExpenseInput.value !== "") {
            TotalMoney -= Number(ExpenseInput.value)
            TotalText.textContent = "Total Money: " + String(TotalMoney) + " $"
            ExpenseInput.placeholder = "Positive numbers are not accepted"

            let NewHistorySpan = document.createElement("span")
            NewHistorySpan.setAttribute("class","NewHistorySpan");
            let NewHistoryList = document.createElement("li");
            NewHistoryList.textContent = "Removed: " + ExpenseInput.value + "$";
            NewHistoryList.setAttribute("class","NewHistoryList");
            let NewHistoryDeleteButton = document.createElement("button");
            NewHistoryDeleteButton.textContent = "X";
            NewHistoryDeleteButton.setAttribute("class","NewHistoryDeleteButton");
            NewHistorySpan.append(NewHistoryList);
            NewHistorySpan.append(NewHistoryDeleteButton)
            HistoryList.append(NewHistorySpan)
            ExpenseInput.value = "";
            NewHistoryDeleteButton.addEventListener("click", (event) => {
                NewHistorySpan.remove()
                event.stopPropagation();
            })
        }
        else {
            ExpenseInput.placeholder = "Please enter a value"
        }
    }
})


//Overlay
Overlay.addEventListener("click", (event)=>{
    if (EditDiv.style.visibility === "visible") {
        EditDiv.style.visibility = "hidden"
    }
    else if (NoteAddDiv.style.visibility === "visible") {
        NoteAddDiv.style.visibility = "hidden"
    }
    else if (IncomeExpenseDiv.style.visibility === "visible") {
        IncomeExpenseDiv.style.visibility = "hidden"
    }
    Overlay.style.visibility = "hidden";
})
