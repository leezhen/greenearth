Ext.define('AM.controller.Sale', {
    extend: 'Ext.app.Controller',
    title: '销售',
    
    views: ['sale.Sale','sale.SalePanel'],
    
    refs: [{ref: 'weightText', selector: 'saleOp numberfield[name=weight]'},
           {ref: 'priceText', selector: 'saleOp numberfield[name=price]'},
           {ref: 'amountText', selector: 'saleOp numberfield[name=totalAmount]'}
           ],
    
    init: function() {
        this.control({
        	'saleOp numberfield[name=weight]': {
                change: this.calcuTotal
            },
        	'saleOp numberfield[name=price]': {
        		change: this.calcuTotal
        	},
        	'saleOp *' : {
        		keydown: this.submitForm
        	}
        });
    },

	calcuTotal: function(text,value) {
    	if (this.getWeightText().value != null && this.getPriceText().value != null)
    		this.getAmountText().setValue(this.getWeightText().value*this.getPriceText().value);
    },
    
    submitForm: function(number,e) {
    	if(e.getKey() == e.ENTER) {
	    	var form = number.up('form');
	    		form = form.getForm();
	    	if(form.isValid()) {
	    		form.submit({
	                success: function(form, action) {
	                   Ext.Msg.alert('Success', action.result.msg);
	                   form.reset();
	                },
	                failure: function(form, action) {
	                    Ext.Msg.alert('Failed', action.result.msg);
	                }
	            })
	    	}
	    }
    }
});