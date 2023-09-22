var Module = {};

function start() {
	var canvas = document.querySelector("canvas");
	canvas.width = 512;
	canvas.height = 512;
	Module.canvas = canvas;

	if (window.WebAssembly !== undefined) {
		var r = new XMLHttpRequest();
		r.open("GET", "build/GhostEngine.wasm", true);
		r.responseType = "arraybuffer";
		r.onload = function () {
			Module.wasmBinary = r.response;
			var script = document.createElement("script");
			script.src = "GhostEngine.js";
			document.body.appendChild(script);
		};

		r.send();
	} else {
		// this browser cannot run Wasm.
	}
}

start();
