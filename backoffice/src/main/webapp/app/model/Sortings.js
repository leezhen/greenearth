Ext.define('AM.model.Sortings', {
    extend: 'Ext.data.Model',
    fields: [
              {name: 'cellPhone', type: 'string'}, 
              {name: 'inventoryTypeId', type: 'int'}, 
              {name: 'stationId', type: 'int'},
              {name: 'weight', type: 'float'},
              {name: 'reasonId', type: 'int'}
            ],
});