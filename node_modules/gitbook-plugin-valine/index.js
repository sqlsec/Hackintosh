module.exports = {
  hooks: {
    'page:before': function(page) {
	  var config = this.config.get('pluginsConfig.valine', {});
      var appId = config.appId;
      var appKey = config.appKey;
	  var placeholder = config.placeholder;
	  var avatar = config.avatar;
	  var meta = config.meta;
	  var pageSize = config.pageSize;
	  var lang = config.lang;
	  var recordIP = config.recordIP;
	  var serverURLs = config.serverURLs;
      var str = '<hr/>'
    + '<div id="vcomments"></div>'
    + '<script src="//unpkg.com/valine/dist/Valine.min.js"></script>'
    + '<script>'
      + 'new Valine({'
	  + 'el: "#vcomments",'
	  + 'appId: \'' + appId + '\','
	  + 'appKey: \'' + appKey + '\','
	  + 'placeholder: \'' + placeholder + '\','
	  + 'avatar: \'' + avatar + '\','
	  + 'meta: ' + meta + ','
	  + 'pageSize: ' + pageSize + ','
	  + 'lang: \'' + lang + '\','
	  + 'recordIP: ' + recordIP + ''
      + '})'
    + '</script>';
      page.content += str
      return page
    }
  }
};
