const noms = [
    "Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah", 
    "Ivan", "Judy", "Kyle", "Laura", "Mike", "Nina", "Oscar", "Paul", 
    "Quinn", "Rose", "Steve", "Tina", "Uma", "Vince", "Wendy", "Xander", 
    "Yasmin", "Zane", "Liam", "Noah", "Emma", "Olivia", "Ava", "Sophia", 
    "Isabella", "Mia", "Amelia", "Harper", "Ethan", "Mason", "Logan", "James"
];

function genererGroupes() {
    const cellules = document.querySelectorAll("#groupTable tbody td");
    cellules.forEach(cellule => cellule.textContent = "");
    const nomsMélangés = [...noms].sort(() => Math.random() - 0.5);
    cellules.forEach((cellule, index) => {
        if (nomsMélangés[index]) {
            cellule.textContent = nomsMélangés[index];
        }
    });
}