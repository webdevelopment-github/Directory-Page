/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'YogaAlliance\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-certificate' : '&#x61;',
			'icon-leaf' : '&#x62;',
			'icon-home' : '&#x65;',
			'icon-home-2' : '&#x66;',
			'icon-pencil' : '&#x67;',
			'icon-stack' : '&#x68;',
			'icon-coin' : '&#x69;',
			'icon-support' : '&#x6a;',
			'icon-clock' : '&#x6b;',
			'icon-envelop' : '&#x6c;',
			'icon-mail-send' : '&#x6d;',
			'icon-calendar' : '&#x6e;',
			'icon-user' : '&#x6f;',
			'icon-bubbles' : '&#x70;',
			'icon-busy' : '&#x71;',
			'icon-vcard' : '&#x73;',
			'icon-cog' : '&#x74;',
			'icon-cog-2' : '&#x75;',
			'icon-bars' : '&#x76;',
			'icon-stats' : '&#x77;',
			'icon-dashboard' : '&#x78;',
			'icon-briefcase' : '&#x79;',
			'icon-resize' : '&#x7a;',
			'icon-enter' : '&#x41;',
			'icon-exit' : '&#x42;',
			'icon-arrow-up' : '&#x43;',
			'icon-arrow-right' : '&#x44;',
			'icon-arrow-down' : '&#x45;',
			'icon-arrow-left' : '&#x46;',
			'icon-checkbox' : '&#x47;',
			'icon-checkbox-unchecked' : '&#x48;',
			'icon-radio-checked' : '&#x49;',
			'icon-radio-unchecked' : '&#x4a;',
			'icon-thumbs-up' : '&#x4b;',
			'icon-star' : '&#x4c;',
			'icon-star-2' : '&#x4d;',
			'icon-star-3' : '&#x4e;',
			'icon-plus' : '&#x4f;',
			'icon-checkmark' : '&#x50;',
			'icon-warning' : '&#x51;',
			'icon-warning-2' : '&#x52;',
			'icon-question' : '&#x53;',
			'icon-question-2' : '&#x54;',
			'icon-plus-circle' : '&#x55;',
			'icon-plus-circle-2' : '&#x56;',
			'icon-minus-circle' : '&#x57;',
			'icon-minus-circle-2' : '&#x58;',
			'icon-info' : '&#x59;',
			'icon-info-2' : '&#x5a;',
			'icon-cancel-circle' : '&#x31;',
			'icon-cancel-circle-2' : '&#x32;',
			'icon-checkmark-circle' : '&#x33;',
			'icon-checkmark-circle-2' : '&#x34;',
			'icon-file-pdf' : '&#x39;',
			'icon-newspaper' : '&#x28;',
			'icon-pencil-2' : '&#x29;',
			'icon-star-4' : '&#x21;',
			'icon-search' : '&#x60;',
			'icon-double-angle-left' : '&#x63;',
			'icon-double-angle-right' : '&#x64;',
			'icon-print' : '&#x72;',
			'icon-opennewwindow' : '&#x5b;',
			'icon-filter' : '&#x5d;',
			'icon-remove' : '&#x30;',
			'icon-disk' : '&#x3c;',
			'icon-undo' : '&#x3e;',
			'icon-redo' : '&#x7b;',
			'icon-eye' : '&#x35;',
			'icon-eye-blocked' : '&#x36;',
			'icon-facebook' : '&#x37;',
			'icon-pinterest' : '&#x38;',
			'icon-twitter-old' : '&#x7c;',
			'icon-folder-open' : '&#x7d;',
			'icon-calendar-2' : '&#x7e;',
			'icon-arrow-right-2' : '&#xe001;',
			'icon-arrow-left-2' : '&#x23;',
			'icon-image' : '&#x24;',
			'icon-images' : '&#x25;',
			'icon-instagram' : '&#x5e;',
			'icon-google-plus' : '&#x26;',
			'icon-scale-up' : '&#x2a;',
			'icon-scale-down' : '&#xe003;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};