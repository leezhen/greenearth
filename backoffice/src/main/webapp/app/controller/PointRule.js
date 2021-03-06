Ext.define('AM.controller.PointRule', {
    extend: 'Ext.app.Controller',
    
    stores: [
        'PointRule','DeductionPointRule'
    ],
 
    views: [
        'pointRule.List',
        'pointRule.EditEarnPointRule',
        'pointRule.EditDeductPointRule',
        'pointRule.EarnPointRule',
        'pointRule.DeductionPointRule',
    ],
    
    models: [
        'PointRule','DeductionPointRule'
    ],
    
    refs: [{ref: 'earnPointRule', selector: 'earnPointRule'},
           {ref: 'deductionPointRule', selector: 'deductionPointRule'}],
    
    init: function() {
        this.control({
        	'earnPointRule': {
        		itemdblclick: this.editEarnPointRule
    		},
    		'deductionPointRule': {
    			itemdblclick: this.editDeductPointRule
    		},
        	'earnPointRule button[action=add]': {
            	click: this.addEarnPointRule
        	},
        	'deductionPointRule button[action=add]': {
            	click: this.addDeductionPointRule
        	},
        	'editDeductPointRule button[action=save]': {
            	click: this.saveDeductionPointRule
        	},
        	'editEarnPointRule button[action=save]': {
            	click: this.saveEarnPointRule
        	}
        });
    },
    
    addEarnPointRule: function(grid) {
    	var view = Ext.widget('editEarnPointRule');
    	view.setTitle('录入积分规则');
    },
    
    addDeductionPointRule: function(grid) {
    	var view = Ext.widget('editDeductPointRule');
    	view.setTitle('录入扣分规则');
    },
    
    editEarnPointRule: function(grid, record) {
    	var view = Ext.widget('editEarnPointRule');
    	view.setTitle('编辑积分规则');
    	view.down('form').loadRecord(record);
    },
    
    editDeductPointRule: function(grid, record) {
    	var view = Ext.widget('editDeductPointRule');
    	view.setTitle('编辑扣规则');
    	view.down('form').loadRecord(record);
    },
    
    loadEarnPointRule: function() {
    	this.getEarnPointRule().store.load();
    },
    
    loadDeductionPointRule: function() {
    	this.getDeductionPointRule().store.load();
    },
    
    saveEarnPointRule: function(button) {
    	var win    = button.up('window'),
        	form   = win.down('form').getForm();
    	
    	if(form.isValid()) {
    		form.submit({
                success: function(form, action) {
                   Ext.Msg.alert('提示', action.result.msg);
                   this.loadEarnPointRule();
                   win.close();
                },
                failure: function(form, action) {
                    Ext.Msg.alert('提示', action.result.msg);
                },
                scope: this
            });
    	}
    },
    
    saveDeductionPointRule: function(button) {
    	var win    = button.up('window'),
        	form   = win.down('form').getForm();
    	
    	if(form.isValid()) {
    		form.submit({
                success: function(form, action) {
                   Ext.Msg.alert('提示', action.result.msg);
                   this.loadDeductionPointRule();
                   win.close();
                },
                failure: function(form, action) {
                    Ext.Msg.alert('提示', action.result.msg);
                },
                scope: this
            });
    	}
    }
});