function todoClearBuyModalInput() {
    document.getElementById('input-book-isbn').value = '';
}

function todoOpenBuyModal() {
    var bookBuyTable = document.getElementById('consumer-buy-book-table');

    if (bookBuyTable.rows[bookBuyTable.rows.length - 1].cells.length == 2) {
        alert('Warning: You are ready to make payment.')
    } else {
        var backdrop = document.getElementById('buy-modal-backdrop');
        var modal = document.getElementById('buy-modal-framework');

        backdrop.style.display = 'inline-flex';
        modal.style.display = 'inline-flex';
    }
}

function todoCloseBuyModal() {
    var backdrop = document.getElementById('buy-modal-backdrop');
    var modal = document.getElementById('buy-modal-framework');

    backdrop.style.display = 'none';
    modal.style.display = 'none';

    todoClearBuyModalInput();
}

function totdoAddBuyList() {
    var bookBuyTable = document.getElementById('consumer-buy-book-table');
    var bookisbn = document.getElementById('input-book-isbn').value;

    var postURL = '/validate/consumerBuyBook';
    var postRequest = new XMLHttpRequest();
    postRequest.open('POST', postURL);
    postRequest.setRequestHeader('Content-Type', 'application/json');

    postRequest.send(JSON.stringify({
        bookisbn: bookisbn
    }));

    postRequest.addEventListener('load', function(event) {
        console.log(event.target.response);
        book = JSON.parse(event.target.response);
        var rowHTML = buildBuyBookHTML(
            book['BOOK_ID'],
            book['BOOK_NAME'],
            book['BOOK_PRICE']
        );
        bookBuyTable.insertAdjacentHTML('beforeend', rowHTML);
        todoCloseBuyModal();
    });
}

function todoCalculatePrice() {
    var bookBuyTable = document.getElementById('consumer-buy-book-table');

    if (bookBuyTable.rows[bookBuyTable.rows.length - 1].cells.length == 2) {
        alert('Warning: You are ready to make payment.')
    } else {
        var price = 0;

        for (var i = 1; i < bookBuyTable.rows.length; i++) {
            if (bookBuyTable.rows[i]) {
                price += parseFloat(bookBuyTable.rows[i].cells[2].innerHTML.substr(1));
            }
        }
        var rowHTML = buildPriceTotalHTML(price.toFixed(2));
        bookBuyTable.insertAdjacentHTML('beforeend', rowHTML);
    }
}
