Ext.define('AM.controller.Merchant', {
    extend: 'Ext.app.Controller',
    
    stores: [
        'Merchant'
    ],
 
    views: [
        'merchant.MerchantGrid','merchant.Edit'
    ],
    
    models: [
        'Merchant'
    ],
    
    init: function() {
        this.control({
        	'merchantEdit button[action=save]': {
    			click: this.saveMerchant
    		},
	    	'merchantGrid': {
    			itemdblclick: this.editMerchant
	    	},
        	'merchantGrid button[action=add]': {
        		click: this.addMerchant
        	}
        });
    },

    addMerchant: function(button) {
    	var view = Ext.widget('merchantEdit');
    	view.setTitle('录入商户信息');
    	view.show();
    },
    
    editMerchant: function(grid, record) {
    	var view = Ext.widget('merchantEdit', {title: '编辑商户信息'});
    	view.down('form').loadRecord(record);
    	view.show();
    },
    
    saveMerchant: function(button) {
        var win    = button.up('window'),
        form   = win.down('form').getForm();
        if (form.isValid()) {
	        form.submit({
	            success: function(form, action) {
	               Ext.Msg.alert('提示', action.result.msg);
	               win.close();
	               this.loadMerchants();
	            },
	            failure: function(form, action) {
	                Ext.Msg.alert('提示', action.result.msg);
	            },
	            scope: this
	        });
        }
	},
	
	loadMerchants: function() {
    	var store = this.getMerchantStore();
		store.load();
	}
});