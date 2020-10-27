# Quiz App
## React Testz Feladat v2

### Fejlesztés

Látványtervek (Figma) : [https://www.figma.com/file/7clcrc0WtAouaGA0uBucUL/Quiz-App?node-id=1%3A90](https://www.figma.com/file/7clcrc0WtAouaGA0uBucUL/Quiz-App?node-id=1%3A90)

Élő Quiz App Demo: *Majd jön*

#### Feladat során használt könyvtárak:
- **React**
- **Redux** (redux, react-redux)
- **React Router** (react-router-dom)
- **UUID**

### Implementált screen-ek:
- **Landing** (Üdvözlő üzenet és név input.)
- **Quiz Kérdések** (Maga a játék)
- **Quiz Eredmény**
- **Question Manager** (Kérdések hozzáadása, törlése és frissítése)

### Rendszerterv
-

### Általános feladat leírása

A feladat egy kvíz kezelő alkalmazás fejlesztése.
Az alkalmazás 2 oldalból áll: játékfelület, kérdés kezelő.

A hozzáadott kérdéseket menteni kell, hogy böngésző indítások között megmaradjanak.

Az alkalmazás elrendezése és külleme szabadon választható. Továbbá minden (a feladatban fel
nem sorolt) felhasználói élményt javító elem opcionálisan implementálható.

A feladatban nem specifikált játékmechanikai részletek szintén teszőleges módon megoldhatóak.

### Játékfelület

A játékfelület két állapotra osztható: indítás, játék.
Indításhoz egy nevet kell megadni, ezután átvált a felület a játékra.

Játékot nem lehet indítani addig, amíg legalább 1 kérdés nincs hozzáadva.

Az aktív játék felület elemei: aktuális pontszám, kérdés, válaszok, küldés gomb, megválaszolt
kérdés esetén egy tovább gomb.

Az aktív játék mindig egy kérdést jelenít meg egyszerre és miután a játékos választott,
megmutatja a helyes választ. Ha a válasz helyes, a játékos 1 pontot kap. A következő kérdésre
(amennyiben van még) a tovább gomb segítségével lehet lépni.

### Kérdés kezelő

A kérdés kezelőben a kérdések vannak felsorolva, ezeket egyesével egy törlés gombbal lehet
törölni.

A kérdés és válaszok hozzáadásához az oldal alján található egy form. A form tartalmaz egy
inputot a kérdéshez és 4 inputot a válaszok megadásához. A helyes válasz kijelölésének módja
teszőlegesen válaszható, de kötelező implementálni. Egy kérdéshez mindig 4 válasz tartozik,
amelyből 1 helyes. A kérdést menteni egy mentés gombbal lehet.

### Felhasználható technológiák

A feladatot React és Redux felhasználásával kell megoldani. Ezek mellett más külsős könyvtár
használata is megengedett, kivéve jQuery.
