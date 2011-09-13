Ext.define('AM.controller.InventoryLog', {
    extend: 'Ext.app.Controller',
    
    stores: [
        'InventoryLog'
    ],
 
    views: [
        'inventory.List'
    ],
    
    models: [
        'InventoryLog'
    ],
    
    
    init: function() {
        this.control({
        	'inventoryLog button[action=add]' : {
        		click : this.addInventoryLog
        	},
        });
    },

	addInventoryLog: function() {
//    	var win = Ext.widget('sortWindow');
//    	win.show();
    },
    
});