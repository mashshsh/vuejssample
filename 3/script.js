new Vue({
	el: '.js-component03',
	data: {
		input: '',
		text: ''
	},
	methods: {
		output: function () {
			this.text = this.input;
		}
	}
});