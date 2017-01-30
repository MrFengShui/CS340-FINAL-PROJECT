(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['purchase-info-foot'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<tr>\n    <td colspan=\"2\" class=\"purchase-info-footer total\">Total</td>\n    <td class=\"purchase-info-footer price\">"
    + container.escapeExpression(((helper = (helper = helpers.totalPrice || (depth0 != null ? depth0.totalPrice : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"totalPrice","hash":{},"data":data}) : helper)))
    + "</td>\n</tr>\n";
},"useData":true});
})();