Ext.define('AM.controller.Activity', {
    extend: 'Ext.app.Controller',
    
    stores: [
        'Activity'
    ],
 
    views: [
        'activity.ActivityGrid'
    ],
    
    models: [
        'Activity'
    ],
    
    init: function() {
        this.control({
        	
        });
    }
});