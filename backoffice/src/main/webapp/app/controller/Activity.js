Ext.define('AM.controller.Activity', {
    extend: 'Ext.app.Controller',
    
    stores: [
        'Activity'
    ],
 
    views: [
        'activity.ActivityGrid','activity.Edit'
    ],
    
    models: [
        'Activity'
    ],
    
    init: function() {
        this.control({
        	'activityEdit button[action=save]': {
        		click: this.saveActivity
        	},
        	'activityGrid': {
        		itemdblclick: this.editActivity
        	},
        	'activityGrid button[action=add]': {
        		click: this.addActivity
        	}
        });
    },

    addActivity: function(button) {
    	var view = Ext.widget('activityEdit');
    	view.setTitle('录入活动信息');
    	view.show();
    },
    
    editActivity: function(grid, record) {
    	var view = Ext.widget('activityEdit', {title: '编辑活动信息'});
    	view.down('form').loadRecord(record);
    	view.show();
    },
    
    saveActivity: function(button) {
        var win    = button.up('window'),
            form   = win.down('form').getForm();
        if (form.isValid()) {
            form.submit({
                success: function(form, action) {
                   Ext.Msg.alert('提示', action.result.msg);
                   win.close();
                   this.loadActivities();
                },
                failure: function(form, action) {
                    Ext.Msg.alert('提示', action.result.msg);
                },
                scope: this
            });
        }
    
    },
    
    loadActivities: function() {
    	var store = this.getActivityStore();
		store.load();
    }
});