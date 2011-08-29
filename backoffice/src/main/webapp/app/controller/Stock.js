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
    
    init: function() {
        this.control(
//        	'stocksearch': {
//        		
//        	}
        );
    }
});