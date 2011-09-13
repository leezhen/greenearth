Ext.define('AM.model.Sortings', {
    extend: 'Ext.data.Model',
    fields: [
              {name: 'barCode', type: 'string'}, 
              {name: 'inventoryTypeId', type: 'int'}, 
              {name: 'weight', type: 'float'},
              {name: 'reasonId', type: 'int'}
            ],
});