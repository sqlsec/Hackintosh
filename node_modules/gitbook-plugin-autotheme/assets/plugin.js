require(['gitbook'], function (gitbook) {
	(function () {
		if (typeof window.Element === "undefined" || "classList" in document.documentElement) return;

		var prototype = Array.prototype,
				push = prototype.push,
				splice = prototype.splice,
				join = prototype.join;

		function DOMTokenList(el) {
			this.el = el;
			// The className needs to be trimmed and split on whitespace
			// to retrieve a list of classes.
			var classes = el.className.replace(/^\s+|\s+$/g,'').split(/\s+/);
			for (var i = 0; i < classes.length; i++) {
				push.call(this, classes[i]);
			}
		};

		DOMTokenList.prototype = {
			add: function(token) {
				if(this.contains(token)) return;
				push.call(this, token);
				this.el.className = this.toString();
			},
			contains: function(token) {
				return this.el.className.indexOf(token) != -1;
			},
			item: function(index) {
				return this[index] || null;
			},
			remove: function(token) {
				if (!this.contains(token)) return;
				for (var i = 0; i < this.length; i++) {
					if (this[i] == token) break;
				}
				splice.call(this, i, 1);
				this.el.className = this.toString();
			},
			toString: function() {
				return join.call(this, ' ');
			},
			toggle: function(token) {
				if (!this.contains(token)) {
					this.add(token);
				} else {
					this.remove(token);
				}

				return this.contains(token);
			}
		};

		window.DOMTokenList = DOMTokenList;

		function defineElementGetter (obj, prop, getter) {
				if (Object.defineProperty) {
						Object.defineProperty(obj, prop,{
								get : getter
						});
				} else {
						obj.__defineGetter__(prop, getter);
				}
		}

		defineElementGetter(Element.prototype, 'classList', function () {
			return new DOMTokenList(this);
		});

	})();
	
	var white;
	var sepia;
	var night;
	var classes = ['color-theme-1', 'color-theme-2'];

	function toggleClass(className) { 
		var div = document.getElementsByTagName('div')[0];
		for (var i = 0; i < classes.length; i++){
			if (classes[i] === className) {
				div.classList.add(className);
			} else {
				div.classList.remove(classes[i]);
			}
		}
	};
	
	function changeTheme() {
		var now = new Date();
		var hour = now.getHours();
		if (white.indexOf(hour) > -1) {
			toggleClass('color-theme-0');
		} else if (sepia.indexOf(hour) > -1) {
			toggleClass('color-theme-1');
		} else if (night.indexOf(hour) > -1) {
			toggleClass('color-theme-2');
		}
	};
	gitbook.events.bind('start', function (e, config) {
		white = config.autotheme.white || [9, 10, 11, 12, 13, 14, 15, 16];
		sepia = config.autotheme.sepia || [6, 7, 8, 17, 18, 19];
		night = config.autotheme.night || [20, 21, 22, 23, 0, 1, 2, 3, 4, 5];
		changeTheme();
	});

	gitbook.events.bind('page.change', function() {
		changeTheme();
	});
});
