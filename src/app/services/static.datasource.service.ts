import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Book } from './book';

// TODO: Replace this with actually loading from database
@Injectable()
export class StaticDataSource {
  private books: Book[] = [{
    "id": 0, "name": "Empuzjon", "author": "Olga Tokarczuk ", "price": 54.9, "description": "\nTyp ok\u0142adki: twarda ok\u0142adka\nWydawca: Wydawnictwo Literackie", "category": "literatura pi\u0119kna", "discount": 0.32, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/9/4/9499906857794.jpg"]
  }, {
    "id": 1, "name": "Opowie\u015bci o tym, co w \u017cyciu wa\u017cne", "author": "Marek Michalak ", "price": 34.9, "description": "\nTyp ok\u0142adki: twarda ok\u0142adka\nWydawca: IBIS", "category": "dla dzieci", "discount": 0.17, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/8/6/8699906846186.jpg"]
  }, {
    "id": 2, "name": "Wowa, Wo\u0142odia, W\u0142adimir. Tajemnice Rosji Putina", "author": "Krystyna Kurczab-Redlich ", "price": 64.99, "description": "Ksi\u0105\u017cki / biografie / postacie historyczne, politycy\n\nTyp ok\u0142adki: twarda ok\u0142adka", "category": "literatura faktu", "discount": 0.2, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/1/1/1199906836911.jpg"]
  }, {
    "id": 3, "name": "Skazanie. Seria z Joann\u0105 Chy\u0142k\u0105. Tom 15", "author": "Remigiusz Mr\u00f3z ", "price": 42.9, "description": "Ksi\u0105\u017cki / krymina\u0142 i sensacja / krymina\u0142\n\nTyp ok\u0142adki: mi\u0119kka ok\u0142adka", "category": "polscy autorzy  ", "discount": 0.41, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/6/7/6799906843267.jpg"]
  }, {
    "id": 4, "name": "Tajemnice Fleat House", "author": "Lucinda Riley ", "price": 45.9, "description": "Ksi\u0105\u017cki / krymina\u0142 i sensacja / krymina\u0142\n\nTyp ok\u0142adki: oprawa zintegrowana", "category": "proza obyczajowa", "discount": 0.34, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/2/9/2999906841429-8.jpg"]
  }, {
    "id": 5, "name": "Projekt Riese", "author": "Remigiusz Mr\u00f3z ", "price": 44.9, "description": "Ksi\u0105\u017cki / krymina\u0142 i sensacja / thriller\n\nTyp ok\u0142adki: mi\u0119kka ok\u0142adka", "category": "polscy autorzy  ", "discount": 0.42, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/9/9/9999906809999.jpg"]
  }, {
    "id": 6, "name": "Obrazy z przesz\u0142o\u015bci. Cykl z Sewerynem Zaorskim. Tom 4", "author": "Remigiusz Mr\u00f3z ", "price": 47.9, "description": "Ksi\u0105\u017cki / krymina\u0142 i sensacja / krymina\u0142\n\nTyp ok\u0142adki: mi\u0119kka ok\u0142adka", "category": "polscy autorzy  ", "discount": 0.4, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/9/9/9999906863399.jpg"]
  }, {
    "id": 7, "name": "Mentalista", "author": "Autorzy: Henrik Fexeus,     Camilla Lackberg ", "price": 49.99, "description": " Camilla Lackberg\n Kategorie: Ksi\u0105\u017cki / krymina\u0142 i sensacja / krymina\u0142\n", "category": "krymina\u0142 i sensacja", "discount": 0.38, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/4/5/4599906826545.jpg"]
  }, {
    "id": 8, "name": "Werdykt. Seria z Joann\u0105 Chy\u0142k\u0105. Tom 16", "author": "Remigiusz Mr\u00f3z ", "price": 46.9, "description": "Ksi\u0105\u017cki / krymina\u0142 i sensacja / krymina\u0142\n\nTyp ok\u0142adki: mi\u0119kka ok\u0142adka", "category": "polscy autorzy  ", "discount": 0.45, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/5/x/5x99906914950.jpg"]
  }, {
    "id": 9, "name": "Szcz\u0119\u015bliwe zwi\u0105zki. O mi\u0142o\u015bci, wolno\u015bci i szcz\u0119\u015bciu", "author": "Beata Pawlikowska ", "price": 54.9, "description": "\nTyp ok\u0142adki: mi\u0119kka ok\u0142adka\nWydawca: \u015awiat Ksi\u0105\u017cki", "category": "poradniki", "discount": 0.33, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/5/1/5199906812651-3.jpg"]
  }, {
    "id": 10, "name": "Pucio na wsi. \u0106wiczenia rozumienia i m\u00f3wienia dla dzieci", "author": "Marta Galewska-Kustra ", "price": 54.9, "description": "Ksi\u0105\u017cki / dla dzieci / 3-5 lat\n\nTyp ok\u0142adki: twarda ok\u0142adka", "category": "dla dzieci", "discount": 0.24, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/3/2/3299906842232-3.jpg"]
  }, {
    "id": 11, "name": "Nie ufaj mu", "author": "Remigiusz Mr\u00f3z ", "price": 44.9, "description": "Ksi\u0105\u017cki / krymina\u0142 i sensacja / thriller\n\nTyp ok\u0142adki: mi\u0119kka ok\u0142adka", "category": "polscy autorzy  ", "discount": 0.44, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/x/2/x299906894502.jpg"]
  }, {
    "id": 12, "name": "\u017badanica. Cykl o policjantach z Lipowa. Tom 14", "author": "Katarzyna Puzy\u0144ska ", "price": 45.0, "description": "Ksi\u0105\u017cki / krymina\u0142 i sensacja / krymina\u0142\n\nTyp ok\u0142adki: mi\u0119kka ok\u0142adka", "category": "polscy autorzy  ", "discount": 0.4, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/2/3/2399906860523.jpg"]
  }, {
    "id": 13, "name": "Lata", "author": "Annie Ernaux ", "price": 39.9, "description": "\nTyp ok\u0142adki: twarda ok\u0142adka\nWydawca: Czarne", "category": "literatura pi\u0119kna", "discount": 0.17, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/4/8/4899906802148.jpg"]
  }, {
    "id": 14, "name": "5 sk\u0142adnik\u00f3w. Gotuj szybko i \u0142atwo", "author": "Jamie Oliver ", "price": 79.9, "description": "\nTyp ok\u0142adki: twarda ok\u0142adka\nWydawca: Insignis Media", "category": "poradniki", "discount": 0.25, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/5/6/5699906797356.jpg"]
  }, {
    "id": 15, "name": "Jedno \u017cyczenie", "author": "Nicholas Sparks ", "price": 42.9, "description": "\nTyp ok\u0142adki: mi\u0119kka ok\u0142adka\nWydawca: Albatros", "category": "proza obyczajowa", "discount": 0.33, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/9/1/9199906797791-3.jpg"]
  }, {
    "id": 16, "name": "World of Warcraft: Kronika. Tom 3", "author": "Autorzy: Peter Lee,     Emily Chen,     Stanton Feng,     Joseph Lacroix ", "price": 90.0, "description": " Emily Chen,\n\n Stanton Feng,", "category": "fantastyka", "discount": 0.25, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/7/8/7899906797978.jpg"]
  }, {
    "id": 17, "name": "Virion. Tom 2. Pustynia (Szermierz Natchniony)", "author": "Andrzej Ziemia\u0144ski ", "price": 57.9, "description": "Ksi\u0105\u017cki / fantastyka / fantasy\n\nTyp ok\u0142adki: mi\u0119kka ok\u0142adka", "category": "polscy autorzy  ", "discount": 0.35, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/6/3/6399906807763-2.jpg"]
  }, {
    "id": 18, "name": "Start a Fire. Runda pierwsza", "author": "Katarzyna Barli\u0144ska vel P.S. HERYTIERA - \"Pizgacz\" ", "price": 49.9, "description": "\nTyp ok\u0142adki: mi\u0119kka ok\u0142adka\nWydawca: Editio, Helion", "category": "proza obyczajowa", "discount": 0.35, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/2/7/2799906803127.jpg"]
  }, {
    "id": 19, "name": "Powiedz pszczo\u0142om, \u017ce odszed\u0142em", "author": "Diana Gabaldon ", "price": 99.99, "description": "Ksi\u0105\u017cki / literatura pi\u0119kna / literatura pi\u0119kna obca / powie\u015b\u0107 historyczna i biograficzna\n\nTyp ok\u0142adki: mi\u0119kka ok\u0142adka", "category": "fantastyka", "discount": 0.33, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/9/9/9999906892599.jpg"]
  }, {
    "id": 20, "name": "Blask ostatecznego kresu. Trylogia Licaniusa: Ksi\u0119ga 3", "author": "James Islington ", "price": 74.9, "description": "\nTyp ok\u0142adki: oprawa zintegrowana\nWydawca: Fabryka S\u0142\u00f3w", "category": "fantastyka", "discount": 0.34, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/6/x/6x99906839260-1.jpg"]
  }, {
    "id": 21, "name": "Zanim wystygnie kawa", "author": "Toshikazu Kawaguchi ", "price": 44.9, "description": "\nTyp ok\u0142adki: mi\u0119kka ok\u0142adka\nWydawca: Relacja", "category": "literatura pi\u0119kna", "discount": 0.39, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/7/6/7699906864076.jpg"]
  }, {
    "id": 22, "name": "Wicher \u015bmierci. Opowie\u015bci z Malaza\u0144skiej Ksi\u0119gi Poleg\u0142ych. Tom 7", "author": "Steven Erikson ", "price": 59.0, "description": "\nTyp ok\u0142adki: twarda ok\u0142adka\nWydawca: MAG", "category": "fantastyka", "discount": 0.35, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/1/6/1699906811016.jpg"]
  }, {
    "id": 23, "name": "\u017bycie Violette", "author": "Valerie Perrin ", "price": 49.9, "description": "\nTyp ok\u0142adki: twarda ok\u0142adka\nWydawca: Albatros", "category": "literatura pi\u0119kna", "discount": 0.35, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/3/x/3x99906809730-3.jpg"]
  }, {
    "id": 24, "name": "Jedyna z archipelagu", "author": "Kristin Hannah ", "price": 42.9, "description": "\nTyp ok\u0142adki: mi\u0119kka ok\u0142adka\nWydawca: \u015awiat Ksi\u0105\u017cki", "category": "proza obyczajowa", "discount": 0.33, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/x/5/x599906802605.jpg"]
  }, {
    "id": 25, "name": "Razem", "author": "Jamie Oliver ", "price": 79.9, "description": "\nTyp ok\u0142adki: twarda ok\u0142adka\nWydawca: Insignis Media", "category": "poradniki", "discount": 0.25, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/7/8/7899906809878-5.jpg"]
  }, {
    "id": 26, "name": "Endymion. Cykl Hyperion. Tom 3", "author": "Dan Simmons ", "price": 49.0, "description": "\nTyp ok\u0142adki: twarda ok\u0142adka\nWydawca: MAG", "category": "fantastyka", "discount": 0.33, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/8/7/8799906368587-1.jpg"]
  }, {
    "id": 27, "name": "Myto ogar\u00f3w. Opowie\u015bci z Malaza\u0144skiej Ksi\u0119gi Poleg\u0142ych. Tom 8", "author": "Steven Erikson ", "price": 59.0, "description": "\nTyp ok\u0142adki: twarda ok\u0142adka\nWydawca: MAG", "category": "fantastyka", "discount": 0.35, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/1/2/1299906834412.jpg"]
  }, {
    "id": 28, "name": "Upadek Lewiatana. Cykl Expanse. Tom 9", "author": "James S.A. Corey ", "price": 49.0, "description": "\nTyp ok\u0142adki: twarda ok\u0142adka\nWydawca: MAG", "category": "fantastyka", "discount": 0.35, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/2/3/2399906803123.jpg"]
  }, {
    "id": 29, "name": "Triumf Endymiona. Cykl Hyperion. Tom 4", "author": "Dan Simmons ", "price": 49.0, "description": "\nTyp ok\u0142adki: twarda ok\u0142adka\nWydawca: MAG", "category": "fantastyka", "discount": 0.33, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/7/2/7299906387772-1.jpg"]
  }, {
    "id": 30, "name": "Polska i Rosja. S\u0105siedztwo wolno\u015bci i despotyzmu X-XXI w.", "author": "Andrzej Nowak ", "price": 89.0, "description": "Ksi\u0105\u017cki / historia / historia \u015bwiata\n\nTyp ok\u0142adki: twarda ok\u0142adka", "category": "historia", "discount": 0.4, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/3/1/3199906848731.jpg"]
  }, {
    "id": 31, "name": "Cudowna moc mi\u0142o\u015bci", "author": "Kristin Hannah ", "price": 44.9, "description": "\nTyp ok\u0142adki: mi\u0119kka ok\u0142adka\nWydawca: \u015awiat Ksi\u0105\u017cki", "category": "literatura pi\u0119kna", "discount": 0.32, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/6/2/6299906857762.jpg"]
  }, {
    "id": 32, "name": "Brakuj\u0105cy element", "author": "Harlan Coben ", "price": 44.9, "description": "\nTyp ok\u0142adki: mi\u0119kka ok\u0142adka\nWydawca: Albatros", "category": "krymina\u0142 i sensacja", "discount": 0.34, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/x/4/x499906865704-3.jpg"]
  }, {
    "id": 33, "name": "Czarne skrzyd\u0142a czasu", "author": "Diane Setterfield ", "price": 49.9, "description": "\nTyp ok\u0142adki: twarda ok\u0142adka\nWydawca: Albatros", "category": "literatura pi\u0119kna", "discount": 0.33, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/4/4/4499906803444-5.jpg"]
  }, {
    "id": 34, "name": "Gdzie \u015bpiewaj\u0105 raki (wydanie filmowe)", "author": "Delia Owens ", "price": 39.9, "description": "\nTyp ok\u0142adki: mi\u0119kka ok\u0142adka\nWydawca: \u015awiat Ksi\u0105\u017cki", "category": "literatura pi\u0119kna", "discount": 0.33, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/2/3/2399906868623.jpg"]
  }, {
    "id": 35, "name": "Czu\u0142a przewodniczka. Kobieca droga do siebie", "author": "Natalia de Barbaro ", "price": 39.99, "description": "\nTyp ok\u0142adki: mi\u0119kka ok\u0142adka\nWydawca: Agora SA", "category": "poradniki", "discount": 0.32, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/2/5/2599906721525.jpg"]
  }, {
    "id": 36, "name": "Ba\u015bniowa opowie\u015b\u0107", "author": "Stephen King ", "price": 59.9, "description": "\nTyp ok\u0142adki: mi\u0119kka ok\u0142adka\nWydawca: Albatros", "category": "fantastyka", "discount": 0.34, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/4/8/4899906879848-9.jpg"]
  }, {
    "id": 37, "name": "Wytrzyma\u0142o\u015b\u0107 psychiczna", "author": "Chris McNab ", "price": 36.9, "description": "\nTyp ok\u0142adki: mi\u0119kka ok\u0142adka\nWydawca: Bellona", "category": "poradniki", "discount": 0.2, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/9/3/9399906800993-4.jpg"]
  }, {
    "id": 38, "name": "Py\u0142 sn\u00f3w. Opowie\u015bci z Malaza\u0144skiej Ksi\u0119gi Poleg\u0142ych. Tom 9", "author": "Steven Erikson ", "price": 69.0, "description": "\nTyp ok\u0142adki: twarda ok\u0142adka\nWydawca: MAG", "category": "fantastyka", "discount": 0.26, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/x/1/x199906846501.jpg"]
  }, {
    "id": 39, "name": "O w\u0142os. Seria z detektywem Jakubem Sobieskim. Tom 1", "author": "Katarzyna Bonda ", "price": 42.9, "description": "\nTyp ok\u0142adki: mi\u0119kka ok\u0142adka\nWydawca: Muza SA", "category": "krymina\u0142 i sensacja", "discount": 0.36, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/3/7/3799906837537.jpg"]
  }, {
    "id": 40, "name": "Okaleczony B\u00f3g. Opowie\u015bci z Malaza\u0144skiej Ksi\u0119gi Poleg\u0142ych. Tom 10", "author": "Steven Erikson ", "price": 69.0, "description": "\nTyp ok\u0142adki: twarda ok\u0142adka\nWydawca: MAG", "category": "fantastyka", "discount": 0.32, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/x/9/x999906846509.jpg"]
  }, {
    "id": 41, "name": "Wied\u017amin. Tom 1. Ostatnie \u017cyczenie (Wydanie poprawione i uzupe\u0142nione)", "author": "Andrzej Sapkowski ", "price": 52.9, "description": "Ksi\u0105\u017cki / fantastyka / fantasy\n\nTyp ok\u0142adki: mi\u0119kka ok\u0142adka", "category": "polscy autorzy  ", "discount": 0.35, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/8/6/8699905387986.jpg"]
  }, {
    "id": 42, "name": "Ostateczna bitwa o rodzin\u0119", "author": "Autorzy: ks. Piotr Glas,     Jacek Pulikowski ", "price": 39.9, "description": " Jacek Pulikowski\n Kategorie: Ksi\u0105\u017cki / religia\n", "category": "religia", "discount": 0.45, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/1/9/1999906809919.jpg"]
  }, {
    "id": 43, "name": "Jack Reacher: Lepiej ju\u017c umrze\u0107", "author": "Autorzy: Andrew Child,     Lee Child ", "price": 42.9, "description": " Lee Child\n Kategorie: Ksi\u0105\u017cki / krymina\u0142 i sensacja / thriller\n", "category": "krymina\u0142 i sensacja", "discount": 0.33, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/3/3/3399906809733-3.jpg"]
  }, {
    "id": 44, "name": "Anne z Zielonych Szczyt\u00f3w. (Ania z Zielonego Wzg\u00f3rza - nowe t\u0142umaczenie)", "author": "Lucy Maud Montgomery ", "price": 54.9, "description": "Ksi\u0105\u017cki / literatura pi\u0119kna / literatura pi\u0119kna obca / klasyka\n\nTyp ok\u0142adki: twarda ok\u0142adka", "category": "dla m\u0142odzie\u017cy", "discount": 0.39, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/x/1/x199906808401.jpg"]
  }, {
    "id": 45, "name": "Heartstopper. Tom 2", "author": "Alice Oseman ", "price": 39.9, "description": "\nTyp ok\u0142adki: mi\u0119kka ok\u0142adka\nWydawca: Jaguar", "category": "komiksy", "discount": 0.38, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/7/4/7499906809274.jpg"]
  }, {
    "id": 46, "name": "D\u0142uga noc. Jakub Mortka. Tom 6", "author": "Wojciech Chmielarz ", "price": 42.9, "description": "Ksi\u0105\u017cki / krymina\u0142 i sensacja / krymina\u0142\n\nTyp ok\u0142adki: mi\u0119kka ok\u0142adka", "category": "polscy autorzy  ", "discount": 0.38, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/9/4/9499906864094-2.jpg"]
  }, {
    "id": 47, "name": "Pani dobrego znaku. Wieczny pok\u00f3j. Ksi\u0119ga Ca\u0142o\u015bci. Tom 5 (promocyjna)", "author": "Feliks W. Kres ", "price": 49.9, "description": "Ksi\u0105\u017cki / fantastyka / fantasy\n\nTyp ok\u0142adki: oprawa zintegrowana", "category": "polscy autorzy  ", "discount": 0.8, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/x/2/x299906900202.jpg"]
  }, {
    "id": 48, "name": "Ober\u017ca na pustkowiu", "author": "Daphne du Maurier ", "price": 49.9, "description": "\nTyp ok\u0142adki: twarda ok\u0142adka\nWydawca: Albatros", "category": "literatura pi\u0119kna", "discount": 0.34, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/1/x/1x99906826210-7.jpg"]
  }, {
    "id": 49, "name": "Krwawnica", "author": "Mieczys\u0142aw Gorzka ", "price": 44.9, "description": "Ksi\u0105\u017cki / krymina\u0142 i sensacja / krymina\u0142\n\nTyp ok\u0142adki: mi\u0119kka ok\u0142adka", "category": "polscy autorzy  ", "discount": 0.39, "imgPath": ["https://www.swiatksiazki.pl/media/catalog/product/cache/5419a01bcc6e3a3bab1b62e490a79ef2/7/8/7899906847778.jpg"]
  }]
    ;
  getBooks(): Observable<Book[]> {
    return from([this.books]);
  }
}
