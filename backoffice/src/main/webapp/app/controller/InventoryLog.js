Ext.define('AM.controller.InventoryLog', {
    extend: 'Ext.app.Controller',
    
    stores: [
        'InventoryLog','Sortings'
    ],
 
    views: [
        'inventory.List','inventory.SortWindow'
    ],
    
    models: [
        'InventoryLog','Sortings'
    ],
    
    
    init: function() {
        this.control({
        	'inventoryLog button[action=add]' : {
        		click : this.addInventoryLog
        	},
        	'addsorting': {
        		addSortRecord: this.addPointRecord
        	}
        });
    },

	addInventoryLog: function() {
    	var win = Ext.widget('sortWindow');
    	win.show();
    },
    
    addPointRecord : function() {
    	console.log("fuck");
    }
});