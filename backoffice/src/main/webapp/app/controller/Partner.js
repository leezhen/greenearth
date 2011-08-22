Ext.define('AM.controller.Partner', {
    extend: 'Ext.app.Controller',
    
    stores: [
        'Partner'
    ],
 
    views: [
        'partner.List'
    ],
    
    models: [
        'Partner'
    ],
    
    init: function() {
        this.control(
        );
    }
});