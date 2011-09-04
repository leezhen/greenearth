Ext.define('Ext.ux.util.ComboUtil', {
    extend: 'Ext.data.Store',
    fields: ['id','name'],
	proxy: {
        type: 'ajax',
        url: 'dict_inventoryTypes.do',
        reader: {
            type: 'json'
        }
    },
    constructor: function(config) {
    	if(config) {
	    	this.proxy.url = config.urls;
    	}
    	this.superclass.constructor.call(this, config);
    }
});