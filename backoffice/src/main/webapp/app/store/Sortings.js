Ext.define('AM.store.Sortings', {
    extend: 'Ext.data.Store',
    storeId: 'sortingStore',
    fields: [
              {name: 'no', type: 'int'}, 
              {name: 'inventoryTypeId', type: 'int'}, 
              {name: 'weight', type: 'float'}
            ],
            
    data: []
});