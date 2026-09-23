/* Piktogramme fuer Einkaufsliste und Wochenmenue.
   Reines Inline-SVG: keine externen Anfragen, funktioniert offline im Markt,
   faerbt sich ueber currentColor automatisch nach dem Theme.
   Jedes Icon ist der Innenteil eines <svg viewBox="0 0 24 24">. */
(function (global) {
  "use strict";

  var ICONS = {
    /* ---- Fleisch, Fisch ---- */
    fleisch: '<path d="M4.6 11C6 7.2 9.4 4.8 13.2 4.8c3.7 0 6.3 2.3 6.3 5.5 0 4.6-4.2 9.4-9.3 9.4-3.5 0-6.2-2.1-6.2-5.1 0-1.3.2-2.5.6-3.6z"/><circle cx="15" cy="9.8" r="1.9" opacity=".4"/>',
    hendl: '<circle cx="15.6" cy="8.4" r="5.4"/><path d="M12.1 12.3 7.4 17" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle cx="6.2" cy="16.2" r="2.1"/><circle cx="8" cy="18.1" r="2.1"/>',
    wurst: '<path d="M5.5 6.5c4.5-2 9 .5 11 4s2 8-1.5 9.5-8-.5-10-4-3-8 .5-9.5z" opacity=".95"/><path d="M8.6 8.2c2.8-.9 5.4.6 6.7 3" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" opacity=".45"/>',
    fisch: '<path d="M3 12c3.4-4.2 7.2-6.2 11.4-6.2 2.8 0 5 .9 6.6 2.5-1.6 1.6-2.4 2.9-2.4 3.7s.8 2.1 2.4 3.7c-1.6 1.6-3.8 2.5-6.6 2.5C10.2 18.2 6.4 16.2 3 12z"/><circle cx="8.4" cy="10.6" r="1.1" opacity=".45"/>',

    /* ---- Molkerei ---- */
    milch: '<path d="M9 2.6h6l3 3.6V21a.8.8 0 0 1-.8.8H6.8A.8.8 0 0 1 6 21V6.2z"/><path d="M9 2.6 6 6.2h12L15 2.6z" opacity=".45"/>',
    kaese: '<path d="M3 13.6 13.4 6.2 21 10.2v7.4a.8.8 0 0 1-.8.8H3.8a.8.8 0 0 1-.8-.8z"/><circle cx="8" cy="15.4" r="1.4" opacity=".4"/><circle cx="14.6" cy="13.6" r="1.1" opacity=".4"/><circle cx="17.6" cy="16.4" r="1" opacity=".4"/>',
    butter: '<path d="M3.4 9.6h13.2l4 2.6v6.2a.8.8 0 0 1-.8.8H3.4a.8.8 0 0 1-.8-.8V10.4a.8.8 0 0 1 .8-.8z"/><path d="M16.6 9.6 20.6 12.2H8.4z" opacity=".45"/>',
    ei: '<ellipse cx="12" cy="13.4" rx="6" ry="8"/>',
    joghurt: '<path d="M6.4 7.6h11.2l-1.4 12.6a.8.8 0 0 1-.8.7H8.6a.8.8 0 0 1-.8-.7z"/><rect x="5.4" y="4.2" width="13.2" height="3.4" rx="1"/>',

    /* ---- Brot, Grundnahrung ---- */
    brot: '<path d="M4 11.8c0-3.4 3.6-5.4 8-5.4s8 2 8 5.4v5.4a.8.8 0 0 1-.8.8H4.8a.8.8 0 0 1-.8-.8z"/><path d="M8.6 9.6 7 13.4M12 9.2l-1.6 4M15.4 9.6l-1.6 3.8" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" opacity=".45"/>',
    nudeln: '<path d="M3.4 12.6h17.2c0 4.4-3.8 7.4-8.6 7.4s-8.6-3-8.6-7.4z"/><path d="M7 10.4c0-2.6 1.4-4.4 1.4-6.4M12 10.4c0-2.6 1.4-4.4 1.4-6.4M17 10.4c0-2.6 1.4-4.4 1.4-6.4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
    reis: '<path d="M3.6 12h16.8c0 4.4-3.8 7.6-8.4 7.6S3.6 16.4 3.6 12z"/><ellipse cx="9" cy="8" rx="1.5" ry="2.4" transform="rotate(-25 9 8)" opacity=".55"/><ellipse cx="13" cy="6.6" rx="1.5" ry="2.4" transform="rotate(15 13 6.6)" opacity=".55"/><ellipse cx="16" cy="9" rx="1.5" ry="2.4" transform="rotate(40 16 9)" opacity=".55"/>',
    mehl: '<path d="M6.6 8.2h10.8v11.6a.8.8 0 0 1-.8.8H7.4a.8.8 0 0 1-.8-.8z"/><path d="M6.6 8.2 8.8 4h6.4l2.2 4.2z" opacity=".5"/>',
    dose: '<rect x="6" y="5.6" width="12" height="13.4" rx="1.4"/><path d="M6 9.4h12M6 15.2h12" fill="none" stroke="currentColor" stroke-width="1.2" opacity=".4"/>',
    oel: '<path d="M9.6 2.6h4.8v3.2l3 4.4v9.2a1 1 0 0 1-1 1H7.6a1 1 0 0 1-1-1v-9.2l3-4.4z"/><path d="M9 13.4h6v3.6H9z" opacity=".4"/>',
    zucker: '<rect x="4.6" y="8.6" width="14.8" height="11" rx="1.2"/><path d="M4.6 8.6 7 4.6h10l2.4 4z" opacity=".5"/>',

    /* ---- Obst, Gemuese ---- */
    apfel: '<path d="M12 7.4c-1.6-1.6-4.2-1.8-6 0-2 2-1.8 6 .4 9.2 1.2 1.8 2.6 3 4 3 .6 0 1.1-.2 1.6-.5.5.3 1 .5 1.6.5 1.4 0 2.8-1.2 4-3 2.2-3.2 2.4-7.2.4-9.2-1.8-1.8-4.4-1.6-6 0z"/><path d="M12 7.4V3.6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M12.4 5.4c1.4-1.6 3.2-1.8 4.2-1.6.2 1.4-.6 3-2.2 3.4-1 .2-1.6 0-2-.4z" opacity=".5"/>',
    banane: '<path d="M4 6.6c0 6.4 4.6 11.6 10.6 11.6 2.6 0 4.6-.8 5.8-2-1.6.2-3 0-3-1.4-3.6.6-9.4-2.4-10.4-8.8-.4-1.6-3-1.6-3 .6z"/>',
    trauben: '<circle cx="12" cy="8.6" r="2.4"/><circle cx="8.6" cy="12.4" r="2.4"/><circle cx="15.4" cy="12.4" r="2.4"/><circle cx="12" cy="15.4" r="2.4"/><circle cx="9.4" cy="18.6" r="2.2"/><circle cx="14.6" cy="18.6" r="2.2"/><path d="M12 6.2V3.4c1.8 0 3-1 3.4-1.6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
    zitrone: '<ellipse cx="12" cy="12.6" rx="8.4" ry="6.4" transform="rotate(-20 12 12.6)"/><path d="M19.6 7.4c1-1 1.6-1.4 2.4-1.6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
    kuerbis: '<ellipse cx="12" cy="13.6" rx="9" ry="7"/><path d="M12 6.6v14M7.6 7.6c-1 2-1 8 0 12M16.4 7.6c1 2 1 8 0 12" fill="none" stroke="currentColor" stroke-width="1.2" opacity=".4"/><path d="M12 6.6V3.4c2 0 3-.8 3.6-1.4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
    erdaepfel: '<ellipse cx="12" cy="12.6" rx="8.6" ry="6.6" transform="rotate(-12 12 12.6)"/><circle cx="9" cy="11" r="1" opacity=".45"/><circle cx="13.4" cy="14.2" r=".9" opacity=".45"/><circle cx="15.2" cy="10.4" r=".8" opacity=".45"/>',
    karotte: '<path d="M8.4 9.6 18.8 20c-3 2-8.6 1.4-11.6-1.6S5.4 10.6 8.4 9.6z" transform="rotate(180 12 14)"/><path d="M12 8.4V4.6M12 8.4l3.2-2.8M12 8.4 8.8 5.6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
    tomate: '<circle cx="12" cy="14" r="7.4"/><path d="M12 6.6V3.8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M8 6.2c1.4-.8 2.6-.8 4 0 1.4-.8 2.6-.8 4 0-.8 1.6-2.2 2.4-4 2.4s-3.2-.8-4-2.4z" opacity=".55"/>',
    paprika: '<path d="M6 12.6c0-3.4 2.6-5.6 6-5.6s6 2.2 6 5.6c0 4.4-2.6 8-6 8s-6-3.6-6-8z"/><path d="M12 7V4.2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M9.4 4.6c1.6-.6 3.6-.6 5.2 0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
    salat: '<path d="M12 20.6c-5 0-9-3.6-9-8 0-1 .2-1.8.6-2.6 1.4.8 2.8 1 4 .6-.6-2 .2-4.2 2-5.6 1 1.4 2.2 2.2 3.4 2.4.4-2 2-3.6 4-4.2.4 2 0 3.8-1 5 1.6.4 3 1.6 3.8 3.2-1.4.8-2.2 2-2.4 3.4 1 .2 1.8.8 2.4 1.6-1.6 2.6-4.6 4.2-7.8 4.2z"/>',
    zwiebel: '<path d="M12 21c-4 0-6.8-2.6-6.8-6.2C5.2 11 8 7.6 12 4.6c4 3 6.8 6.4 6.8 10.2 0 3.6-2.8 6.2-6.8 6.2z"/><path d="M12 4.6V1.8M9.8 4.4 8 2.4M14.2 4.4 16 2.4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>',
    champignon: '<path d="M3.6 12.6C3.6 8 7.4 4.4 12 4.4s8.4 3.6 8.4 8.2c0 .8-.6 1.4-1.4 1.4H5c-.8 0-1.4-.6-1.4-1.4z"/><path d="M9.6 14v4.6c0 1.2 1 2.2 2.4 2.2s2.4-1 2.4-2.2V14z"/>',

    /* ---- Getraenke, Sonstiges ---- */
    kaffee: '<path d="M4 6.6h12v7c0 2.8-2.2 5-5 5H9c-2.8 0-5-2.2-5-5z"/><path d="M16 8.6h2.4a2.6 2.6 0 0 1 0 5.2H16" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M3 20.4h14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
    getraenk: '<path d="M10 2.6h4v3l2.4 3.4v10a2 2 0 0 1-2 2H9.6a2 2 0 0 1-2-2V9z"/><path d="M8 12.4h8v4H8z" opacity=".4"/>',
    snack: '<path d="M6.2 5.4h11.6L19 20a1.4 1.4 0 0 1-1.4 1.5H6.4A1.4 1.4 0 0 1 5 20z"/><path d="M6.2 5.4 5 2.6h14l-1.2 2.8z" opacity=".5"/>',
    tiefkuehl: '<path d="M12 2.6v18.8M4 7.2l16 9.6M20 7.2 4 16.8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M9 4.6 12 7l3-2.4M9 19.4 12 17l3 2.4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
    korb: '<path d="M3 9.6h18l-1.8 9.2a1.6 1.6 0 0 1-1.6 1.3H6.4a1.6 1.6 0 0 1-1.6-1.3z"/><path d="M8.4 9.6 10.6 3.4M15.6 9.6 13.4 3.4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',

    /* ---- Gerichte ---- */
    topf: '<path d="M3.6 8.6h16.8v6.6c0 3-2.4 5.4-5.4 5.4H9c-3 0-5.4-2.4-5.4-5.4z"/><path d="M2 6.8h20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M9 4.4c0-1 .8-1.4 1.6-1.4M14 4.4c0-1 .8-1.4 1.6-1.4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
    pfanne: '<ellipse cx="9.6" cy="13.6" rx="7.6" ry="5.6"/><path d="M17 12.4h5.2" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',
    ofen: '<rect x="3" y="4.6" width="18" height="15" rx="2"/><path d="M3 9.4h18" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="6.4" y="12" width="11.2" height="5" rx="1" fill="none" stroke="currentColor" stroke-width="1.5" opacity=".6"/><circle cx="6.6" cy="7" r="1"/><circle cx="10" cy="7" r="1"/>',
    schmarrn: '<ellipse cx="12" cy="16.6" rx="8.6" ry="3.4"/><ellipse cx="12" cy="12.6" rx="7.4" ry="3" opacity=".75"/><ellipse cx="12" cy="8.8" rx="6" ry="2.6" opacity=".5"/>',
    teller: '<circle cx="12" cy="12" r="9.2" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="5.4" fill="none" stroke="currentColor" stroke-width="1.4" opacity=".5"/>'
  };

  var REGELN = [
    [/tiefk|iglo|gefror|polardorsch|fischst/i, "tiefkuehl"],
    [/lachs|fisch|forelle|thunfisch|hering|dorsch|garnel|sardell/i, "fisch"],
    [/hendl|huhn|hühn|pute|geflügel|keule|innenfilet|nugget/i, "hendl"],
    [/wurst|schinken|speck|cabanossi|frankfurter|extrawurst|bratwurst|weißwurst/i, "wurst"],
    [/faschiert|gulasch|schnitzel|fleisch|braten|laibchen|rind|schwein|karree/i, "fleisch"],
    [/joghurt|monte|topfen|skyr/i, "joghurt"],
    [/butter|teebutter|rahmbutter/i, "butter"],
    [/käse|kaese|gouda|mozzarella|emmentaler|bergkäse|brie|moosbacher|cottage|bojar|frischkäse|philadelphia|hirtenkäse/i, "kaese"],
    [/milch|obers|sauerrahm|cremefine|schlagobers/i, "milch"],
    [/\bei\b|eier/i, "ei"],
    [/brot|toast|baguette|croissant|semmel|kornspitz|weckerl|ciabatta|sandwich|gebäck/i, "brot"],
    [/nudel|spaghetti|teigwaren|pasta|penne|fusilli/i, "nudeln"],
    [/reis/i, "reis"],
    [/mehl|brösel|broesel/i, "mehl"],
    [/zucker/i, "zucker"],
    [/öl|oel|kernöl/i, "oel"],
    [/suppe|sauce|dose|konserve|knorr|felix|tomatensauce|aufstrich|thunfisch/i, "dose"],
    [/kaffee|nescaf|jacobs|lavazza|dallmayr|cappuccino/i, "kaffee"],
    [/bier|cola|limonade|wasser|saft|getränk|prickelnd|römerquelle|puntigamer|stiegl|ottakringer|heineken|radler/i, "getraenk"],
    [/chips|knabber|soletti|schokolade|snack|salzstang|popcorn/i, "snack"],
    [/kürbis|kuerbis|hokkaido|butternuss/i, "kuerbis"],
    [/erdapfel|erdäpfel|kartoffel/i, "erdaepfel"],
    [/karotte|möhre|moehre/i, "karotte"],
    [/tomate|rispen|cherry/i, "tomate"],
    [/paprika/i, "paprika"],
    [/salat|rucola|pflücksalat|eissalat|gurke|spinat/i, "salat"],
    [/zwiebel|knoblauch|lauch/i, "zwiebel"],
    [/champignon|pilz|schwammerl/i, "champignon"],
    [/apfel|äpfel|birne|kiwi|maroni|nektarine|feige|pfirsich|avocado/i, "apfel"],
    [/banane/i, "banane"],
    [/traube|beere|ribisel|heidelbeer/i, "trauben"],
    [/zitrone|orange|satsuma|mandarine|limette|grapefruit/i, "zitrone"]
  ];

  var GERICHT_REGELN = [
    [/suppe|eintopf|gulasch|cremesuppe/i, "topf"],
    [/schmarrn|palatschink|pfannkuchen|strudel|apfelmus/i, "schmarrn"],
    [/auflauf|ofen|gebacken|überbacken|gefüllte|braten/i, "ofen"],
    [/nudel|spaghetti|pasta|bolognese|lasagne/i, "nudeln"],
    [/fisch|lachs|forelle|dorsch/i, "fisch"],
    [/laibchen|schnitzel|nuggets|gebraten|pfanne|streifen/i, "pfanne"],
    [/salat/i, "salat"]
  ];

  function schluessel(text, regeln, fallback) {
    var s = String(text || "");
    for (var i = 0; i < regeln.length; i++) {
      if (regeln[i][0].test(s)) return regeln[i][1];
    }
    return fallback;
  }

  function svg(name) {
    var inner = ICONS[name];
    if (!inner) return null;
    var span = document.createElement("span");
    span.className = "ico";
    span.setAttribute("aria-hidden", "true");
    span.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" focusable="false">' + inner + "</svg>";
    return span;
  }

  global.Piktogramm = {
    fuerArtikel: function (text, override) {
      return svg(override || schluessel(text, REGELN, "korb"));
    },
    fuerGericht: function (text, override) {
      return svg(override || schluessel(text, GERICHT_REGELN, "teller"));
    },
    namen: Object.keys(ICONS)
  };
})(this);
