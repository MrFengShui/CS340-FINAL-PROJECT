function todoModifyTabbedPane(event) {
    var tabbedTitles = document.getElementsByClassName('modify-tabbed-title');
    var tabbedContents = document.getElementsByClassName('modify-tabbed-content');

    for (var i = 0; i < tabbedContents.length; i++) {
        if (tabbedContents[i]) {
            tabbedContents[i].style.display = 'none'
            tabbedTitles[i].style.backgroundColor = 'crimson';
        }
    }

    var content = document.getElementById(event.target.title + '-content');
    content.style.display = 'block';
    event.target.style.backgroundColor = 'darkred';
}

function todoBuyInfoSearch() {
    var buyInfoTable = document.getElementById('buy-info-query-table');
    var bookid = document.getElementById('buy-input-bookid').value;
    var bookname = document.getElementById('buy-input-bookname').value;
    var booktype = document.getElementById('buy-input-booktype').value;
    var bookdate = [
        document.getElementsByClassName('buy-input-bookdate')[0].value,
        document.getElementsByClassName('buy-input-bookdate')[1].value
    ];

    var postURL = '/validate/buyInfoSearch';
    var postRequest = new XMLHttpRequest();
    postRequest.open('POST', postURL);
    postRequest.setRequestHeader('Content-Type', 'application/json');

    postRequest.send(JSON.stringify({
        bookid: bookid,
        bookname: bookname,
        booktype: booktype,
        bookdate: bookdate
    }));

    postRequest.addEventListener('load', function(event) {
        for (var i = buyInfoTable.rows.length - 1; i > 0; i--) {
            buyInfoTable.deleteRow(i);
        }

        book = JSON.parse(event.target.response);
        book.forEach(function(item) {
            var rowHTML = buildBuyInfoHTML(
                item['CONSUMER_ID'],
                item['CONSUMER_FIRST_NAME'],
                item['CONSUMER_LAST_NAME'],
                item['CONSUMER_TYPE'],
                item['DATE_OF_BUY'],
                item['BOOK_ID'],
                item['BOOK_NAME'],
                item['BOOK_TYPE'],
                item['BOOK_ISBN'],
                item['BOOK_PRICE']
            );
            buyInfoTable.insertAdjacentHTML('beforeend', rowHTML);
        });
    });
}

function todoBookModifySearch() {
    var bookInfoTable = document.getElementById('book-info-modify-table');
    var bookname = document.getElementById('staff-input-bookname').value;
    var booktype = document.getElementById('staff-select-booktype').value;
    var bookauthor = document.getElementById('staff-input-bookauthor').value;
    var bookdate = [
        document.getElementsByClassName('staff-input-bookdate')[0].value,
        document.getElementsByClassName('staff-input-bookdate')[1].value
    ];
    var bookpress = document.getElementById('staff-select-bookpress').value;
    var bookprice = [
        document.getElementsByClassName('staff-input-bookprice')[0].value,
        document.getElementsByClassName('staff-input-bookprice')[1].value
    ];

    var postURL = '/validate/bookInfoSearch';
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
        for (var i = bookInfoTable.rows.length - 1; i > 0; i--) {
            bookInfoTable.deleteRow(i);
        }

        book = JSON.parse(event.target.response);
        book.forEach(function(item) {
            var rowHTML = buildBookModHTML(
                false,
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
                item['BOOK_PRICE'],
                item['BOOK_QUANTITY']
            );
            bookInfoTable.insertAdjacentHTML('beforeend', rowHTML);
        });
    });
}

function todoStorageModifySearch() {
    var bookStoreTable = document.getElementById('store-info-modify-table');
    var bookid = document.getElementById('staff-store-input-bookid').value;
    var bookname = document.getElementById('staff-store-input-bookname').value;
    var booktype = document.getElementById('staff-store-select-booktype').value;
    var bookisbn = document.getElementById('staff-store-input-bookisbn').value;
    var repoid = document.getElementById('staff-store-input-repoid').value;
    var repoaddress = document.getElementById('staff-store-input-address').value;
    var repopurpose = document.getElementById('staff-store-select-purpose').value;

    var postURL = '/validate/storeInfoSearch';
    var postRequest = new XMLHttpRequest();
    postRequest.open('POST', postURL);
    postRequest.setRequestHeader('Content-Type', 'application/json');

    postRequest.send(JSON.stringify({
        bookid: bookid,
        bookname: bookname,
        booktype: booktype,
        bookisbn: bookisbn,
        repoid: repoid,
        repoaddress: repoaddress,
        repopurpose: repopurpose
    }));

    postRequest.addEventListener('load', function(event) {
        for (var i = bookStoreTable.rows.length - 1; i > 0; i--) {
            bookStoreTable.deleteRow(i);
        }

        store = JSON.parse(event.target.response);
        store.forEach(function(item) {
            var rowHTML = buildStoreModHTML(
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

function todoVendorModifySearch() {
    var bookVendTable = document.getElementById('vend-info-modify-table');
    var bookid = document.getElementById('staff-vend-input-bookid').value;
    var booktype = document.getElementById('staff-vend-select-booktype').value;
    var repoid = document.getElementById('staff-vend-input-repoid').value;
    var vendid = document.getElementById('staff-vend-input-vendid').value;
    var vendname = document.getElementById('staff-vend-input-vendname').value;

    var postURL = '/validate/vendInfoSearch';
    var postRequest = new XMLHttpRequest();
    postRequest.open('POST', postURL);
    postRequest.setRequestHeader('Content-Type', 'application/json');

    postRequest.send(JSON.stringify({
        bookid: bookid,
        booktype: booktype,
        repoid: repoid,
        vendid: vendid,
        vendname: vendname
    }));

    postRequest.addEventListener('load', function(event) {
        for (var i = bookVendTable.rows.length - 1; i > 0; i--) {
            bookVendTable.deleteRow(i);
        }

        vend = JSON.parse(event.target.response);
        vend.forEach(function(item) {
            var rowHTML = buildVendorModHTML(
                item['VENDOR_ID'],
                item['VENDOR_NAME'],
                item['VENDOR_ADDRESS_CITY'],
                item['VENDOR_ADDRESS_STATE'],
                item['VENDOR_ADDRESS_COUNTRY'],
                item['VENDOR_PHONE'],
                item['VENDOR_EMAIL'],
                item['BOOK_TYPE']
            );
            bookVendTable.insertAdjacentHTML('beforeend', rowHTML);
        });
    });
}

function todoBookModifyEdit(event) {
    todoOpenBookModal();
    var row = event.parentNode.parentNode;
    document.getElementById('book-modal-input-bookid').value = row.cells[1].innerHTML;
    document.getElementById('book-modal-input-bookname').value = row.cells[2].innerHTML;
    document.getElementById('book-modal-select-booktype').selectedIndex = antiConvertType(row.cells[3].innerHTML) + 1;
    document.getElementById('book-modal-input-bookauthor').value = row.cells[4].innerHTML;
    document.getElementById('book-modal-input-bookedition').value = row.cells[5].innerHTML;
    document.getElementById('book-modal-input-bookdate').value = row.cells[6].innerHTML;
    document.getElementById('book-modal-select-bookpress').value = antiConvertPress(row.cells[7].innerHTML);
    document.getElementById('book-modal-input-bookisbn').value = row.cells[8].innerHTML;
    document.getElementById('book-modal-input-bookprice').value = row.cells[9].innerHTML.substr(1);
    document.getElementById('book-modal-input-bookquantity').value = row.cells[10].innerHTML;
}
