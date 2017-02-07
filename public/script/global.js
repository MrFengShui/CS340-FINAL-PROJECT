function matchGlobalHeight() {
    var indexPageContent = document.getElementsByClassName('index-page-content');
    /**/
    var consumerBuyListContent = document.getElementById('buy-list-content');
    var consumerBookInfoContent = document.getElementById('book-query-content');
    var consumerStoreInfoContent = document.getElementById('store-query-content');
    /**/
    var consumerBookInfoTable = document.getElementById('book-info-query-table');
    var consumerRepoInfoTable = document.getElementById('store-info-query-table');

    for (var i = 0; i < indexPageContent.length; i++) {
        indexPageContent[i].style.height = 'calc(' + window.innerHeight + 'px - 175px)';
    }

    consumerBuyListContent.style.height = 'calc(' + indexPageContent[0].clientHeight + 'px - 90px)';
    consumerBookInfoContent.style.height = 'calc(' + indexPageContent[0].clientHeight + 'px - 120px)';
    consumerStoreInfoContent.style.height = 'calc(' + indexPageContent[0].clientHeight + 'px - 84px)';

    consumerBookInfoTable.style.width = (indexPageContent[0].clientWidth <= 1870) ? '1870px' : '100%';
    consumerRepoInfoTable.style.width = (indexPageContent[0].clientWidth <= 1620) ? '1620px' : '100%';
}
