function validateInputValue() {
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] == null || arguments[i] == '' || arguments[i] == '0' || arguments[i] == 'anypress') {
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
            bookpress: bookpress,
            bookisbn, bookisbn,
            bookprice: bookprice,
            bookquantity: bookquantity
        }]));

        postRequest.addEventListener('load', function(event) {
            console.log(event.target.response);
            todoCloseBookModal();

            if (event.target.response == 'success') {
                alert('Echo: Add a new book successfully.');
            } else {
                alert('Error: Add a new book unsuccessfully.');
            }
        });
    }
}
