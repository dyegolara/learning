function inicio() {
	"use strict";
	var i, j, k, l = 0,
		p,
		x = new Array(1000),
		y = new Array(1000),
		z = new Array(1000),
		m = new Array(1000),
		q = "";

	for (i = 1; i <= 36; i += 1) {
		for (j = 1; j <= 36; j += 1) {
			for (k = 1; k <= 36; k += 1) {
				if (i * j * k === 36) {
					x[l] = i;
					y[l] = j;
					z[l] = k;
					l += 1;
				}
			}
		}
	}
	p = document.getElementById("pista");
	for (i = 0; i <= 35; i += 1) {
		if (x[i] !== undefined) {
			m[i] = x[i] + y[i] + z[i];
			//q += x[i] + " + " + y[i] + " + " + z[i] + " (" + m[i] + ")" + "<br />";
		}
	}
	/*
	for (i = 0; i <= 35; i += 1) {
		for (j = 0; j <= 35; j += 1) {
			if (m[i] !== m[j]) {
				//for (k = 0; k <= 35; k += 1) {
				q += x[j] + " + " + y[j] + " + " + z[j] + " (" + m[j] + ")" + "<br />";
				//}
			}
		}
	}
*/
	p.innerHTML += q;
}
