/*
Rozdělení peněz mezi lidi:
Máte určitou částku peněz (např. 11237 Kč).
Rozdělte tuto částku rovnoměrně mezi určitý počet lidí (např. 5).
Vypište každému, kolik dostal peněz.
a kolik zbývá v zůstatku
*/
const castka = 11237;
const castkaNaOsobu = Math.floor (11237/5);
const zbytek = castka % 5;

document.body.innerHTML += "Každý dostane " + castkaNaOsobu + " Kč, ve fondu zbyde " + zbytek + " Kč.";

/*
2.Zaokrouhlení desetinného čísla:
Máte desetinné číslo (např. 8.75).
Zaokrouhlete toto číslo na celé číslo pomocí Math.round a vypište výsledek.
*/
const cislo = 8.75;
const vysledek = Math.round(cislo);

document.body.innerHTML += "<p>Výsledek příkladu je " + vysledek + ".</p>";

/*
3. Výpočet daně z nákupu s DPH: Máte částku za zboží před DPH (např. 325 Kč).
Přidejte 21 % DPH k ceně zboží.
Vypište cenu zboží, DPH a celkovou cenu do HTML.
*/
const cenaBezDPH = 325;
const cenaSDPH = 325*1.21;
const konecnaCena = Math.round(cenaSDPH);

document.body.innerHTML += "<p>Cena zboží bez DPH je " + cenaBezDPH + " Kč.</p>" + "<p>DPH je 21 %.</p>" + "<p>Cena zboží s DPH je " + cenaSDPH + " Kč, po zaoklouhlení " + konecnaCena + " Kč.</p>"

/*
4. Výpočet daně z příjmu s odečtem paušálu:Máte příjem z podnikání (např. 15000 Kč).
Odečtěte 60 % z příjmu jako paušál.
Ze zbytku zaplaťte 15 % daně.
Zaokrouhlete výsledek dolů a vypište daň do HTML.
*/