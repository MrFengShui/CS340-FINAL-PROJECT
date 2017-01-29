(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['vend-info-row'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<tr>\r\n    <td class=\"vend-info-header id\">"
    + alias4(((helper = (helper = helpers.vendorid || (depth0 != null ? depth0.vendorid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"vendorid","hash":{},"data":data}) : helper)))
    + "</td>\r\n    <td class=\"vend-info-header name\">"
    + alias4(((helper = (helper = helpers.vendorname || (depth0 != null ? depth0.vendorname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"vendorname","hash":{},"data":data}) : helper)))
    + "</td>\r\n    <td class=\"vend-info-header address\">"
    + alias4(((helper = (helper = helpers.vendoraddress || (depth0 != null ? depth0.vendoraddress : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"vendoraddress","hash":{},"data":data}) : helper)))
    + "</td>\r\n    <td class=\"vend-info-header phone\">"
    + alias4(((helper = (helper = helpers.vendorphone || (depth0 != null ? depth0.vendorphone : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"vendorphone","hash":{},"data":data}) : helper)))
    + "</td>\r\n    <td class=\"vend-info-header email\">"
    + alias4(((helper = (helper = helpers.vendoremail || (depth0 != null ? depth0.vendoremail : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"vendoremail","hash":{},"data":data}) : helper)))
    + "</td>\r\n    <td class=\"book-info-header type\">"
    + alias4(((helper = (helper = helpers.booktype || (depth0 != null ? depth0.booktype : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"booktype","hash":{},"data":data}) : helper)))
    + "</td>\r\n</tr>\r\n";
},"useData":true});
})();