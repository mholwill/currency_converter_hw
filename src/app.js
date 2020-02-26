import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () =>{
  new Vue ({
    el: '#app',
    data: {
      currencies: {},
      amount: 0,
      currencyIndex: "",
      convertedAmount: 0,
    },
    mounted(){
      this.fetchCurrencies()
    },
    methods: {
      fetchCurrencies: function (){
        const request = fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => this.currencies = data.rates)
      },
      convertCurrency: function(){
        this.convertedAmount = this.amount * this.currencies[this.currencyIndex];
        this.convertedAmount.toFixed(2);
      }
    },
    computed: {
    }
  })
})
