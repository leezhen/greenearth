Ext.define('AM.controller.SaleRecord', {
    extend: 'Ext.app.Controller',
    title: '销售记录',
    
    views: ['sale.SaleRecord'],
    
    stores: [
        'SaleRecord'
    ],
         
    models: [
        'SaleRecord'
    ],
    
    init: function() {
        this.control(/*{
        	'viewport > mainview customergrid': {
                itemdblclick: this.editCustomer
            }
        }*/);
    }
});