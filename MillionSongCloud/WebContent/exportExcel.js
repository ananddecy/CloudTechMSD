var n = String.fromCharCode, p;
a: {
	try {
		document.createElement("$")
	} catch (q) {
		p = q;
		break a
	}
	p = void 0
}
window.btoa
		|| (window.btoa = function(b) {
			for (var g, c, f, h, e, a, d = 0, r = b.length, s = Math.max, l = ""; d < r;) {
				g = b.charCodeAt(d++) || 0;
				c = b.charCodeAt(d++) || 0;
				a = b.charCodeAt(d++) || 0;
				if (255 < s(g, c, a))
					throw p;
				f = g >> 2 & 63;
				g = (g & 3) << 4 | c >> 4 & 15;
				h = (c & 15) << 2 | a >> 6 & 3;
				e = a & 63;
				c ? a || (e = 64) : h = e = 64;
				l += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
						.charAt(f)
						+ "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
								.charAt(g)
						+ "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
								.charAt(h)
						+ "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
								.charAt(e)
			}
			return l
		});
window.atob
		|| (window.atob = function(b) {
			b = b.replace(/=+$/, "");
			var g, c, f, h, e = 0, a = b.length, d = [];
			if (1 === a % 4)
				throw p;
			for (; e < a;)
						g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
								.indexOf(b.charAt(e++)),
						c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
								.indexOf(b.charAt(e++)),
						f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
								.indexOf(b.charAt(e++)),
						h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
								.indexOf(b.charAt(e++)), g = (g & 63) << 2
								| c >> 4 & 3, c = (c & 15) << 4 | f >> 2 & 15,
						f = (f & 3) << 6 | h & 63, d.push(n(g)), c
								&& d.push(n(c)), f && d.push(n(f));
			return d.join("")
		});
ExcellentExport = function() {
	function b(e, a) {
		return e.replace(RegExp("{(\\w+)}", "g"), function(d, e) {
			return a[e]
		})
	}
	var g = {
		excel : "data:application/vnd.ms-excel;base64,",
		csv : "data:application/csv;base64,"
	}, c = {
		excel : '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e</head><body><table>{table}</table></body></html>'
	}, f = ",", h = "\r\n";
	return {
		excel : function(e, a, d) {
			a = a.nodeType ? a : document.getElementById(a);
			var f = g.excel;
			a = b(c.excel, {
				a : d || "Worksheet",
				table : a.innerHTML
			});
			a = window.btoa(window.unescape(encodeURIComponent(a)));
			e.href = f + a;
			return !0
		},
		csv : function(e, a, d, b) {
			void 0 !== d && d && (f = d);
			void 0 !== b && b && (h = b);
			a = a.nodeType ? a : document.getElementById(a);
			var c = "", l, k;
			for (d = 0; d < a.rows.length; d++) {
				l = a.rows[d];
				for (b = 0; b < l.cells.length; b++) {
					k = l.cells[b];
					var c = c + (b ? f : ""), m = k.textContent.trim();
					k = m;
					var t = -1 !== m.indexOf(f) || -1 !== m.indexOf("\r")
							|| -1 !== m.indexOf("\n");
					(m = -1 !== m.indexOf('"')) && (k = k.replace(/"/g, '""'));
					if (t || m)
						k = '"' + k + '"';
					c += k
				}
				c += h
			}
			a = g.csv + window.btoa(window.unescape(encodeURIComponent(c)));
			e.href = a;
			return !0
		}
	}
}();