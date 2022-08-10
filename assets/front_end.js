"use strict;";

const function_type = "function";

// http://deckofcardsapi.com/
let cardApiData = {
    deckIdent: "new",
    urlPrefix: "http://deckofcardsapi.com/api/deck/",
    urlPostfix: "/draw/",
    params: { count: 5 },
};

// Check to see if we have data in localStorage, if not create a new instance
function setSession() {
    if (window.localStorage["deck_id"]) {
        cardApiData.deckIdent = window.localStorage["deck_id"];
        getNewCardHand();
    } else {
        cardApiData.deckIdent = "new";
        getNewCardHand((fetchNewDeck = true));
    }
}

setSession();
document.getElementById("draw_from_deck").onclick = getNewCardHand;

// getNewCardHand()
// params: fetchNewDeck (bool) - defines whether the request should obtain a new deck
// return: void
function getNewCardHand(fetchNewDeck = false) {
    let fetchURL;
    // Reset and retrieve a new deck from API
    if (fetchNewDeck) fetchURL = cardApiData.urlPrefix.concat(cardApiData.deckIdent, cardApiData.urlPostfix);
    // Use preexisitng deck
    else fetchURL = cardApiData.urlPrefix.concat(cardApiData.deckIdent, cardApiData.urlPostfix);

    jQuery.ajax({
        type: "GET",
        url: fetchURL,
        dataType: "json",
        data: cardApiData.params,
        cache: false,
        error: function (response) {
            console.log("jQuery.ajax could not complete the query.");
            console.log(response);
        },
        success: function (obj) {
            if (obj.success) {
                console.log(obj);
                // Check if deck_id is stored in session and use it if it is
                if (window.localStorage.hasOwnProperty("deck_id")) {
                    console.log(window.localStorage["deck_id"]);
                    cardApiData.deckIdent = window.localStorage["deck_id"];
                    // deck_id not stored yet, so store it in session
                } else {
                    cardApiData.deckIdent = obj.deck_id;
                    window.localStorage.setItem("deck_id", obj.deck_id);
                    console.log(window.localStorage);
                }
                let currentCardHandSection = document.getElementById("current_card_hand");

                const sortedCards = obj.cards.sort(sortCurrCards);

                // Reset and render/rerender currCards into the DOM
                currentCardHandSection.textContent = "";
                for (let i = 0; i < sortedCards.length; i++) {
                    let cardImageElement = addImageElement(sortedCards[i].image, sortedCards[i].value);
                    currentCardHandSection.appendChild(cardImageElement);
                }

                // Moved outside of for-loop (unnecessary to iterate through)
                document.getElementById("current_card_deck").innerHTML = cardApiData.deckIdent;
                document.getElementById("deck_count_remaining").innerHTML = obj.remaining;
            } else {
                window.localStorage.clear();
                console.log(localStorage);
                console.log({ success: false, feelingsOnTheMatter: "😑" });
                setSession();
            }
        },
    });
}

/* ==================================
    Implementations
===================================*/
// addImageElement()
// params: image (string) , value (int)
// return: DocumentFragment
/*

*/
function addImageElement(image, value) {
    const fragment = document.createDocumentFragment();
    const img = fragment.appendChild(document.createElement("img"));
    img.src = image;
    img.id = value;

    return fragment;
}

// sortCurrCards()
// params: cardsToAppend ([])
// return: none

/*
    Sorting implementation derived from:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
*/
function sortCurrCards(a, b) {
    switch (a.value) {
        case "JACK":
            a.value = 11;
            break;
        case "QUEEN":
            a.value = 12;
            break;
        case "KING":
            a.value = 13;
            break;
        case "ACE":
            a.value = 1;
            break;
        default:
            a.value = parseInt(a.value);
    }

    switch (b.value) {
        case "JACK":
            b.value = 11;
            break;
        case "QUEEN":
            b.value = 12;
            break;
        case "KING":
            b.value = 13;
            break;
        case "ACE":
            b.value = 1;
            break;
        default:
            b.value = parseInt(b.value);
    }

    // console.log("inside SORT", a.value, b.value);

    if (a.value > b.value) {
        return 1;
    }
    if (a.value < b.value) {
        return -1;
    }
    return 0;
}
