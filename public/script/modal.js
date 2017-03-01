function validateInputValue() {
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] == null || arguments[i] == '' || arguments[i] == '0' || arguments[i] == 'anypress' || arguments[i] == 'undefined') {
            return false;
        }
    }

    return true;
}
/**/
function todoClearBookModal() {
    document.getElementById('book-modal-input-bookid').value = '';
    document.getElementById('book-modal-input-bookname').value = '';
    document.getElementById('book-modal-select-booktype').selectedIndex = 0;
    document.getElementById('book-modal-input-bookauthor').value = '';
    document.getElementById('book-modal-input-bookedition').value = '';
    document.getElementById('book-modal-input-bookdate').value = '';
    document.getElementById('book-modal-select-bookpress').selectedIndex = 0;
    document.getElementById('book-modal-input-bookisbn').value = '';
    document.getElementById('book-modal-input-bookprice').value = 0;
    document.getElementById('book-modal-input-bookquantity').value = 0;
}

function todoOpenBookModal() {
    var backdrop = document.getElementById('book-modal-backdrop');
    var dialog = document.getElementById('book-modal-framework');

    backdrop.style.display = 'inline-flex';
    dialog.style.display = 'inline-flex';
}

function todoCloseBookModal() {
    var backdrop = document.getElementById('book-modal-backdrop');
    var dialog = document.getElementById('book-modal-framework');

    backdrop.style.display = 'none';
    dialog.style.display = 'none';

    todoClearBookModal();
}

function todoClearStoreModal() {
    document.getElementById('store-modal-input-repoid').value = '';
    document.getElementById('store-modal-input-repostreet').value = '';
    document.getElementById('store-modal-input-reponumber').value = '';
    document.getElementById('store-modal-select-purpose').selectedIndex = 0;
    document.getElementById('store-modal-input-repoguard').value = '';
    document.getElementById('store-modal-input-bookid').value = '';
    document.getElementById('store-modal-input-vendid').value = '';
}

function todoOpenStoreModal() {
    var backdrop = document.getElementById('store-modal-backdrop');
    var dialog = document.getElementById('store-modal-framework');

    backdrop.style.display = 'inline-flex';
    dialog.style.display = 'inline-flex';
}

function todoCloseStoreModal() {
    var backdrop = document.getElementById('store-modal-backdrop');
    var dialog = document.getElementById('store-modal-framework');

    backdrop.style.display = 'none';
    dialog.style.display = 'none';

    todoClearStoreModal();
}

function todoOpenVendModal() {
    var backdrop = document.getElementById('vend-modal-backdrop');
    var dialog = document.getElementById('vend-modal-framework');

    backdrop.style.display = 'inline-flex';
    dialog.style.display = 'inline-flex';
}

function todoCloseVendModal() {
    var backdrop = document.getElementById('vend-modal-backdrop');
    var dialog = document.getElementById('vend-modal-framework');

    backdrop.style.display = 'none';
    dialog.style.display = 'none';
}
/**/
function todoAddTableBookInfo() {
    var bookInfoTable = document.getElementById('book-info-modify-table');
    var bookid = document.getElementById('book-modal-input-bookid').value;
    var bookname = document.getElementById('book-modal-input-bookname').value;
    var booktype = document.getElementById('book-modal-select-booktype').value;
    var bookauthor = document.getElementById('book-modal-input-bookauthor').value;
    var bookedition = document.getElementById('book-modal-input-bookedition').value;
    var bookdate = document.getElementById('book-modal-input-bookdate').value;
    var bookpress = document.getElementById('book-modal-select-bookpress').value;
    var bookisbn = document.getElementById('book-modal-input-bookisbn').value;
    var bookprice = document.getElementById('book-modal-input-bookprice').value;
    var bookquantity = document.getElementById('book-modal-input-bookquantity').value;
    var flag = validateInputValue(bookid, bookname, booktype, bookauthor, bookedition, bookdate, bookpress, bookisbn, bookquantity);

    if (flag) {
        for (var i = bookInfoTable.rows.length - 1; i > 0; i--) {
            if (!bookInfoTable.rows[i].cells[0].children[0].checked) {
                bookInfoTable.deleteRow(i);
            }
        }

        var rowHTML = buildBookModHTML(
            true,
            bookid,
            bookname,
            parseInt(booktype),
            bookauthor.split(' ')[0],
            bookauthor.split(' ')[1],
            bookedition,
            bookdate.split('-')[0],
            bookdate.split('-')[1],
            bookdate.split('-')[2],
            bookpress,
            bookisbn,
            bookprice,
            bookquantity
        );

        bookInfoTable.insertAdjacentHTML('beforeend', rowHTML);
        todoCloseBookModal();
    }
}

function todoAddSingleBookInfo() {
    var bookid = document.getElementById('book-modal-input-bookid').value;
    var bookname = document.getElementById('book-modal-input-bookname').value;
    var booktype = document.getElementById('book-modal-select-booktype').value;
    var bookauthor = document.getElementById('book-modal-input-bookauthor').value;
    var bookedition = document.getElementById('book-modal-input-bookedition').value;
    var bookdate = document.getElementById('book-modal-input-bookdate').value;
    var bookpress = document.getElementById('book-modal-select-bookpress').value;
    var bookisbn = document.getElementById('book-modal-input-bookisbn').value;
    var bookprice = document.getElementById('book-modal-input-bookprice').value;
    var bookquantity = document.getElementById('book-modal-input-bookquantity').value;
    var flag = validateInputValue(bookid, bookname, booktype, bookauthor, bookedition, bookdate, bookpress, bookisbn, bookquantity);

    if (flag) {
        var postURL = '/validate/bookInfoAdd';
        var postRequest = new XMLHttpRequest();
        postRequest.open('POST', postURL);
        postRequest.setRequestHeader('Content-Type', 'application/json');

        postRequest.send(JSON.stringify([{
            bookid: bookid,
            bookname: bookname,
            booktype: booktype,
            bookfname: bookauthor.split(' ')[0],
            booklname: bookauthor.split(' ')[1],
            bookedition: bookedition,
            bookyear: bookdate.split('-')[0],
            bookmonth: bookdate.split('-')[1],
            bookdate: bookdate.split('-')[2],
            bookpress: convertPress(bookpress),
            bookisbn, bookisbn,
            bookprice: bookprice,
            bookquantity: bookquantity
        }]));

        postRequest.addEventListener('load', function(event) {
            todoCloseBookModal();

            if (event.target.response == 'success') {
                alert('Echo: Add a new book successfully.');
            } else {
                alert('Error: Add a new book unsuccessfully.');
            }
        });
    }
}

function todoChangeSingleBookInfo() {
    var bookid = document.getElementById('book-modal-input-bookid').value;
    var bookname = document.getElementById('book-modal-input-bookname').value;
    var booktype = document.getElementById('book-modal-select-booktype').value;
    var bookauthor = document.getElementById('book-modal-input-bookauthor').value;
    var bookedition = document.getElementById('book-modal-input-bookedition').value;
    var bookdate = document.getElementById('book-modal-input-bookdate').value;
    var bookpress = document.getElementById('book-modal-select-bookpress').value;
    var bookisbn = document.getElementById('book-modal-input-bookisbn').value;
    var bookprice = document.getElementById('book-modal-input-bookprice').value;
    var bookquantity = document.getElementById('book-modal-input-bookquantity').value;
    var flag = validateInputValue(bookid, bookname, booktype, bookauthor, bookedition, bookdate, bookpress, bookisbn, bookquantity);

    if (flag) {
        var postURL = '/validate/bookInfoChange';
        var postRequest = new XMLHttpRequest();
        postRequest.open('POST', postURL);
        postRequest.setRequestHeader('Content-Type', 'application/json');

        postRequest.send(JSON.stringify({
            bookid: bookid,
            bookname: bookname,
            booktype: booktype,
            bookfname: bookauthor.split(' ')[0],
            booklname: bookauthor.split(' ')[1],
            bookedition: bookedition,
            bookyear: bookdate.split('-')[0],
            bookmonth: bookdate.split('-')[1],
            bookdate: bookdate.split('-')[2],
            bookpress: convertPress(bookpress),
            bookisbn, bookisbn,
            bookprice: bookprice,
            bookquantity: bookquantity
        }));

        postRequest.addEventListener('load', function(event) {
            console.log(event.target.response);
            todoCloseBookModal();

            if (event.target.response == 'success') {
                alert('Echo: Change a book successfully.');
            } else {
                alert('Error: Change a book unsuccessfully.');
            }
        });
    }
}
/**/
function todoAddTableStoreInfo() {
    var storeInfoTable = document.getElementById('store-info-modify-table');
    var repoid = document.getElementById('store-modal-input-repoid').value;
    var repostreet = document.getElementById('store-modal-input-repostreet').value;
    var reponumber = document.getElementById('store-modal-input-reponumber').value;
    var repopurpose = document.getElementById('store-modal-select-purpose').value;
    var repoguard = document.getElementById('store-modal-input-repoguard').value;
    var bookid = document.getElementById('store-modal-input-bookid').value;
    var vendid = document.getElementById('store-modal-input-vendid').value;
    var flag = validateInputValue(repoid, repostreet, reponumber, repopurpose, repoguard, bookid, vendid);

    if (flag) {
        for (var i = storeInfoTable.rows.length - 1; i > 0; i--) {
            if (!storeInfoTable.rows[i].cells[0].children[0].checked) {
                storeInfoTable.deleteRow(i);
            }
        }

        var rowHTML = buildStoreModHTML(
            true,
            bookid,
            null,
            null,
            null,
            repoid,
            repostreet,
            reponumber,
            parseInt(repopurpose),
            repoguard,
            vendid
        );

        storeInfoTable.insertAdjacentHTML('beforeend', rowHTML);
        todoCloseStoreModal();
    }
}

function todoAddSingleStoreInfo() {
    var repoid = document.getElementById('store-modal-input-repoid').value;
    var repostreet = document.getElementById('store-modal-input-repostreet').value;
    var reponumber = document.getElementById('store-modal-input-reponumber').value;
    var repopurpose = document.getElementById('store-modal-select-purpose').value;
    var repoguard = document.getElementById('store-modal-input-repoguard').value;
    var bookid = document.getElementById('store-modal-input-bookid').value;
    var vendid = document.getElementById('store-modal-input-vendid').value;
    var flag = validateInputValue(repoid, repostreet, reponumber, repopurpose, repoguard, bookid, vendid);

    if (flag) {
        var postURL = '/validate/storeInfoAdd';
        var postRequest = new XMLHttpRequest();
        postRequest.open('POST', postURL);
        postRequest.setRequestHeader('Content-Type', 'application/json');

        postRequest.send(JSON.stringify([{
            repoid: repoid,
            repostreet: repostreet,
            reponumber: reponumber,
            repopurpose: parseInt(repopurpose),
            repoguard: repoguard,
            bookid: bookid,
            vendid: vendid
        }]));

        postRequest.addEventListener('load', function(event) {
            console.log(event.target.response);
            todoCloseStoreModal();

            if (event.target.response == 'success') {
                alert('Echo: Add a new store successfully.');
            } else {
                alert('Error: Add a new store unsuccessfully.');
            }
        });
    }
}

function todoChangeSingleStoreInfo() {
    var repoid = document.getElementById('store-modal-input-repoid').value;
    var repostreet = document.getElementById('store-modal-input-repostreet').value;
    var reponumber = document.getElementById('store-modal-input-reponumber').value;
    var repopurpose = document.getElementById('store-modal-select-purpose').value;
    var repoguard = document.getElementById('store-modal-input-repoguard').value;
    var bookid = document.getElementById('store-modal-input-bookid').value;
    var vendid = document.getElementById('store-modal-input-vendid').value;
    var flag = validateInputValue(bookid, repoid, repostreet, reponumber, repopurpose, repoguard, vendid);

    if (flag) {
        var postURL = '/validate/storeInfoChange';
        var postRequest = new XMLHttpRequest();
        postRequest.open('POST', postURL);
        postRequest.setRequestHeader('Content-Type', 'application/json');

        postRequest.send(JSON.stringify({
            repoid: repoid,
            repostreet: repostreet,
            reponumber: reponumber,
            repopurpose: parseInt(repopurpose),
            repoguard: repoguard,
            bookid: bookid,
            vendid: vendid
        }));

        postRequest.addEventListener('load', function(event) {
            console.log(event.target.response);
            todoCloseStoreModal();

            if (event.target.response == 'success') {
                alert('Echo: Change a store successfully.');
            } else {
                alert('Error: Change a store unsuccessfully.');
            }
        });
    }
}
