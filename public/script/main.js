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
    var staffSearchButton = document.getElementById('staff-search-button');

    if (staffSearchButton) {
        staffSearchButton.addEventListener('click', todoBookModifySearch);
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
