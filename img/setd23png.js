const quizData = [
{
  question: "Welche der folgenden Aussagen beschreibt ein erreichbares Testziel?",
  description: "Das Testziel sollte realistisch sein und auf Risikominimierung abzielen. Wählen Sie EINE Option!",
  options: [
    "a) Es lässt sich nachweisen, dass das zu prüfende System keine Fehlerzustände mehr hat.",
    "b) Es lässt sich nachweisen, dass es nach der produktiven Inbetriebnahme des Systems keine Fehlerwirkungen geben wird.",
    "c) Die Risikostufe des Testobjekts ist verringert und Vertrauen in das Qualitätsniveau ist aufgebaut.",
    "d) Durch eine Überprüfung lässt sich feststellen, dass alle Kombinationen von Eingabewerten getestet wurden."
  ],
  correct: 2
  // image: "bilder/testziel.png" // optional, falls du ein Bild hinzufügen willst
},
  {
  question: "Was ist der Hauptunterschied zwischen Testen und Debuggen?",
  description: "Wählen Sie EINE Option! (1 aus 4) – FL-1.1.2 (K2): Der Lernende kann Testen von Debugging unterscheiden.",
  options: [
    "a) Testen ist der Prozess der Fehlersuche, während Debugging der Prozess der Fehlerbehebung ist.",
    "b) Beim Testen werden Anforderungen überprüft, während beim Debugging der Entwurf überprüft wird.",
    "c) Testen ist der Prozess des Ausführens von Software, während das Debugging der Prozess der Analyse der Software ist.",
    "d) Testen ist der Prozess der Fehlervermeidung, während das Debugging der Prozess der Fehlerbeseitigung ist."
  ],
  correct: 0,
 
},

// Frage 2: Grundsatz des Testens
{
  question: "Sie sind Mitglied eines Teams, das ein neues System testet. Ihnen ist aufgefallen, dass seit mehreren Iterationen keine Änderungen an den bestehenden Regressionstestfällen vorgenommen und keine neuen Fehler durch einen Regressionstest aufgedeckt wurden. Ihr Vorgesetzter ist zufrieden, aber Sie sind es nicht. Welcher Grundsatz des Testens erklärt Ihre Skepsis in dieser Situation AM BESTEN?",
  description: "Wählen Sie EINE Option! (1 aus 4) – CTFL v4.0, SET A, v2.2, GTB Edition",
  options: [
    "a) Alte Tests verlieren an Wirksamkeit.",
    "b) Trugschluss: “Keine Fehler” bedeuten ein brauchbares System.",
    "c) Häufung von Fehlerzuständen.",
    "d) Vollständiges Testen ist nicht möglich."
  ],
  correct: 0
  // image: "bilder/testgrundsatz.png" // optional
},// Frage 3: Testanalyse
{
  question: "Sie arbeiten in einem Team, das eine mobile Anwendung für Essensbestellungen entwickelt. In der aktuellen Iteration hat das Team beschlossen, die Zahlungsfunktionalität zu implementieren. Welche der folgenden Aktivitäten gehören zur Testanalyse?",
  description: "Wählen Sie EINE Option! (1 aus 4) – FL-1.4.1 (K2) Der Lernende kann die verschiedenen Testaktivitäten und -aufgaben zusammenfassen.",
  options: [
    "a) Die Aufwandsschätzung für den Test der Integration der mobilen Anwendung mit dem Zahlungsdienst durchführen.",
    "b) Die Entscheidung, ob getestet wird, inwieweit Zahlungen zwischen mehreren Nutzern aufgeteilt werden können.",
    "c) Mittels Grenzwertanalyse werden die Testdaten für die Testfälle abgeleitet, die die korrekte Zahlungsabwicklung für den zulässigen minimalen Betrag überprüfen.",
    "d) Die Abweichung zwischen dem tatsächlichen und dem erwarteten Ergebnis nach der Ausführung eines Testfalls analysieren."
  ],
  correct: 1
  // image: "bilder/testanalyse.png" // optional
},

// Frage 4: Verfolgbarkeit
{
  question: "Welche der folgenden Aussagen beschreibt AM BESTEN, wie ein Mehrwert durch Etablierung und Aufrechterhaltung der Verfolgbarkeit zwischen Testbasis und den Testmitteln erzielt wird?",
  description: "Wählen Sie EINE Option! (1 aus 4) – FL-1.4.4 (K2) Der Lernende kann die Bedeutung der Pflege der Verfolgbarkeit erklären.",
  options: [
    "a) Wartungstests können basierend auf Änderungen der ursprünglichen Anforderungen vollständig automatisiert werden.",
    "b) Es kann effizienter bestimmt werden, ob die angestrebte Überdeckung auch tatsächlich erreicht wurde.",
    "c) Die Testmanagementrolle kann feststellen, welche Tester die Fehler mit dem höchsten Schweregrad gefunden haben.",
    "d) Codebereiche, die möglicherweise durch Seiteneffekte einer Änderung beeinflusst werden, können durch Regressionstests gezielt überprüft werden."
  ],
  correct: 1
  // image: "bilder/verfolgbarkeit.png" // optional
},

// Frage 5: Rollenvergleich
{
  question: "Welche der folgenden Aussagen vergleicht AM BESTEN die verschiedenen Rollen beim Testen?",
  description: "Wählen Sie EINE Option! (1 aus 4)",
  options: [
    "a) Die Rolle des Testens führt Testfälle aus, die Testmanagementrolle plant und überwacht die Testaktivitäten und meldet die Abweichungen an alle Tester.",
    "b) Die Rolle des Testens führt die Aktivitäten der Testanalyse sowie des Testentwurfs aus und erstellt und führt Testfälle aus, die Testmanagementrolle koordiniert die Testressourcen und berichtet an die Stakeholder.",
    "c) Die Rolle des Testens entscheidet über die zu automatisierenden Tests und priorisiert Testfälle, die Testmanagementrolle analysiert Risiken und setzt Prioritäten für die Tests.",
    "d) Die Rolle des Testens führt statische und dynamische Komponententests durch, die Testmanagementrolle führt Systemtests und Abnahmetests durch."
  ],
  correct: 1
  // image: "bilder/rollenvergleich.png" // optional
}, // Frage 6: Unabhängigkeit des Testens
{
  question: "Welche der folgenden Aussagen erklärt AM BESTEN einen Vorteil der Unabhängigkeit des Testens?",
  description: "Wählen Sie EINE Option! (1 aus 4) – FL-1.5.3 (K2) Der Lernende kann die Vor- und Nachteile des unabhängigen Testens unterscheiden.",
  options: [
    "a) Der Einsatz eines unabhängigen Testteams ermöglicht es der Projektleitung, dem Testteam die Verantwortung für die Qualität des Endprodukts zu übertragen.",
    "b) Wenn man sich ein externes Testteam leisten kann, dann hat das den Vorteil, dass dieses externe Team nicht so leicht von den Bedenken des Projektmanagements und der Notwendigkeit, strikte Liefertermine einzuhalten, beeinflusst werden kann.",
    "c) Ein unabhängiges Testteam kann getrennt von den Entwicklern arbeiten, muss nicht durch Änderungen der Projektanforderungen abgelenkt werden und kann die Kommunikation mit den Entwicklern auf die Fehlerberichterstattung über das Fehlermanagementsystem beschränken.",
    "d) Wenn Spezifikationen Mehrdeutigkeiten und Ungereimtheiten enthalten, treffen Entwickler Annahmen über ihre Interpretation, und ein unabhängiges Testteam kann nützlich sein, um diese Annahmen und die Interpretation der Entwickler zu hinterfragen."
  ],
  correct: 3
  // image: "bilder/unabhaengigkeit.png" // optional
},

// Frage 7: Whole-Team-Ansatz
{
  question: "Wie zeigt sich der Whole-Team-Ansatz in der Interaktion zwischen Testern und Fachbereichsvertretern?",
  description: "Wählen Sie EINE Option! (1 aus 4) – FL-1.5.2 (K1) Der Lernende kann die Vorteile des Whole-Team-Ansatzes wiedergeben.",
  options: [
    "a) Fachbereichsvertreter entscheiden gemeinsam mit der Projektleitung über die Ansätze zur Testautomatisierung.",
    "b) Tester helfen Fachbereichsvertretern bei der Festlegung der Teststrategie.",
    "c) Die Beteiligung von Fachbereichsvertretern ist nicht Teil des Whole-Team-Ansatzes.",
    "d) Tester helfen Fachbereichsvertretern bei der Erstellung geeigneter Abnahmetests."
  ],
  correct: 3
  // image: "bilder/wholeteam.png" // optional
},

// Frage 8: Gute Testpraktiken
{
  question: "Welche der folgenden Aussagen beschreibt AM BESTEN eine gute Praktik für das Testen, die für alle Softwareentwicklungslebenszyklen gilt?",
  description: "Wählen Sie EINE Option! (1 aus 4) – FL-2.1.2 (K1) Der Lernende kann gute Praktiken für das Testen wiedergeben.",
  options: [
    "a) Testen sollte erst nach Abschluss der Entwicklung durchgeführt werden.",
    "b) Testen sollte unter Federführung der Entwicklung durchgeführt werden.",
    "c) Testen sollte frühzeitig im Entwicklungsprozess beginnen.",
    "d) Testen sollte in einer Entwicklungstestumgebung durchgeführt werden."
  ],
  correct: 2
  // image: "bilder/testpraktiken.png" // optional
},

// Frage 9: ATDD
{
  question: "Welche der folgenden Aussagen beschreibt AM BESTEN den Ansatz der abnahmetestgetriebenen Entwicklung (ATDD)?",
  description: "Wählen Sie EINE Option! (1 aus 4)",
  options: [
    "a) In der ATDD werden Akzeptanzkriterien typischerweise basierend auf dem Format GIVEN/WHEN/THEN erstellt.",
    "b) Bei ATDD werden zunächst die Testfälle entwickelt und dann die Software inkrementell gegen die Testfälle und definierten Akzeptanzkriterien implementiert.",
    "c) Bei ATDD werden Tests aus Akzeptanzkriterien als Teil des Systementwurfs abgeleitet.",
    "d) Bei ATDD basieren die Tests auf dem gewünschten Verhalten der Software, was es für die Teammitglieder einfacher macht, die Tests und die definierten Akzeptanzkriterien zu verstehen."
  ],
  correct: 3
  // image: "bilder/atdd.png" // optional
},// Frage 11: Shift-Left-Ansatz
{
  question: "Welche der folgenden Aussagen ist KEIN Beispiel für den Shift-Left-Ansatz?",
  description: "Wählen Sie EINE Option! (1 aus 4) – FL-2.1.5 (K2) Der Lernende kann den Shift-Left-Ansatz erklären.",
  options: [
    "a) Benutzeranforderungen werden überprüft, bevor sie von den Stakeholdern formell akzeptiert werden.",
    "b) Komponententestfälle werden erstellt, bevor der zugehörige Code programmiert wird.",
    "c) Der Performanztest einer Komponente wird während des Komponententests ausgeführt.",
    "d) Nicht-funktionale Tests werden, wenn möglich, beginnend auf der Ebene der Systemtests ausgeführt."
  ],
  correct: 3
  // image: "bilder/shiftleft.png" // optional
},

// Frage 12: Retrospektive
{
  question: "Welches der folgenden Argumente ist AM BESTEN geeignet, um Ihren Vorgesetzten davon zu überzeugen, am Ende eines jeden Releasezyklus eine Retrospektive durchzuführen?",
  description: "Wählen Sie EINE Option! (1 aus 4) – FL-2.1.6 (K2) Der Lernende kann den Einsatz von Retrospektiven als Mechanismus zur Prozessverbesserung erklären.",
  options: [
    "a) Retrospektiven sind heutzutage sehr beliebt und unsere Kunden würden es zu schätzen wissen, wenn wir sie in unsere Prozesse aufnehmen würden.",
    "b) Die regelmäßige Durchführung von Retrospektiven spart dem Unternehmen Geld, da die Vertreter der Endnutzer kein unmittelbares Feedback über das Produkt geben.",
    "c) Die bei der Retrospektive festgestellten Prozessschwächen können während der Retrospektive analysiert werden und als Aufgabenliste für das Programm zur kontinuierlichen Prozessverbesserung des Unternehmens dienen.",
    "d) Retrospektiven ermöglichen es dem Team, sich gegenseitig zu loben und zu motivieren, was die Arbeitsmoral und die Produktivität erhöhen."
  ],
  correct: 2
  // image: "bilder/retrospektive.png" // optional
},

// Frage 13: Teststufen
{
  question: "",
  description: "Wählen Sie EINE Option! (1 aus 4) – FL-2.2.1 (K2) Der Lernende kann die verschiedenen Teststufen unterscheiden.",
  options: [
    "a) 1D, 2B, 3A, 4C",
    "b) 1D, 2B, 3C, 4A",
    "c) 1B, 2A, 3D, 4C",
    "d) 1C, 2A, 3B, 4D"
  ],
  correct: 0,
  image:"img/seta13.png"

},

// Frage 14: Wartungstest
{
  question: "Die Teststrategie Ihres Unternehmens sieht vor, dass die Datenmigration zum Nachfolgesystem getestet werden muss, sobald ein System außer Betrieb genommen wird. Mit welcher Testaktivität wird diese Anforderung AM EHESTEN erfüllt?",
  description: "Wählen Sie EINE Option! (1 aus 4) – FL-2.3.1 (K2) Der Lernende kann einen Wartungstest und dessen Auslöser zusammenfassen.",
  options: [
    "a) Wartungstest",
    "b) Regressionstest",
    "c) Komponententest",
    "d) Komponentenintegrationstest"
  ],
  correct: 0
  // image: "bilder/wartungstest.png" // optional
},

// Frage 15: Statisches Testen
{
  question: "Welche der folgenden Optionen ist KEIN Vorteil des statischen Testens?",
  description: "Wählen Sie EINE Option! (1 aus 4)",
  options: [
    "a) Die Bewertung und Behebung der durch eine statische Analyse aufgedeckten Anomalien kann erheblichen Zeit- und Ressourcenaufwand erfordern.",
    "b) Die Behebung von Fehlerzuständen, die bei statischen Tests gefunden werden, ist in der Regel wesentlich kostengünstiger als die Behebung von Fehlern, die bei dynamischen Tests gefunden werden.",
    "c) Das Finden von Programmierfehlern, die bei dynamischen Tests möglicherweise nicht gefunden werden.",
    "d) Das Aufdecken von Lücken und Unstimmigkeiten in den Anforderungen"
  ],
  correct: 0
  // image: "bilder/statisch.png" // optional
},// Frage 16: Frühes Feedback durch Stakeholder
{
  question: "Welcher der folgenden Punkte ist ein Vorteil von frühem und häufigem Feedback durch Stakeholder?",
  description: "Wählen Sie EINE Option! (1 aus 4) – FL-3.2.1 (K1)",
  options: [
    "a) Es verbessert den Testprozess für zukünftige Projekte.",
    "b) Es zwingt die Kunden dazu, ihre Anforderungen basierend auf den abgestimmten Risiken zu priorisieren.",
    "c) Nur so lässt sich die Qualität der Änderungen im Prozess messen.",
    "d) Es hilft, Missverständnisse bei den Anforderungen zu vermeiden."
  ],
  correct: 3
},

// Frage 17: Art des Reviews
{
  question: "Die in Ihrem Unternehmen durchgeführten Reviews weisen die folgenden Eigenschaften auf:\n- Hauptzweck: Kommunikation oder Schulung der Gutachter\n- Sitzung wird vom Autor geleitet\n- Individuelle Vorbereitung der Reviewer\n- Reviewbericht kann erstellt werden\nWelche Art von Review wird AM EHESTEN verwendet?",
  description: "Wählen Sie EINE Option! (1 aus 4) – FL-3.2.4 (K2)",
  options: [
    "a) Informelles Review",
    "b) Walkthrough",
    "c) Technisches Review",
    "d) Inspektion"
  ],
  correct: 1,
    image:"img/seta17.png"

},

// Frage 18: Erfolgsfaktor für Review
{
  question: "Welche der folgenden Aussagen ist KEIN Faktor, der zu einem erfolgreichen Review beiträgt?",
  description: "Wählen Sie EINE Option! (1 aus 4) – FL-3.2.5 (K1)",
  options: [
    "a) Die Teilnehmer sollten sich ausreichend Zeit für das Review nehmen.",
    "b) Große Arbeitsprodukte in kleine Teile aufteilen, damit Reviewer nicht die Konzentration verlieren.",
    "c) Klare Ziele und messbare Endekriterien werden für das Review festgelegt.",
    "d) Das Management wirkt persönlich mit bei der Kommunikation der Befunde."
  ],
  correct: 3
},

// Frage 19: Erfahrungsbasierte Testverfahren
{
  question: "Welcher der folgenden Punkte ist ein Merkmal erfahrungsbasierter Testverfahren?",
  description: "Wählen Sie EINE Option! (1 aus 4) – FL-4.1.1 (K2)",
  options: [
    "a) Testfälle werden auf der Grundlage detaillierter Entwurfsinformationen erstellt.",
    "b) Zur Messung des Überdeckungsgrads werden die Anzahl der im Test geprüften Schnittstellen verwendet.",
    "c) Die Verfahren beruhen in hohem Maße auf den Kenntnissen des Testers über die Software und die Geschäftsdomäne.",
    "d) Die Testfälle werden verwendet, um Abweichungen von den Anforderungen zu identifizieren."
  ],
  correct: 2
},

// Frage 20: Äquivalenzklassen am Beispiel Zapfsäule
{
  question: "Sie testen die Software für eine unbeaufsichtigte amerikanische Zapfsäule. Das Tastenfeld erlaubt nur die Eingabe von Ziffern. Pro Zapfvorgang kann zwischen 0,1 und 50,0 Gallonen getankt werden. Welche Eingabewerte repräsentieren eine minimale Menge von gültigen und ungültigen Äquivalenzklassen?",
  description: "Wählen Sie EINE Option! (1 aus 4)",
  options: [
    "a) 0,0; 20,0; 60,0",
    "b) 0,0; 0,1; 50,0",
    "c) 0,0; 0,1; 50,0; 70,0",
    "d) -0,1; 0,0; 0,1; 49,9; 50,0; 50,1"
  ],
  correct: 2
},// Frage 21: Grenzwertanalyse Bestellmenge
{
  question: "Sie testen ein E-Commerce-System, das Lebensmittel wie Gewürze, Mehl und andere Artikel in großen Mengen verkauft. Die kleinste gültige Bestellmenge ist 0,5 Einheiten, die größte 25,0 Einheiten, Genauigkeit 0,1 Einheiten. Welche Eingabewerte decken nur die Grenzwerte mit der 2-Wert-Grenzwertanalyse ab?",
  description: "Wählen Sie EINE Option! (1 aus 4) – FL-4.2.2 (K3)",
  options: [
    "a) 0,3; 24,9; 25,2",
    "b) 0,4; 0,5; 0,6; 24,9; 25,0; 25,1",
    "c) 0,4; 0,5; 25,0; 25,1",
    "d) 0,5; 0,6; 24,9; 25,0"
  ],
  correct: 2
},

// Frage 22: Entscheidungstabelle Prämie
{
  question: "",
  description: "Wählen Sie EINE Option! (1 aus 4) – FL-4.2.3 (K3)",
  options: [
    "a) Bedingung1 = „J“, Bedingung2 = „N“, Bedingung3 = „J“, Aktion = „N“",
    "b) Bedingung1 = „J“, Bedingung2 = „J“, Bedingung3 = „N“, Aktion = „J“",
    "c) Bedingung1 = „N“, Bedingung2 = „N“, Bedingung3 = „J“, Aktion = „N“",
    "d) Bedingung1 = „J“, Bedingung2 = „J“, Bedingung3 = „N“, Aktion = „N“"
  ],
  correct: 3,
  image:"img/setA22.png"
},

// Frage 23: Zustandsübergangsdiagramm TV
{
  question: "",
  description: "Wählen Sie EINE Option! (1 aus 4) – FL-4.2.4 (K3)",
  options: [
    "a) Die Testfälle führen alle Übergänge aus; 100% Überdeckung aller Übergänge.",
    "b) Die Testfälle führen alle gültigen Übergänge aus; 100% 0-Switch-Überdeckung.",
    "c) Die Testfälle führen nur einige gültige Übergänge aus; 0-Switch-Überdeckung < 100%.",
    "d) Testfall 2 ist für 100% 0-Switch-Überdeckung nicht erforderlich, da S1 bereits überdeckt ist."
  ],
  correct: 1,
  image:"img/setA23.png"
},

// Frage 24: Anweisungsüberdeckung
{
  question: "Welche Aussage beschreibt korrekt eine Anweisungsüberdeckung?",
  description: "Wählen Sie EINE Option! (1 aus 4) – FL-4.3.1 (K2)",
  options: [
    "a) Misst den prozentualen Anteil der ausgeführten Testfälle.",
    "b) Misst den prozentualen Anteil der durch Testfälle ausgeführten Anweisungen im Code.",
    "c) Misst die Anzahl der durch Testfälle ausgeführten Anweisungen ohne Bezug auf Fehlerwirkung.",
    "d) Gibt nur eine Wahr/Falsch-Bestätigung, ob alle Anweisungen abgedeckt sind."
  ],
  correct: 1
},

// Frage 25: White-Box-Test
{
  question: "Welche Aussage trifft NICHT auf White-Box-Tests zu?",
  description: "Wählen Sie EINE Option! (1 aus 4)",
  options: [
    "a) White-Box-Test basiert auf der Analyse der internen Struktur einer Komponente oder eines Systems.",
    "b) White-Box-Überdeckungsmetriken helfen, zusätzliche Tests zur Erhöhung der Codeüberdeckung zu identifizieren.",
    "c) White-Box-Testverfahren können ergänzend zu Black-Box-Testverfahren eingesetzt werden, um Vertrauen in den Code zu stärken.",
    "d) White-Box-Tests helfen, nicht implementierte Anforderungen zu identifizieren."
  ],
  correct: 3
},// Frage 26: Intuitive Testfallermittlung
{
  question: "Welche der folgenden Aussagen beschreibt AM BESTEN das Konzept der intuitiven Testfallermittlung?",
  description: "Wählen Sie EINE Option! (1 aus 4) – FL-4.4.1 (K2)",
  options: [
    "a) Nutzung von Wissen und Erfahrung über in der Vergangenheit gefundene Fehlerzustände und typische Fehlhandlungen von Entwicklern.",
    "b) Nutzung persönlicher Erfahrungen als Entwickler.",
    "c) Vorstellung als Benutzer, um mögliche Fehlerwirkungen zu erraten.",
    "d) Entwicklungsaufgabe selbst durchführen, um Fehlerzustände zu erkennen."
  ],
  correct: 0
},

// Frage 27: Exploratives Testen
{
  question: "In Ihrem Projekt hat sich die Freigabe einer neuen Anwendung verzögert, Tests beginnen spät, aber Sie haben Fachwissen. Welches Testverfahren ist hier AM BESTEN geeignet?",
  description: "Wählen Sie EINE Option! (1 aus 4) – FL-4.4.2 (K2)",
  options: [
    "a) Checklistenbasiertes Testen",
    "b) Intuitive Testfallermittlung",
    "c) Exploratives Testen",
    "d) Anweisungstest"
  ],
  correct: 2
},

// Frage 28: Akzeptanzkriterien User-Story
{
  question: "Welche Aktivität beschreibt AM BESTEN, wie Akzeptanzkriterien für eine User-Story formuliert werden?",
  description: "Wählen Sie EINE Option! (1 aus 4) – FL-4.5.2 (K2)",
  options: [
    "a) Durchführung von Retrospektiven zur Ermittlung der tatsächlichen Stakeholder-Bedürfnisse.",
    "b) Verwendung des Formats GIVEN/WHEN/THEN zur Beschreibung einer beispielhaften Testbedingung.",
    "c) Mündliche Kommunikation zur Risikominimierung bei Missverständnissen.",
    "d) Dokumentieren von Risiken in einem Testkonzept für risikobasiertes Testen."
  ],
  correct: 1
},

// Frage 29: ATDD User-Story Testfallrelevanz
{
  question: "Ihr Team verfolgt den Ansatz der abnahmetestgetriebenen Entwicklung (ATDD) und analysiert die folgende User-Story, um Testfälle zu erstellen.Als registrierter Kunde möchte ich meine bisherigen Bestellungen auf der Website des Unternehmens einsehen können, um einen Überblick über meine Einkäufe zu behalten.Ihr Team ermittelt die folgende Liste von Testfällen. Welcher der Testfälle ist für diese User-Story NICHT relevant",
  description: "Wählen Sie EINE Option! (1 aus 4) – FL-4.5.3 (K3)",
  options: [
    "a) Eingabe: Der Kunde loggt sich in sein Konto auf der Website ein und klickt auf die Schaltfläche Bestellhistorie anzeigen.Erwartete Ausgabe: Das System zeigt eine Liste aller früheren Bestellungen des Kunden an, einschließlich Datum, Bestellnummer und Gesamtkosten.",
    "b) Eingabe: Der eingeloggte Kunde klickt in der Liste seiner Bestellungen auf eine Bestellung.Erwartete Ausgabe: Das System zeigt die einzelnen gekauften Artikel mit Preis und Menge an.",
    "c) Eingabe: Der eingeloggte Kunde klickt auf die Schaltfläche Aufsteigend sortieren auf dem Bildschirm mit der Bestellhistorie.Erwartete Ausgabe: Das System zeigt die Bestellhistorie aufsteigend sortiert nach Bestellnummer an.",
    "d)  Eingabe: Ein neu registrierter Kunde loggt sich ein und gibt eine erste Bestellung ein.Erwartete Ausgabe: Das System akzeptiert die Bestellung und legt die zugehörigen Daten ab."
  ],
  correct: 3
},

// Frage 30: Mehrwert der Tester für Iterationsplanung
{
  question: "Wie schaffen Tester einen Mehrwert für die Iterationsplanung?",
  description: "Wählen Sie EINE Option! (1 aus 4)",
  options: [
    "a) Tester bestimmen die Priorität der User-Storys.",
    "b) Tester konzentrieren sich nur auf die funktionalen Aspekte des Systems.",
    "c) Tester beteiligen sich an der Risikoanalyse und bestimmen die Testbarkeit von User-Storys.",
    "d) Tester ermöglichen die Freigabe qualitativ hochwertiger Software durch frühzeitigen Testentwurf."
  ],
  correct: 2
},// Frage 31: Endekriterien
{
  question: "Welche der folgenden Optionen sind Endekriterien für den Test eines Systems?",
  description: "Wählen Sie EINE Option! (1 aus 4) – FL-5.1.3 (K2)",
  options: [
    "a) Testumgebung ist einsatzbereit.",
    "b) Anmeldung am Testobjekt durch den Tester ist möglich.",
    "c) Erwartete Fehlerdichte ist erreicht und Fehlerzustände sind berichtet worden.",
    "d) Anforderungen sind in das Format GIVEN/WHEN/THEN übersetzt worden."
  ],
  correct: 2
},

// Frage 32: Drei-Punkt-Schätzung
{
  question: "Ihr Team verwendet das Drei-Punkt-Schätzungsverfahren für eine risikoreiche Funktion. Die Schätzungen lauten: optimistisch 2, wahrscheinlich 11, pessimistisch 14 Personenstunden. Wie lautet die endgültige Schätzung?",
  description: "Wählen Sie EINE Option! (1 aus 4) – FL-5.1.4 (K3)",
  options: [
    "a) 9 Personenstunden",
    "b) 10 Personenstunden",
    "c) 11 Personenstunden",
    "d) 14 Personenstunden"
  ],
  correct: 1
},

// Frage 33: Priorisierung Testfälle
{
  question: "",
  description: "Wählen Sie EINE Option! (1 aus 4) – FL-5.1.5 (K3)",
  options: [
    "a) TF 003",
    "b) TF 005",
    "c) TF 002",
    "d) TF 001"
  ],
  correct: 0,
  image:"img/seta33.png"
},

// Frage 34: Testquadranten
{
  question: "",
  description: "Wählen Sie EINE Option! (1 aus 4) – FL-5.1.7 (K2)",
  options: [
    "a) 1C, 2A, 3B, 4D",
    "b) 1D, 2A, 3C, 4B",
    "c) 1C, 2B, 3D, 4A",
    "d) 1D, 2B, 3C, 4A"
  ],
  correct: 0,
   image:"img/seta34.png"
},

// Frage 35: Risikomanagement-Maßnahmen
{
  question: "",
  description: "Wählen Sie EINE Option! (1 aus 4)",
  options: [
    "a) Risikoakzeptanz",
    "b) Notfallplan",
    "c) Risikominderung",
    "d) Risikotransfer"
  ],
  correct: 2,
   image:"img/SETA35.png"
},
// Frage 36: Testberichte
{
  question: "Welche der folgenden Aussagen zum Zweck und Inhalt von Testberichten ist zutreffend?",
  description: "Wählen Sie EINE Option! (1 aus 4) – FL-5.3.2 (K2)",
  options: [
    "a) Testabschlussberichte werden in regelmäßigen Abständen erstellt und verteilt, um die Stakeholder hinsichtlich des Fortschrittes zu informieren.",
    "b) Ein Testfortschrittsbericht beinhaltet u. a. die Bewertung der Qualität des Produkts sowie etwaige Abweichungen vom Zeitplan.",
    "c) Ein Testabschlussbericht wird erstellt, wenn eine Teststufe abgeschlossen wurde, und baut auf Testfortschrittsberichten und zusätzlichen Daten auf.",
    "d) Testfortschrittsberichte werden während des Testabschlusses erstellt, um die Erfüllung der Endekriterien belegen zu können."
  ],
  correct: 2
},

// Frage 37: Versionsverwaltung von Testskripten
{
  question: "Sie müssen ein automatisiertes Testskript aktualisieren. Welcher Prozess schreibt vor, dass Sie eine neue Version in der Versionsverwaltung erstellen?",
  description: "Wählen Sie EINE Option! (1 aus 4) – FL-5.4.1 (K2)",
  options: [
    "a) Management der Verfolgbarkeit",
    "b) Wartungstest",
    "c) Konfigurationsmanagement",
    "d) Anforderungsmanagement"
  ],
  correct: 2
},

// Frage 38: Fehlende Informationen im Fehlerbericht
{
  question: "",
  description: "Wählen Sie EINE Option! (1 aus 4) – FL-5.5.1 (K3)",
  options: [
    "a) Erwartetes Ergebnis und tatsächliches Ergebnis",
    "b) Referenzen und Fehlerstatus",
    "c) Testumgebung und Testobjekt (inkl. Version)",
    "d) Priorität und Schweregrad"
  ],
  correct: 2,
   image:"img/seta38.png"
},

// Frage 39: Unterstützung von Testaktivitäten durch Testdatentools
{
  question: "Welche Testaktivitäten unterstützt ein Werkzeug zur Erstellung von Testdaten?",
  description: "Wählen Sie EINE Option! (1 aus 4) – FL-6.1.1 (K2)",
  options: [
    "a) Testüberwachung und Teststeuerung",
    "b) Testanalyse und Testentwurf",
    "c) Testentwurf und Testrealisierung",
    "d) Testabschluss"
  ],
  correct: 2
},

// Frage 40: Risiko bei Testautomatisierung
{
  question: "Welcher Punkt ist ein mögliches Risiko bei der Testautomatisierung?",
  description: "Wählen Sie EINE Option! (1 aus 4)",
  options: [
    "a) Es kann zu unbekannten Nebenwirkungen im operativen Betrieb kommen.",
    "b) Es bestehen unrealistische Erwartungen hinsichtlich der Funktionalität eines Werkzeugs.",
    "c) Testwerkzeuge sind möglicherweise nicht zuverlässig genug.",
    "d) Es kann die verfügbare Zeit für manuelle Tests auf Dauer reduziert sein."
  ],
  correct: 1
},



// B
// ###################         
// ##                ##        
// ##                ##        
// ##                ##        
// ###################         
// ##                ##        
// ##                ##        
// ##                ##        
// ###################         






  // Frage 1: Warum Testen notwendig ist
  {
    question: "Welche der folgenden Aussagen beschreibt AM BESTEN, warum Testen im Softwareentwicklungslebenszyklus notwendig ist?",
    description: "Wählen Sie EINE Option! (1 aus 4) – FL-1.2.1 (K2) Der Lernende kann Beispiele geben, warum Testen notwendig ist.",
    options: [
      "a) Dynamisches Testen ist die einzige Möglichkeit, die Qualität eines Testobjekts zu bewerten.",
      "b) Das Testen stellt sicher, dass die Benutzer die Bedürfnisse der Entwickler verstehen und nachvollziehen können.",
      "c) Testen wird ausschließlich durchgeführt, um regulatorische Standards zu erfüllen.",
      "d) Testen hilft, Fehlerzustände aufzudecken und damit die Qualität des Testobjekts zu verbessern."
    ],
    correct: 3
  },

  // Frage 2: Unterschied Testen und Qualitätssicherung
  {
    question: "Was ist der Unterschied zwischen Testen und Qualitätssicherung?",
    description: "Wählen Sie EINE Option! (1 aus 4) – FL-1.2.2 (K1) Der Lernende kann die Beziehung zwischen Testen und Qualitätssicherung wiedergeben.",
    options: [
      "a) Testen ist ein prozessorientierter, präventiver Ansatz, während Qualitätssicherung ein produktorientierter, korrigierender Ansatz ist.",
      "b) Qualitätssicherung ist prozessorientiert und zielt auf deren Verbesserung, während Testen durch produktorientierte Maßnahmen auf angemessene Qualität zielt.",
      "c) Testen und Qualitätssicherung sind identisch und können synonym verwendet werden.",
      "d) Qualitätssicherung bezieht sich nur auf den Testprozess, während Testen den gesamten Entwicklungsprozess umfasst."
    ],
    correct: 1
  },

  // Frage 3: Grundsatz des Testens
  {
    question: "Ein Tester hat über einen Zeitraum von 5 Jahren Softwareanwendungen auf mobilen Geräten getestet. Über einen langen Zeitraum hat der Tester die bestehenden Testfälle nicht verändert und auch keine neuen Testfälle erstellt. Bei neueren Versionen der mobilen Plattform sind mehr Fehlerwirkungen von den Nutzern gemeldet worden. Welchen Grundsatz des Testens hat der Tester nicht beachtet?",
    description: "Wählen Sie EINE Option! (1 aus 4) – FL-1.3.1 (K2) Der Lernende kann die sieben Grundsätze des Testens erklären.",
    options: [
      "a) Testen ist abhängig vom Umfeld.",
      "b) Vollständiges Testen ist nicht möglich.",
      "c) Tests nutzen sich ab.",
      "d) Fehlerzustände treten gehäuft auf."
    ],
    correct: 2
  },

  // Frage 4: Testaktivität Test-Charta
  {
    question: "Betrachten Sie das folgende Testmittel:\nTest-Charta #04.018 Sitzungsdauer: 1h\nErforsche die Registrierungsseite\nMit verschiedenen fehlerhaften Eingabesätzen\nZu entdecken Fehler beim Registrierungsvorgang bei fehlerhaften Eingaben\nIn welcher Testaktivität wird dieses Testmittel erstellt?",
    description: "Wählen Sie EINE Option! (1 aus 4) – FL-1.4.3 (K2) Der Lernende kann Testmittel, die die Testaktivitäten unterstützen, unterscheiden.",
    options: [
      "a) Testplanung",
      "b) Testüberwachung und Teststeuerung",
      "c) Testanalyse",
      "d) Testentwurf"
    ],
    correct: 3
  },

  // Frage 5: Einflussfaktor auf Testdurchführung
  {
    question: "Welcher der folgenden Aspekte beeinflusst AM EHESTEN die Durchführung von Tests für ein bestimmtes Testobjekts?",
    description: "Wählen Sie EINE Option! (1 aus 4)",
    options: [
      "a) Die durchschnittliche Erfahrung des Marketingteams des Unternehmens.",
      "b) Das Wissen der Benutzer, dass ein neues System für sie entwickelt wird.",
      "c) Die Anzahl der Jahre an Testerfahrung der Mitglieder des Testteams.",
      "d) Die Organisationsstruktur der Benutzer der zu entwickelnden Anwendung."
    ],
    correct: 2
  },
  
  // Frage 6: Verfolgbarkeit und Testaktivitäten
{
question: "",
  description: "",
  options: [
    "a) 1D, 2B, 3C, 4A",
    "b) 1B, 2D, 3A, 4C",
    "c) 1D, 2C, 3A, 4B",
    "d) 1D, 2B, 3A, 4C"
  ],
  correct: 3,
  image:"img/SetB6.png"
},


  // Frage 7: Positive Auswirkungen eines neuen Testers mit Domänenwissen
  {
    question: "Sie sind Teil eines Testteams, das an der Entwicklung eines Steuerungssystems eines Hubschraubers beteiligt ist. Kürzlich wurde ein erfahrener Hubschrauberpilot als Tester für das Testteam eingestellt. Welche positiven Auswirkungen werden die allgemeinen Kompetenzen des neuen Testers vermutlich AM EHESTEN auf das Testteam haben?",
    description: "Wählen Sie EINE Option! (1 aus 4) – FL-1.5.1 (K2) Der Lernende kann Beispiele für die allgemeinen Kompetenzen, die für das Testen erforderlich sind, geben.",
    options: [
      "a) Die Anwendung der 3-Wert-Grenzwertanalyse für einen gründlicheren Testentwurf im Systemtest.",
      "b) Inkonsistenzen und Ungenauigkeiten in den fachlichen Anforderungen werden effektiv aufgedeckt.",
      "c) Einsatz eines Werkzeugs zur Automatisierung von Zustandsübergangstests.",
      "d) Testergebnisse werden konstruktiver und defensiver an die Entwickler kommuniziert."
    ],
    correct: 1
  },

  // Frage 8: Vorteil des Whole-Team-Ansatzes
  {
    question: "Welche der folgenden Aussagen beschreibt einen Vorteil des Whole-Team-Ansatzes (Whole Team Approach)?",
    description: "Wählen Sie EINE Option! (1 aus 4) – FL-1.5.2 (K1) Der Lernende kann die Vorteile des Whole-Team-Ansatzes wiedergeben.",
    options: [
      "a) Er ermöglicht es den Teammitgliedern, jederzeit jede Rolle zu übernehmen.",
      "b) Es wird nur ein Team benötigt, um das gesamte Entwicklungsprojekt zu unterstützen.",
      "c) Tester können isoliert arbeiten, ohne die Entwickler oder die Fachbereichsvertreter mit testspezifischen Informationen abzulenken.",
      "d) Oft ergeben sich Synergien, von denen das gesamte Team und das Projekt profitieren."
    ],
    correct: 3
  },

  // Frage 9: Softwareentwicklungslebenszyklus und Testen
  {
    question: "Welche der folgenden Aussagen über die Wahl des Softwareentwicklungslebenszyklus und dessen Beziehung zum Testen ist KORREKT?",
    description: "Wählen Sie EINE Option! (1 aus 4) – FL-2.1.1 (K2) Der Lernende kann die Auswirkungen des gewählten Softwareentwicklungslebenszyklus auf das Testen erklären.",
    options: [
      "a) In der agilen Softwareentwicklung ersetzt die Automatisierung von Systemtests die Notwendigkeit von Regressionstests.",
      "b) Wenn ein sequenzielles Entwicklungsmodell verwendet wird, wird das dynamische Testen typischerweise in einer späteren Phase des Lebenszyklus durchgeführt.",
      "c) Wenn ein iteratives Entwicklungsmodell verwendet wird, werden Komponententests typischerweise manuell von Entwicklern durchgeführt.",
      "d) Wenn ein inkrementelles Entwicklungsmodell verwendet wird, werden statische Tests in frühen Inkrementen und dynamische Tests in späteren Inkrementen durchgeführt."
    ],
    correct: 1
  },

  // Frage 10: Gute Testpraktik unabhängig vom Modell
  {
    question: "Welche der folgenden Optionen ist eine gute Testpraktik, unabhängig vom gewählten Modell des Softwareentwicklungslebenszyklus?",
    description: "Wählen Sie die BESTE Option! (1 aus 4)",
    options: [
      "a) Tester sollten die Arbeitsergebnisse einer Entwicklungsphase in der nächsten Entwicklungsphase überprüfen.",
      "b) Tester sollten mit der Überprüfung der Arbeitsergebnisse einer Softwareentwicklungsaktivität beginnen, sobald Entwürfe verfügbar sind.",
      "c) Tester sollten Arbeitsergebnisse einer Softwareentwicklungsaktivität nur im Rahmen der Testanalyse und des Testentwurfs überprüfen.",
      "d) Tester sollten Arbeitsergebnisse prüfen, sobald sie zur Nutzung freigegeben sind."
    ],
    correct: 1
  },{
  question: "Welches der folgenden Beispiele ist ein Test-First-Ansatz für die Entwicklung?\nWählen Sie EINE Option! (1 aus 4)",
  description: "FL-2.1.3 (K1) Der Lernende kann die Beispiele für Test-First-Ansätze in der Entwicklung wiedergeben.",
  options: [
    "a) Testgetriebene Entwicklung",
    "b) Überdeckungsgetriebene Entwicklung",
    "c) Qualitätsgetriebene Entwicklung",
    "d) Feature-getriebene Entwicklung"
  ],
  correct: 0
},
{
  question: "Welche der folgenden Aussagen trifft auf DevOps zu?\nWählen Sie EINE Option! (1 aus 4)",
  description: "FL-2.1.4 (K2) Der Lernende kann die möglichen Auswirkungen von DevOps auf das Testen zusammenfassen.",
  options: [
    "a) Um Releases zu beschleunigen, wird kontinuierliche Integration eingesetzt, die es den Entwicklern ermöglicht, Code schnell und ohne Komponententests auszuliefern.",
    "b) Um Systeme schneller zu aktualisieren und freizugeben, nutzt die DevOps-Lieferkette Automatisierung, um zeitaufwendige manuelle Regressionstests zu reduzieren.",
    "c) Um die Kluft zwischen Entwicklung und Betrieb zu verringern, priorisiert das Testen mit einem Shift-Right-Ansatz den Abnahmetest parallel zur kontinuierlichen Auslieferung.",
    "d) Um eine größere Synergie zwischen Testern, Entwicklern und Betrieb zu schaffen, werden die Tests vollständig automatisiert, so dass keine manuellen Tests mehr erforderlich sind."
  ],
  correct: 1
},
{
  question: "Welche der folgenden Maßnahmen werden im Rahmen von Systemtests AM EHESTEN durchgeführt?\nWählen Sie EINE Option! (1 aus 4)",
  description: "FL-2.2.1 (K2) Der Lernende kann die verschiedenen Teststufen unterscheiden.",
  options: [
    "a) End-to-End-Tests der IT-Sicherheit eines Kreditmanagementsystems durch ein unabhängiges Testteam",
    "b) Test des Zusammenwirkens eines Geldwechselsystems mit einer externen Bank oder mit dem System einer externen Bank",
    "c) Beta-Test einer Lernplattform durch die Trainer eines Schulungsanbieters",
    "d) Test der Interaktion zwischen der Benutzeroberfläche und der Datenbank eines Personalverwaltungssystems"
  ],
  correct: 0
},
{
  question: "Welche der folgenden Entscheidungen sollte KEIN Auslöser für Wartungstests sein?\nWählen Sie EINE Option! (1 aus 4)",
  description: "FL-2.3.1 (K2) Der Lernende kann den Wartungstest und dessen Auslöser zusammenfassen.",
  options: [
    "a) Die Entscheidung, die Wartbarkeit der Software zu testen.",
    "b) Die Entscheidung, das System nach der Migration auf eine neue Betriebsplattform zu testen.",
    "c) Die Entscheidung, die Wiederherstellbarkeit archivierter Daten nach Außerbetriebnahme zu testen.",
    "d) Die Entscheidung zu testen, nachdem ein 'Hotfix' auf die Produktivversion aufgespielt wurde."
  ],
  correct: 0
},
{
  question: "Welche der folgenden Aussagen beschreibt AM BESTEN den Einsatz von statischen Tests?\nWählen Sie EINE Option! (1 aus 4)",
  description: "FL-2.3.2 (K2) Der Lernende kann die Bedeutung und den Einsatz von statischen Tests erklären.",
  options: [
    "a) Statisches Testen kann Fehlerzustände aufdecken, die durch dynamisches Testen nicht gefunden werden können.",
    "b) Fehlerzustände im Code können durch dynamische Tests effizienter gefunden werden als durch statische Tests.",
    "c) Der statische Test kann erst in einer späten Phase des SDLC durchgeführt werden.",
    "d) Um den statischen Test so effizient wie möglich zu gestalten, sollten so wenig Stakeholder wie möglich involviert sein."
  ],
  correct: 0
},

{
  question: "Welche der folgenden Aussagen beschreibt einen Vorteil von frühem und häufigem Stakeholder-Feedback?\nWählen Sie EINE Option! (1 aus 4)",
  description: "FL-3.2.1 (K1) Der Lernende kann die Vorteile eines frühen und häufigen Stakeholder-Feedbacks erkennen.",
  options: [
    "a) Es hilft dem Projektmanagement, weniger produktive Entwickler frühzeitig zu erkennen.",
    "b) Es reduziert die Notwendigkeit häufiger Interaktionen zwischen Projektmanagern und Stakeholdern.",
    "c) Es erleichtert die frühzeitige Identifikation und Kommunikation möglicher Qualitätsprobleme.",
    "d) Es verbessert das Verständnis der Endbenutzer hinsichtlich möglicher Verzögerungen bei der Anwendungsbereitstellung."
  ],
  correct: 2
},
{
  question: "",
  description: "FL-3.2.2 (K2) Der Lernende kann die Aktivitäten des Reviewprozesses zusammenfassen.",
  options: [
    "a) 1B, 2C, 3D, 4A",
    "b) 1B, 2D, 3C, 4A",
    "c) 1C, 2A, 3B, 4D",
    "d) 1C, 2B, 3A, 4D"
  ],
  correct: 3,
  image:"img/setb17.png"
},
{
  question: "",
  description: "FL-3.2.3 (K1) Der Lernende kann die bei der Durchführung von Reviews den Hauptrollen zugewiesenen Verantwortlichkeiten wiedergeben.",
  options: [
    "a) 1A, 2B, 3D, 4C",
    "b) 1A, 2C, 3B, 4D",
    "c) 1B, 2D, 3A, 4C",
    "d) 1B, 2D, 3C, 4A"
  ],
  correct: 2,
    image:"img/setb18.png"

},
{
  question: "Welche der folgenden Aussagen beschreibt korrekt die Zuordnung von Verfahrensgrundlagen zu Entscheidungstabellen- und Zweigtests?\nWählen Sie EINE Option! (1 aus 4)",
  description: "FL-4.1.1 (K2) Der Lernende kann Black-Box-Testverfahren, White-Box-Testverfahren und erfahrungsbasierte Testverfahren unterscheiden.",
  options: [
    "a) Beim Entscheidungstabellentest werden die Testfälle aus den Entscheidungsergebnissen im Code abgeleitet. Beim Zweigtest werden die Testfälle aus der Kenntnis des Kontrollflusses des Testelements abgeleitet.",
    "b) Beim Entscheidungstabellentest werden die Testfälle aus der Spezifikation abgeleitet, die die Geschäftslogik beschreibt. Beim Zweigtest basieren die Testfälle auf der Antizipation potenzieller Fehler im Quellcode.",
    "c) Beim Entscheidungstabellentest werden die Testfälle aus der Kenntnis des Kontrollflusses des Testelements abgeleitet. Beim Zweigtest werden die Testfälle aus der Spezifikation abgeleitet, die die Geschäftslogik beschreibt.",
    "d) Beim Entscheidungstabellentest werden die Testfälle unabhängig vom Zustand der Software abgeleitet. Beim Zweigtest können die Testfälle erst nach dem Entwurf und der Implementierung des Codes erstellt werden."
  ],
  correct: 3
},
{
  question: "",
  description: "FL-4.1.1 (K2) Der Lernende kann Äquivalenzklassen beim Testen erkennen.",
  options: [
    "a) 19, 20, 30",
    "b) 11, 12, 20",
    "c) 1, 10, 50",
    "d) 10, 29, 30, 31"
  ],
  correct: 0,
  image:"img/setb20.png"
},{
  question: "",
  options: [
    "a) 11, 12, 13",
    "b) 9, 13, 15",
    "c) 9, 10, 11, 12, 13, 14, 15",
    "d) 10, 11, 12, 13, 14"
  ],
  correct: 2,
    image:"img/SETB21.png"


},
{
  question: "",
  options: [
    "a) 40 %",
    "b) 60 %",
    "c) 80 %",
    "d) 100 %"
  ],
  correct: 1,
  image:"img/setB22.png"
},
{
  question: "",
  options: [
    "a) Start → Warten → Aus → Warten → Erhaltungsladen → Warten",
    "b) Start → Warten → Erhaltungsladen → Laden → Hoch → Laden",
    "c) Start → Warten → Erhaltungsladen → Laden → Niedrig → Laden",
    "d) Start → Warten → Aus → Warten → Laden → Niedrig → Laden"
  ],
  correct: 3,
    image:"img/setB23.png"

},
{
  question: "Sie führen zwei Testfälle T1 und T2 für denselben Code aus. T1 erreicht 40 % Anweisungsüberdeckung, T2 65 %. Welche Aussage ist korrekt?",
  options: [
    "a) Die Testsuite erreicht 105 % Anweisungsüberdeckung",
    "b) Mindestens eine Anweisung wurde sowohl von T1 als auch von T2 ausgeführt",
    "c) Mindestens 5 % der Anweisungen im getesteten Code sind nicht ausführbar",
    "d) Die Testsuite erreicht eine Zweigüberdeckung von 100 %"
  ],
  correct: 1
},
{
  question: "Die Formel für die Zweigüberdeckungsmetrik ist ZÜ = (X / Y) * 100 %. Was bedeuten X und Y?",
  options: [
    "a) X = Anzahl der von den Testfällen ausgeführten Entscheidungsergebnisse, Y = Gesamtzahl der Entscheidungsergebnisse im Code",
    "b) X = Anzahl der durch die Testfälle ausgeführten bedingten Zweige, Y = Gesamtzahl der Zweige im Code",
    "c) X = Anzahl der von den Testfällen ausgeführten Zweige, Y = Gesamtzahl der Zweige im Code",
    "d) X = Anzahl der von den Testfällen ausgeführten bedingten Zweige, Y = Gesamtzahl der Entscheidungsergebnisse im Code"
  ],
  correct: 2
},
{
  question: "Welche Aussage liefert die BESTE Begründung für den effektiven Einsatz explorativer Tests?",
  options: [
    "a) Die bestehende Teststrategie fordert, dass die Tester Black-Box-Testverfahren verwenden.",
    "b) Die Spezifikation ist in einer formalen Sprache geschrieben, die von einem Werkzeug verarbeitet werden kann.",
    "c) Die Tester sind Mitglieder eines agilen Teams und verfügen über gute Programmierkenntnisse.",
    "d) Die Tester haben Erfahrung in der Anwendungsdomäne und gute analytische Fähigkeiten."
  ],
  correct: 3
},
{
  question: "Welches ist das BESTE Beispiel für eine Testbedingung bei der Verwendung von checklistenbasierten Tests?",
  options: [
    "a) „Der Entwickler hat bei der Implementierung des Codes eine Fehlhandlung gemacht.“",
    "b) „Die erreichte Anweisungsüberdeckung ist größer als 85 %.“",
    "c) „Das Programm erfüllt die funktionalen und nicht-funktionalen Anforderungen korrekt.“",
    "d) „Die Fehlermeldungen des Systems sind für die Benutzer verständlich.“"
  ],
  correct: 3
},
{
  question: "",
  options: [
    "a) Regelorientiert",
    "b) Szenarioorientiert",
    "c) Produktorientiert",
    "d) Prozessorientiert"
  ],
  correct: 1,
  image:"img/setb28.png"

},
{
  question: "",
  options: [
    "a) Login als Trainer ins DFBNET; wähle die nächsten Spieltage für meine Mannschaft aus; lade die Spielberechtigungslisten.",
    "b) GEGEBEN: Ich bin als Trainer im DFBNET mit meiner Trainerkennung angemeldet UND GEGEBEN: Ich habe den nächsten Spieltag ausgewählt, WENN ich „Spielberechtigungsliste laden“ auswähle, DANN wird mir eine Liste der spielberechtigten Spieler für den nächsten Spieltag angezeigt.",
    "c) Login als Mannschaftsverantwortlicher; wähle den nächsten Spieltag aus; lade Spielberechtigungsliste; entferne Spieler, die nicht spielberechtigt sind.",
    "d) GEGEBEN: Ich habe die nächsten Spieltage für meine Mannschaft ausgewählt WENN ich einen Spieltag auswähle UND WENN ich die Spielberechtigungsliste für diesen Spieltag lade, DANN sollen mir alle spieleberechtigten Spieler für diesen Spieltag angezeigt werden."
  ],
  correct: 1,
      image:"img/setb29.png"

},
{
  question: "",
  options: [
    "a) Die statische Analyse meldet für den übermittelten Code keine Fehler und keine Warnungen mit hohem Schweregrad.",
    "b) Die Versionskontrolle meldet keine Konflikte beim Kompilieren und Integrieren des Codes in den „Test“-Zweig.",
    "c) Die Komponententests sind kompiliert und stehen lauffähig für den „Test“-Zweig zur Verfügung.",
    "d) Die Anweisungsüberdeckung des Komponententests beträgt mindestens 80 %."
  ],
  correct: 0,
    image:"img/SETB30.png"
    


},
{
    question: "",
    options: [
      "a) 40.000 €",
      "b) 80.000 €",
      "c) 81.250 €",
      "d) 82.500 €"
    ],
    correct: 1,
    image:"img/SETB31.png"

  },
  {
    question: "",
    options: [
      "a) T1 → T2 → T4 → T5 → T3 → T6",
      "b) T1 → T2 → T3 → T4 → T5 → T6",
      "c) T1 → T2 → T4 → T3 → T5 → T6",
      "d) T1 → T2 → T3 → T5 → T4 → T6"
    ],
    correct: 3,
        image:"img/SETB32.png"

  },
  {
    question: "Welches der folgenden Elemente wird im Testquadrantenmodell dem Testquadranten Q1 („technologieorientiert“ und „Unterstützung des Teams“) zugeordnet?",
    options: [
      "a) Gebrauchstauglichkeitstests",
      "b) Smoke-Tests",
      "c) Benutzerabnahmetests",
      "d) Komponentenintegrationstests"
    ],
    correct: 3,

  },
  {
    question: "Welche Aussage im Zusammenhang mit dem Risikomanagement beschreibt die Beziehung zwischen Produktrisiko und Testplanung NICHT genau?",
    options: [
      "a) Die potenziellen Auswirkungen von IT-Sicherheitsschwachstellen wurden als signifikant hoch bewertet, so dass das Endekriterium für den IT-Sicherheitstest auf 99 bestandene Testfälle erhöht wurde.",
      "b) Die geforderte Qualität des Netzwerkmoduls ist unklar, was zu weiteren Risikoanalysen in diesem Bereich führen wird.",
      "c) Die Benutzer hatten Probleme mit der Benutzungsschnittstelle des bestehenden Systems, so dass zusätzliche Gebrauchstauglichkeitstests für das Nachfolgesystem geplant sind.",
      "d) Die Ladezeit von Webseiten ist entscheidend für den Erfolg der neuen Website, daher wird ein Experte für Performanztests in das Projekt einbezogen."
    ],
    correct: 1
  },
  {
    question: "Welche der folgenden Kennzahlen ist eine Produktqualitätsmetrik?",
    options: [
      "a) Mittlere Betriebsdauer bis zum Ausfall (Mean time to Failure)",
      "b) Anzahl der aufgedeckten Fehlerzustände",
      "c) Anforderungsüberdeckung",
      "d) Fehlerdichte"
    ],
    correct: 0
  },
 {
    question: "Welche der folgenden Aussagen beschreibt ein Beispiel dafür, wie Konfigurationsmanagement (KM) das Testen unterstützt?",
    options: [
      "a) Über die Versionsnummer der Testumgebung und die gespeicherten Beziehungen kann das KM-Werkzeug die Versionsnummern der in dieser Umgebung verwendeten Bibliotheken, Platzhalter und Treiber abrufen.",
      "b) Die Änderung von Baselines wird durch KM-Werkzeuge flexibel und pragmatisch unterstützt, wenn die Tester dies aufgrund unerwarteter Ereignisse während der Testdurchführung für notwendig erachten.",
      "c) Das Konfigurationsmanagement unterstützt die Verfolgung von Testskripten und Testfällen. Testergebnisse werden hingegen durch das Fehlermanagement verwaltet.",
      "d) Das Konfigurationsmanagement fasst komplexe Konfigurationselemente in einer Baseline zusammen. Um diese als Basis zu etablieren, können Tester später nicht mehr auf eine frühere Baseline zurückgreifen."
    ],
    correct: 0
  },
  {
    question: "",
    options: [
      "a) Das System kann mehrere Zahlensätze nicht sortieren. Referenz: TC3, TC4, TC5.",
      "b) Das System scheint Duplikate beim Sortieren zu ignorieren. Referenz: TC3, TC4, TC5.",
      "c) Das System kann keine negativen Zahlen sortieren. Referenz: TC4, TC5.",
      "d) TC3, TC4 und TC5 sind fehlerhaft (doppelte Eingabedaten) und sollten korrigiert werden."
    ],
    correct: 1,
            image:"img/SETB38.png"

  },

  {
  question: "",
    options: [
      "a)1A, 2B, 3C, 4D",
      "b)1B, 2D, 3C, 4A",
      "c)1C, 2D, 3B, 4A",
      "d)1D, 2C, 3A, 4B"
    ],
    correct: 2,
     image:"img/setB39.png"

  },

// C
//          ###############     
//        ##                 
//       ##                  
//      ##                   
//     ##                    
//     ##                    
//      ##                  
//       ##                 
//        ###############    


{
  question: "Welche der folgenden Optionen stellt ein typisches Testziel dar?",
  options: [
    "a) Validieren, ob die dokumentierten Anforderungen erfüllt sind.",
    "b) Fehlerwirkungen provozieren und Fehlerzustände identifizieren.",
    "c) Fehler initiieren und deren Ursachen identifizieren.",
    "d) Verifikation, ob das Testobjekt die Erwartungen der Benutzer erfüllt."
  ],
  correct: 1
},
{
  question: "Welche der folgenden Aussagen beschreibt den Unterschied zwischen Testen und Debugging AM BESTEN?",
  options: [
    "a) Beim Testen wird die Ursache von Fehlerzuständen identifiziert, während beim Debugging die Fehlerzustände analysiert und behoben werden.",
    "b) Testen ist eine negative Aktivität, während Debugging eine positive Aktivität ist.",
    "c) Beim Testen werden Fehler gefunden, während beim Debugging Fehler behoben werden.",
    "d) Beim Testen wird die Fehlerursache gefunden, während beim Debugging die Fehlerursache behoben wird."
  ],
  correct: 2
},
{
  question: "Ein Grundsatz des Testens lautet: 'Der Trugschluss, dass ein fehlerfreies System auch automatisch brauchbar ist, muss vermieden werden.' Welches Beispiel zeigt, wie dieser Grundsatz in der Praxis berücksichtigt wird?",
  options: [
    "a) Darauf hinweisen, dass Testen niemals die Abwesenheit von Fehlern beweisen kann.",
    "b) Die Endnutzer bei der Durchführung von Abnahmetests unterstützen.",
    "c) Sicherstellen, dass das gelieferte System keine Implementierungsfehler enthält.",
    "d) Test verändern, die keine Fehler finden, um die Fehlerdichte zu verringern."
  ],
  correct: 1
},
{
  question: "Bei welchen der folgenden Testaktivitäten werden typischerweise die Testverfahren der Grenzwertanalyse und der Äquivalenzklassenbildung angewendet? (Wählen Sie ZWEI Optionen)",
  options: [
    "a) Testrealisierung",
    "b) Testentwurf",
    "c) Testdurchführung",
    "d) Testüberwachung",
    "e) Testanalyse"
  ],
  correct: [1, 4]
},
{
  question: "",
  options: [
    "a) 1B, 2D, 3C, 4A",
    "b) 1B, 2D, 3A, 4C",
    "c) 1D, 2C, 3A, 4B",
    "d) 1D, 2C, 3B, 4A"
  ],
  correct: 0,
  image:"img/SETC5.png"
},
{
  question: "Welche der folgenden Aussagen über Testrollen in der agilen Softwareentwicklung trifft AM ZUTREFFENSTEN zu?",
  options: [
    "a) In agilen Teams liegt das Testmanagement hauptsächlich beim Team, während das Testen überwiegend von externen Spezialisten durchgeführt wird.",
    "b) Die operative Rolle des Testens übernimmt vor allem die Testüberwachung und –steuerung, während das Testmanagement für Planung und Durchführung zuständig ist.",
    "c) In der agilen Entwicklung übernimmt ein externer Testmanager teamübergreifende Aufgaben, während das Team selbst einige Testmanagementaufgaben intern umsetzt.",
    "d) Das Testmanagement ist hauptsächlich für Testanalyse und Testentwurf verantwortlich, während die operative Rolle des Testens vor allem Implementierung und Ausführung übernimmt."
  ],
  correct: 2
},
{
  question: "Was ist ein typischer Vorteil des ganzheitlichen Teamansatzes (Whole-Team-Ansatz) in agilen Projekten?",
  options: [
    "a) Das Team arbeitet ohne dedizierte Tester.",
    "b) Die Teamdynamik wird verbessert.",
    "c) Nur Mitglieder des Fachbereichs sind für das Testen zuständig.",
    "d) Teams werden durch zusätzliche Rollen vergrößert."
  ],
  correct: 1
},
{
  question: "Welche der folgenden Aussagen zur Unabhängigkeit des Testens trifft AM EHESTEN zu?",
  options: [
    "a) Unabhängige Tester entdecken häufig Fehler, weil sie mit einer anderen Perspektive als die Entwickler testen – diese Unabhängigkeit kann jedoch zu Spannungen im Team führen.",
    "b) Entwickler finden nur wenige Fehler in ihrem eigenen Code, und Tester mit ähnlichem Hintergrund sind beim Finden derselben Fehler ebenfalls eingeschränkt.",
    "c) Unabhängiges Testen ist nur durch externe Tester außerhalb des Teams oder der Organisation möglich, was jedoch die Kenntnis der Fachdomäne erschwert.",
    "d) Tester außerhalb des Teams gelten als unabhängiger, während interne Tester eher für Projektverzögerungen verantwortlich gemacht werden."
  ],
  correct: 0
},
{
  question: "Welche der folgenden Aussagen beschreibt eine bewährte Testpraxis, die in allen Softwareentwicklungs-Lebenszyklen gilt?",
  options: [
    "a) Jeder Teststufe ist eine bestimmte Entwicklungsstufe direkt zugeordnet.",
    "b) Jedes Testziel entspricht einem bestimmten Entwicklungsziel.",
    "c) Jede Testaktivität steht in direktem Zusammenhang mit einer Benutzeraktivität.",
    "d) Zu jeder Softwareentwicklungsaktivität gibt es eine passende Testaktivität."
  ],
  correct: 3
},
{
  question: "Welcher der folgenden Ansätze ist ein Beispiel für eine Test-First-Entwicklung?",
  options: [
    "a) Komponententestgetriebene Entwicklung",
    "b) Integrationstestgetriebene Entwicklung",
    "c) Systemtestgetriebene Entwicklung",
    "d) Akzeptanztestgetriebene Entwicklung"
  ],
  correct: 3
},

{
  question: "Welcher der folgenden Ansätze ist ein Beispiel für eine Test-First-Entwicklung?",
  options: [
    "a) Komponententestgetriebene Entwicklung",
    "b) Integrationstestgetriebene Entwicklung",
    "c) Systemtestgetriebene Entwicklung",
    "d) Akzeptanztestgetriebene Entwicklung"
  ],
  correct: 3
},
{
  question: "Welche der folgenden Aussagen beschreibt den Shift-Left-Ansatz im Softwaretesten AM ZUTREFFENDSTEN?",
  options: [
    "a) Manuelle Tests werden nach Zustimmung der Entwickler automatisiert, um Zeit und Kosten zu sparen.",
    "b) Testaktivitäten werden möglichst früh im Entwicklungsprozess eingeplant, um Fehler frühzeitig zu erkennen und Qualitätskosten zu senken.",
    "c) Tester automatisieren Regressionstests, sobald Zeit dafür zur Verfügung steht – beginnend mit Komponententests.",
    "d) Tester werden geschult, um frühe Aktivitäten zu übernehmen, sodass spätere Tests besser automatisiert werden können."
  ],
  correct: 1
},
{
  question: "Welches der folgenden Ereignisse ist im Rahmen einer Retrospektive AM WENIGSTEN wahrscheinlich?",
  options: [
    "a) Die Qualität künftiger Testobjekte wird verbessert, weil Schwächen in den Entwicklungspraktiken erkannt werden.",
    "b) Die Testeffizienz steigt, weil Testumgebungen künftig automatisiert werden.",
    "c) Endanwender gewinnen ein besseres Verständnis für Entwicklungs- und Testprozesse.",
    "d) Entwickler geben Rückmeldung, durch die automatisierte Testskripte optimiert werden."
  ],
  correct: 2
},
{
  question: "In welcher der folgenden Teststufen steht die Validierung im Vordergrund, und sie wird typischerweise nicht von Testern durchgeführt?",
  options: [
    "a) Komponententest",
    "b) Komponentenintegrationstest",
    "c) Systemintegrationstest",
    "d) Abnahmetest"
  ],
  correct: 3
},
{
  question: "Nach einem Software-Update schlägt das Navigationssystem z.B. Routen durch Einbahnstraßen in falscher Richtung vor – ein klarer Verstoß gegen Verkehrsregeln. Welche der folgenden Maßnahmen sind in diesem Fall AM SINNVOLLSTEN?",
  options: [
    "a) Nur Fehlernachtests",
    "b) Fehlernachtests gefolgt von Regressionstests",
    "c) Nur Regressionstests",
    "d) Regressionstests gefolgt von Fehlernachtests"
  ],
  correct: 1
},
{
  question: "Welche der folgenden Fehlerarten können typischerweise durch statische Tests – im Gegensatz zu dynamischen Tests – erkannt werden?",
  options: [
    "a) Widersprüche zwischen verschiedenen Teilen der Entwurfsspezifikation",
    "b) Längere Antwortzeiten führen zur Frustration der Benutzer",
    "c) Ein Fehler tritt auf, wenn beim Speichern einer Datei der Speicherplatz knapp wird",
    "d) Eine im Code deklarierte Variable wird nicht verwendet",
    "e) Das System benötigt beim Erstellen eines Berichts übermäßig viel Speicher"
  ],
  correct: [0, 3]
},
{
  question: "Welcher der folgenden Punkte ist ein typischer Vorteil von frühem und häufigem Stakeholder-Feedback?",
  options: [
    "a) Änderungen an Anforderungen werden frühzeitig erkannt und können schneller umgesetzt werden.",
    "b) Geschäftsinteressenten erhalten eine Schulung zu den Benutzeranforderungen.",
    "c) Product Owner können ihre Anforderungen beliebig oft ändern.",
    "d) Endnutzer werden vor der Freigabe über nicht umgesetzte Anforderungen informiert."
  ],
  correct: 0
},

{
  question: "Welcher der folgenden Faktoren trägt typischerweise zum Erfolg eines Reviews bei?",
  options: [
    "a) Das Management wird als Gutachter in alle Reviews eingebunden.",
    "b) Große Arbeitsprodukte werden in kleinere, überschaubare Einheiten aufgeteilt.",
    "c) Ziel des Reviews ist ausschließlich die Bewertung durch den Gutachter.",
    "d) Für jedes Review wird genau ein Dokument eingeplant."
  ],
  correct: 1
},
{
  question: "Was ist der zentrale Unterschied zwischen Black-Box-Verfahren und erfahrungsbasierten Testverfahren? ",
  options: [
    "a) Das getestete Objekt",
    "b) Die Teststufe, auf der das Testverfahren angewendet wird.",
    "c) Die zugrunde liegende Testbasis",
    "d) Die Phase im Softwareentwicklungslebenszyklus (SDLC), in der das Testverfahren eingesetzt wird."
  ],
  correct: 2


},
{
  question: "Ein PIN-Validator akzeptiert nur gültige PINs und lehnt ungültige ab. Eine PIN gilt als gültig, wenn sie aus genau vier Ziffern besteht, von denen mindestens zwei unterschiedlich sind. Welche der folgenden Datensätze deckt alle relevanten Äquivalenzklassen ab (gültige und ungültige PINs)?",
  options: [
    "a) 112, 1111, 1234, 123456",
    "b) 1, 123, 1111, 1234",
    "c) 12, 112, 1112, 11112",
    "d) 1, 111, 1111, 11111"
  ],
  correct: 0
},
//17
{
  question: "",
  options: [
    "a) 1A, 2B, 3C, 4D",
    "b) 1D, 2B, 3C, 4A",
    "c) 1B, 2C, 3D, 4A",
    "d) 1C, 2D, 3A, 4B"
  ],
  correct: 1,
  image:"img/setC17.png"

},
{
  question: "Welcher der folgenden Faktoren trägt typischerweise zum Erfolg eines Reviews bei?",
  options: [
    "a) Das Management wird als Gutachter in alle Reviews eingebunden.",
    "b) Große Arbeitsprodukte werden in kleinere, überschaubare Einheiten aufgeteilt.",
    "c) Ziel des Reviews ist ausschließlich die Bewertung durch den Gutachter.",
    "d) Für jedes Review wird genau ein Dokument eingeplant."
  ],
  correct: 1

  
},

{
  question: "",
  options: [
    "a) 100, 150, 200, 201",
    "b) 99, 100, 200, 201",
    "c) 98, 99, 100, 101",
    "d) 101, 150, 199, 200"
  ],
  correct: 3,
  image:"img/setc21.png"
},
{
  question: "",
  options: [
    "a) C1 = T, C2 = T, C3 = F",
    "b) C1 = T, C2 = F, C3 = T",
    "c) C1 = T, C2 = T, C3 = T und C1 = F, C2 = T, C3 = T",
    "d) C1 = F, C2 = F, C3 = F"
  ],
  correct: 3,
  image:"img/setc22.png"
},
{
  question: "",
  options: [
    "a) 3",
    "b) 2",
    "c) 5",
    "d) 6"
  ],
  correct: 0,
    image:"img/setc23.png"
},
{
  question: "",
  options: [
    "a) 2",
    "b) 4",
    "c) 8",
    "d) 7"
  ],
  correct: 2,
    image:"img/setC24.png"
},
{
  question: "Wie können White-Box-Tests zur Verbesserung von Black-Box-Tests beitragen?",
  options: [
    "a) White-Box-Überdeckungsanalysen helfen, die Codeabdeckung durch Black-Box-Tests zu bewerten.",
    "b) White-Box-Analysen ermöglichen es, nicht erreichbare Teile des Codes zu identifizieren.",
    "c) Zweigtests basieren auf Black-Box-Verfahren, daher deckt vollständige Zweigüberdeckung alle Black-Box-Tests ab.",
    "d) White-Box-Verfahren liefern direkt anwendbare Testelemente für Black-Box-Tests."
  ],
  correct: 0
},
{
  question: "Ein Tester verwendet beim Testen die folgende Liste möglicher Fehlerzustände: Korrekte Eingaben werden nicht akzeptiert, Ungültige Eingaben werden akzeptiert, Falsches Ausgabeformat, Division durch null. Welches Testverfahren wird dabei am WAHRSCHEINLICHSTEN eingesetzt?",
  options: [
    "a) Exploratives Testen",
    "b) Fehlerangriff",
    "c) Checklistenbasiertes Testen",
    "d) Grenzwertanalyse"
  ],
  correct: 1
},
{
  question: "Welche der folgenden Aussagen beschreibt AM BESTEN, wie der Einsatz checklistenbasiertes Testen zu höherer Testüberdeckung führen kann?",
  options: [
    "a) Checklistenelemente können grob definiert werden, sodass Tester daraus eigenständig detaillierte Testfälle ableiten und ausführen.",
    "b) Durch die Automatisierung von Checklistenpunkten wird bei jeder Testausführung automatisch eine höhere Überdeckung erzielt.",
    "c) Jeder Checklistenpunkt sollte einzeln getestet werden, damit verschiedene Bereiche der Software abgedeckt werden.",
    "d) Zwei Tester, die dieselben Checklistenpunkte nutzen, setzen sie meist unterschiedlich um – das führt zu ergänzender Überdeckung."
  ],
  correct: 3
},
{
  question: "Welches der folgenden Akzeptanzkriterien (Abnahmekriterien) ist das typische Beispiel für ein szenarioorientiertes Kriterium?",
  options: [
    "a) Die Anwendung muss es Nutzenden ermöglichen, ihr Konto sowie alle zugehörigen Daten auf Anfrage zu löschen.",
    "b) Wenn ein Kunde einen Artikel in den Warenkorb legt und zur Kasse geht, soll er aufgefordert werden, sich anzumelden oder ein Konto zu erstellen, sofern dies noch nicht geschehen ist.",
    "c) IF (contain(product(23).Name, cart.products())) THEN return FALSE.",
    "d) Die Website muss den Anforderungen der ICT Accessibility 508 Standards entsprechen und sicherstellen, dass alle Inhalte für Menschen mit Behinderungen zugänglich sind."
  ],
  correct: 1
},
{
  question: "Sie arbeiten mit abnahmetestgetriebener Entwicklung und entwerfen Testfälle auf Grundlage der folgenden User-Story: Als regulärer oder spezieller Benutzer möchte ich meine elektronische Etagenkarte nutzen können, um Zugang zu bestimmten Etagen zu erhalten. Akzeptanzkriterien: AC1: Reguläre Benutzer haben Zugang zu den Etagen 1 bis 3. AC2: Etage 4 ist ausschließlich für spezielle Benutzer zugänglich. AC3: Spezielle Benutzer verfügen über alle Zugriffsrechte regulärer Benutzer. Welcher Testfall eignet sich AM BESTEN, um das Akzeptanzkriterium AC3 zu testen?",
  options: [
    "a) Ein regulärer Benutzer erhält Zugang zu den Etagen 1 und 3.",
    "b) Ein regulärer Benutzer hat keinen Zugang zur Etage 4.",
    "c) Ein spezieller Benutzer versucht, auf Etage 5 zuzugreifen.",
    "d) Ein spezieller Benutzer erhält Zugang zu den Etagen 1, 2 und 3."
  ],
  correct: 3,
      image:"img/setc29.png"


},
{
  question: "Welcher der folgenden Punkte gehört NICHT zum Zweck eines Testkonzepts?",
  options: [
    "a) Definition konkreter Testdaten und erwarteter Ergebnisse für Komponenten- und Integrationstests",
    "b) Festlegung eines Endekriteriums auf Komponententestebene mit dem Ziel 100 % Anweisungs- und Zweigüberdeckung",
    "c) Beschreibung der Inhalte und Struktur von Testfortschrittsberichten",
    "d) Begründung, warum eine in der Teststrategie vorgesehene Teststufe (z. B. Systemintegration) nicht durchgeführt wird"
  ],
  correct: 0
},
{
  question: "",
  options: [
    "a) 10,5 Personentage",
    "b) 8,25 Personentage",
    "c) 6,5 Personentage",
    "d) 9,4 Personentage"
  ],
  correct: 2,
    image:"img/setc31.png"

},
{
  question: "",
  options: [
    "a) TC 3",
    "b) TC 5",
    "c) TC 6",
    "d) TC 2"
  ],
  correct: 0,
  image:"img/setc32.png"
},
{
  question: "Was zeigt das Testpyramidenmodell?",
  options: [
    "a) Tests können unterschiedliche Prioritäten haben.",
    "b) Tests haben unterschiedliche Granularität.",
    "c) Für verschiedene Tests gelten unterschiedliche Überdeckungskriterien.",
    "d) Tests können voneinander abhängig sein."
  ],
  correct: 1
},
{
  question: "Welche Beziehung besteht zwischen den Testquadranten, Teststufen und Testarten?",
  options: [
    "a) Testquadranten kombinieren bestimmte Teststufen mit Testarten und ordnen sie einem festen Abschnitt im Softwareentwicklungslebenszyklus zu.",
    "b) Testquadranten definieren die Granularität von Testarten, die auf unterschiedlichen Teststufen angewendet werden.",
    "c) Testquadranten ordnen jeder Teststufe eine spezifische Menge an Testarten zu.",
    "d) Testquadranten gruppieren Teststufen und Testarten nach Kriterien wie der Zielgruppe oder dem Testfokus."
  ],
  correct: 3
},
{
  question: "Wie kann eine Produktrisikoanalyse den Umfang und die Gründlichkeit von Tests beeinflussen?",
  options: [
    "a) Durch kontinuierliche Risikoüberwachung können neue Risiken frühzeitig erkannt werden.",
    "b) Die Risikoidentifikation unterstützt die Planung risikomindernder Maßnahmen.",
    "c) Das bewertete Risikoniveau bestimmt die erforderliche Testtiefe und -überdeckung.",
    "d) Die Risikoanalyse liefert die Grundlage für die Auswahl technischer Testobjekte."
  ],
  correct: 2
},
{
  question: "Bei welcher der folgenden Aktivitäten im Testprozess werden Testfortschrittsberichte am häufigsten verwendet?",
  options: [
    "a) Testentwurf",
    "b) Testabschluss",
    "c) Testanalyse",
    "d) Testplanung"
  ],
  correct: 1
},
{
  question: "Welche der folgenden Aussagen stellt KEIN Beispiel dafür dar, wie das Konfigurationsmanagement das Testen unterstützt?",
  options: [
    "a) Alle Änderungen im Repository werden eindeutig identifiziert und versioniert.",
    "b) Änderungen an der Testumgebung werden dokumentiert und nachvollziehbar gemacht.",
    "c) Anforderungen sind in Testdokumenten eindeutig referenziert.",
    "d) Fehlerberichte sind mit einem Bearbeitungsstatus versehen."
  ],
  correct: 3
},
{
  question: "",
  options: [
    "a) Name des Testers und Datum des Berichts.",
    "b) Angaben zur Testumgebung mit Versionsinformationen.",
    "c) Identifizierung des Testobjekts.",
    "d) Beschreibung der Auswirkungen für betroffene Stakeholder."
  ],
  correct: 1,
  image:"img/setc38.png"
},
{
  question: "Welche der folgenden Werkzeugkategorien unterstützt die Verwaltung von Testfällen, Fehlerberichten und Konfigurationsdaten?",
  options: [
    "a) Werkzeuge für Testdurchführung und Testüberdeckung",
    "b) Werkzeuge für Testentwurf und Testrealisierung",
    "c) Fehlermanagementwerkzeuge",
    "d) Testmanagementwerkzeuge"
  ],
  correct: 3
},
{
  question: "Welcher der folgenden Punkte ist ein typischer Vorteil der Testautomatisierung?",
  options: [
    "a) Automatisierte Generierung von Testfällen ohne Bezug zur Testbasis",
    "b) Erhöhte Überdeckung durch objektive Bewertung von Testergebnissen",
    "c) Längere Testlaufzeiten durch höhere Verarbeitungsleistung",
    "d) Reduzierung menschlicher Fehler durch konsistente und wiederholbare Testausführung"
  ],
  correct: 3
},



// D
// ###################        
// ##                ##       
// ##                 ##      
// ##                  ##     
// ##                  ##     
// ##                 ##      
// ##                ##       
// ###################        



{
  question: "Welche der folgenden Aussagen beschreibt ein typisches Ziel von Softwaretests?",
  options: [
    "a) Fehler im Testobjekt identifizieren und beheben.",
    "b) Eine effektive Kommunikation mit dem Entwicklungsteam sicherstellen.",
    "c) Nachweisen, dass gesetzliche Vorgaben umgesetzt wurden.",
    "d) Vertrauen in die Qualität des Testobjekts aufbauen."
  ],
  correct: 3
},
{
  question: "",
  options: [
    "a) Die fehlerhafte Bonusberechnung ist ein sporadisch auftretender Fehlerzustand.",
    "b) Die verhängte Geldstrafe wegen mangelnder Barrierefreiheit stellt einen Ausfall dar.",
    "c) Der Zeitdruck, unter dem der Entwickler stand, ist eine wesentliche Ursache.",
    "d) Das Design enthält eine offensichtliche Fehlerwirkung des Designers."
  ],
  correct: 2,
      image:"img/setd2.png"


},
{
  question: "Tester leiten aus denselben Testbedingungen jeweils unterschiedliche Testfälle ab. Welcher Grundsatz des Testens wird dadurch am besten verdeutlicht?",
  options: [
    "a) Tests nutzen sich ab.",
    "b) „Keine Fehler“ bedeutet ein brauchbares System.",
    "c) Frühes Testen spart Zeit und Geld.",
    "d) Fehlerzustände treten gehäuft auf."
  ],
  correct: 0
},
{
  question: "",
  options: [
    "a) 1B, 2A, 3D, 4C",
    "b) 1B, 2D, 3C, 4A",
    "c) 1C, 2A, 3B, 4D",
    "d) 1C, 2D, 3A, 4B"
  ],
  correct: 1,
    image:"img/setd4.png"

},
{
  question: "Welche der folgenden Optionen ist das beste Beispiel für Testware, die im Rahmen der Testrealisierung erstellt wird?",
  options: [
    "a) Testabschlussbericht",
    "b) Testdaten für Eingaben und erwartete Ergebnisse in einer Datenbank",
    "c) Liste der Komponenten zur Einrichtung der Testumgebung",
    "d) Testfälle"
  ],
  correct: 1
},

{
  question: "Welche der folgenden Optionen beschreibt AM BESTEN eine typische Aufgabe einer Person in der Testmanagementrolle?",
  options: [
    "a) Bewertung von Testbasis und Testobjekt",
    "b) Definition der Anforderungen an die Testumgebung",
    "c) Bewertung der Testbarkeit des Testobjekts",
    "d) Erstellung des Testabschlussberichts"
  ],
  correct: 3
},

{
  question: "Welche der folgenden Aussagen beschreibt einen Vorteil des Whole-Team-Ansatzes?",
  options: [
    "a) Verbesserte Kommunikation im Team",
    "b) Geringere individuelle Verantwortung für Qualität",
    "c) Schnellere Bereitstellung von Ergebnissen für Endbenutzer",
    "d) Weniger Zusammenarbeit mit externen Geschäftsnutzern"
  ],
  correct: 0
},

{
  question: "Welche der folgenden Aussagen zur Unabhängigkeit des Testens werden AM EHESTEN als Vorteile angesehen?",
  options: [
    "a) Die Tester arbeiten an einem anderen Standort als die Entwickler.",
    "b) Tester hinterfragen die Annahmen, die Entwickler beim Schreiben von Code treffen.",
    "c) Es herrsche eine konfrontative Beziehung zwischen Testern und Entwicklern.",
    "d) Entwickler gehen davon aus, dass Tester die alleinige Verantwortung für Qualität tragen.",
    "e) Tester bringen eine andere Sichtweise als Entwickler ein."
  ],
  correct: [1, 4]
},

{
  question: "Welche der folgenden Optionen ist eine bewährte Testpraxis, die auf alle Softwareentwicklungslebenszyklen angewendet wird?",
  options: [
    "a) Jede Teststufe verfolgt eigene, eindeutig definierte Testziele.",
    "b) Testrealisierung und -ausführung sollten während der jeweiligen Entwicklungsphase beginnen.",
    "c) Mit dem Testentwurf sollte begonnen werden, sobald erste Entwürfe verfügbar sind.",
    "d) Für jede dynamische Testaktivität gibt es eine entsprechende statische Aktivität."
  ],
  correct: 0
},

{
  question: "Welche der folgenden Optionen ist ein Beispiel für testgetriebene Entwicklung?",
  options: [
    "a) Verhaltensgetriebene Entwicklung",
    "b) Teststufengetriebene Entwicklung",
    "c) Funktionsgetriebene Entwicklung",
    "d) Performanzgetriebene Entwicklung"
  ],
  correct: 0
},
{
    question: "Welche der folgenden Aussagen beschreibt AM BESTEN eine typische Herausforderung bei der Einführung von DevOps?",
    options: [
      "a) Sicherstellen, dass nicht-funktionale Anforderungen ausreichend berücksichtigt werden.",
      "b) Umgang mit häufig wechselnden Testumgebungen.",
      "c) Bedarf an zusätzlichen manuellen Testern mit spezieller Erfahrung.",
      "d) Integration der Testautomatisierung in die Bereitstellungspipeline."
    ],
    correct: 3
  },

  {
    question: "Welche der folgenden Aussagen beschreibt den Zweck von Retroperspektiven AM BESTEN?",
    options: [
      "a) Retrospektiven dienen dazu, Beiträge einzelner Teammitglieder kritisch zu bewerten.",
      "b) Retrospektiven ermöglichen es dem Team, erfolgreiche Aktivitäten zu identifizieren, um sie künftig beizubehalten.",
      "c) Retrospektiven bieten Raum für das Ansprechen von Bedenken gegenüber dem Management in geschütztem Rahmen.",
      "d) Retrospektiven sind Sitzungen, in denen das Team technische Entscheidungen für die nächste Iteration trifft."
    ],
    correct: 1
  },

  {
    question: "Welcher der folgenden Tests gehört AM EHESTEN zu den Funktionstests?",
    options: [
      "a) Der Test überprüft, ob die Sortierfunktion eine Liste korrekt in aufsteigender Reihenfolge sortiert.",
      "b) Der Test überprüft, ob die Sortierfunktion das Sortieren innerhalb einer Sekunde abschließt.",
      "c) Der Test überprüft, wie einfach sich die Sortierfunktion auf absteigende Sortierung umstellen lässt.",
      "d) Der Test überprüft, ob die Sortierfunktion auch auf einer 64-Bit-Architektur korrekt funktioniert."
    ],
    correct: 0
  },

  {
    question: "Welche der folgenden Aussagen beschreibt AM EHESTEN einen typischen Auslöser für Wartungstests eines Währungsumtauschsystems?",
    options: [
      "a) Entwickler berichteten über Schwierigkeiten bei Änderungen am System, woraufhin das Testteam eine technische Überprüfung einleitete.",
      "b) Die Rückerstattungsoption des Währungsumtauschsystems wurde entfernt, da sie den Kunden nicht immer den richtigen Betrag zurückzahlte.",
      "c) Das agile Team begann mit der Implementierung einer neuen Kundenbindungsfunktion.",
      "d) Die Sprachunterstützung wurde erweitert, um Transaktionen in Englisch und der Landessprache zu ermöglichen."
    ],
    correct: 1
  },

  {
    question: "Welches der folgenden Artefakte kann NICHT durch statisches Testen untersucht werden?",
    options: [
      "a) Vertrag",
      "b) Testkonzept",
      "c) Verschlüsselter Code",
      "d) Test-Charta"
    ],
    correct: 2
  },
    {
    question: "Welche der folgenden Aussagen beschreibt den Wert des statischen Testens AM BESTEN?",
    options: [
      "a) Die bei statischen Tests gefundenen Fehlertypen unterscheiden sich von denen, die durch dynamische Tests gefunden werden können.",
      "b) Dynamische Tests können alle Fehler erkennen, die auch bei statischen Tests gefunden werden, sowie weitere.",
      "c) Dynamische Tests erkennen einige, aber nicht alle Fehler, die durch statische Tests gefunden werden können.",
      "d) Statische Tests können alle Fehler erkennen, die durch dynamische Tests gefunden werden, sowie zusätzliche."
    ],
    correct: 2
  },

  {
  question: "",
    options: [
      "a) 4 – 3 – 5 – 2 – 1",
      "b) 4 – 5 – 3 – 1 – 2",
      "c) 5 – 4 – 1 – 3 – 2",
      "d) 5 – 4 – 3 – 2 – 1"
    ],
    correct: 1,
     image:"img/setd17.png"
    
  },

  {
    question: "Welcher Teilnehmer im Reviewprozess ist dafür verantwortlich, sicherzustellen, dass die Reviewsitzungen effektiv verlaufen und dass jeder Teilnehmer in den Sitzungen seine Meinung frei äußern kann?",
    options: [
      "a) Manager",
      "b) Moderator",
      "c) Vorsitzender",
      "d) Reviewleiter"
    ],
    correct: 1
  },

  {
  question: "",
    options: [
      "a) White-Box-Testverfahren",
      "b) Black-Box-Testverfahren",
      "c) Erfahrungsbasierte Testverfahren",
      "d) Risikobasierte Testverfahren"
    ],
    correct: 1,
      image:"img/setD19.png"

  },

  {
  question: "",
    options: [
      "a) BY = 2001, CY=2065",
      "b) BY = 1900, CY=1965",
      "c) BY = 1965, CY =1900",
      "d) BY = 2011, CY=2029",
      "e) BY = 2000, CY=2000"
    ],
    correct: [1, 4],
    image:"img/setd20.png"
  },
   {
    question: "Sie testen ein Temperaturüberwachungssystem für eine Kühlanlage. Welches Set von Testeingaben liefert unter Verwendung der Zwei-Wert-Grenzwertanalyse die vollständigste Überdeckung der Grenzwerte?",
    options: [
      "a) -1, 3",
      "b) 0, 2",
      "c) -1, 0, 2, 3",
      "d) -2, 0, 2, 4"
    ],
    correct: 2,
        image:"img/setd21.png"

  },

  {
  question: "",
    options: [
      "a) 66-jähriger, nicht registrierter Mann ohne Erfahrung; erwartetes Ergebnis: Kategorie B",
      "b) 55-jährige, nicht registrierte Frau mit 2 Jahren Erfahrung; erwartetes Ergebnis: Kategorie A",
      "c) 19-jährige, registrierte Frau mit 5 Jahren Erfahrung; erwartetes Ergebnis: Kategorie D",
      "d) Kein zusätzlicher Testfall kann die bereits erreichte Überdeckung der Entscheidungstabelle erhöhen"
    ],
    correct: 0,
      image:"img/setd22.png"
  },

  {
  question: "",
    options: [
      "a) Nicht verfügbar, Verfügbar, Zimmer wechseln, Nicht verfügbar, Stornieren",
      "b) Verfügbar, Zimmer wechseln, Nicht verfügbar, Verfügbar, Bezahlen",
      "c) Verfügbar, Zimmer wechseln, Verfügbar, Zimmer wechseln, Nicht verfügbar",
      "d) Nicht verfügbar, Stornieren, Zimmer wechseln, Verfügbar, Bezahlen"
    ],
    correct: 1,
      image:"img/setd23.png"

  },

  {
    question: "Ihre Testsuite S für ein Programm P erreicht 100 % Anweisungsüberdeckung. Welche Aussage ist korrekt?",
    options: [
      "a) Das Ausführen von S deckt alle möglichen Fehler in P auf.",
      "b) S erreicht 100 % Zweigüberdeckung für P.",
      "c) Jede ausführbare Anweisung in P, die einen Fehler enthält, wurde mindestens einmal durch S ausgeführt.",
      "d) Nach dem Entfernen eines Testfalls aus S erreichen die verbleibenden beiden Testfälle weiterhin 100 % Anweisungsüberdeckung."
    ],
    correct: 2
  },

  {
    question: "Warum erleichtert White-Box-Testen die Fehlererkennung auch dann, wenn die Softwarespezifikation vage, veraltet oder unvollständig ist?",
    options: [
      "a) Testfälle werden auf der Basis der Struktur des Testobjekts und nicht auf der Spezifikation entworfen.",
      "b) Für jedes White-Box-Testverfahren kann die Überdeckung genau definiert und leicht gemessen werden.",
      "c) White-Box-Testverfahren sind sehr gut geeignet, um Auslassungen in den Anforderungen zu erkennen.",
      "d) White-Box-Testverfahren können sowohl im statischen als auch im dynamischen Testen eingesetzt werden."
    ],
    correct: 0
  },
    {
    question: "Welches der folgenden Beispiele wird durch den Tester bei der Anwendung der intuitiven Testfallermittlung am wenigsten vorhergesehen?",
    options: [
      "a) Der Entwickler hat die Formel in der User-Story zur Berechnung der Zinsen falsch verstanden.",
      "b) Der Entwickler hat „FA = A*(1+IR^N)“ statt „FA = A*(1+IR)^N“ im Quellcode geschrieben.",
      "c) Der Entwickler hat das Seminar über die neue Gesetzgebung zu Zinseszinsen verpasst.",
      "d) Die Genauigkeit der vom System berechneten Zinsen ist nicht ausreichend."
    ],
    correct: 2
  },
  {
    question: "Welche der folgenden Aussagen über das explorative Testen ist korrekt?",
    options: [
      "a) Testfälle werden vor Beginn einer explorativen Testsitzung entworfen.",
      "b) Der Tester darf die Testausführung vornehmen, aber nicht den Testentwurf.",
      "c) Ergebnisse des explorativen Testens erlauben verlässliche Vorhersagen über verbleibende Fehler.",
      "d) Während des explorativen Testens kann der Tester Black-Box-Testverfahren einsetzen."
    ],
    correct: 3
  },
  {
    question: "Welche kollaborative Praxis beim Schreiben von User-Storys hilft dem Team am besten, ein gemeinsames Verständnis über das zu liefernde Produkt zu entwickeln?",
    options: [
      "a) Planungspoker, um einen Konsens über den Aufwand für die Umsetzung einer User-Story zu erreichen.",
      "b) Reviews, um Inkonsistenzen und Widersprüche in einer User-Story zu erkennen.",
      "c) Iterationsplanung, um User-Storys mit dem höchsten Geschäftswert zu priorisieren.",
      "d) Gespräch, um ein gemeinsames Verständnis über die Nutzung der Software zu entwickeln."
    ],
    correct: 3
  },
  {
  question: "",
    options: [
      "a) Webseite aufrufen und den Filter so einstellen, dass Preise zwischen 90 € und 100 € angezeigt werden. Erwartetes Ergebnis: Ergebnisse zeigen nur Produkt A. Höchstpreis auf 110 € setzen. Erwartetes Ergebnis: Ergebnisse beinhalten jetzt sowohl Produkt A als auch Produkt B.",
      "b) Webseite aufrufen. Erwartetes Ergebnis: Die Standardmindest- und -höchstpreise betragen jeweils 100 € und 110 €. Produkt C zum Lager hinzufügen, mit einem Preis von 120 €. Die Webseite des Kunden aktualisieren. Erwartetes Ergebnis: Der Standardhöchstpreis ändert sich auf 120 €.",
      "c) Webseite aufrufen und den Filter so einstellen, dass Preise zwischen 90 € und 115 € angezeigt werden. Erwartetes Ergebnis: Ergebnisse zeigen sowohl Produkt A als auch Produkt B. Währung von EUR auf USD ändern. Erwartetes Ergebnis: Der Filterbereich ändert sich korrekt zu USD-Werten.",
      "d) Webseite mit drei verschiedenen Browsern aufrufen: Edge, Chrome und Opera. In jedem Browser den Filter zwischen 90 € und 110 € einstellen. Erwartetes Ergebnis: Ergebnisse beinhalten sowohl Produkt A als auch Produkt B und das Layout der Ergebnisse ist in allen drei Browsern gleich."
    ],
    correct: 0,
      image:"img/setD29.png"

  
  },
  {
    question: "Welche der folgenden Optionen beschreiben am besten typische Endekriterien in einem Testprojekt?",
    options: [
      "a) Das Budget ist genehmigt.",
      "b) Das Budget ist aufgebraucht.",
      "c) Die Testbasis ist verfügbar.",
      "d) Testfälle haben mindestens 80 % Anweisungsüberdeckung erreicht.",
      "e) Alle Testanalysten sind nach ISTQB Foundation Level zertifiziert."
    ],
    correct: [1, 3]
  },
    {
  question: "",
    options: [
      "a) 14 Stunden",
      "b) 3,5 Stunden",
      "c) 16 Stunden",
      "d) 12 Stunden"
    ],
    correct: 0,
    
  image:"img/setD31.png"
  },
      {
  question: "Welcher der folgenden Zwecke gehört NICHT zu den gültigen Zielen eines Testberichts?",
    options: [
      "a) Verfolgung des Testfortschritts und Identifizierung von Bereichen, die weitere Aufmerksamkeit erfordern.",
      "b) Bereitstellung von Informationen über die durchgeführten Tests, deren Ergebnisse und gefundene Probleme oder Fehlerzustände",
      "c) Bereitstellung detaillierter Informationen zu jedem einzelnen Fehlerzustand, einschließlich der Schritte zur Reproduktion ",
      "d) Bereitstellung von Informationen über die für den nächsten Zeitraum geplanten Tests"
    ],
    correct: 2,
  },
  {
  question: "",
    options: [
      "a) Risikomanagement",
      "b) Testüberwachung und Teststeuerung",
      "c) Whole-Team-Ansatz",
      "d) Konfigurationsmanagement"
    ],
    correct: 3,
      image:"img/setd37.png"

  },
  {
    question: "",
    options: [
      "a) Hinzufügen spezifischer Informationen zu den betroffenen Benutzern und Büchern im Abschnitt „Beschreibung“.",
      "b) Ergänzung des fehlenden Wertes im Feld „Priorität“.",
      "c) Hinzufügen von Speicherabzügen und Datenbankschnappschüssen im Abschnitt „Anhänge“ nach jedem beschriebenen Schritt.",
      "d) Wiederholung desselben Testfalls in verschiedenen Umgebungen und Erstellung separater Fehlerberichte für jede Umgebung."
    ],
    correct: 0,
    image:"img/setd38.png"
  },
  {
    question: "Werkzeuge aus welchen Testwerkzeugkategorien erleichtern höchstwahrscheinlich die Testausführung?",
    options: [
      "a) Kooperationswerkzeuge",
      "b) DevOps-Werkzeuge",
      "c) Managementwerkzeuge",
      "d) Nicht-funktionale Testwerkzeuge",
      "e) Testentwurfs- und Implementierungswerkzeuge"
    ],
    correct: [1, 3]
  },
  {
    question: "Welche der folgenden Optionen ist höchstwahrscheinlich ein Risiko der Testautomatisierung?",
    options: [
      "a) Die Entdeckung zusätzlicher schwerwiegender Fehler.",
      "b) Bereitstellung von Maßnahmen, die für Menschen zu kompliziert sind, um sie abzuleiten.",
      "c) Inkompatibilität mit der Entwicklungsplattform",
      "d) Deutlich reduzierte Testausführungszeiten"
    ],
    correct: 2
  },
  
  

// E
// ########################   
// ##                       
// ##                       
// ##                       
// ########################   
// ##                       
// ##                       
// ##                       
// ########################


// set E 

 {
    question: "Welche der folgenden Aussagen beschreibt ein typisches Testziel?",
    options: [
      "a) Der Test beginnt kurz vor der Freigabe des Testobjekts, um Fehlerzustände zu finden, die eine Abnahme verhindern.",
      "b) Es erfolgt eine Validierung, dass das Testobjekt so funktioniert, wie es von den verschiedenen Stakeholdern erwartet wird.",
      "c) Es lässt sich nachweisen, dass alle Fehlerzustände identifiziert wurden.",
      "d) Es lässt sich nachweisen, dass die verbleibenden Fehlerzustände keine negativen Auswirkungen haben werden."
    ],
    correct: 1
  },
  {
    question: "Welche der folgenden Aussagen beschreibt den Unterschied zwischen Testen und Debugging am besten?",
    options: [
      "a) Testen identifiziert die Ursache von Fehlerzuständen. Debugging analysiert die Fehlerzustände und schlägt Präventionsmaßnahmen vor.",
      "b) Dynamisches Testen zeigt Fehlerwirkungen auf, die durch Fehlerzustände verursacht werden. Debugging analysiert und behebt den zugehörigen Fehlerzustand.",
      "c) Testen beseitigt Fehlerwirkungen; während Debugging Fehlerzustände beseitigt, die Fehlerwirkungen verursachen.",
      "d) Dynamisches Testen verhindert die Ursache von Fehlerwirkungen. Debugging beseitigt die Fehlerwirkungen."
    ],
    correct: 1
  },
  {
    question: "Ein Product Owner sagt, dass Ihre Rolle als Tester in einem agilen Team darin besteht, alle Fehlerzustände vor dem Ende jeder Iteration aufzudecken. Welche der folgenden Optionen ist ein Grundsatz, das als Antwort auf diese (falsche) Aussage verwendet werden könnte?",
    options: [
      "a) Häufung von Fehlerzuständen.",
      "b) Testen zeigt die Anwesenheit von Fehlerzuständen.",
      "c) Trugschluss: “Keine Fehler” bedeutet ein brauchbares System.",
      "d) Analyse der Grundursache."
    ],
    correct: 1
  },
  {
    question: "Welche der folgenden Optionen ist ein Beispiel für eine Aufgabe, die im Rahmen der Testrealisierung des Testprozesses durchgeführt werden kann?",
    options: [
      "a) Analysieren eines Fehlerzustands.",
      "b) Entwerfen von Testdaten.",
      "c) Einem Testobjekt eine Version zuordnen.",
      "d) Schreiben einer User-Story."
    ],
    correct: 1
  },
  {
    question: "Welche der folgenden Aussagen ist ein Beispiel für einen technischen Faktor, der den Testprozess beeinflusst?",
    options: [
      "a) Die Software ist eine Webanwendung, die auf verschiedenen Browsern funktionieren muss.",
      "b) Die Software ist für einen Finanzdienstleister bestimmt, der strenge Sicherheitsanforderungen hat.",
      "c) Die Software wird mit einer agilen Methode entwickelt, die kurze Iterationen und häufige Releases erfordert.",
      "d) Die Software wird von einem Team getestet, das über unterschiedliche Kompetenzen und Erfahrungen verfügt."
    ],
    correct: 0
  },
   {
    question: "Welche der folgenden Aussagen beschreibt am BESTEN die Unterschiede zwischen der Rolle des Testmanagements und der Rolle des Testens?",
    options: [
      "a) Die Rolle des Testmanagements konzentriert sich hauptsächlich auf die Aktivitäten der Testanalyse, des Testentwurfs, der Testrealisierung und der Testdurchführung, während die Rolle des Testens die Gesamtverantwortung für den Testprozess, das Testteam und die Leitung der Testaktivitäten übernimmt.",
      "b) Die Rolle des Testmanagements und die Rolle des Testens sind identisch und können von derselben Person gleichzeitig übernommen werden.",
      "c) Die Rolle des Testmanagements übernimmt die Gesamtverantwortung für den Testprozess, das Testteam und die Leitung der Testaktivitäten, während die Rolle des Testens sich hauptsächlich auf die Aktivitäten der Testanalyse, des Testentwurfs, der Testrealisierung und der Testdurchführung konzentriert.",
      "d) Die Rolle des Testmanagements und die Rolle des Testens haben keine spezifischen Aufgaben und können je nach Kontext variieren."
    ],
    correct:2
  },
  {
    question: "Während der Besprechung einer User-Story in einem agilen Projekt stellen Sie als Tester einen Widerspruch in der Interpretation eines Akzeptanzkriteriums einer User-Story zwischen dem Product Owner und dem Entwicklungsteam fest. Sie bringen diesen Widerspruch zur Sprache. Welche der folgenden Optionen beschreibt einen Vorteil der Unabhängigkeit des Testens, der in dieser Situation deutlich wird?",
    options: [
      "a) Tester können verschiedene Arten von Fehlerwirkungen und -zuständen erkennen.",
      "b) Tester können die Hauptverantwortung für die Qualität übernehmen.",
      "c) Die Entwickler können darauf vertrauen, dass die Tester für die gewünschte Qualität der Arbeitsergebnisse sorgen.",
      "d) Tester können Annahmen der Stakeholder hinterfragen."
    ],
    correct: 3
  },
  {
    question: "Welche der folgenden Optionen beschreibt am BESTEN die Verantwortlichkeiten, die sich aus dem agilen Whole-Team-Ansatz ergeben?",
    options: [
      "a) Tester sind für die Entwicklung von Unittests verantwortlich und übergeben diese an die Entwickler zur Testdurchführung.",
      "b) Fachbereichsvertreter haben die Aufgabe, die Werkzeuge auszuwählen, die das Entwicklungsteam zu verwenden hat.",
      "c) Von den Testern wird erwartet, dass sie gemeinsam mit den Fachbereichsvertretern und dem Entwicklungsteam die Testfälle erstellen.",
      "d) Von den Entwicklern wird erwartet, dass sie nicht-funktionale Anforderungen (Performance, Usability, Sicherheit etc.) testen."
    ],
    correct: 2
  },
  {
    question: "Welche der folgenden Aussagen beschreibt ein bewährtes Verfahren für das Testen in allen Softwareentwicklungslebenszyklus-(SDLC-)Modellen?",
    options: [
      "a) Testaktivitäten für eine Teststufe beginnen bereits während der entsprechenden Entwicklungsphase.",
      "b) Eine Teststufe im Softwareentwicklungslebenszyklus-Modell beginnt, wenn die vorhergehende Teststufe abgeschlossen ist.",
      "c) Das Testen wird als separate Phase betrachtet. Sie beginnt, wenn die Entwicklung abgeschlossen ist.",
      "d) Das Testen wird der Entwicklung als Inkrement hinzugefügt."
    ],
    correct: 0
  },
  {
    question: "Welcher der folgenden beschriebenen Entwicklungsansätze definiert Testen NICHT als Treiber der Softwareentwicklung?",
    options: [
      "a) Zuerst werden Tests erstellt. Dann wird der Code geschrieben.",
      "b) Die Testfälle steuern die Codierung.",
      "c) Das gewünschte Verhalten einer Anwendung wird durch Testfälle definiert.",
      "d) Tests werden aus Akzeptanzkriterien (Abnahmekriterien) abgeleitet und teilweise automatisiert."
    ],
    correct: 3
  },
  
  {
    question: "Welche der folgenden Aussagen beschreibt im Softwareentwicklungslebenszyklus (SDLC) am BESTEN Shift-Left im Testen?",
    options: [
      "a) Testaktivitäten beginnen so früh wie möglich im SDLC und werden parallel zu den Entwicklungsaktivitäten durchgeführt.",
      "b) Testaktivitäten beginnen so spät wie möglich im SDLC und werden nach den Entwicklungsaktivitäten durchgeführt.",
      "c) Testaktivitäten beginnen in der Mitte des SDLC und werden parallel zu den Entwicklungsaktivitäten durchgeführt.",
      "d) Testaktivitäten werden über mehrere Phasen des SDLC verteilt und in jeder Phase entsprechend dem Reifegrad des Produkts durchgeführt."
    ],
    correct: 0
  },
  {
    question: "Sie sind als Tester in einem Projekt eingesetzt, das nach dem iterativ-inkrementellen Entwicklungsmodell vorgeht. Welche der folgenden Aussagen sollten Sie in dieser Situation unbedingt berücksichtigen, um die Testaktivitäten optimal zu integrieren?",
    options: [
      "a) Sie planen den Test als einmalige Aktivität, wenn alle Inkremente des Produkts umgesetzt wurden.",
      "b) Statische Tests sollten ausschließlich auf Komponententestebene stattfinden, um möglichst viele codenahe Fehlerzustände frühzeitig zu finden.",
      "c) Da schnelle Rückmeldung über die Qualität eines Inkrements wichtig ist, sollten die Tester die Regressionstests idealerweise manuell ausführen.",
      "d) Durch die Lieferung neuer Inkremente über verschiedene Iterationen hinweg ist es wichtig, umfangreiche Regressionstests aufzubauen."
    ],
    correct: 3
  },
  {
    question: "Ein Testfall hat folgende Eigenschaften:\n• Er basiert auf Schnittstellenspezifikationen.\n• Der Schwerpunkt liegt auf dem Finden von Fehlerwirkungen in der Interaktion zwischen Komponenten.\n• Es werden sowohl funktionale als auch strukturbasierte Tests angewendet.\nIn welcher der folgenden Teststufen wird dieser Testfall am WAHRSCHEINLICHSTEN ausgeführt?",
    options: [
      "a) Komponentenintegrationstest",
      "b) Abnahmetest",
      "c) Systemtest",
      "d) Komponententest"
    ],
    correct: 0
  },
  {
    question: "Welche der folgenden Optionen ist KEIN Auslöser für Wartung und Wartungstest?",
    options: [
      "a) Außerbetriebnahme",
      "b) Korrigierende Änderungen oder Hotfixes",
      "c) Upgrades oder Migrationen der Betriebsumgebung",
      "d) Implementierung neuer Funktionen"
    ],
    correct: 3
  },
  {
    question: "Welche der folgenden Aussagen zum statischen Test ist am EHESTEN zutreffend?",
    options: [
      "a) Der statische Test ist eine kostengünstige Möglichkeit, Fehlerzustände zu erkennen.",
      "b) Der statische Test macht den dynamischen Test theoretisch überflüssig.",
      "c) Der statische Test ermöglicht, Laufzeitprobleme frühzeitig im Lebenszyklus zu erkennen.",
      "d) Bei der Prüfung sicherheitskritischer Systeme hat der statische Test einen geringen Stellenwert, da der dynamische Test den Fehlerzustand besser findet."
    ],
    correct: 0
  },
   {
    question: "Welche der folgenden Aussagen beschreibt KEINEN Vorteil von frühem und häufigem Stakeholder-Feedback?",
    options: [
      "a) Häufiges Feedback von Stakeholdern hilft, dass Änderungen der Anforderungen früher verstanden und umgesetzt werden.",
      "b) Häufiges Feedback von Stakeholdern hilft dem Entwicklungsteam, besser zu verstehen, was sie entwickeln.",
      "c) Häufiges Feedback von Stakeholdern hilft dem Entwicklungsteam, sich auf die Features zu konzentrieren, die den größten Nutzen bringen.",
      "d) Häufiges Feedback von Stakeholdern kann zu Missverständnissen über Anforderungen führen."
    ],
    correct: 3
  },
  {
    question: "Welche der unten aufgeführten Reviewarten ist am BESTEN geeignet, wenn das Review in Übereinstimmung mit dem vollständigen allgemeinen Reviewprozess und mit dem Ziel, möglichst viele Anomalien zu finden, durchgeführt werden soll?",
    options: [
      "a) Informelles Review",
      "b) Technisches Review",
      "c) Inspektion",
      "d) Walkthrough"
    ],
    correct: 2
  },
  {
    question: "Während einer Phase intensiver Projektüberstunden wird eine umfangreiche Systemarchitekturspezifikation an verschiedene Projektteilnehmer versandt, zusammen mit weiteren Informationen und der Ankündigung eines technischen Reviews in drei Tagen. Das technische Review war ursprünglich nicht eingeplant. Es werden keine weiteren Anpassungen an den zugewiesenen Aufgaben der Projektteilnehmer vorgenommen, die während des technischen Reviews als Gutachter fungieren sollen. Welcher der folgenden Erfolgsfaktoren für Reviews fehlt allein aufgrund dieser Information?",
    options: [
      "a) Geeignete Art des Reviews.",
      "b) Ausreichend Zeit zur Vorbereitung.",
      "c) Die Festlegung klarer Ziele und messbarer Endekriterien.",
      "d) Gut geleitete Reviewsitzung."
    ],
    correct: 1
  },
  {
    question: "Im Vorfeld einer Sitzung zur Iterationsplanung analysieren Sie eine User-Story und deren Akzeptanzkriterien (Abnahmekriterien). Daraus leiten Sie entsprechende Testfälle ab, um das Prinzip des frühen Testens anzuwenden. Welches Testverfahren bzw. welchen Testansatz wenden Sie an?",
    options: [
      "a) White-Box-Testen",
      "b) Black-Box-Testen",
      "c) Erfahrungsbasierter Test",
      "d) Intuitive Testfallermittlung"
    ],
    correct: 1
  },
  {
  question: "",
    options: [
      "a) 1",
      "b) 2",
      "c) 3",
      "d) 4"
    ],
    correct: 1,
      image:"img/setE20.png"

  },
    {
  question: "",
    options: [
      "a) 0°C, 11°C, 20°C, 22°C, 23°C",
      "b) 9°C, 15°C, 19°C, 23°C, 100°C",
      "c) 10°C, 16°C, 19°C, 22°C, 23°C",
      "d) 14°C, 15°C, 18°C, 19°C, 21°C, 22°C"
    ],
    correct: 2,
      image:"img/sete21.png"

  },
  {
  question: "",
    options: [
      "a) Regel 4",
      "b) Regel 1",
      "c) Regel 2",
      "d) Regel 3"
    ],
    correct: 2,
          image:"img/sete22.png"

  },
  {
  question: "",
    options: [
      "a) 4",
      "b) 7",
      "c) 1",
      "d) Unendlich viele Tests"
    ],
    correct: 0,
          image:"img/sete23.png"

  },
  {
    question: "Welche der folgenden Beschreibungen der Anweisungsüberdeckung trifft zu?",
    options: [
      "a) Die Anweisungsüberdeckung ist ein Maß für die Anzahl der Quellcodezeilen (ohne Kommentare), die während des Tests ausgeführt wurden.",
      "b) Die Anweisungsüberdeckung ist ein Maß für den prozentualen Anteil der Anweisungen im Quellcode, die im Test ausgeführt wurden.",
      "c) Die Anweisungsüberdeckung ist ein Maß für den prozentualen Anteil der Quellcodezeilen (ohne Kommentare), die im Test ausgeführt wurden.",
      "d) Die Anweisungsüberdeckung ist ein Maß für die Anzahl der Anweisungen im Quellcode, die während des Tests ausgeführt wurden."
    ],
    correct: 1
  },
  {
    question: "Welche der folgenden Aussagen stellt einen Mehrwert von White-Box-Tests dar?",
    options: [
      "a) White-Box-Tests können Messgrößen für die Überdeckung von z. B. Anweisungen liefern.",
      "b) White-Box-Tests können überprüfen, ob der Code die Akzeptanzkriterien (Abnahmekriterien) erfüllt.",
      "c) White-Box-Tests können die Kompatibilität mit anderen Systemen testen.",
      "d) White-Box-Tests können alle Fehlerzustände im Code aufdecken."
    ],
    correct: 0
  },
  
  {
    question: "Sie testen eine mobile App, mit der Kunden auf ihre Bankkonten zugreifen und diese verwalten können. Sie führen eine Testsuite aus, die die Bewertung jedes Bildschirms und jedes Feldes auf jedem Bildschirm anhand einer Sammlung von Heuristiken für Benutzerschnittstellen umfasst. Sie wurde aus einem populären Buch zu diesem Thema abgeleitet und soll die Attraktivität, Gebrauchstauglichkeit (Interaktionsfähigkeit) und Zugänglichkeit für solche Apps maximieren. Welche der folgenden Testverfahren kategorisiert das von Ihnen verwendete Testverfahren am BESTEN?",
    options: [
      "a) Entscheidungstabellentest",
      "b) Explorativer Test",
      "c) Checklistenbasiertes Testen",
      "d) Intuitive Testfallermittlung"
    ],
    correct: 2
  },
  {
    question: "Für welche der folgenden Situationen ist der Einsatz von explorativen Tests am EHESTEN sinnvoll?",
    options: [
      "a) Wenn unter Zeitdruck die Durchführung bereits spezifizierter Tests beschleunigt werden muss.",
      "b) Wenn das System inkrementell entwickelt wird und keine Test-Charta vorhanden ist.",
      "c) Wenn Tester mit ausreichenden Kenntnissen über ähnliche Anwendungen und Technologien zur Verfügung stehen.",
      "d) Wenn eine umfangreiche Spezifikation des Systems zur Verfügung steht, die für die Testanalyse und den Testentwurf verwendet werden kann."
    ],
    correct: 2
  },
  {
    question: "Ein agiles Entwicklungsteam hat folgende User-Story formuliert: „Als Anwender möchte ich, dass der Alarmton der elektronischen Eieruhr in der Lautstärke variabel einstellbar ist, so dass ich ihn immer hören kann.“ Welches der folgenden Abnahmekriterien (Akzeptanzkriterien) ist aus der Sicht des Testens am BESTEN geeignet, um eindeutige Abnahmetests zu entwerfen?",
    options: [
      "a) Die Lautstärke ist für jede Person einfach einzustellen, d. h., die Einstelltasten müssen eine nutzbare Größe haben.",
      "b) Der Tester kann den Alarmton auch auf der tiefsten Stufe gut hören.",
      "c) Die Lautstärke kann in einem Bereich von 40 bis 80 Dezibel eingestellt werden.",
      "d) Die Lautstärkeeinstellung funktioniert in den meistverkauften Modellen dieser Eieruhr korrekt."
    ],
    correct: 2
  },
  {
    question: "Bitte betrachten Sie die folgende User-Story: \"Als Systemadministrator möchte ich die Performanz des Servers überwachen können, um über einen Performanztest sicherzustellen, dass das System effizient läuft.\" Welcher Testfall eignet sich am BESTEN für eine abnahmetestgetriebene Entwicklung der User-Story?",
    options: [
      "a) 1. Login als Systemadministrator; wähle den Server aus; überprüfe die Serverleistung. GEGEBEN: Ich bin als Systemadministrator angemeldet UND GEGEBEN: Ich habe den Server ausgewählt, WENN ich „Serverleistung überprüfen“ auswähle, DANN wird mir eine Übersicht über die Performanz des Servers angezeigt.",
      "b) 2. Login als Benutzer; führe eine Aufgabe aus; überprüfe die Serverleistung. GEGEBEN: Ich bin als Benutzer angemeldet UND GEGEBEN: Ich habe eine Aufgabe ausgeführt, WENN ich „Serverleistung überprüfen“ auswähle, DANN wird mir eine Übersicht über die Performanz des Servers angezeigt.",
      "c) 3. Login als Systemadministrator; wähle den Server aus; führe einen Performanztest durch. GEGEBEN: Ich bin als Systemadministrator angemeldet UND GEGEBEN: Ich habe den Server ausgewählt, WENN ich „Performanztest durchführen“ auswähle, DANN wird ein Performanztest durchgeführt und ich erhalte eine Übersicht über die Ergebnisse.",
      "d) 4. Login als Systemadministrator; führe einen Performanztest durch; überprüfe die Serverleistung. GEGEBEN: Ich bin als Systemadministrator angemeldet UND GEGEBEN: Ich habe einen Performanztest durchgeführt, WENN ich „Serverleistung überprüfen“ auswähle, DANN wird mir eine Übersicht über die Performanz des Servers angezeigt."
    ],
    correct: 2
  },
  {
    question: "Welche der folgenden Aktivitäten führen Tester während der Releaseplanung im agilen Projekt durch?",
    options: [
      "a) Tester identifizieren und verfeinern funktionale und nicht-funktionale Aspekte des Testobjekts.",
      "b) Tester unterstützen die Ableitung von Aufgaben (Tasks) aus den User-Storys.",
      "c) Tester nehmen an der detaillierten Risikoanalyse der User-Storys teil.",
      "d) Tester unterstützen bei der Erstellung von User-Storys, bei deren Testbarkeit und bei den Akzeptanzkriterien (Abnahmekriterien)"
    ],
    correct: 3
  },

    {
  question: "",
    options: [
      "a) Eingangskriterien: 5, 6; Endekriterien: 1, 2, 3, 4",
      "b) Eingangskriterien: 2, 3, 4; Endekriterien: 1, 5, 6",
      "c) Eingangskriterien: 1, 3; Endekriterien: 2, 4, 5, 6",
      "d) Eingangskriterien: 3, 5, 6; Endekriterien: 1, 2, 4"
    ],
    correct: 3,
      image:"img/setE31.png"
  },
  {
    question: "Sie möchten den Testaufwand für ein neues Projekt mit Hilfe einer Drei-Punkt-Schätzung abschätzen. Sie haben die folgenden Schätzungen von den Experten erhalten: Die optimistischste Schätzung (a) ist 300 Personentage, die wahrscheinlichste Schätzung (m) ist 400 Personentage und die pessimistischste Schätzung (b) ist 500 Personentage. Wie hoch schätzen Sie den Testaufwand auf Basis der Drei-Punkt-Schätzung für dieses Projekt ein?",
    options: [
      "a) 350 Personentage",
      "b) 420 Personentage",
      "c) 400 ± 33 Personentage",
      "d) 450 Personentage"
    ],
    correct: 2
  },
  {
  question: "",
    options: [
      "a) T7 -> T8 -> T10 -> T11 -> T9 -> T12",
      "b) T7 -> T8 -> T9 -> T10 -> T11 -> T12",
      "c) T7 -> T8 -> T10 -> T9 -> T11 -> T12",
      "d) T7 -> T8 -> T9 -> T11 -> T10 -> T12"
    ],
    correct: 3,
      image:"img/sete33.png"
  },
  {
    question: "Welche der folgenden Aussagen veranschaulicht den Nutzen der Testquadranten?",
    options: [
      "a) Der Tester kann sich bei der Auswahl der Testarten auf den entsprechenden Quadranten beziehen, so dass alle beteiligten Stakeholder den Zweck der Tests besser verstehen.",
      "b) Der Tester kann die Testarten, die durch Testquadranten beschrieben werden, als Überdeckungsmetrik verwenden; je mehr Tests von jedem Quadranten ausgeführt werden, desto höher ist die Überdeckung.",
      "c) Das Team sollte für jeden Quadranten die ungefähr gleiche Anzahl von Testfällen einplanen, um sicherzustellen, dass alle Teststufen und Testarten gleichwertig berücksichtigt werden.",
      "d) Der Tester kann die Testquadranten zur Risikoanalyse einsetzen, wobei niedrigere Stufen der Quadranten ein geringeres Risiko für den Kunden repräsentieren."
    ],
    correct: 0
  },
  {
    question: "Welche der folgenden Aussagen über die Steuerung von Produktrisiken im Rahmen der Risikominderung trifft NICHT zu?",
    options: [
      "a) Die Komplexität des Datenbankmoduls wurde als hoch eingestuft, daher wurden zusätzliche Testfälle für das Modul erstellt.",
      "b) Die Anforderungen an das Benutzerinterface sind unklar, daher wird ein Experte für Benutzererfahrung in das Projekt einbezogen.",
      "c) Die Performanz des Systems ist entscheidend für den Erfolg des Projekts, daher wird auf Code-Reviews verzichtet, um Zeit zu sparen.",
      "d) Das System muss eine hohe Verfügbarkeit aufweisen, daher werden zusätzliche Lasttests durchgeführt."
    ],
    correct: 2
  },
    {
    question: "In einem regulatorischen Projekt, das bereits in Verzug ist, haben die relevanten Stakeholder darum gebeten, täglich über den Teststatus informiert zu werden. Welche ist die EFFEKTIVERE Möglichkeit, den Teststatus zu kommunizieren, wenn die Stakeholder sich aufgrund räumlicher und zeitlicher Gegebenheiten nicht direkt abstimmen können?",
    options: [
      "a) Es sollten formelle Kommunikationsmittel (z.B. formale Berichte, E-Mails) verwendet werden, um sicherzustellen, dass wichtige Informationen die Empfänger erreichen.",
      "b) Die Kommunikation sollte über eine Chatgruppe erfolgen, damit alle Teammitglieder möglichst zeitnah über den Teststatus informiert werden können.",
      "c) Die relevanten Stakeholder sollten mündlich über den Teststatus informiert werden, um die wichtigsten Informationen direkt zu übermitteln.",
      "d) Der Teststatus sollte in täglichen Abstimmungsrunden per Videokonferenz kommuniziert werden, an denen Stakeholder aus allen beteiligten Zeitzonen teilnehmen sollten."
    ],
    correct: 0
  },
  {
    question: "Welche der folgenden Aussagen beschreibt, wie das Konfigurationsmanagement die Testaktivitäten unterstützen kann?",
    options: [
      "a) Eine Testerin hinterlegt den Fortschritt, den sie bei der Testdurchführung am aktuellen Tag gemacht hat, in einem Testmanagementwerkzeug.",
      "b) Ein Tester speichert Testdaten für die datengetriebene Testausführung in einer Datenbank und stellt sicher, dass die Daten zur Testausführungszeit aus der Datenbank gelesen werden können.",
      "c) Ein Tester verwendet ein Tabellenkalkulationsprogramm, um die Geschäftsregeln eines zu testenden Systems in Form von Entscheidungstabellen zu formalisieren.",
      "d) Ein Tester oder eine Testerin stellt automatisiert die relevanten Testmittel für eine ältere Version eines Produkts wieder her, um den Wartungstest für diese ältere Version durchführen zu können."
    ],
    correct: 3
  },
  {
  question: "",
    options: [
      "a) Tatsächliches Testergebnis.",
      "b) Identifikation der getesteten Softwareversion.",
      "c) Ideen zur Verbesserung des Testfalls.",
      "d) Qualität des Arbeitsergebnisses, das getestet wurde."
    ],
    correct: 1,
      image:"img/sete 38.png"
  },
  {
  question: "",
    options: [
      "a) 1 – D, 2 – C, 3 – B, 4 – A",
      "b) 1 – B, 2 – A, 3 – C, 4 – D",
      "c) 1 – B, 2 – A, 3 – D, 4 – C",
      "d) 1 – A, 2 – B, 3 – D, 4 – C"
    ],
    correct:2,
      image:"img/sete39.png"

  },
  {
    question: "Welche der folgenden Aussagen beschreibt am BESTEN den potenziellen Nutzen des Einsatzes von Werkzeugen für die automatisierte Testdurchführung?",
    options: [
      "a) Die Implementierung von Regressionstests ist einfacher, da diese direkt mit einem Testskript implementiert werden können.",
      "b) Es findet eine effizientere Bewertung des Testobjekts durch das Automatisierungswerkzeug statt.",
      "c) Ein Testwerkzeug wird verwendet, wenn manuelles Testen besser geeignet ist.",
      "d) Regressionstests können schneller durchgeführt werden und ermöglichen somit eine schnellere Rückmeldung an das Team."
    ],
    correct: 3
  },









// F
// ########################   
// ##                       
// ##                       
// ##                       
// ########################   
// ##                       
// ##                       
// ##                       
// ##       








  {
    question: "Welche der folgenden Optionen beschreibt KEIN typisches Testziel?",
    options: [
      "a) Fehlerwirkungen auslösen und Fehlerzustände aufdecken",
      "b) Vertrauen in das Qualitätsniveau des Testobjekts schaffen",
      "c) Verringerung des Risikos einer unzureichenden Testumgebung",
      "d) Erfüllung vertraglicher, gesetzlicher oder regulatorischer Anforderungen"
    ],
    correct: 2
  },
  {
    question: "Ein im Büro klingelndes Telefon lenkt einen Softwareentwickler ab, was dazu führt, dass er die Logik zur Prüfung der Einhaltung der Obergrenze einer Eingabevariablen falsch programmiert. Später, während des Systemtests, stellt ein Tester fest, dass dieses Eingabefeld ungültige Eingabewerte akzeptiert. Welcher der folgenden Begriffe beschreibt die fehlerhaft programmierte Logik zur Prüfung der Einhaltung der Obergrenze als Fehler im Code in diesem Szenario zutreffend?",
    options: [
      "a) Grundursache",
      "b) Fehlerwirkung",
      "c) Fehlhandlung",
      "d) Fehlerzustand"
    ],
    correct: 3
  },
  {
    question: "Welche der folgenden Aktivitäten findet während der Aktivität „Testanalyse“ des Testprozesses statt?",
    options: [
      "a) Identifikation der erforderlichen Infrastruktur und Werkzeuge",
      "b) Erstellen von Testsuiten basierend auf den Testskripten",
      "c) Analyse der „Lessons Learned“ zur Prozessverbesserung",
      "d) Bewerten der Testbasis hinsichtlich Testbarkeit"
    ],
    correct: 3
  },
  {
    question: "Generell gilt, dass nach dem Pareto-Prinzip überdurchschnittlich viele Fehlerzustände oft in wenigen Bereichen eines Systems gefunden werden. Die entsprechenden Ausfälle führen häufig dazu, dass das System unbrauchbar wird. Welcher der folgenden Grundsätze des Testens ist hier beschrieben?",
    options: [
      "a) Testen ist kontextabhängig",
      "b) Fehlerzustände treten gehäuft auf",
      "c) Tests nutzen sich ab",
      "d) Trugschluss: „Keine Fehler“ bedeutet ein brauchbares System"
    ],
    correct: 1
  },
  {
    question: "Welche der folgenden allgemeinen Kompetenzen ist für die Weitergabe von entdeckten Fehlerwirkungen an die betroffenen Entwickler BESONDERS WICHTIG?",
    options: [
      "a) Testwissen",
      "b) Kritisches Denken",
      "c) Sorgfalt",
      "d) Kommunikationsfähigkeit"
    ],
    correct: 3
  },
    {
  question: "",
    options: [
      "a) 1A, 2C, 3B, 4D",
      "b) 1D, 2B, 3A, 4C",
      "c) 1A, 2C, 3D, 4B",
      "d) 1D, 2C, 3B, 4A"
    ],
    correct: 0,
      image:"img/setF6.png"

  },
  {
    question: "Welche der folgenden Aussagen beschreibt AM BESTEN, wie Verfolgbarkeit zwischen der Testbasis, den Testmitteln, den Testergebnissen und den Fehlerzuständen das Testen unterstützt?",
    options: [
      "a) Die Durchführung einer Auswirkungsanalyse liefert Informationen über die Qualität des Systems unter Test.",
      "b) Die Analyse der Verfolgbarkeit zwischen Testfällen und Testergebnissen liefert Informationen über die Vollständigkeit von Testfällen.",
      "c) Die Analyse der Verfolgbarkeit hilft bei der Durchführung einer Auswirkungsanalyse von Änderungen und bei der Auswahl geeigneter Testfälle für Regressionstests.",
      "d) Die Analyse der Verfolgbarkeit zwischen den Anforderungen und den Testfällen hilft bei der Analyse des Restrisikos."
    ],
    correct: 2
  },
  {
    question: "Welche der folgenden Aussagen stellt einen Vorteil des Whole-Team-Ansatzes dar?",
    options: [
      "a) Jedes Teammitglied darf eine beliebige Aufgabe übernehmen.",
      "b) Jedes Teammitglied ist für die Qualität verantwortlich.",
      "c) Jedes Teammitglied arbeitet separat an seiner eigenen Aufgabe.",
      "d) Jedes Teammitglied hat eine festgelegte Rolle und Verantwortung."
    ],
    correct: 1
  },
  {
    question: "Sie arbeiten als Tester in einem Team, das mit einem sequenziellen Softwareentwicklungszyklus (SDLC) arbeitet. Wie wirkt sich die Wahl dieses SDLC-Modells auf die zeitliche Planung der Tests aus?",
    options: [
      "a) Dynamische Tests (Unit-Tests) können nicht in frühen Phasen dieses SDLC durchgeführt werden.",
      "b) Statische Tests können nicht in frühen Phasen in diesem SDLC durchgeführt werden.",
      "c) Die Testplanung kann nicht in frühen Phasen in diesem SDLC durchgeführt werden.",
      "d) Abnahmetests können in frühen Phasen in diesem SDLC durchgeführt werden."
    ],
    correct: 0
  },
  {
    question: "Welche der folgenden Aussagen ist eine gute Testpraktik, die für alle Softwareentwicklungslebenszyklen (SDLC) gilt?",
    options: [
      "a) Tester müssen Entwickler besonders bei den Softwareentwicklungsaktivitäten begleiten, für die es keine zugehörigen Testaktivitäten gibt.",
      "b) Tester sollten dabei unterstützen, unterschiedliche Testziele für jede Teststufe zu definieren, und eigene Testumfänge und Testtiefen für jede Teststufe festzulegen.",
      "c) Tester sollten erst mit der Testanalyse und dem Testentwurf beginnen, wenn die Anforderungen und Spezifikationen vollständig implementiert wurden.",
      "d) Tester sollten keine Reviews von Arbeitsergebnissen durchführen, um sich auf die Testdurchführung konzentrieren zu können."
    ],
    correct:1
  },
    {
    question: "Welcher der folgenden Test-First-Ansätze verwendet üblicherweise das Gegeben/Wenn/Dann-Format, um die gewünschte Reaktion einer Anwendung auszudrücken?",
    options: [
      "a) Testgetriebene Anwendung (TDD)",
      "b) Abnahmetestgetriebene Entwicklung (ATDD)",
      "c) Verhaltensgetriebene Entwicklung (BDD)",
      "d) Kontinuierliche Integration / kontinuierliche Auslieferung (CI/CD)"
    ],
    correct: 2
  },
  {
    question: "Was sind die Vorteile von DevOps?",
    options: [
      "a) Schnellere Produktfreigabe und kürzere Produkteinführungszeit",
      "b) Schnelle Rückmeldung durch ausschließliche Fokussierung auf funktionale Tests",
      "c) Durch Shift-Left kann die Anzahl der Regressionstests minimiert werden.",
      "d) Kostengünstige Implementierung des Testautomatisierungs-Frameworks"
    ],
    correct: 0
  },
  {
    question: "Sie arbeiten als Tester in einem Projekt an einer mobilen Anwendung für Essensbestellungen. Eine Kundenanforderung mit hoher Priorität lautet: 'In 95 % der Fälle muss die Bestellung in weniger als 10 Sekunden bearbeitet werden.' Welche Art von Test haben Sie durchgeführt?",
    options: [
      "a) Funktional, da die Testfälle die geschäftlichen Anforderungen des Kunden an das System abdecken.",
      "b) Nicht-funktional, da die Testfälle die Performanz des Systems messen.",
      "c) Explorativ, da die genaue Bearbeitungszeit nicht definiert wurde.",
      "d) Strukturell, da die interne Struktur des Programms zur Messung der Bearbeitungszeit bekannt sein muss."
    ],
    correct: 1
  },
  {
    question: "Welche der folgenden Aussagen über Fehlernachtests und Regressionstests ist korrekt?",
    options: [
      "a) Die Anzahl der Regressionstests nimmt mit dem Projektfortschritt zu, wohingegen die Anzahl der Fehlernachtests mit dem Projektfortschritt abnimmt.",
      "b) Regressionstests werden erstellt und durchgeführt, wenn das Testobjekt korrigiert wird, während Fehlernachtests immer dann durchgeführt werden, wenn das Testobjekt erweitert wird.",
      "c) Regressionstests werden durchgeführt, um zu prüfen, ob die Betriebsumgebung unverändert ist, während Fehlernachtests darauf abzielen, Änderungen am Testobjekt zu testen.",
      "d) Regressionstests befassen sich mit möglichen negativen Auswirkungen von Änderungen auf unveränderte Bereiche, während Fehlernachtests sich mit den positiven Auswirkungen korrigierender Änderungen befassen."
    ],
    correct: 3
  },
  {
    question: "Welche der folgenden Arbeitsprodukte können NICHT im Rahmen eines Projektes mit einem statischen Test geprüft werden?",
    options: [
      "a) Testfälle und ausführbare Testskripte",
      "b) Anforderungsspezifikation und Akzeptanzkriterien",
      "c) Rechtlich geschützter ausführbarer Code von Drittanbietern",
      "d) Projektdokumentation und Modelle"
    ],
    correct: 2
  },
  {
    question: "Welche der folgenden Aussagen trifft auf die Unterschiede zwischen statischem und dynamischem Test zu?",
    options: [
      "a) Beim statischen Test werden Fehlerwirkungen gefunden.",
      "b) Beim statischen Test wird unzureichende Softwareperformanz gemessen.",
      "c) Das ausschließliche Ziel beim statischen Test ist es, Fehlerzustände so früh wie möglich zu erkennen.",
      "d) Eine unzureichende Überdeckung von IT-Sicherheitsanforderungen kann durch den statischen Test leichter aufgedeckt werden."
    ],
    correct: 3
  },
  {
    question: "Welche der folgenden Aussagen über formale Reviews (z. B. Inspektionen) ist zutreffend?",
    options: [
      "a) Das technische Review wird vom Autor geleitet.",
      "b) Der Reviewprozess besteht aus mehreren Aktivitäten, wie z. B. Planung, Kommunikation und Analyse, Behebung und Berichterstattung.",
      "c) Die zu prüfenden Arbeitsergebnisse werden während der Reviewsitzung verteilt.",
      "d) Fehlerzustände, die bei einem Review gefunden werden, werden nicht gemeldet, da sie bei dynamischen Tests sowieso gefunden werden."
    ],
    correct: 1
  },
  {
    question: "Welche Aufgaben kann das Management bei einem formalen Review (z. B. Inspektion) übernehmen?",
    options: [
      "a) Gegebenenfalls Überarbeitung des Review-Objekts nach dem Review",
      "b) Entscheiden, was überprüft werden soll",
      "c) Sicherstellung der effektiven Durchführung von Reviewsitzungen und ggf. Mediation",
      "d) Aufzeichnung von Review-Informationen wie z. B. Review-Entscheidungen"
    ],
    correct: 1
  },
  {
    question: "Welche der folgenden Aussagen beschreibt einen Vorteil von Black-Box-Testverfahren gegenüber White-Box-Testverfahren?",
    options: [
      "a) Black-Box-Testverfahren können die interne Struktur und Verarbeitung des Testobjekts überprüfen.",
      "b) Black-Box-Testverfahren können unabhängig von der Implementierung der Software durchgeführt werden.",
      "c) Black-Box-Testverfahren nutzen das Wissen und die Erfahrung der Tester besser aus.",
      "d) Black-Box-Testverfahren können ohne Anpassung durchgeführt werden, obwohl das geforderte Verhalten des Testobjekts geändert wurde."
    ],
    correct: 1
  },
  {
  question: "",
    options: [
      "a) 0, 1000, 2000, 3000, 4000",
      "b) 1000, 2001, 4000, 4001, 6000",
      "c) 123, 2345, 3456, 4567, 5678",
      "d) 666, 999, 2222, 5555, 6666"
    ],
    correct: 3,
      image:"img/setf20.png"
  },
    {
  question: "",
    options: [
      "a) 60 %",
      "b) 75 %",
      "c) 33,3 %",
      "d) 100 %"
    ],
    correct: 0,
  image:"img/setF21.png"

  },
  {
  question: "",
    options: [
      "a) R4",
      "b) R2",
      "c) R6",
      "d) R8"
    ],
    correct: 3,
      image:"img/setF22.png"

  },
  {
  question: "",
    options: [
      "a) 2",
      "b) 3",
      "c) 4",
      "d) 7"
    ],
    correct: 1,
      image:"img/setF23.png"

  },
  {
    question: "Ihre Testsuite erreicht eine Anweisungsüberdeckung von 100 %. Was bedeutet das?",
    options: [
      "a) Eine beliebig ausgewählte Anweisung im Code wurde mindestens einmal ausgeführt.",
      "b) Jede Testsuite, die mehr Testfälle als Ihre Testsuite enthält, erreicht ebenfalls eine Anweisungsüberdeckung von 100 %.",
      "c) Jeder Zweig des Codes wurde mindestens einmal ausgeführt.",
      "d) Jede Kombination von Eingabewerten im Code wurde getestet."
    ],
    correct: 0
  },
  {
    question: "Welche der folgenden Aussagen über Zweigtests ist zutreffend?",
    options: [
      "a) Wenn ein Programm nur bedingungslose Kontrollübergänge enthält, kann eine 100 %ige Zweigüberdeckung erreicht werden, ohne einen einzigen Testfall ausführen zu müssen.",
      "b) Wenn ein Zweig mit einem Testfall ausgeführt wird, werden alle Fehlerzustände darin aufgedeckt.",
      "c) Wenn eine 100 %ige Anweisungsüberdeckung erreicht wird, dann wird auch eine 100 %ige Zweigüberdeckung erreicht.",
      "d) Wenn eine 100 %ige Zweigüberdeckung erreicht wird, dann werden alle Entscheidungsergebnisse eines jeden bedingten Kontrollübergangs des Codes ausgeführt."
    ],
    correct: 3
  },
    {
    question: "Was ist der Zweck einer Test-Charta beim sitzungsbasierten explorativen Testen?",
    options: [
      "a) Die Test-Charta legt die Testziele für die Testsitzung fest.",
      "b) Die Test-Charta dokumentiert die durchgeführten Schritte und die gewonnenen Erkenntnisse.",
      "c) Die Test-Charta ist häufig in Form von Fragen formuliert.",
      "d) Die Test-Charta bewertet die Testergebnisse nach der Testsitzung."
    ],
    correct: 0
  },
  {
    question: "Welche der folgenden Aussagen ist AM EHESTEN ein Vorteil des Testens anhand von Checklisten?",
    options: [
      "a) Es ermöglicht eine hohe Wiederholbarkeit der Tests.",
      "b) Es bietet einen strukturierten Ansatz für das Testen, ohne dass detaillierte Testfälle erforderlich sind.",
      "c) Es deckt alle Anforderungen an das Testobjekt ab.",
      "d) Es unterstützt funktionale und nicht-funktionale Tests."
    ],
    correct: 3
  },
  {
    question: "Welche der folgenden Aussagen beschreibt NICHT den kollaborativen Ansatz beim Schreiben von User-Storys?",
    options: [
      "a) User-Storys beinhalten die Aspekte Fachlichkeit, Entwicklung und Testen.",
      "b) User-Storys werden von Fachbereichsvertretern, Entwicklern und Testern gemeinsam erstellt.",
      "c) Akzeptanzkriterien (Abnahmekriterien) für User-Storys sind speziell von Testern zu erstellen, um die Unabhängigkeit des Tests zu gewährleisten.",
      "d) User-Storys werden in einem Sprint bzw. in einer Iteration so erstellt, dass sie unabhängig, verhandelbar, nützlich, abschätzbar, klein und testbar sind."
    ],
    correct:2
  },
  {
question: "",
    options: [
      "a) Überprüfen Sie, ob ein regulärer Benutzer Zugang zu den Etagen 1 und 3 hat.",
      "b) Stellen Sie sicher, dass ein regulärer Benutzer keinen Zugang zur Etage 4 hat.",
      "c) Überprüfen Sie, ob ein spezieller Benutzer Zugang zur Etage 5 hat.",
      "d) Überprüfen Sie, ob ein spezieller Benutzer Zugang zu den Etagen 1, 2 und 3 hat."
    ],
    correct: 3,
      image:"img/setF29.png"

  },
  {
    question: "Betrachten Sie die folgende Festlegung eines Testkonzepts: Die korrekte Funktionsweise von Komponenten wird mit Hilfe von Komponententests und Komponentenintegrationstests überprüft. Es muss der Nachweis erbracht werden, dass für jede als kritisch eingestufte Komponente eine 100 %ige Zweigüberdeckung erreicht wird. Zu welchem Teil des Testkonzepts gehört diese Festlegung? ",
    options: [
      "a) Testumgebung",
      "b) Risikoverzeichnis",
      "c) Kontext des Testens",
      "d) Testansatz"
    ],
    correct: 3
  },
  {
question: "",
    options: [
      "a) Da die Schätzungen der Kunden und der Entwickler übereinstimmen, kann das Team davon ausgehen, dass sie gut sind. Der Planungspoker für diese User-Story wird beendet.",
      "b) Das Team diskutiert gemeinsam, warum kein Konsens über die Schätzungen erreicht wurde. Eine weitere Runde Planungspoker folgt.",
      "c) Da der Kunde am Ende das System erhält, ist bei solchen Konflikten seine Schätzung entscheidend. Der Planungspoker wird beendet.",
      "d) Der Planungspoker wird so lange fortgesetzt, bis alle Schätzungen der beteiligten Vertreter den exakt gleichen Wert haben."
    ],
    correct: 1,
      image:"img/setF31.png"

  },
  {
    question: "Welche der folgenden Aussagen über die Testpyramide trifft zu?",
    options: [
      "a) Die Testpyramide legt den Schwerpunkt auf eine kleine Anzahl von Tests auf den unteren Teststufen.",
      "b) Je mehr man sich der Spitze der Pyramide nähert, desto weniger granular sollte das Testen sein.",
      "c) Die Testpyramide hat genau 3 Testschichten und umfasst immer Unit-Tests, Integrationstests und End-to-End-Tests.",
      "d) High-Level-End-to-End-Tests sind anwendernah und daher in der Regel schneller als Tests auf den unteren Schichten."
    ],
    correct: 1
  },
  {
question: "",
    options: [
      "a) TF1 – TF3 – TF4 – TF6 – TF2 – TF5",
      "b) TF4 – TF3 – TF1 – TF2 – TF5 – TF6",
      "c) TF4 – TF1 – TF3 – TF5 – TF6 – TF2",
      "d) TF4 – TF2 – TF5 – TF1 – TF3 – TF6"
    ],
    correct:1,
      image:"img/setF33.png"

  },
  {
    question: "Welche der folgenden Testarten gehört zum Quadranten Q2 – „geschäftsorientiert, Unterstützung des Teams“ – im Testquadranten-Modell?",
    options: [
      "a) Komponentenintegrationstests",
      "b) User-Story-basierte Tests",
      "c) Nicht-funktionale Tests",
      "d) Explorative Tests"
    ],
    correct: 1
  },
  {
    question: "Welche der folgenden Aussagen stellt ein Projektrisiko dar?",
    options: [
      "a) Das Management versetzt zwei erfahrene Tester in ein anderes Projekt.",
      "b) Das System entspricht nicht den Standards der funktionalen Sicherheit.",
      "c) Die Reaktionszeit des Systems übersteigt die Anforderungen der Benutzer.",
      "d) Das System kann nicht barrierefrei genutzt werden."
    ],
    correct: 0
  },
    {
question: "",
    options: [
      "a) Die Aktivität von Entwicklern, die in Schritt 2 möglicherweise nicht ausreichend getestet wurde.",
      "b) Die Aktivität von Testern, die möglicherweise unklar darüber sind, was in Schritt 5 zu testen ist.",
      "c) Das Konfigurationsmanagement, das möglicherweise die Integrität des Produkts in Schritt 4 nicht aufrechterhält.",
      "d) Die Aktivität von Entwicklern, die die Fehler in Schritt 1 möglicherweise nicht korrekt beheben."
    ],
    correct: 2,
      image:"img/setf36.png"

  },
  {
    question: "Welche der folgenden Aussagen aus einem wöchentlichen Testfortschrittsbericht ist für die Stakeholder im Rahmen der Testüberwachung und Teststeuerung NICHT relevant?",
    options: [
      "a) Die Ausfallzeit der Testumgebung im Berichtszeitraum hat sich um 20 % auf 25 Stunden erhöht.",
      "b) Die Zeit für die Bereitstellung der Statistiken zu den Überdeckungsmetriken konnte im Berichtszeitraum um 35 % auf 72 Minuten reduziert werden.",
      "c) Die Durchführung der Testfälle liegt aktuell 6 Tage hinter dem Plan, da viele Fehlerwirkungen gefunden werden und es Probleme mit der Testumgebung gibt.",
      "d) Aus den Ergebnissen der Testdurchführung wurden neue Produktrisiken abgeleitet, die noch zu bewerten sind."
    ],
    correct: 1
  },
  {
question: "",
    options: [
      "a) Der Titel beschreibt den Inhalt nicht korrekt.",
      "b) Schweregrad und Priorität müssten gleich sein, da Ersteres Letzteres bedingt.",
      "c) Sie haben diesen Fehler noch nicht beobachtet. Daher ist der Status nicht „neu“. ",
      "d) Der folgende Eintrag fehlt: Datum des Fehlerberichts: 19.12.2023"
    ],
    correct: 3,
      image:"img/setF38.png"

  },
  {
    question: "Welches der folgenden Testwerkzeuge ist am nützlichsten für die Berichterstattung über die Anzahl der Fehlerzustände im Testobjekt?",
    options: [
      "a) Testmanagementwerkzeug",
      "b) Werkzeug für den statischen Test",
      "c) Werkzeug für die Testüberdeckung",
      "d) Werkzeug zur Unterstützung der Skalierbarkeit"
    ],
    correct: 0
  },
  {
    question: "Welche der folgenden Aussagen stellt einen potenziellen Nutzen der Testautomatisierung dar?",
    options: [
      "a) Testautomatisierung ermöglicht eine objektivere Bereitstellung von Messungen, die für Menschen zu kompliziert in ihrer Ermittlung sind.",
      "b) Für Testautomatisierung kann man sehr genau den Aufwand für die Einführung, Wartung und Schulung abschätzen.",
      "c) Testautomatisierung erhöht das Vertrauen in die Testergebnisse, denn es vermeidet menschliches kritisches Denken.",
      "d) Testautomatisierung entspricht immer den regulatorischen Anforderungen und Sicherheitsstandards."
    ],
    correct: 0
  }
];

// Montag 15.09 
// 27 -1 
// 18 - 1 
//11-1
//MIttwoch
//25-1
//18-1
// 22-1
//15-1
//17-1
