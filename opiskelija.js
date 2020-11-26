// Konstruktorifunktio
function Opiskelija(etunimi, sukunimi, aloitusvuosi, sahkoposti) {
    this.etunimi = etunimi;
    this.sukunimi = sukunimi;
    this.aloitusvuosi = aloitusvuosi;
    this.sahkoposti = sahkoposti;

    this.palautaTiedot = function() {
        return this.etunimi + ' ' + this.sukunimi + ', aloittanut ' + this.aloitusvuosi + ' (sähköposti: ' + this.sahkoposti + ')';
    }
    this.tarkistaAloitusVuosi = function() {
        if ( this.aloitusvuosi > 2020 ) {
            console.log('Aloitusvuosi virheellinen');
        }
    }
}
let opiskelija1 = new Opiskelija('Maija', 'Mallikas', 2010);
opiskelija1.sahkoposti = 'maija.mallikas@joku.fi';
console.log(opiskelija1.palautaTiedot());
let opiskelija2 = new Opiskelija('Matti', 'Mallikas', 2022, 'matti@gmail.com');
console.log(opiskelija2.palautaTiedot());
opiskelija2.tarkistaAloitusVuosi();