Ext.define('AM.model.Inbound', {
    extend: 'Ext.data.Model',
    fields: [
              {name: 'barCode', type: 'string'}, 
              {name: 'inventoryTypeId', type: 'int'}, 
              {name: 'stationId', type: 'int'},
              {name: 'weight', type: 'float'},
            ],
});