Ext.define('Ext.ux.util.ComboDataUtil' ,{
    requires: ['Ext.ux.util.ComboUtil'],
    
    statics: {
	},
    
	constructor : function() {
		this.callParent();
	},
	
	getCities : function() {
		console.log(this.statics().cities);
		if(!(this.statics().cities)) {
			this.statics().cities = Ext.create('Ext.ux.util.ComboUtil',{
		    	urls: 'customer_cities.do',
		    });
			this.statics().cities.load();
		}
		console.log(this.statics().cities);
		return this.statics().cities;
	},

	getInventoryTypes : function() {
		if(!(this.statics().inventoryTypes)) {
			this.statics().inventoryTypes = Ext.create('Ext.ux.util.ComboUtil',{
		    	urls: 'dict_inventoryTypes.do',
		    });
			this.statics().inventoryTypes.load();
		}
		return this.statics().inventoryTypes;
	}
 
});