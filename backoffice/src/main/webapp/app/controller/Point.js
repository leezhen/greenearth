Ext.define('AM.controller.Point', {
    extend: 'Ext.app.Controller',
    
    stores: [
        'Point','TotalPoint'
    ],
 
    views: [
        'point.Point'
    ],
    
    models: [
        'Point','TotalPoint'
    ],
    
    init: function() {
        this.control(
        );
    }
});