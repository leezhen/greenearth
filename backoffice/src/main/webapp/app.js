Ext.application({
    name: 'AM',
 
    appFolder: 'app',
    
    controllers: [
        'Home',
        'Customers',
        'Users',
        'Sorting',
        'Stock',
        'Point',
        'Station',
        'PointRule',
        'Sale',
        'SaleRecord',
        'InventoryLog',
        'Partner',
        'InventoryType',
        'DirectTest',
        'Inbound',
        'Merchant',
        'Activity'
    ],
           
    autoCreateViewport: true
});

Ext.Loader.setPath('Ext.ux', './ext/ux');
Ext.require([
    'Ext.ux.grid.FilterRow',
    'Ext.ux.form.field.ClearButton',
    'Ext.ux.util.*',
    'Ext.direct.*'
]);