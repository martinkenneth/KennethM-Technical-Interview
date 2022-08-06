"use strict;"

const function_type = 'function';

// http://deckofcardsapi.com/
let cardApiData = {
    'deckIdent': 'new',
    'urlPrefix': 'http://deckofcardsapi.com/api/deck/',
    'urlPostfix': '/draw/',
    'params': {'count': 5}
};

getNewCardHand(fetchNewDeck=true);
document.getElementById('draw_from_deck').onclick = drawCards;

// getNewCardHand()
// params: fetchNewDeck (bool) - defines whether the request should obtain a new deck
// return: void
function getNewCardHand(fetchNewDeck=false) {
    let fetchURL;
    if (fetchNewDeck) fetchURL = cardApiData.urlPrefix.concat('new', cardApiData.urlPostfix);
    else fetchURL = cardApiData.urlPrefix.concat(cardApiData.deckIdent, cardApiData.urlPostfix);

    jQuery.ajax({
        type: 'GET',
        url: fetchURL,
        dataType: 'json',
        data: cardApiData.params,
        cache: false,
        error: function (response) {
            console.log("jQuery.ajax could not complete the query.");
            console.log(response);
        },
        success: function (obj) {
            if ('success' in obj && obj.success) {
                console.log(obj);
                let currentCardHandSection = document.getElementById('current_card_hand');
                if (typeof addImageElement === function_type) {
                    for (let i = 0; i < obj.cards.length; i++) {
                        let cardImageElement = addImageElement(
                            obj.cards[i].image, 
                            obj.cards[i].value
                        );
                        currentCardHandSection.appendChild(cardImageElement);
                        document.getElementById('current_card_deck').innerHTML = obj.deck_id;
                        document.getElementById('deck_count_remaining').innerHTML = obj.remaining;
                    }
                }
            }
            else {
                console.log({'success': false, 'feelingsOnTheMatter': '😑'});
            }
        }
    });
}


// drawCards()
// params: none
// return: none
function drawCards() {
    console.log('Drawing new cards!')
    getNewCardHand();
}