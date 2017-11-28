const numbers = {};

(function(_numbers) {
	this._size = null;
	this._values = null;

	_numbers.generate = function(size) {
		this._size = size;

		const min = 1;
		const max = this._size - min;

		const missings = [];
		const fn_missings = function() {
			const random = Math.ceil(Math.random() * (max - min) + min);
			if (missings.length == 0) {
				missings.push(random);
				return fn_missings();
			};

			if (missings.indexOf(random) >= 0) return fn_missings();
			missings.push(random);
			return missings;
		}.bind(this);

		const randoms = fn_missings();
		const values = [];

		for (var x = 0; x < this._size; x++) {
			if (randoms.indexOf(x) === -1) {
				values.push(x);
			};
		};
		this._values = values;
		return this;
	};

	_numbers.analyze = function() {
		console.log("values:", this._values);
		for (var x = 0; x < this._size; x++) {
			if (this._values.indexOf(x) === -1) {
				console.log("missing number:", x);
			};
		};
	};
})(numbers);

numbers.generate(1000).analyze();