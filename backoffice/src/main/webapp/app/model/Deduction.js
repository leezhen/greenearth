Ext.define('AM.model.Deduction', {
    extend: 'Ext.data.Model',
    fields: [
              {name: 'customerId', type: 'int'}, 
              {name: 'reasonId', type: 'int'}, 
              {name: 'points', type: 'float'}
            ],
});