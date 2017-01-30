(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['store-mod-row'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<tr>\n    <td class=\"repo-info-row select\"><input type=\"checkbox\" name=\"\" value=\"\"></td>\n    <td class=\"repo-info-row id\">"
    + alias4(((helper = (helper = helpers.repoid || (depth0 != null ? depth0.repoid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"repoid","hash":{},"data":data}) : helper)))
    + "</td>\n    <td class=\"repo-info-row floor\">"
    + alias4(((helper = (helper = helpers.repofloor || (depth0 != null ? depth0.repofloor : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"repofloor","hash":{},"data":data}) : helper)))
    + "</td>\n    <td class=\"repo-info-row guard\">"
    + alias4(((helper = (helper = helpers.repoguard || (depth0 != null ? depth0.repoguard : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"repoguard","hash":{},"data":data}) : helper)))
    + "</td>\n    <td class=\"book-info-row id\">"
    + alias4(((helper = (helper = helpers.bookid || (depth0 != null ? depth0.bookid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bookid","hash":{},"data":data}) : helper)))
    + "</td>\n    <td class=\"book-info-row name\">"
    + alias4(((helper = (helper = helpers.bookname || (depth0 != null ? depth0.bookname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bookname","hash":{},"data":data}) : helper)))
    + "</td>\n    <td class=\"book-info-row type\">"
    + alias4(((helper = (helper = helpers.booktype || (depth0 != null ? depth0.booktype : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"booktype","hash":{},"data":data}) : helper)))
    + "</td>\n    <td class=\"repo-info-row quantity\">"
    + alias4(((helper = (helper = helpers.bookquantity || (depth0 != null ? depth0.bookquantity : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bookquantity","hash":{},"data":data}) : helper)))
    + "</td>\n    <td class=\"repo-info-row control\">\n        <button type=\"button\" name=\"change-info-button\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></button>\n        <button type=\"button\" name=\"remove-info-button\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></button>\n    </td>\n</tr>\n";
},"useData":true});
})();