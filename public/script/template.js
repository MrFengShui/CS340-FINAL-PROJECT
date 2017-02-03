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

var createBookInfo = Handlebars.templates['book-info-row'];

function buildBookInfoHTML(id, name, type, fname, lname, edition, year, month, date, press, isbn, price) {
    return createBookInfo({
        bookid: id,
        bookname: name,
        booktype: convertType(type),
        bookauthor: fname + ' ' + lname,
        bookedition: edition,
        bookdate: year + '-' + month + '-' + date,
        bookpress: press,
        bookisbn: isbn,
        bookprice: '$' + price
    });
}

var createStoreInfo = Handlebars.templates['store-info-row'];

function buildStoreInfoHTML(id, name, type, quantity, repo, street, number, guarder) {
    return createStoreInfo({
        bookid: id,
        bookname: name,
        booktype: convertType(type),
        bookquantity: quantity,
        repoid: repo,
        repoaddress: street + ' ' + number,
        repoguard: guarder,
    });
}

var createBookBuy = Handlebars.templates['buy-info-row'];

function buildBuyBookHTML(id, name, price) {
    return createBookBuy({
        bookid: id,
        bookname: name,
        bookprice: '$' + price
    });
}

var createBookTotal = Handlebars.templates['buy-info-foot'];

function buildPriceTotalHTML(price) {
    return createBookTotal({
        totalPrice: '$' + price
    });
}