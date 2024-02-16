
/*
Rozdělení peněz mezi lidi:
Máte určitou částku peněz (např. 11237 Kč).
Rozdělte tuto částku rovnoměrně mezi určitý počet lidí (např. 5).
Vypište každému, kolik dostal peněz.
a kolik zbývá v zůstatku

const castka = 11237;
const castkaNaOsobu = Math.floor (11237/5);
const zbytek = castka % 5;

document.body.innerHTML += "Každý dostane " + castkaNaOsobu + " Kč, ve fondu zbydou " + zbytek + " Kč.";

/*
2.Zaokrouhlení desetinného čísla:
Máte desetinné číslo (např. 8.75).
Zaokrouhlete toto číslo na celé číslo pomocí Math.round a vypište výsledek.

const cislo = 8.75;
const vysledek = Math.round(cislo);

document.body.innerHTML += "<p>Výsledek příkladu je " + vysledek + ".</p>";

/*
3. Výpočet daně z nákupu s DPH: Máte částku za zboží před DPH (např. 325 Kč).
Přidejte 21 % DPH k ceně zboží.
Vypište cenu zboží, DPH a celkovou cenu do HTML.

const cenaBezDPH = 325;
const cenaSDPH = 325*1.21;
const konecnaCena = Math.round(cenaSDPH);

document.body.innerHTML += "<p>Cena zboží bez DPH je " + cenaBezDPH + " Kč.</p>" + "<p>DPH je 21 %.</p>" + "<p>Cena zboží s DPH je " + cenaSDPH + " Kč, po zaoklouhlení " + konecnaCena + " Kč.</p>"

/*
4. Výpočet daně z příjmu s odečtem paušálu:Máte příjem z podnikání (např. 15000 Kč).
Odečtěte 60 % z příjmu jako paušál.
Ze zbytku zaplaťte 15 % daně.
Zaokrouhlete výsledek dolů a vypište daň do HTML.


const prijem = 15000;
const pausal = prijem*0.6;
const zaklad = prijem-pausal;
const dan = Math.floor(zaklad*0.15);

document.body.innerHTML += "<p>Daň z příjmu je " + dan + " Kč (po zaokrouhlení).</p>"

/*
5. Kalkulace nákladů na pronájem kol. Cena bez slevy je 257,-
Na půjčení kol platí následující slevový systém:
Při zapůjčení kola na 3 dny získáte 10% slevu.
Při zapůjčení kola na 5 dní získáte slevu 15 %.
Při zapůjčení kola na 7 a více dní je poskytována sleva 20 %.
Napište program, který vypočítá náklady na zapůjčení kola s přihlédnutím ke zvolené době pronájmu a odpovídající slevě.*/

/*
//Řešení A
const cenaDen = 257;
const pocetDni = Number(prompt("Počet dní: "));
const cena2Dny = cenaDen*2;
const cena3Dny = Math.round(cenaDen*0.9*3);
const cena4Dny = Math.round(cenaDen*0.9*4);
const cena5Dni = Math.round(cenaDen*0.85*5);
const cena6Dni = Math.round(cenaDen*0.85*6);
const sleva7Dni = Math.round(cenaDen*0.8);

if (Number.isInteger(pocetDni)){
    if (pocetDni === 1) {
        document.body.innerHTML += "<p>Cena za půjčení kola na jeden den je " + cenaDen + " Kč.</p>"
    }
    else if (pocetDni === 2) {
        document.body.innerHTML += "<p>Cena za půjčení kola na dva dny je " + cena2Dny + " Kč.</p>"
    }
    else if (pocetDni === 3) {
        document.body.innerHTML += "<p>Cena za půjčení kola na tři dny je " + cena3Dny + " Kč.</p>"
    }
    else if (pocetDni === 4) {
        document.body.innerHTML += "<p>Cena za půjčení kola na čtyři dny je " + cena4Dny + " Kč.</p>"
    }
    else if (pocetDni === 5) {
        document.body.innerHTML += "<p>Cena za půjčení kola na pět dní je " + cena5Dni + " Kč.</p>"
    }
    else if (pocetDni === 6) {
        document.body.innerHTML += "<p>Cena za půjčení kola na šest dní je " + cena6Dni + " Kč.</p>"
    }
    else if (pocetDni >= 7) {
        document.body.innerHTML += "<p>Cena za půjčení kola na " + pocetDni + " dní je " + (sleva7Dni*pocetDni) + " Kč.</p>"
    }
    else {
        document.body.innerHTML += "<p>Neplatná hodnota</p>"
    }
}
else {
    document.body.innerHTML += "<p>Neplatná hodnota</p>"
}
// výhrady: zbytečně složitý kód, je lepší mít kód co nejjednodušší a co nejpřehlednější
//          zaokrouhlení by mělo být až v rádcích výpisu, jinak to nevychází přesně
//          místo tolika řádků výpisu se dají použít operátory &&
*/
/*
//Řešení B
// tohle je dobré řešení
const cenaDen = 257;
const pocetDni = Number(prompt("Počet dní: "));

if (pocetDni === 1) {
    document.body.innerHTML += "<p>Cena za půjčení kola na jeden den je " + cenaDen + " Kč.</p>"
}
else if (pocetDni === 2) {
    document.body.innerHTML += "<p>Cena za půjčení kola na dva dny je " + pocetDni*cenaDen + " Kč.</p>"
}
else if (pocetDni === 3 || pocetDni === 4) {
    document.body.innerHTML += "<p>Cena za půjčení kola na " + pocetDni + " dny je " + Math.round(pocetDni*cenaDen*0.9) + " Kč.</p>"
}
else if (pocetDni === 5 || pocetDni === 6) {
    document.body.innerHTML += "<p>Cena za půjčení kola na " + pocetDni + " dní je " + Math.round(pocetDni*cenaDen*0.85) + " Kč.</p>"
}
else if (pocetDni >= 7 && Number.isInteger(pocetDni)) {
    document.body.innerHTML += "<p>Cena za půjčení kola na " + pocetDni + " dní je " + Math.round(pocetDni*cenaDen*0.8) + " Kč.</p>"
}
else {
    document.body.innerHTML += "<p>Neplatná hodnota</p>"
}
*/
/*
6. Výpočet nákladů na oběd v restauraci
Restaurace má speciální nabídku na pracovní oběd: oběd stojí 500 Kč. Pro stálé zákazníky je však sleva 20 %. Napište program, který spočítá celkové náklady na jídlo, pokud by bylo 15 nestálých zákazníků a 7 stálých zákazníků.

const plnaCena = 500
const cenaSleva = plnaCena*0.8

document.body.innerHTML = "Celkové náklady na jídlo budou " + (15*plnaCena + 7*cenaSleva) + " Kč."
*/

/*
7. Výpočet ceny jízdenky s přihlédnutím ke slevě
V kině probíhá akce, která poskytuje různé slevy na vstupenky v závislosti na věkové kategorii návštěvníků. Cena běžné vstupenky je 300 kč.
Důchodci a děti do 16 let mají slevu 25 %. Do kina přišlo 10 důchodců a 5 dětí do 16 let.
Studenti mají 50% slevu. Do kina přišlo 7 studentů.
Děti do 7 let navštěvují kino zdarma. Do kina přišly 2 děti této věkové kategorie.
Je nutné sepsat program pro výpočet celkových nákladů na vstupenky s přihlédnutím ke všem poskytnutým slevám a celkový počet návštěvníků.


const beznaVstupenka = 300
const nakladyDetiDuchodci = (beznaVstupenka*0.75)*(10+5)
const nakladyStudenti = beznaVstupenka*0.5*7

document.body.innerHTML = "Do kina celkem přišlo " + (10+5+7+2) + " návštěvníků. Celková tržba ze vstupného činila " + (nakladyDetiDuchodci + nakladyStudenti) + " Kč."
*/