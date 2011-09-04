Ext.define('AM.controller.Stock', {
    extend: 'Ext.app.Controller',
    
    stores: [
        'Stock'
    ],
 
    views: [
        'stock.List','stock.Search','stock.stockPanel'
    ],
    
    models: [
         'Stock'
    ],
    
    refs: [{ref: 'stockGrid', selector: 'stocklist'}],
    
    init: function() {
        this.control({
        	'stocksearch button[text=查询]': {
        		click: this.searchStock
        	},
        	'stocksearch *': {
        		keydown: this.onKeyDown
        	}
        });
    },

	searchStock: function(comp) {
    	var values = {};
    	var form = comp.up('form');
    	form.items.each(function(item) {
    		if(item.xtype != 'component') {
    			values[item.name] = item.getValue();
    		}
    	})
    	for(k in values) {
    		if (!Ext.isEmpty(values[k]))
    			this.getStockGrid().store.proxy.extraParams[k] = values[k];
    		else
    			delete this.getStockGrid().store.proxy.extraParams[k];
    	}
    	this.getStockGrid().store.currentPage = 1;
    	this.getStockGrid().store.load();
    },
    
    onKeyDown: function(comp,e) {
    	if(e.getKey() == e.ENTER) {
    		this.searchStock(comp);
    	}
    }
	
});