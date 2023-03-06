# Joonas_botti

MäärittelyDokumentti

Discord botti "Tauottaja"

Botti joka tulisi soittamaan randomisti musiikkia ilmoittamaan tauosta. Musiikki tulisi randomisti jostain, randomista kohdasta ja randomiin aikaa. Lisäksi ruokatauko olisi määrättyyn aikaa eli aina sama.

Käyttettäviä työkaluja olisi; Java script, node.js, discord.js, webstrom koodaamiiseen/(VScode), discord missä botti olisi.

Riippuvuudet:

Oikeudet: Botilla tulisi olla oikeudet ainakin: liittyä mille kanavalle tahansa ja puhua siellä eli soittaa äänttä.

Kehitysalustana: Webstrom.

Jotta voit pystyttää botit tarviset: discord käyttäjän node.js käyttöjärjestelmän asennus rutiinin mukaisesti mene webstormin terminaaliin ja varmista että olet projektin omassa kansiossa sen jälkeen

Komentoja: Komennot voisi joka toteuttaa "!" tai "/". (Esimerkkinä "!") !show ruoka: näyttäisi ruoka tauonno ajan. !edit ruoka: Muuttaisi ruoka ajan ja sen voisi toteuttaa joko: !edit ruoka: 11:30 Tai !edit ruoka Jonka jälkeen botti kysyy aikaa ja siotat ajan "11:30". !quit voisi olla varulta jos haluat heti heittää botin pois kanavalta.

Node.js:sässäs tulevat komennot: npm init -y npm install discord.js npm install discordjs/rest npm install discordjs/voice yarn add discord.js pnpm add discord.js .env (salaa api-avaimen ja salasanat koodissa) npm install dotenv --save

Selkokielellä: Liitä botti jäseneksi serverille. Soittoajan määrityksen ajastin alkaa klo 8.00 ja loppuu 15.00 ihan sama mitä tekee (/Aloita tauottaja komento, jolloin ajastin alkaa käydä ja loppuu /lopeta ajastin)* Soittoajan määritys 30min-90min Arpoo monenko minuutin kuluttua musiikki alkaa soida Ajastin käynnistyy Kun, ajastin on 0 musiikki käynnistyy Seuraava tauon arpominen alkaa kun musiikki on soitettu. Soittajan pituuden arvonta 15sec-30sec Ajastimnen käynnistys Soundcloudin listasta otettu lista. musiikissa jäljellä ainakin botin arpoman ajan verran (jos ei toteudu vaihtaa uuteen musiikkiin.)

https://github.com/Baanaani/Joonas_botti