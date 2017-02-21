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

window.addEventListener('DOMContentLoaded', function(event) {
    handleLoginEvents();
    handleConsumerEvents();
    handleStaffEvents();
});
