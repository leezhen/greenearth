Ext.define('AM.controller.Point', {
    extend: 'Ext.app.Controller',
    
    stores: [
        'EarnedPoints','TotalPoint','DeductedPoints'
    ],
 
    views: [
        'point.Point'
    ],
    
    models: [
        'EarnedPoints','TotalPoint','DeductedPoints'
    ],
    
    init: function() {
        this.control(
        );
    }
});