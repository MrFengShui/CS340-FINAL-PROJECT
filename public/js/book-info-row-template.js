(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['book-info-row'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<tr>\n    <td class=\"book-info-row id\">"
    + alias4(((helper = (helper = helpers.bookid || (depth0 != null ? depth0.bookid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bookid","hash":{},"data":data}) : helper)))
    + "</td>\n    <td class=\"book-info-row name\">"
    + alias4(((helper = (helper = helpers.bookname || (depth0 != null ? depth0.bookname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bookname","hash":{},"data":data}) : helper)))
    + "</td>\n    <td class=\"book-info-row type\">"
    + alias4(((helper = (helper = helpers.booktype || (depth0 != null ? depth0.booktype : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"booktype","hash":{},"data":data}) : helper)))
    + "</td>\n    <td class=\"book-info-row author\">"
    + alias4(((helper = (helper = helpers.bookauthor || (depth0 != null ? depth0.bookauthor : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bookauthor","hash":{},"data":data}) : helper)))
    + "</td>\n    <td class=\"book-info-row edition\">"
    + alias4(((helper = (helper = helpers.bookedition || (depth0 != null ? depth0.bookedition : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bookedition","hash":{},"data":data}) : helper)))
    + "</td>\n    <td class=\"book-info-row date\">"
    + alias4(((helper = (helper = helpers.bookdate || (depth0 != null ? depth0.bookdate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bookdate","hash":{},"data":data}) : helper)))
    + "</td>\n    <td class=\"book-info-row press\">"
    + alias4(((helper = (helper = helpers.bookpress || (depth0 != null ? depth0.bookpress : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bookpress","hash":{},"data":data}) : helper)))
    + "</td>\n    <td class=\"book-info-row isbn\">"
    + alias4(((helper = (helper = helpers.bookisbn || (depth0 != null ? depth0.bookisbn : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bookisbn","hash":{},"data":data}) : helper)))
    + "</td>\n    <td class=\"book-info-row price\">$"
    + alias4(((helper = (helper = helpers.bookprice || (depth0 != null ? depth0.bookprice : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bookprice","hash":{},"data":data}) : helper)))
    + "</td>\n</tr>\n";
},"useData":true});
})();