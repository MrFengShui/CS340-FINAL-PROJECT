function matchGlobalHeight() {
    var indexPageContent = document.getElementsByClassName('index-page-content');

    for (var i = 0; i < indexPageContent.length; i++) {
        indexPageContent[i].style.height = 'calc(' + window.innerHeight + 'px - 175px)';
    }
    /**/
    matchConsumerHeight(indexPageContent);
    matchStaffHeight(indexPageContent);
}

function matchConsumerHeight(indexPageContent) {
    var consumerBuyListContent = document.getElementById('buy-list-content');
    var consumerBookInfoContent = document.getElementById('book-query-content');
    var consumerStoreInfoContent = document.getElementById('store-query-content');
    var consumerQueryContents = document.getElementsByClassName('query-page-content');
    var consumerBookInfoTable = document.getElementById('book-info-query-table');
    var consumerStoreInfoTable = document.getElementById('store-info-query-table');

    if (consumerBuyListContent) {
        consumerBuyListContent.style.height = 'calc(' + indexPageContent[0].clientHeight + 'px - 90px)';
    }

    if (consumerBookInfoContent) {
        consumerBookInfoContent.style.height = 'calc(' + indexPageContent[0].clientHeight + 'px - 120px)';
    }

    if (consumerStoreInfoContent) {
        consumerStoreInfoContent.style.height = 'calc(' + indexPageContent[0].clientHeight + 'px - 84px)';
    }

    if (consumerQueryContents) {
        for (var i = 0; i < consumerQueryContents.length; i++) {
            if (consumerQueryContents[i] && i == 1) {
                consumerQueryContents[i].style.height = 'calc(' + indexPageContent[0].clientHeight + 'px - 120px)';
            } else if (consumerQueryContents[i] && i == 2) {
                consumerQueryContents[i].style.height = 'calc(' + indexPageContent[0].clientHeight + 'px - 85px)';
            } else {
                consumerQueryContents[i].style.height = 'calc(' + indexPageContent[0].clientHeight + 'px - 90px)';
            }
        }
    }

    if (consumerBookInfoTable) {
        consumerBookInfoTable.style.width = (indexPageContent[0].clientWidth <= 1870) ? '1870px' : '100%';
    }

    if (consumerStoreInfoTable) {
        consumerStoreInfoTable.style.width = (indexPageContent[0].clientWidth <= 1620) ? '1620px' : '100%';
    }
}

function matchStaffHeight(indexPageContent) {
    var staffBookModContent = document.getElementById('book-modify-content');
    var staffStoreModContent = document.getElementById('store-modify-content');
    var staffVendModContent = document.getElementById('vend-mod-content');
    var staffModifyContents = document.getElementsByClassName('modify-page-content');
    var staffBookModTable = document.getElementById('book-info-modify-table');
    var staffStoreModTable = document.getElementById('store-info-modify-table');
    var staffVendModTable = document.getElementById('vend-info-modify-table');

    if (staffBookModContent) {
        staffBookModContent.style.height = 'calc(' + indexPageContent[0].clientHeight + 'px - 90px)';
    }

    if (staffStoreModContent) {
        staffStoreModContent.style.height = 'calc(' + indexPageContent[0].clientHeight + 'px - 120px)';
    }

    if (staffVendModContent) {
        staffVendModContent.style.height = 'calc(' + indexPageContent[0].clientHeight + 'px - 84px)';
    }

    if (staffModifyContents) {
        for (var i = 0; i < staffModifyContents.length; i++) {
            if (staffModifyContents[i] && i == 1) {
                staffModifyContents[i].style.height = 'calc(' + indexPageContent[0].clientHeight + 'px - 200px)';
            } else if (staffModifyContents[i] && i == 2) {
                staffModifyContents[i].style.height = 'calc(' + indexPageContent[0].clientHeight + 'px - 164px)';
            } else {
                staffModifyContents[i].style.height = 'calc(' + indexPageContent[0].clientHeight + 'px - 200px)';
            }
        }
    }

    if (staffBookModTable) {
        staffBookModTable.style.width = (indexPageContent[0].clientWidth <= 1870) ? '1870px' : '100%';
    }

    if (staffStoreModTable) {
        staffStoreModTable.style.width = (indexPageContent[0].clientWidth <= 1620) ? '1620px' : '100%';
    }

    if (staffVendModTable) {
        staffVendModTable.style.width = (indexPageContent[0].clientWidth <= 1620) ? '1620px' : '100%';
    }
}
