// Vue Component
Vue.component('Card', {
	template: `<div class="card">
                    <div class="card__side card__side--front"> front </div>
                    <div class="card__side card__side--back"> back </div>
                </div>`
});

// Vue instance
new Vue({
	el: '#root'
});
