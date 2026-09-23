/* Piktogramme fuer Einkaufsliste und Wochenmenue.
   Reines Inline-SVG: keine externen Anfragen, funktioniert offline im Markt,
   faerbt sich ueber currentColor automatisch nach dem Theme.
   Jedes Icon ist der Innenteil eines <svg viewBox="0 0 24 24">. */
(function (global) {
  "use strict";

  var ICONS = {
    /* ---- Fleisch, Fisch ---- */
    fleisch: '<path d="M4.8 12.2c0-3.9 3.3-6.6 7.4-6.6 3.5 0 6 2 6 5 0 4.2-3.8 8.4-8.3 8.4-3.1 0-5.1-1.9-5.1-4.5z"/><circle cx="14.4" cy="10.4" r="1.5"/>',
    hendl: '<circle cx="14.8" cy="8.6" r="4.4"/><path d="M11.6 11.8 8 15.4"/><circle cx="6.5" cy="16.5" r="1.7"/><circle cx="8.2" cy="18.2" r="1.7"/>',
    wurst: '<path d="M6.3 6.8c4-1.6 8.1.6 9.9 3.9s1.1 7.2-2.3 8.6-8.1-.6-9.9-3.9 2.3-7 2.3-8.6z"/>',
    fisch: '<path d="M3.6 12c3-3.6 6.6-5.4 10.2-5.4 2.5 0 4.5.8 6 2.2-1.4 1.4-2.1 2.4-2.1 3.2s.7 1.8 2.1 3.2c-1.5 1.4-3.5 2.2-6 2.2-3.6 0-7.2-1.8-10.2-5.4z"/><circle cx="8.2" cy="10.8" r=".7"/>',

    /* ---- Molkerei ---- */
    milch: '<path d="M8.8 3.6h6.4l2.8 3.4v12.8a.8.8 0 0 1-.8.8H6.8a.8.8 0 0 1-.8-.8V7z"/><path d="M8.8 3.6 6 7M15.2 3.6 18 7"/>',
    kaese: '<path d="M3.8 13.8 13.6 7l6.6 3.6v7a.8.8 0 0 1-.8.8H4.6a.8.8 0 0 1-.8-.8z"/><circle cx="8.2" cy="15.4" r="1"/><circle cx="14.8" cy="13.8" r=".8"/>',
    butter: '<path d="M4 10.6h12.4l3.8 2.3v5.4a.8.8 0 0 1-.8.8H4.8a.8.8 0 0 1-.8-.8z"/><path d="M16.4 10.6 20.2 12.9H8.2"/>',
    ei: '<path d="M12 20.4c-3.2 0-5.4-2.2-5.4-5.2 0-3.9 2.5-11.4 5.4-11.4s5.4 7.5 5.4 11.4c0 3-2.2 5.2-5.4 5.2z"/>',
    joghurt: '<path d="M7 8.4h10l-1.2 11.2a.8.8 0 0 1-.8.7H9a.8.8 0 0 1-.8-.7z"/><rect x="6" y="5.2" width="12" height="3.2" rx=".8"/>',

    /* ---- Brot, Grundnahrung ---- */
    brot: '<path d="M4.6 12.4c0-3.1 3.3-5.1 7.4-5.1s7.4 2 7.4 5.1v4.7a.8.8 0 0 1-.8.8H5.4a.8.8 0 0 1-.8-.8z"/><path d="M9 10.6 7.7 13.5M12.2 10.2l-1.3 3.2M15.4 10.6l-1.3 2.9"/>',
    nudeln: '<path d="M4.2 12.8h15.6c0 3.9-3.5 6.7-7.8 6.7s-7.8-2.8-7.8-6.7z"/><path d="M8.2 10.6c0-2.3 1.2-3.9 1.2-5.6M12 10.6c0-2.3 1.2-3.9 1.2-5.6M15.8 10.6c0-2.3 1.2-3.9 1.2-5.6"/>',
    reis: '<path d="M4.4 12.8h15.2c0 3.8-3.4 6.6-7.6 6.6s-7.6-2.8-7.6-6.6z"/><ellipse cx="9.2" cy="8.6" rx="1.2" ry="2" transform="rotate(-25 9.2 8.6)"/><ellipse cx="13" cy="7.4" rx="1.2" ry="2" transform="rotate(15 13 7.4)"/><ellipse cx="15.8" cy="9.6" rx="1.2" ry="2" transform="rotate(40 15.8 9.6)"/>',
    mehl: '<path d="M7.2 9h9.6v10.2a.8.8 0 0 1-.8.8H8a.8.8 0 0 1-.8-.8z"/><path d="M7.2 9 9.2 5.2h5.6L16.8 9"/>',
    dose: '<rect x="6.6" y="6" width="10.8" height="12.6" rx="1.2"/><path d="M6.6 9.6h10.8M6.6 15h10.8"/>',
    oel: '<path d="M10.2 3.6h3.6v2.9l2.4 3.6v8.7a1 1 0 0 1-1 1H8.8a1 1 0 0 1-1-1v-8.7l2.4-3.6z"/><path d="M9.2 13.6h5.6"/>',
    zucker: '<rect x="5" y="9.2" width="14" height="10.2" rx="1"/><path d="M5 9.2 7.1 5.4h9.8L19 9.2"/>',

    /* ---- Obst, Gemuese ---- */
    apfel: '<path d="M12 8.6c-1.4-1.4-3.7-1.6-5.2 0-1.7 1.7-1.5 5.3.4 8.1 1.1 1.5 2.2 2.6 3.4 2.6.5 0 .9-.1 1.4-.4.4.3.9.4 1.4.4 1.2 0 2.3-1.1 3.4-2.6 1.9-2.8 2.1-6.4.4-8.1-1.5-1.6-3.8-1.4-5.2 0z"/><path d="M12 8.6V5.2"/><path d="M12.4 6.6c1.1-1.3 2.6-1.5 3.6-1.3"/>',
    banane: '<path d="M4.8 7.2c0 5.6 4.1 10.2 9.4 10.2 2.3 0 4-.7 5.1-1.7-1.5.2-2.6 0-2.6-1.3-3.2.5-8.3-2.1-9.2-7.7-.4-1.4-2.7-1.4-2.7.5z"/>',
    trauben: '<circle cx="12" cy="9" r="1.8"/><circle cx="9.3" cy="12.1" r="1.8"/><circle cx="14.7" cy="12.1" r="1.8"/><circle cx="12" cy="15.2" r="1.8"/><circle cx="9.7" cy="18.2" r="1.7"/><circle cx="14.3" cy="18.2" r="1.7"/><path d="M12 7.1V4.6c1.5 0 2.5-.8 2.9-1.3"/>',
    zitrone: '<ellipse cx="12" cy="12.8" rx="7.4" ry="5.6" transform="rotate(-20 12 12.8)"/><path d="M18.6 8c.9-.9 1.4-1.2 2.1-1.4"/>',
    kuerbis: '<ellipse cx="12" cy="13.8" rx="7.8" ry="6"/><path d="M8.6 8.6c-.8 1.8-.8 7 0 10.4M15.4 8.6c.8 1.8.8 7 0 10.4"/><path d="M12 7.8V4.6c1.7 0 2.6-.6 3.1-1.1"/>',
    erdaepfel: '<ellipse cx="12" cy="12.8" rx="7.8" ry="6" transform="rotate(-12 12 12.8)"/><circle cx="9.4" cy="11.4" r=".8"/><circle cx="13.4" cy="14.2" r=".7"/>',
    karotte: '<path d="M9.8 9.8h4.4L12 20.2z"/><path d="M12 9.8V5.8M12 8.2 9.2 5.8M12 8.2l2.8-2.4"/>',
    tomate: '<circle cx="12" cy="14" r="6.2"/><path d="M12 7.8V5"/><path d="M9.2 6.6c1-.6 1.8-.6 2.8 0 1-.6 1.8-.6 2.8 0"/>',
    paprika: '<path d="M6.9 13c0-3.1 2.3-5.1 5.1-5.1s5.1 2 5.1 5.1c0 3.9-2.3 7.1-5.1 7.1S6.9 16.9 6.9 13z"/><path d="M12 7.9V5.2"/><path d="M9.9 5.4c1.4-.5 2.8-.5 4.2 0"/>',
    salat: '<path d="M5 18.8c-.6-6.8 4.6-12.2 13.6-13.2 1 8.9-4.8 13.9-11.6 13.9z"/><path d="M6.4 17.6c2.9-3 6.3-5.7 10.4-8"/>',
    zwiebel: '<path d="M12 20.2c-3.5 0-6-2.3-6-5.5 0-3.4 2.5-6.4 6-9 3.5 2.6 6 5.6 6 9 0 3.2-2.5 5.5-6 5.5z"/><path d="M12 5.7V3.2M10.1 5.5 8.6 3.8M13.9 5.5l1.5-1.7"/>',
    champignon: '<path d="M4.6 12.8c0-4.1 3.3-7.4 7.4-7.4s7.4 3.3 7.4 7.4c0 .7-.5 1.2-1.2 1.2H5.8c-.7 0-1.2-.5-1.2-1.2z"/><path d="M9.9 14v4.3c0 1.1.9 1.9 2.1 1.9s2.1-.9 2.1-1.9V14"/>',

    /* ---- Getraenke, Sonstiges ---- */
    kaffee: '<path d="M4.6 7.6h10.8v6.2c0 2.4-2 4.4-4.4 4.4H9c-2.4 0-4.4-2-4.4-4.4z"/><path d="M15.4 9.4h2.1a2.3 2.3 0 0 1 0 4.6h-2.1"/><path d="M3.6 20.4h12.8"/>',
    getraenk: '<path d="M10.3 3.6h3.4v2.8l2.1 3.1v9a1.7 1.7 0 0 1-1.7 1.7H9.9a1.7 1.7 0 0 1-1.7-1.7v-9l2.1-3.1z"/><path d="M8.2 12.8h7.6v3.4H8.2z"/>',
    snack: '<path d="M6.8 6.2h10.4l1 13a1.3 1.3 0 0 1-1.3 1.3H7.1a1.3 1.3 0 0 1-1.3-1.3z"/><path d="M6.8 6.2 5.9 3.6h12.2l-.9 2.6"/>',
    tiefkuehl: '<path d="M12 3.2v17.6M4.7 7.6l14.6 8.8M19.3 7.6 4.7 16.4"/><path d="M9.6 5 12 7l2.4-2M9.6 19l2.4-2 2.4 2"/>',
    korb: '<path d="M3.8 10.2h16.4l-1.6 8.4a1.5 1.5 0 0 1-1.5 1.2H6.9a1.5 1.5 0 0 1-1.5-1.2z"/><path d="M8.8 10.2 10.7 4.4M15.2 10.2 13.3 4.4"/>',

    /* ---- Gerichte ---- */
    topf: '<path d="M4.4 9.4h15.2v5.6c0 2.7-2.2 4.9-4.9 4.9H9.3c-2.7 0-4.9-2.2-4.9-4.9z"/><path d="M2.8 7.6h18.4"/><path d="M9.5 5.4c0-.9.7-1.4 1.5-1.4M13.5 5.4c0-.9.7-1.4 1.5-1.4"/>',
    pfanne: '<ellipse cx="9.8" cy="13.6" rx="6.8" ry="5"/><path d="M16.8 12.8h4.6"/>',
    ofen: '<rect x="3.8" y="5.2" width="16.4" height="13.6" rx="1.8"/><path d="M3.8 9.6h16.4"/><rect x="7" y="12" width="10" height="4.4" rx=".8"/><circle cx="7.2" cy="7.4" r=".6"/><circle cx="10" cy="7.4" r=".6"/>',
    schmarrn: '<path d="M5.4 16.6c0 1.6 3 2.8 6.6 2.8s6.6-1.2 6.6-2.8"/><path d="M6.2 12.9c0 1.4 2.6 2.6 5.8 2.6s5.8-1.2 5.8-2.6"/><path d="M7 9.4c0 1.3 2.2 2.3 5 2.3s5-1 5-2.3-2.2-2.3-5-2.3-5 1-5 2.3z"/>',
    teller: '<circle cx="12" cy="12" r="8.4"/><circle cx="12" cy="12" r="4.8"/>'
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
    span.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" focusable="false">' + inner + "</svg>";
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
