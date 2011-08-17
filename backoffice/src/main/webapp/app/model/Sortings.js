Ext.define('AM.model.Sortings', {
    extend: 'Ext.data.Model',
    fields: [
              {name: 'customerId', type: 'int'}, 
              {name: 'inventoryTypeId', type: 'int'}, 
              {name: 'stationId', type: 'int'},
              {name: 'weight', type: 'float'}
            ],
});