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
        consumerSearchButton.addEventListener('click', todoConsumerBookSearch);
    }

    var consumerStorageSearchButton = document.getElementById('consumer-repo-search-button');

    if (consumerStorageSearchButton) {
        consumerStorageSearchButton.addEventListener('click', todoBookStorageSearch);
    }

    var consumerTabbedButtons = document.getElementsByClassName('consumer-tabbed-title');

    for (var i = 0; i < consumerTabbedButtons.length; i++) {
        if (consumerTabbedButtons[i]) {
            consumerTabbedButtons[i].addEventListener('click', todoConsumerTabbedPane);
        }
    }
}

window.addEventListener('DOMContentLoaded', function(event) {
    handleLoginEvents();
    handleConsumerEvents();
});
