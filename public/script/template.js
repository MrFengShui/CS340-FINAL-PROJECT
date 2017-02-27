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

var createBookMod = Handlebars.templates['book-mod-row'];

function buildBookModHTML(flag, id, name, type, fname, lname, edition, year, month, date, press, isbn, price, quantity) {
    return createBookMod({
        checked: flag,
        bookid: id,
        bookname: name,
        booktype: convertType(type),
        bookauthor: fname + ' ' + lname,
        bookedition: edition,
        bookdate: year + '-' + ((month < 10) ? '0' + month : month) + '-' + ((date < 10) ? '0' + date : date),
        bookpress: press,
        bookisbn: isbn,
        bookprice: '$' + price,
        bookquantity: quantity
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

var createStoreMod = Handlebars.templates['store-mod-row'];

function buildStoreModHTML(id, name, type, quantity, repo, street, number, guarder) {
    return createStoreMod({
        bookid: id,
        bookname: name,
        booktype: convertType(type),
        bookquantity: quantity,
        repoid: repo,
        repoaddress: street + ' ' + number,
        repoguard: guarder,
    });
}

var createVendorMod = Handlebars.templates['vend-mod-row'];

function buildVendorModHTML(id, name, city, state, country, phone, email, type) {
    return createVendorMod({
        vendorid: id,
        vendorname: name,
        vendoraddress: city + ' ' + state + ', ' + country,
        vendorphone: phone,
        vendoremail: email,
        booktype: convertType(type)
    });
}

var createBuyInfo = Handlebars.templates['buy-info-row'];

function buildBuyInfoHTML(buyid, buyfname, buylname, buytype, buydate, bookid, bookname, booktype, bookisbn, bookprice) {
    return createBuyInfo({
        buyid: buyid,
        buyname: buyfname + ' ' + buylname,
        buytype: defineType(buytype),
        buydate: formateDate(new Date(buydate)),
        bookid: bookid,
        bookname: bookname,
        booktype: convertType(booktype),
        bookisbn: bookisbn,
        bookprice: '$' + bookprice
    });
}

var createBookBuy = Handlebars.templates['buy-list-row'];

function buildBuyBookHTML(id, name, price) {
    return createBookBuy({
        bookid: id,
        bookname: name,
        bookprice: '$' + price
    });
}

var createBookTotal = Handlebars.templates['buy-list-foot'];

function buildPriceTotalHTML(price) {
    return createBookTotal({
        totalPrice: '$' + price
    });
}
