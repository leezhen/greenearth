Ext.define('AM.controller.Merchant', {
    extend: 'Ext.app.Controller',
    
    stores: [
        'Merchant'
    ],
 
    views: [
        'merchant.MerchantGrid'
    ],
    
    models: [
        'Merchant'
    ],
    
    init: function() {
        this.control({
        });
    }
});