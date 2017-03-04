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
    var buydate = [
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
        buydate: buydate
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
                false,
                item['BOOK_ID'],
                item['BOOK_NAME'],
                item['BOOK_TYPE'],
                item['BOOK_QUANTITY'],
                item['REPOSITORY_ID'],
                item['REPOSITORY_ADDRESS_STREET'],
                item['REPOSITORY_ADDRESS_NUMBER'],
                item['REPOSITORY_PURPOSE'],
                item['REPOSITORY_GUARD_ID'],
                item['REPOSITORY_VENDOR_ID']
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
            var rowHTML = buildVendModHTML(
                false,
                item['VENDOR_ID'],
                item['VENDOR_NAME'],
                item['VENDOR_ADDRESS_CITY'],
                item['VENDOR_ADDRESS_STATE'],
                item['VENDOR_ADDRESS_COUNTRY'],
                item['VENDOR_PHONE'],
                item['VENDOR_EMAIL'],
                item['VENDOR_REPOSITORY_ID'],
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

function todoAddMultipleBookInfo() {
    var bookInfoTable = document.getElementById('book-info-modify-table');
    var data = [];

    for (var i = bookInfoTable.rows.length - 1; i > 0; i--) {
        if (bookInfoTable.rows[i].cells[0].children[0].checked) {
            var bookid = bookInfoTable.rows[i].cells[1].innerHTML;
            var bookname = bookInfoTable.rows[i].cells[2].innerHTML;
            var booktype = bookInfoTable.rows[i].cells[3].innerHTML;
            var bookauthor = bookInfoTable.rows[i].cells[4].innerHTML;
            var bookedition = bookInfoTable.rows[i].cells[5].innerHTML;
            var bookdate = bookInfoTable.rows[i].cells[6].innerHTML;
            var bookpress = bookInfoTable.rows[i].cells[7].innerHTML;
            var bookisbn = bookInfoTable.rows[i].cells[8].innerHTML;
            var bookprice = bookInfoTable.rows[i].cells[9].innerHTML;
            var bookquantity = bookInfoTable.rows[i].cells[10].innerHTML;
            var row = {
                bookid: bookid,
                bookname: bookname,
                booktype: antiConvertType(booktype),
                bookfname: bookauthor.split(' ')[0],
                booklname: bookauthor.split(' ')[1],
                bookedition: parseInt(bookedition),
                bookyear: parseInt(bookdate.split('-')[0]),
                bookmonth: parseInt(bookdate.split('-')[1]),
                bookdate: parseInt(bookdate.split('-')[2]),
                bookpress: convertPress(bookpress),
                bookisbn: Number(bookisbn),
                bookprice: parseFloat(bookprice.substr(1)),
                bookquantity: parseInt(bookquantity)
            };
            data.push(row);
        }
    }

    if (data.length > 0) {
        var postURL = '/validate/bookInfoAdd';
        var postRequest = new XMLHttpRequest();
        postRequest.open('POST', postURL);
        postRequest.setRequestHeader('Content-Type', 'application/json');
        postRequest.send(JSON.stringify(data));

        postRequest.addEventListener('load', function(event) {
            todoCloseBookModal();

            if (event.target.response == 'success') {
                alert('Echo: Add a new book successfully.');
            } else {
                alert('Error: Add a new book unsuccessfully.');
            }
        });
    } else {
        alert('Warning: Please add a new book into table.');
    }
}

function todoDeleteSingleBookInfo(event) {
    var row = event.parentNode.parentNode;
    var bookid = row.cells[1].innerHTML;

    var postURL = '/validate/bookInfoRemove';
    var postRequest = new XMLHttpRequest();
    postRequest.open('POST', postURL);
    postRequest.setRequestHeader('Content-Type', 'application/json');
    postRequest.send(JSON.stringify([{bookid: bookid}]));

    postRequest.addEventListener('load', function(event) {
        if (event.target.response == 'success') {
            alert('Echo: Remove a book successfully.');
        } else {
            alert('Error: Remove a book unsuccessfully.');
        }
    });
}

function todoDeleteMultipleBookInfo() {
    var bookInfoTable = document.getElementById('book-info-modify-table');
    var data = [];

    for (var i = bookInfoTable.rows.length - 1; i > 0; i--) {
        if (bookInfoTable.rows[i].cells[0].children[0].checked) {
            var bookid = bookInfoTable.rows[i].cells[1].innerHTML;
            var row = {bookid: bookid};
            data.push(row);
        }
    }

    var postURL = '/validate/bookInfoRemove';
    var postRequest = new XMLHttpRequest();
    postRequest.open('POST', postURL);
    postRequest.setRequestHeader('Content-Type', 'application/json');
    postRequest.send(JSON.stringify(data));

    postRequest.addEventListener('load', function(event) {
        if (event.target.response == 'success') {
            alert('Echo: Remove books successfully.');
        } else {
            alert('Error: Remove books unsuccessfully.');
        }
    });
}
/**/
function todoAddMultipleStoreInfo() {
    var storeInfoTable = document.getElementById('store-info-modify-table');
    var data = [];

    for (var i = storeInfoTable.rows.length - 1; i > 0; i--) {
        if (storeInfoTable.rows[i].cells[0].children[0].checked) {
            var bookid = storeInfoTable.rows[i].cells[1].innerHTML;
            var repoid = storeInfoTable.rows[i].cells[5].innerHTML;
            var repostreet = storeInfoTable.rows[i].cells[6].innerHTML.split(' ')[0];
            var reponumber = storeInfoTable.rows[i].cells[6].innerHTML.split(' ')[1];
            var repopurpose = storeInfoTable.rows[i].cells[7].innerHTML;
            var repoguard = storeInfoTable.rows[i].cells[8].innerHTML;
            var vendid = storeInfoTable.rows[i].cells[9].innerHTML;
            var row = {
                bookid: bookid,
                repoid: repoid,
                repostreet: repostreet,
                reponumber: reponumber,
                repopurpose: convertPurpose(repopurpose),
                repoguard: repoguard,
                vendid: vendid
            };
            data.push(row);
        }
    }

    if (data.length > 0) {
        var postURL = '/validate/storeInfoAdd';
        var postRequest = new XMLHttpRequest();
        postRequest.open('POST', postURL);
        postRequest.setRequestHeader('Content-Type', 'application/json');
        postRequest.send(JSON.stringify(data));

        postRequest.addEventListener('load', function(event) {
            todoCloseStoreModal();

            if (event.target.response == 'success') {
                alert('Echo: Add a new store successfully.');
            } else {
                alert('Error: Add a new store unsuccessfully.');
            }
        });
    } else {
        alert('Warning: Please add a new store into table.');
    }
}

function todoStoreModifyEdit(event) {
    todoOpenStoreModal();
    var row = event.parentNode.parentNode;
    document.getElementById('store-modal-input-bookid').value = row.cells[1].innerHTML;
    document.getElementById('store-modal-input-repoid').value = row.cells[5].innerHTML;
    document.getElementById('store-modal-input-repostreet').value = row.cells[6].innerHTML.split(' ')[0];
    document.getElementById('store-modal-input-reponumber').value = row.cells[6].innerHTML.split(' ')[1];
    document.getElementById('store-modal-select-purpose').selectedIndex = antiConvertPurpose(row.cells[7].innerHTML) + 1;
    document.getElementById('store-modal-input-repoguard').value = row.cells[8].innerHTML;
    document.getElementById('store-modal-input-vendid').value = row.cells[9].innerHTML;
}

function todoDeleteSingleStoreInfo(event) {
    var row = event.parentNode.parentNode;
    var repoid = row.cells[5].innerHTML;

    var postURL = '/validate/storeInfoRemove';
    var postRequest = new XMLHttpRequest();
    postRequest.open('POST', postURL);
    postRequest.setRequestHeader('Content-Type', 'application/json');
    postRequest.send(JSON.stringify([{repoid: repoid}]));

    postRequest.addEventListener('load', function(event) {
        if (event.target.response == 'success') {
            alert('Echo: Remove a store successfully.');
        } else {
            alert('Error: Remove a store unsuccessfully.');
        }
    });
}

function todoDeleteMultipleStoreInfo() {
    var storeInfoTable = document.getElementById('store-info-modify-table');
    var data = [];

    for (var i = storeInfoTable.rows.length - 1; i > 0; i--) {
        if (storeInfoTable.rows[i].cells[0].children[0].checked) {
            var repoid = storeInfoTable.rows[i].cells[5].innerHTML;
            var row = {repoid: repoid};
            data.push(row);
        }
    }

    var postURL = '/validate/storeInfoRemove';
    var postRequest = new XMLHttpRequest();
    postRequest.open('POST', postURL);
    postRequest.setRequestHeader('Content-Type', 'application/json');
    postRequest.send(JSON.stringify(data));

    postRequest.addEventListener('load', function(event) {
        if (event.target.response == 'success') {
            alert('Echo: Remove store successfully.');
        } else {
            alert('Error: Remove store unsuccessfully.');
        }
    });
}
/**/
function todoAddMultipleVendInfo() {
    var vendInfoTable = document.getElementById('vend-info-modify-table');
    var data = [];

    for (var i = vendInfoTable.rows.length - 1; i > 0; i--) {
        if (vendInfoTable.rows[i].cells[0].children[0].checked) {
            var vendid = vendInfoTable.rows[i].cells[1].innerHTML;
            var vendname = vendInfoTable.rows[i].cells[2].innerHTML;
            var vendcity = vendInfoTable.rows[i].cells[3].innerHTML.split(', ')[0];
            var vendstate = vendInfoTable.rows[i].cells[3].innerHTML.split(', ')[1];
            var vendcountry = vendInfoTable.rows[i].cells[3].innerHTML.split(', ')[2];
            var vendphone = vendInfoTable.rows[i].cells[4].innerHTML;
            var vendemail = vendInfoTable.rows[i].cells[5].innerHTML;
            var repoid = vendInfoTable.rows[i].cells[6].innerHTML;
            var row = {
                vendid: vendid,
                vendname: vendname,
                vendcity: vendcity,
                vendstate: vendstate,
                vendcountry: vendcountry,
                vendphone: vendphone,
                vendemail: vendemail,
                repoid: repoid
            };
            data.push(row);
        }
    }

    if (data.length > 0) {
        var postURL = '/validate/vendInfoAdd';
        var postRequest = new XMLHttpRequest();
        postRequest.open('POST', postURL);
        postRequest.setRequestHeader('Content-Type', 'application/json');
        postRequest.send(JSON.stringify(data));

        postRequest.addEventListener('load', function(event) {
            todoCloseVendModal();

            if (event.target.response == 'success') {
                alert('Echo: Add a new vend successfully.');
            } else {
                alert('Error: Add a new vend unsuccessfully.');
            }
        });
    } else {
        alert('Warning: Please add a new vend into table.');
    }
}

function todoVendModifyEdit(event) {
    todoOpenVendModal();
    var row = event.parentNode.parentNode;
    document.getElementById('vend-modal-input-vendid').value = row.cells[1].innerHTML;
    document.getElementById('vend-modal-input-vendname').value = row.cells[2].innerHTML;
    document.getElementById('vend-modal-input-vendcity').value = row.cells[3].innerHTML.split(', ')[0];
    document.getElementById('vend-modal-input-vendstate').value = antiConvertState(row.cells[3].innerHTML.split(', ')[1]);
    document.getElementById('vend-modal-input-vendcountry').value = antiConvertCountry(row.cells[3].innerHTML.split(', ')[2]);
    document.getElementById('vend-modal-input-vendphone').value = row.cells[4].innerHTML;
    document.getElementById('vend-modal-input-vendemail').value = row.cells[5].innerHTML;
    document.getElementById('vend-modal-input-repoid').value = row.cells[6].innerHTML;
}

function todoDeleteSingleVendInfo(event) {
    var row = event.parentNode.parentNode;
    var vendid = row.cells[1].innerHTML;

    var postURL = '/validate/vendInfoRemove';
    var postRequest = new XMLHttpRequest();
    postRequest.open('POST', postURL);
    postRequest.setRequestHeader('Content-Type', 'application/json');
    postRequest.send(JSON.stringify([{vendid: vendid}]));

    postRequest.addEventListener('load', function(event) {
        if (event.target.response == 'success') {
            alert('Echo: Remove a vend successfully.');
        } else {
            alert('Error: Remove a vend unsuccessfully.');
        }
    });
}

function todoDeleteMultipleVendInfo() {
    var vendInfoTable = document.getElementById('vend-info-modify-table');
    var data = [];

    for (var i = vendInfoTable.rows.length - 1; i > 0; i--) {
        if (vendInfoTable.rows[i].cells[0].children[0].checked) {
            var vendid = vendInfoTable.rows[i].cells[1].innerHTML;
            var row = {vendid: vendid};
            data.push(row);
        }
    }

    var postURL = '/validate/vendInfoRemove';
    var postRequest = new XMLHttpRequest();
    postRequest.open('POST', postURL);
    postRequest.setRequestHeader('Content-Type', 'application/json');
    postRequest.send(JSON.stringify(data));

    postRequest.addEventListener('load', function(event) {
        if (event.target.response == 'success') {
            alert('Echo: Remove vendor successfully.');
        } else {
            alert('Error: Remove vendor unsuccessfully.');
        }
    });
}
