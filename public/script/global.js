function matchGlobalHeight() {
    var indexPageContents = document.getElementsByClassName('index-page-content');
    /**/
    var consumerBuyListContent = document.getElementById('consumer-buy-list-content');
    var consumerBookInfoContent = document.getElementById('consumer-book-info-content');
    var consumerStoreInfoContent = document.getElementById('consumer-store-info-content');
    /**/
    var consumerBookInfoTable = document.getElementById('consumer-book-info-table');
    var consumerRepoInfoTable = document.getElementById('consumer-repo-info-table');

    for (var i = 0; i < indexPageContents.length; i++) {
        indexPageContents[i].style.height = 'calc(' + window.innerHeight + 'px - 175px)';
    }

    consumerBuyListContent.style.height = 'calc(' + indexPageContents[0].clientHeight + 'px - 90px)';
    consumerBookInfoContent.style.height = 'calc(' + indexPageContents[0].clientHeight + 'px - 120px)';
    consumerStoreInfoContent.style.height = 'calc(' + indexPageContents[0].clientHeight + 'px - 84px)';

    consumerBookInfoTable.style.width = (indexPageContents[0].clientWidth <= 1870) ? '1870px' : '100%';
    consumerRepoInfoTable.style.width = (indexPageContents[0].clientWidth <= 1620) ? '1620px' : '100%';
}
