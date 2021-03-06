/**
 * Function: validateInputValue
 * Parameter:
 * Description: To check all inputing value if valid or not
 */
function validateInputValue() {
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] == null || arguments[i] == '' || arguments[i] == '0' || arguments[i] == 'anypress' || arguments[i] == 'anycountry' || arguments[i] == 'anystate' || arguments[i] == 'undefined') {
            return false;
        }
    }

    return true;
}
/**
 * Function: todoClearBookModal
 * Parameter:
 * Description: To clear all inputing records in book modal dialog
 */
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
/**
 * Function: todoOpenBookModal
 * Parameter:
 * Description: To open book modal dialog
 */
function todoOpenBookModal() {
    var backdrop = document.getElementById('book-modal-backdrop');
    var dialog = document.getElementById('book-modal-framework');

    backdrop.style.display = 'inline-flex';
    dialog.style.display = 'inline-flex';
}
/**
 * Function: todoCloseBookModal
 * Parameter:
 * Description: To close book modal dialog
 */
function todoCloseBookModal() {
    var backdrop = document.getElementById('book-modal-backdrop');
    var dialog = document.getElementById('book-modal-framework');

    backdrop.style.display = 'none';
    dialog.style.display = 'none';

    todoClearBookModal();
}
/**
 * Function: todoClearStoreModal
 * Parameter:
 * Description: To clear all inputing records in storage modal dialog
 */
function todoClearStoreModal() {
    document.getElementById('store-modal-input-repoid').value = '';
    document.getElementById('store-modal-input-repostreet').value = '';
    document.getElementById('store-modal-input-reponumber').value = '';
    document.getElementById('store-modal-select-purpose').selectedIndex = 0;
    document.getElementById('store-modal-input-repoguard').value = '';
    document.getElementById('store-modal-input-bookid').value = '';
    document.getElementById('store-modal-input-vendid').value = '';
}
/**
 * Function: todoOpenStoreModal
 * Parameter:
 * Description: To open storage modal dialog
 */
function todoOpenStoreModal() {
    var backdrop = document.getElementById('store-modal-backdrop');
    var dialog = document.getElementById('store-modal-framework');

    backdrop.style.display = 'inline-flex';
    dialog.style.display = 'inline-flex';
}
/**
 * Function: todoCloseStoreModal
 * Parameter:
 * Description: To close storage modal dialog
 */
function todoCloseStoreModal() {
    var backdrop = document.getElementById('store-modal-backdrop');
    var dialog = document.getElementById('store-modal-framework');

    backdrop.style.display = 'none';
    dialog.style.display = 'none';

    todoClearStoreModal();
}
/**
 * Function: todoClearVendModal
 * Parameter:
 * Description: To clear all inputing records in vendor modal dialog
 */
function todoClearVendModal() {
    document.getElementById('vend-modal-input-vendid').value = '';
    document.getElementById('vend-modal-input-vendname').value = '';
    document.getElementById('vend-modal-input-vendcity').value = '';
    document.getElementById('vend-modal-input-vendstate').selectedIndex = 0;
    document.getElementById('vend-modal-input-vendcountry').selectedIndex = 0;
    document.getElementById('vend-modal-input-vendphone').value = '';
    document.getElementById('vend-modal-input-vendemail').value = '';
    document.getElementById('vend-modal-input-repoid').value = '';
}
/**
 * Function: todoOpenVendModal
 * Parameter:
 * Description: To open vendor modal dialog
 */
function todoOpenVendModal() {
    var backdrop = document.getElementById('vend-modal-backdrop');
    var dialog = document.getElementById('vend-modal-framework');

    backdrop.style.display = 'inline-flex';
    dialog.style.display = 'inline-flex';
}
/**
 * Function: todoCloseVendModal
 * Parameter:
 * Description: To close vendor modal dialog
 */
function todoCloseVendModal() {
    var backdrop = document.getElementById('vend-modal-backdrop');
    var dialog = document.getElementById('vend-modal-framework');

    backdrop.style.display = 'none';
    dialog.style.display = 'none';

    todoClearVendModal();
}
/**
 * Function: todoAddTableBookInfo
 * Parameter:
 * Description: To add a new row to book information table.
 */
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
        /*Clear all unchecked rows before add a new row*/
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
/**
 * Function: todoAddSingleBookInfo
 * Parameter:
 * Description: To add a new book information to database.
 */
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
/**
 * Function: todoChangeSingleBookInfo
 * Parameter:
 * Description: To change a checked book information to database.
 */
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
            todoCloseBookModal();

            if (event.target.response == 'success') {
                alert('Echo: Change a book successfully.');
            } else {
                alert('Error: Change a book unsuccessfully.');
            }
        });
    }
}
/**
 * Function: todoAddTableStoreInfo
 * Parameter:
 * Description: To add a new row to storage information table.
 */
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
        /*Clear all unchecked rows before add a new row*/
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
/**
 * Function: todoAddSingleStoreInfo
 * Parameter:
 * Description: To add a new storage information to database.
 */
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
            todoCloseStoreModal();

            if (event.target.response == 'success') {
                alert('Echo: Add a new store successfully.');
            } else {
                alert('Error: Add a new store unsuccessfully.');
            }
        });
    }
}
/**
 * Function: todoChangeSingleStoreInfo
 * Parameter:
 * Description: To chanage a checked storage information to database.
 */
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
            todoCloseStoreModal();

            if (event.target.response == 'success') {
                alert('Echo: Change a store successfully.');
            } else {
                alert('Error: Change a store unsuccessfully.');
            }
        });
    }
}
/**
 * Function: todoAddTableVendInfo
 * Parameter:
 * Description: To add a new row to vendor information table.
 */
function todoAddTableVendInfo() {
    var vendInfoTable = document.getElementById('vend-info-modify-table');
    var vendid = document.getElementById('vend-modal-input-vendid').value;
    var vendname = document.getElementById('vend-modal-input-vendname').value;
    var vendcity = document.getElementById('vend-modal-input-vendcity').value;
    var vendstate = document.getElementById('vend-modal-input-vendstate').value;
    var vendcountry = document.getElementById('vend-modal-input-vendcountry').value;
    var vendphone = document.getElementById('vend-modal-input-vendphone').value;
    var vendemail = document.getElementById('vend-modal-input-vendemail').value;
    var repoid = document.getElementById('vend-modal-input-repoid').value;
    var flag = validateInputValue(vendid, vendname, vendcity, vendstate, vendcountry, vendphone, vendemail, repoid);

    if (flag) {
        /*Clear all unchecked rows before add a new row*/
        for (var i = vendInfoTable.rows.length - 1; i > 0; i--) {
            if (!vendInfoTable.rows[i].cells[0].children[0].checked) {
                vendInfoTable.deleteRow(i);
            }
        }

        var rowHTML = buildVendModHTML(
            true,
            vendid,
            vendname,
            vendcity,
            convertState(vendstate),
            convertCountry(vendcountry),
            vendphone,
            vendemail,
            repoid
        );

        vendInfoTable.insertAdjacentHTML('beforeend', rowHTML);
        todoCloseVendModal();
    }
}
/**
 * Function: todoAddSingleVendInfo
 * Parameter:
 * Description: To add a new vendor information to database.
 */
function todoAddSingleVendInfo() {
    var vendid = document.getElementById('vend-modal-input-vendid').value;
    var vendname = document.getElementById('vend-modal-input-vendname').value;
    var vendcity = document.getElementById('vend-modal-input-vendcity').value;
    var vendstate = document.getElementById('vend-modal-input-vendstate').value;
    var vendcountry = document.getElementById('vend-modal-input-vendcountry').value;
    var vendphone = document.getElementById('vend-modal-input-vendphone').value;
    var vendemail = document.getElementById('vend-modal-input-vendemail').value;
    var repoid = document.getElementById('vend-modal-input-repoid').value;
    var flag = validateInputValue(vendid, vendname, vendcity, vendstate, vendcountry, vendphone, vendemail, repoid);

    if (flag) {
        var postURL = '/validate/vendInfoAdd';
        var postRequest = new XMLHttpRequest();
        postRequest.open('POST', postURL);
        postRequest.setRequestHeader('Content-Type', 'application/json');

        postRequest.send(JSON.stringify([{
            vendid: vendid,
            vendname: vendname,
            vendcity: vendcity,
            vendstate: convertState(vendstate),
            vendcountry: convertCountry(vendcountry),
            vendphone: vendphone,
            vendemail: vendemail,
            repoid: repoid
        }]));

        postRequest.addEventListener('load', function(event) {
            todoCloseVendModal();

            if (event.target.response == 'success') {
                alert('Echo: Add a new vend successfully.');
            } else {
                alert('Error: Add a new vend unsuccessfully.');
            }
        });
    }
}
/**
 * Function: todoChangeSingleVendInfo
 * Parameter:
 * Description: To change a checked vendor information to database.
 */
function todoChangeSingleVendInfo() {
    var vendid = document.getElementById('vend-modal-input-vendid').value;
    var vendname = document.getElementById('vend-modal-input-vendname').value;
    var vendcity = document.getElementById('vend-modal-input-vendcity').value;
    var vendstate = document.getElementById('vend-modal-input-vendstate').value;
    var vendcountry = document.getElementById('vend-modal-input-vendcountry').value;
    var vendphone = document.getElementById('vend-modal-input-vendphone').value;
    var vendemail = document.getElementById('vend-modal-input-vendemail').value;
    var repoid = document.getElementById('vend-modal-input-repoid').value;
    var flag = validateInputValue(vendid, vendname, vendcity, vendstate, vendcountry, vendphone, vendemail, repoid);

    if (flag) {
        var postURL = '/validate/vendInfoChange';
        var postRequest = new XMLHttpRequest();
        postRequest.open('POST', postURL);
        postRequest.setRequestHeader('Content-Type', 'application/json');

        postRequest.send(JSON.stringify({
            vendid: vendid,
            vendname: vendname,
            vendcity: vendcity,
            vendstate: convertState(vendstate),
            vendcountry: convertCountry(vendcountry),
            vendphone: vendphone,
            vendemail: vendemail,
            repoid: repoid
        }));

        postRequest.addEventListener('load', function(event) {
            todoCloseVendModal();

            if (event.target.response == 'success') {
                alert('Echo: Change a vend successfully.');
            } else {
                alert('Error: Change a vend unsuccessfully.');
            }
        });
    }
}
