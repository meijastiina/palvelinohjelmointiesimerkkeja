// Luodaan opintojakso-olion konstruktori
function Opintojakso(nimi, laajuus, ajoitus) {
    this.nimi = nimi;
    this.laajuus = laajuus;
    this.ajoitus = ajoitus;
}

// Lisää-painikkeen käsittely
document.getElementById('lisaaKurssi').onclick = function() {
    // Hae kentistä tiedot ja luodaan niiden perusteella uusi olio
    let ajoitusValinta = document.getElementById('ajoitus');
    let uusiOpintojakso = new Opintojakso(document.getElementById('nimi').value, document.getElementById('laajuus').value, ajoitusValinta[ajoitusValinta.selectedIndex].innerHTML);
}