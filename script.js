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

document.body.innerHTML += "Každý dostane " + castkaNaOsobu + " Kč, ve fondu zbydou " + zbytek + " Kč.";

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
6. Výpočet nákladů na oběd v restauraci
Restaurace má speciální nabídku na pracovní oběd: oběd stojí 500 Kč. Pro stálé zákazníky je však sleva 20 %. Napište program, který spočítá celkové náklady na jídlo, pokud by bylo 15 stálých zákazníků a 7 stálých zákazníků.
*/

/*
7. Výpočet ceny jízdenky s přihlédnutím ke slevě
V kině probíhá akce, která poskytuje různé slevy na vstupenky v závislosti na věkové kategorii návštěvníků. Cena běžné jízdenky je 300 kč.
Důchodci a děti do 16 let mají slevu 25 %. Do kina přišlo 10 důchodců a 5 dětí do 16 let.
Studenti mají 50% slevu. Do kina přišlo 7 studentů.
Děti do 7 let navštěvují kino zdarma. Do kina přišly 2 děti této věkové kategorie.
Je nutné sepsat program pro výpočet celkových nákladů na vstupenky s přihlédnutím ke všem poskytnutým slevám a celkový počet návštěvníků.
*/