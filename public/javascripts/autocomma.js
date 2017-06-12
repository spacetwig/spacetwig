/* © 2013 aleph-labs.com
 * @author Thanh Tran
 */
(function () {

  /*
	 * Add Commas to numbers
	 * @method
	 * @param  {*} nStr      Numer/String to add comma
	 * @param  {String} sep Custom separator in place of the comma
	 * @return {String}           The commas-added string
	 * @return	String the string of number with commas added
	 * @static
	 * @author	unknown
	 */
	String.addCommas = function (nStr, sep) {
		if (nStr === undefined) nStr = '';
		var parts = nStr.toString().split('.');
		if (!sep) sep = ',';
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, sep);
		return parts.join('.');
	};

	/**
	 * MoneyInput component
	 * Enable money input logic, automatic comma insertion
	 * @class MoneyInput
	 * @namespace app.view.comp
	 */
	var MoneyInput = {
		value: 0,
		el: null,
		textfield: null,
		max: Number.MAX_VALUE,
		min: 0,

		/**
		 * change callback
		 * @type {Function}
		 */
		change: null,

		/**
		 * Bound slider
		 * @type {ValueSlider}
		 */
		slider: null,


		/**
		 * Convenient factory function to create an instance of MoneyInput
		 * @static
		 * @return {MoneyInput} the new instance
		 */
		create: function(el) {
			return Object.create(this).init(el);
		},

		/**
		 * @method init
		 * @chainable
		 * @return {MoneyInput}             this instance
		 */
		init: function(el) {
			var _this = this,
				textfield = el.querySelector('.textfield'),
				pattern = /[0-9]/;

			if (el.classList.contains('inited')) return; //do not initialize the wrapper again

			el.classList.add('inited');

			this.min = parseFloat(el.dataset.min) || 0;
			this.max = parseFloat(el.dataset.max) || Number.MAX_VALUE;

			textfield.addEventListener('keypress', function(e) {
				var inputChar = String.fromCharCode(e.charCode);
				// console.log(inputChar, e.charCode);

				if (!pattern.test(inputChar)) {
					//invalid character, prevent input
					e.preventDefault();
				}

			});

			textfield.addEventListener('input', function(/*e*/) {
				_this._inputHandler();
			});

			textfield.addEventListener('click', function(/*e*/) {
				if (!_this.value) {
					textfield.value = '';
				}
			});

			textfield.addEventListener('blur', function(/*e*/) {
				_this._blurHandler();
			});

			this.textfield = textfield;
			this.el = el;
			return this; // for chaining
		},

		_inputHandler: function() {
			var textfield = this.textfield,
				el = this.el,
				str = textfield.value.replace(/,/g, ''),
				invalid = false,
				value = parseFloat(str) || 0;

			if (value < this.min && str) { value = this.min; invalid = true; }
			if (value > this.max) { value = this.max; invalid = true; }
			if (/^0+/.test(str)) {
				//if the text start with zeros
				invalid = true;
			}

			this.value = value;
			this.el.dataset.value = this.value;
			textfield.value = (invalid) ? String.addCommas(value) : String.addCommas(str);
			// console.log(textfield.value, this.value);
			//apply validation highlight for .money-input
			if (this.value) {
				el.classList.add('validated');
			} else {
				el.classList.remove('validated');
			}

			if (typeof this.change === 'function') this.change(this.value);
			if (this.slider && this.slider.setValue) this.slider.setValue(this.value);
		},

		_blurHandler: function() {
			//normalize number input (when there are more . in the strings)
			if (this.value) {
				this.setValue(this.value);
			} else {
				this.el.value = '';
			}
		},

		setValue: function(value) {
			if (isNaN(value)) value = 0;
			this.value = value;
			this.strValue = String.addCommas(value);
			this.textfield.value = this.strValue;
			this.el.dataset.value = this.value;
			if(this.value) {
				this.el.classList.add('validated');
			} else {
				this.el.classList.remove('validated');
			}
			// if(typeof this.change === 'function') this.change(this.value);
		},

		getValue: function() {
			return this.value;
		}
	};


	window.MoneyInput = MoneyInput;
})();

MoneyInput.create(document.querySelector('#my-input'));
MoneyInput.create(document.querySelector('#my-input2'));
