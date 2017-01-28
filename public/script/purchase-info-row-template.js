(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['purchase-info-row'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<tr>\r\n    <td class=\"purchase-info-row id\">"
    + alias4(((helper = (helper = helpers.bookid || (depth0 != null ? depth0.bookid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bookid","hash":{},"data":data}) : helper)))
    + "</td>\r\n    <td class=\"purchase-info-row name\">"
    + alias4(((helper = (helper = helpers.bookname || (depth0 != null ? depth0.bookname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bookname","hash":{},"data":data}) : helper)))
    + "</td>\r\n    <td class=\"purchase-info-row price\">"
    + alias4(((helper = (helper = helpers.bookprice || (depth0 != null ? depth0.bookprice : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bookprice","hash":{},"data":data}) : helper)))
    + "</td>\r\n</tr>\r\n";
},"useData":true});
})();