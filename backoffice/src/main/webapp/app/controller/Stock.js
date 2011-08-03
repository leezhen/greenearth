Ext.define('AM.controller.Stock', {
    extend: 'Ext.app.Controller',
    
    stores: [
        'Stock'
    ],
 
    views: [
        'stock.List'
    ],
    
    models: [
         'Stock'
    ],
    
    init: function() {
        this.control(
        );
    }
});