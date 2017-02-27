function handleLoginEvents() {
    var signinButton = document.getElementById('initial-signin-button');

    if (signinButton) {
        signinButton.addEventListener('click', todoSignIn);
    }
}

function handleConsumerEvents() {
    var consumerOpenBuyModalButton = document.getElementById('buy-modal-open-button');

    if (consumerOpenBuyModalButton) {
        consumerOpenBuyModalButton.addEventListener('click', todoOpenBuyModal);
    }

    var consumerCloseBuyModalButton = document.getElementById('buy-modal-close-button');

    if (consumerCloseBuyModalButton) {
        consumerCloseBuyModalButton.addEventListener('click', todoCloseBuyModal);
    }

    var consumerAddBuyListButton = document.getElementById('buy-modal-add-button');

    if (consumerAddBuyListButton) {
        consumerAddBuyListButton.addEventListener('click', totdoAddBuyList);
    }

    var consumerCalculateTotalButton = document.getElementById('buy-total-calc-button');

    if (consumerCalculateTotalButton) {
        consumerCalculateTotalButton.addEventListener('click', todoCalculatePrice);
    }

    var consumerPayBookButton = document.getElementById('buy-pay-book-button');

    if (consumerPayBookButton) {
        consumerPayBookButton.addEventListener('click', todoPayBook);
    }

    var consumerSearchButton = document.getElementById('consumer-search-button');

    if (consumerSearchButton) {
        consumerSearchButton.addEventListener('click', todoBookInformationSearch);
    }

    var consumerStorageSearchButton = document.getElementById('consumer-repo-search-button');

    if (consumerStorageSearchButton) {
        consumerStorageSearchButton.addEventListener('click', todoBookStorageSearch);
    }

    var queryTabbedButtons = document.getElementsByClassName('query-tabbed-title');

    for (var i = 0; i < queryTabbedButtons.length; i++) {
        if (queryTabbedButtons[i]) {
            queryTabbedButtons[i].addEventListener('click', todoQueryTabbedPane);
        }
    }
}

function handleStaffEvents() {
    var staffBookSearchButton = document.getElementById('staff-search-button');

    if (staffBookSearchButton) {
        staffBookSearchButton.addEventListener('click', todoBookModifySearch);
    }

    var staffStoreSearchButton = document.getElementById('staff-store-search-button');

    if (staffStoreSearchButton) {
        staffStoreSearchButton.addEventListener('click', todoStorageModifySearch);
    }

    var staffVendSearchButton = document.getElementById('staff-vend-search-button');

    if (staffVendSearchButton) {
        staffVendSearchButton.addEventListener('click', todoVendorModifySearch);
    }

    var staffBuySearchButton = document.getElementById('buy-info-search-button');

    if (staffBuySearchButton) {
        staffBuySearchButton.addEventListener('click', todoBuyInfoSearch);
    }

    var modifyTabbedButtons = document.getElementsByClassName('modify-tabbed-title');

    for (var i = 0; i < modifyTabbedButtons.length; i++) {
        if (modifyTabbedButtons[i]) {
            modifyTabbedButtons[i].addEventListener('click', todoModifyTabbedPane);
        }
    }
}

function handleModalEvents() {
    var openBookModalButton = document.getElementById('book-modal-open-button');

    if (openBookModalButton) {
        openBookModalButton.addEventListener('click', todoOpenBookModal);
    }

    var bookUploadRowsButton = document.getElementById('book-upload-rows-button');

    if (bookUploadRowsButton) {
        bookUploadRowsButton.addEventListener('click', todoAddMultipleBookInfo);
    }

    var closeBookModalButton = document.getElementById('book-modal-close-button');

    if (closeBookModalButton) {
        closeBookModalButton.addEventListener('click', todoCloseBookModal);
    }

    var openStoreModalButton = document.getElementById('store-modal-open-button');

    if (openStoreModalButton) {
        openStoreModalButton.addEventListener('click', todoOpenStoreModal);
    }

    var closeStoreModalButton = document.getElementById('store-modal-close-button');

    if (closeStoreModalButton) {
        closeStoreModalButton.addEventListener('click', todoCloseStoreModal);
    }

    var openVendModalButton = document.getElementById('vend-modal-open-button');

    if (openVendModalButton) {
        openVendModalButton.addEventListener('click', todoOpenVendModal);
    }

    var closeVendModalButton = document.getElementById('vend-modal-close-button');

    if (closeVendModalButton) {
        closeVendModalButton.addEventListener('click', todoCloseVendModal);
    }

    var bookInsertModalButton = document.getElementById('book-modal-button-insert');

    if (bookInsertModalButton) {
        bookInsertModalButton.addEventListener('click', todoAddSingleBookInfo);
    }

    var bookAddModalButton = document.getElementById('book-modal-button-add');

    if (bookAddModalButton) {
        bookAddModalButton.addEventListener('click', todoAddTableBookInfo);
    }

    var bookUpdateModalButton = document.getElementById('book-modal-button-update');

    if (bookUpdateModalButton) {
        bookUpdateModalButton.addEventListener('click', todoChangeSingleBookInfo);
    }
}

window.addEventListener('DOMContentLoaded', function(event) {
    handleLoginEvents();
    handleConsumerEvents();
    handleStaffEvents();
    handleModalEvents();
});

function convertType(type) {
    switch (type) {
        case 1:
            return 'Art';
        case 2:
            return 'Engineering';
        case 3:
            return 'History';
        case 4:
            return 'Literature';
        case 5:
            return 'Science';
    }
}

function antiConvertType(type) {
    switch (type) {
        case 'Art':
            return 1;
        case 'Engineering':
            return 2;
        case 'History':
            return 3;
        case 'Listerature':
            return 4;
        case 'Science':
            return 5;
        default:
            return 0;
    }
}

function defineType(type) {
    switch (type) {
        case 1:
            return'Iron';
        case 2:
            return 'Bronze';
        case 3:
            return 'Silver';
        case 4:
            return 'Gold';
        case 5:
            return 'Platinum';
        default:
            return 'None';
    }
}

function convertPress(press) {
    switch (press) {
        case 'apress':
            return 'Apress';
        case 'pearson':
            return 'Pearson';
        case 'oreilly':
            return 'O\\\'Reilly Media';
        case 'addison':
            return 'Addison-Wesley Professional';
        case 'nostarch':
            return 'No Starch Press';
        case 'scholastic':
            return 'Scholastic';
        case 'createspace':
            return 'CreateSpace Independent Publishing Platform';
        case 'scribner':
            return 'Scribner';
        case 'dover':
            return 'Dover Publications';
        case 'cambridge':
            return 'Cambridge University Press';
        case 'britannica':
            return 'Encyclopaedia Britannica';
        case 'brooks':
            return 'Brooks Cole';
    }
}

function antiConvertPress(press) {
    switch (press) {
        case 'Apress':
            return 'apress';
        case 'Pearson':
            return 'pearson';
        case 'O\'Reilly Media':
            return 'oreilly';
        case 'Addison-Wesley Professional':
            return 'addison';
        case 'No Starch Press':
            return 'nostarch';
        case 'Scholastic':
            return 'scholastic';
        case 'CreateSpace Independent Publishing Platform':
            return 'createspace';
        case 'Scribner':
            return 'scribner';
        case 'Dover Publications':
            return 'dover';
        case 'Cambridge University Press':
            return 'cambridge';
        case 'Encyclopaedia Britanni':
            return 'cabritannica';
        case 'Brooks Cole':
            return 'brooks';
    }
}

function formateDate(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    return year + '-' + ((month < 10) ? '0' + month : month) + '-' + ((day < 10) ? '0' + day : day);
}
