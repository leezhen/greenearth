Ext.define('AM.store.InventoryType', {
    extend: 'Ext.data.Store',
    model: 'AM.model.InventoryType',
    
    remoteSort: true,
    pageSize: 20,
    
    proxy: {
        type: 'ajax',
        url: 'inventoryType_list.do', 
        reader: {
            type: 'json',
            root: 'result',
            totalProperty  : 'totalItems',
            successProperty: 'success'
        }
    }
});