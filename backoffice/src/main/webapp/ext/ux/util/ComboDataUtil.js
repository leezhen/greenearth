Ext.define('Ext.ux.util.ComboDataUtil' ,{
    requires: ['Ext.ux.util.ComboUtil'],
    
    statics: {
	},
    
	constructor : function() {
		this.callParent();
	},
	
	getCities : function() {
		if(!(this.statics().cities)) {
			this.statics().cities = Ext.create('Ext.ux.util.ComboUtil',{
		    	urls: 'customer_cities.do',
		    });
			this.statics().cities.load();
		}
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
	},
	
	getDeductReasons : function() {
		if(!(this.statics().reasons)) {
			this.statics().reasons = Ext.create('Ext.ux.util.ComboUtil',{
		    	urls: 'dict_reasons.do',
		    });
			this.statics().reasons.load();
		}
		return this.statics().reasons;
	},
	
	getStations : function() {
		if(!(this.statics().stations)) {
			this.statics().stations = Ext.create('Ext.ux.util.ComboUtil',{
		    	urls: 'dict_recycleStations.do',
		    });
			this.statics().stations.load();
		}
		return this.statics().stations;
	},
	
	getPartners : function() {
		if(!(this.statics().partners)) {
			this.statics().partners = Ext.create('Ext.ux.util.ComboUtil',{
		    	urls: 'dict_partners.do',
		    });
			this.statics().partners.load();
		}
		return this.statics().partners;
	},
	
	getProvinces : function() {
		if(!(this.statics().provinces)) {
			this.statics().provinces = Ext.create('Ext.ux.util.ComboUtil',{
				urls: 'dict_provinces.do'
			})
			this.statics().provinces.load();
		}
		return this.statics().provinces;
	},
	
	getPointTypes : function() {
		if(!(this.statics().pointTypes)) {
			this.statics().pointTypes = Ext.create('Ext.ux.util.ComboUtil',{
				urls: 'dict_pointTypes.do'
			})
			this.statics().pointTypes.load();
		}
		return this.statics().pointTypes;
	}
	
});