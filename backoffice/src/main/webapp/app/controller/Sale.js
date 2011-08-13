Ext.define('AM.controller.Sale', {
    extend: 'Ext.app.Controller',
    title: '销售',
    
    views: ['sale.Sale'],
    
//    models: [
//             'Station'
//         ],
//    
//    stores: ['ComboStation'],
    
    init: function() {
        this.control(/*{
        	'viewport > mainview customergrid': {
                itemdblclick: this.editCustomer
            }
        }*/);
    }
});