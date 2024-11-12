const noms = [
   "BOGUE   ","PEKPELI   ","KOUEVI   ","KPOYIZOUN   ","AKAKPO   ","SAVI   ","TELOU   ","ADJEGAN   ", "AMEBLE   ","ATTIOGBE  ",
   "BADANE   ","BARRY   ","BEGUEMSI   ","DEGBE   ","DEGBEY   ","DOUFFAN   ",
   "DUGA   ","EDITCHAO   ","EKPE   ","GANDA   ","HOUNKANLY   ","HOUNKPE   ","KOGON   ","LABOU   ","LAWADAN   ","NOVIVO   ","NIJNYABU   ","OSSEYI   ","SAMAN   ","SANOU   ",
   "SOHE   ","SUNDAY   ","TCHAGAFOU   ","TCHAO   ","TCHINDO   ","TIDATOA   ","TOURE   ","AGBEGNIGAN   ","AKALO   ","KATATCHOIY   "
];


//fonction pour generer les groupes aleatoirement
function genererGroupes() {
    const cellules = document.querySelectorAll("#groupTable tbody td");
    cellules.forEach(cellule => cellule.textContent = "");
    const nomsMélangés = [...noms].sort(() => Math.random() - 0.5);
    cellules.forEach((cellule, index) => {
        if (nomsMélangés[index]) {
            cellule.textContent = nomsMélangés[index];
        }
    });


// Fonction pour télécharger le tableau en PDF
function telechargerPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Récupère les données du tableau en un format utilisable
    const rows = [];
    const table = document.getElementById("groupTable");
    const tableRows = table.querySelectorAll("tr");

    tableRows.forEach((row, rowIndex) => {
        const rowData = [];
        row.querySelectorAll("td, th").forEach(cell => {
            rowData.push(cell.innerText);
        });
        rows.push(rowData);
    });

    // Utilise autoTable pour générer le tableau dans le PDF
    doc.autoTable({
        head: [rows[0]], // En-têtes de colonne
        body: rows.slice(1), // Corps du tableau (enlève l'en-tête)
        startY: 20, // Position de départ en Y pour éviter le titre
        theme: 'grid'
    });

    doc.text("Tableau de Répartition des Groupes Salle C", 10, 10); // Titre
    doc.save("tableau_groupes.pdf");
}
    // Ajouter un écouteur d'événement sur le bouton pour télécharger le PDF
    document.getElementById("telecharger").addEventListener("click", telechargerPDF);


}