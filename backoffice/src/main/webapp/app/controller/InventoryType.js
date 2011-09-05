Ext.define('AM.controller.InventoryType', {
    extend: 'Ext.app.Controller',
    
    stores: [
        'InventoryType'
    ],
 
    views: [
        'inventoryType.List','inventoryType.Edit'
    ],
    
    models: [
        'InventoryType'
    ],
    
    
    init: function() {
        this.control({
        	'inventoryTypeList button[action=add]' : {
        		click : this.addInventoryType
        	}
        });
    },

    addInventoryType: function() {
    	var win = Ext.widget('editInventoryType');
    	win.show();
    }
    
});