// Konstruktorifunktio
function Opiskelija(etunimi, sukunimi, aloitusvuosi) {
    this.etunimi = etunimi;
    this.sukunimi = sukunimi;
    this.aloitusvuosi = aloitusvuosi;
    this.palutaKokonimi = function() {
        return this.etunimi + ' ' + this.sukunimi;
    }
}
let opiskelija1 = new Opiskelija('Maija', 'Mallikas', 2010);
console.log(opiskelija1.palutaKokonimi());