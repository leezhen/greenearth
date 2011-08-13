Ext.define('AM.store.InventoryLog', {
    extend: 'Ext.data.Store',
    model: 'AM.model.InventoryLog',
    
    autoLoad: false,
    remoteSort: true,
    pageSize: 20,
    
    proxy: {
        type: 'ajax',
        url: 'inventory_listInventoryLog.do', 
        reader: {
            type: 'json',
            root: 'result',
            totalProperty  : 'totalItems',
            successProperty: 'success'
        }
    }
});