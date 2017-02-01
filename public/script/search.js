function todoConsumerTabbedPane(event) {
    var tabbedTitles = document.getElementsByClassName('consumer-tabbed-title');
    var tabbedContents = document.getElementsByClassName('consumer-tabbed-content');

    for (var i = 0; i < tabbedContents.length; i++) {
        if (tabbedContents[i]) {
            tabbedContents[i].style.display = 'none'
            tabbedTitles[i].style.backgroundColor = 'crimson';
        }
    }

    var content = document.getElementById('consumer-' + event.target.title + '-content');
    content.style.display = 'block';
    event.target.style.backgroundColor = 'darkred';
}

function todoConsumerBookSearch() {
    var bookInfoTable = document.getElementById('consumer-book-info-table');
    var bookname = document.getElementById('consumer-input-bookname').value;
    var booktype = document.getElementById('consumer-select-booktype').value;
    var bookauthor = document.getElementById('consumer-input-bookauthor').value;
    var bookdate = [
        document.getElementsByClassName('consumer-input-bookdate')[0].value,
        document.getElementsByClassName('consumer-input-bookdate')[1].value
    ];
    var bookpress = document.getElementById('consumer-select-bookpress').value;
    var bookprice = [
        document.getElementsByClassName('consumer-input-bookprice')[0].value,
        document.getElementsByClassName('consumer-input-bookprice')[1].value
    ];

    var postURL = '/validate/consumerBookSearch';
    var postRequest = new XMLHttpRequest();
    postRequest.open('POST', postURL);
    postRequest.setRequestHeader('Content-Type', 'application/json');

    postRequest.send(JSON.stringify({
        bookname: bookname,
        booktype: booktype,
        bookauthor: bookauthor,
        bookdate: bookdate,
        bookpress: bookpress,
        bookprice: bookprice
    }));

    postRequest.addEventListener('load', function(event) {
        console.log(event.target.response);
        for (var i = bookInfoTable.rows.length - 1; i > 0; i--) {
            bookInfoTable.deleteRow(i);
        }

        book = JSON.parse(event.target.response);
        book.forEach(function(item) {
            var rowHTML = buildBookInfoHTML(
                item['BOOK_ID'],
                item['BOOK_NAME'],
                item['BOOK_TYPE'],
                item['BOOK_AUTHOR_FIRST_NAME'],
                item['BOOK_AUTHOR_LAST_NAME'],
                item['BOOK_EDITION'],
                item['BOOK_PUBLISH_YEAR'],
                item['BOOK_PUBLISH_MONTH'],
                item['BOOK_PUBLISH_DATE'],
                item['BOOK_PUBLISH_PRESS'],
                item['BOOK_ISBN'],
                item['BOOK_PRICE']
            );
            bookInfoTable.insertAdjacentHTML('beforeend', rowHTML);
        });
    });
}

function todoBookStorageSearch() {
    var bookStoreTable = document.getElementById('consumer-repo-info-table');
    var bookid = document.getElementById('consumer-repo-input-bookid').value;
    var bookname = document.getElementById('consumer-repo-input-bookname').value;
    var booktype = document.getElementById('consumer-repo-select-booktype').value;
    var bookisbn = document.getElementById('consumer-repo-input-bookisbn').value;
    var repopurpose = document.getElementById('consumer-repo-select-purpose').value;

    var postURL = '/validate/consumerStoreSearch';
    var postRequest = new XMLHttpRequest();
    postRequest.open('POST', postURL);
    postRequest.setRequestHeader('Content-Type', 'application/json');

    postRequest.send(JSON.stringify({
        bookid: bookid,
        bookname: bookname,
        booktype: booktype,
        bookisbn: bookisbn,
        repopurpose: repopurpose
    }));

    postRequest.addEventListener('load', function(event) {
        console.log(event.target.response);
        for (var i = bookStoreTable.rows.length - 1; i > 0; i--) {
            bookStoreTable.deleteRow(i);
        }

        book = JSON.parse(event.target.response);
        book.forEach(function(item) {
            var rowHTML = buildStoreInfoHTML(
                item['BOOK_ID'],
                item['BOOK_NAME'],
                item['BOOK_TYPE'],
                item['BOOK_QUANTITY'],
                item['REPOSITORY_ID'],
                item['REPOSITORY_ADDRESS_STREET'],
                item['REPOSITORY_ADDRESS_NUMBER'],
                item['REPOSITORY_GUARD_ID']
            );
            bookStoreTable.insertAdjacentHTML('beforeend', rowHTML);
        });
    });
}
