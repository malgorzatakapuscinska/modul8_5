/*Zmienne definiujemy słowem kluczowym var (ang. variable, czyli zmienna). Służą one do przechowywania danych.*/

/*Podczas działania skryptu z pewnością wykorzystasz je niejednokrotnie. Do zmiennych możesz przypisać wartości 
różnego typu, a operacja tworzenia zmiennej nazywa się deklaracją.*/

/* deklaracja zmiennej bez przypisania wartości */

var zmienna;

/* deklaracja zmiennej z przypisaniem jej wartości poczatkowej" */

var variable = "I'm a variable with string value";

/* Dekalracja wielu zmiennych na raz */

var zmienna1,
	zmienna2 = 19,
	zmienna3;

/* Poniższy przykład ilustruje przypisanie wartości typu integer, string oraz boolean. */

var foo = 12;

console.log(foo);
//foo is equel to: 12

var string = "Some text";
console.log(string);
//string is equel to: "some text"

var isSomething = true;
console.log(isSomething);
//isSomething is equal to: true

var firstSentence = 'I like a song that is called "Only you."';
var secondSentence = "I love a song that is called 'Only you.'";
console.log(firstSentence);
console.log(secondSentence);
//it can be also :

var fristSentence = "I like a song that is called \"Only you\" ";
console.log(firstSentence);

var age = 37;
var lenght = 37.5;

/* Tablice (ang. arrays) */

var test = ['Adam', 'Janek', 'Marek'];

/* Poszczególne elementy oddzielane są przecinkiem ( , ). Tablice mogą zawierać w sobie różne typy danych jednocześnie.*/

var  test = ['Adam', 11 , 'Ewa', 12.5];

/* Tablice można zagnieżdżać jedne w drugich.*/

var test = ['Adam', 11, ['Ewa', 11, 'Michał'], 11.75];

/* Numeracja elementów w tablicy zaczyna się od 0.
Jeżeli chcemy odczytać tekst z pozycji 3 (z powyższej tablicy), posłużymy się takim kodem:*/

var foo = test[2];
console.log(foo);

/* Liczbę w nawiasie kwadratowym nazywamy indeksem tablicy. */

/* Obiekty
To struktura danych, która może zawierać w sobie pozostałe typy.
Cechuje się tym, że opisuje się ją za pomocą atrybutów oraz wartości tych atrybutów. W przypadku nazw atrybutów obowiązuje takie samo nazewnictwo, jak przy zmiennych.
Obiekt definiujemy za pomocą klamer { oraz }. Jest to tak zwany literał obiektowy będący zalecanym sposobem tworzenia obiektów.
Obiekt może być pusty:*/

var object = {};

/*W momencie deklaracji może też zawierać jakieś właściwości (para atrybut, wartość): */

var object1 = {
	atribute: 'atribute value',
	otheAttribute: 123 + 456,
	attributWithVariableValue: variable
};

/* Atrybuty wewnątrz obiektu oddzielamy przecinkiem.
Obiekty świetnie służą do tego, aby trzymać w nich struktury, grupować właściwości w jednej zmiennej.
Przykładem może być: */

var person = {
	name: 'John',
	surname: 'Kowalski',
	siblings: 5,
	knownThings: ['Nothing', 'Night Watch']
};                                                                                                                                                                      

/* Są dwie możliwości odczytania wartości któregoś z atrybutów obiektu: wpisanie jego nazwy po kropce lub podanie jego nazwy w nawiasach kwadratowych.*/

var username = person.name;
/*var username = person['surname'];*/

console.log(username);

/*Istotne jest, aby przy używaniu nawiasów kwadratowych nazwa atrybutu była wpisana w cudzysłów. Inaczej będzie ona traktowana jak kolejna zmienna.
W nawiasy kwadratowe może zostać również wstawiona zmienna. Jednak zasada działania pozostaje taka sama.
Ciekawą własnością obiektów jest to, że atrybuty można przypisywać do nich dynamicznie, tzn. nadać wartość jakiemuś atrybutowi nawet jeśli do tej pory obiekt go nie zawierał.*/

person.age = 26;
console.log(person.age);

/*Mimo tego, że na początku obiekt 'person' nie posiada atrybutu 'wiek', to możliwe jest jego dodanie bez konieczności wcześniejszej deklaracji.
Atrybut wiek zostaje po prostu dodany do obiektu 'person'.*/

/*undefined
W języku JavaScript zmienna, zanim zostanie do niej przypisana wartość, posiada wartość domyślną undefined.*/

var person;
console.log(person); // undefined

/*null
Null służy do wskazywania, że zmienna nie odnosi się do prawidłowych danych. Null jest specjalną wartością oznaczającą "wartość nieustaloną". Natomiast undefined oznacza, że dany obiekt nie istnieje, nie został nigdzie zadeklarowany lub nie została mu nadana wartość.*/

/* NaN
Not a Number, czyli 'to nie jest liczba'. Występuje np. przy mnożeniu liczba razy string. */

console.log(10 * 'napis'); // NaN

/* Infinity
Nieskończoność. W obliczeniach z pewnością wystąpił błąd - dzieje się tak na przykład wtedy, gdy spróbujesz dzielić przez zero.*/

/*Operacje na zmiennych
W języku JavaScript, jak i w każdym innym języku programowania, mamy możliwość wykonywania operacji na danych. Możemy dodawać, odejmować, dzielić i nie tylko.*/


/* Dodawanie
Podstawowa operacja, bez której żaden z komputerów nie mógłby działać. Nie będę wyjaśniał, na czym polega ta operacja z matematycznego punktu widzenia, ponieważ sam dowód zajmuje 162 strony (https://en.wikipedia.org/wiki/Principia_Mathematica#Quotations).
Wypiszmy wszystkie dostępne możliwości. W dodawaniu liczb nie ma niespodzianek, ale dodawać do siebie można również ciągi znaków, czyli stringi.*/

var variable1 = 'lorem' + 1 + 2;
var variable2 = 'lorem' + 'Ipsum';
console.log(variable1);
console.log(variable2);

var foo = 1 + 2 + 'string';
console.log(foo);

var foo = 'lorem' + ['1', 2, 3.4];     
console.log(foo);

var foo = ['1', 2, 3.4] + 'lorem';
console.log(foo);

var foo = 9 + ['1', 2, 3.4];
console.log(foo);

var foo = ['1', 2, 3.4] + 9;
console.log(foo);

var foo = ['1', 2, 3.4] + [1, '2', 3.4];
console.log(foo);

/* Inkrementacja */

var points = 1;

/*w przypadku kiedy operator '++' jest z prawej strony, najpierw zostaje wyświetlona (użyta) wartość zmiennej, a dopiero potem jest ona zwiększana o 1.*/

console.log( 'The current value of points is: ', points ); // 1
console.log( 'The current value of points is: ', points++ ); // 1
console.log( 'The current value of points is: ', points ); // 2

/*Kiedy operator '++' znajduje się z lewej strony, kolejność działań jest inna. Najpierw następuje zwiększenie wartości, a dopiero potem jej wyświetlenie (użycie).*/

points = 1;

console.log('The current value of points is ', points);
console.log('The current value of points is:', ++points);
console.log('The current value of points is ', points);
