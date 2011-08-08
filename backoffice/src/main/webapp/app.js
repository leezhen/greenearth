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
        'SaleRecord'
    ],
           
    autoCreateViewport: true
});

Ext.Loader.setPath('Ext.ux', './ext/ux');
Ext.require([
    'Ext.ux.grid.FilterRow',
    'Ext.ux.form.field.ClearButton'
]);