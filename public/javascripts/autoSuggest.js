        var searchIndex = ["Houses", "Apartments", "Flats", "Hostels", "Rooms", "Sale", "Rent", "For", "in", "Around", "Ashanti", "Brong-Ahafo", "Central Region", "Eastern Region",
         "Greater Accra", "Northern Region", "Upper East", "Upper West", "Volta", "Asaman Kese", "Western Region", "Accra", "Ho", "Teshie","Nkawkaw","Sekondi-Takoradi", "Hohoe", "Lashibi",
         "Prampram", "Obuasi", "Cape coast", "Suhum", "Tafo", "Tema", "Konongo", "Aflao", "Koforidua", "Wenchi", "Bawku", "Assin foso", "Akwatia", "Sunyani", "Akim Oda", "Agona Swesru", "Bolgatanga",
         "Elimna", "Agogo", "Salaga", "Wa", "Axim", "Bibiani", "Prestea", "Achiaman", "Techiman", "Keta", "Navrongo", "Bekekum", "Community 25","Winneba","Aburi","Kpandu","Anloga",
         "Dawhenya Police Station","Mampong","Nungua", "Gbawe", "Ashaiman", "Dawhenya", "Tarkwa", "Ejura", "Yendi", "Madina", "Effiakuma", "Methodist Junction", "Central University"
         ];

        var input = document.getElementById("searchBox"),
          ul = document.getElementById("searchResults"),
          inputTerms, termsArray, prefix, terms, results, sortedResults;


        var search = function(e) {
          if (e.which == 40 || e.which == 38) return;
          inputTerms = input.value.toLowerCase();
          results = [];
          termsArray = inputTerms.split(' ');
          prefix = termsArray.length === 1 ? '' : termsArray.slice(0, -1).join(' ') + ' ';
          terms = termsArray[termsArray.length - 1].toLowerCase();

          for (var i = 0; i < searchIndex.length; i++) {
            var a = searchIndex[i].toLowerCase(),
              t = a.indexOf(terms);

            if (t > -1) {
              results.push(a);
            }
          }

          evaluateResults();
        };

        var evaluateResults = function() {
          if (results.length > 0 && inputTerms.length > 0 && terms.length !== 0) {
            sortedResults = results.sort(sortResults);
            appendResults();
          } else if (inputTerms.length > 0 && terms.length !== 0) {
            ul.innerHTML = ' ' + /* inside the colom is where the text for wrong searches */
              inputTerms +
              ' '; /* inside the colom is where the text for wrong searches */

          } else if (inputTerms.length !== 0 && terms.length === 0) {
            return;
          } else {
            clearResults();
          }
        };

        var sortResults = function(a, b) {
          if (a.indexOf(terms) < b.indexOf(terms)) return -1;
          if (a.indexOf(terms) > b.indexOf(terms)) return 1;
          return 0;
        }

        var appendResults = function() {
          clearResults();
          for (var i = 0; i < sortedResults.length && i < 5; i++) {
            var _li = document.createElement("li"),
              result = prefix +
              sortedResults[i].toLowerCase().replace(terms, '<strong>' + terms + '</strong>');

            _li.innerHTML = result;

            ul.appendChild(_li);
          }

          li = $('.form-group li');
          liSelected = li.filter('.selected');
          $('.form-group li').click(function(e) {
            $('.search input').val($(this).text());
          });
          if (ul.className !== "term-list") {
            ul.className = "term-list";
          }
        };

        var clearResults = function() {
          ul.className = "term-list hidden";
          ul.innerHTML = '';
        };

        input.addEventListener("keyup", search, false);





        var li = $('.form-group form-group');
        var liSelected;
        $(window).keydown(function(e) {
          if (e.which === 40) {
            if (liSelected) {
              liSelected.removeClass('selected');
              next = liSelected.next();
              if (next.length > 0) {
                liSelected = next.addClass('selected');
              } else {
                liSelected = li.eq(0).addClass('selected');
              }
            } else {
              liSelected = li.eq(0).addClass('selected');
            }
            liSelected.trigger('click');
          } else if (e.which === 38) {
            if (liSelected) {
              liSelected.removeClass('selected');
              next = liSelected.prev();
              if (next.length > 0) {
                liSelected = next.addClass('selected');
              } else {
                liSelected = li.last().addClass('selected');
              }
            } else {
              liSelected = li.last().addClass('selected');
            }
            liSelected.trigger('click');
          }

        });
