Ext.define('AM.model.City', {
    extend: 'Ext.data.Model',
    
    proxy: {
        type: 'memory'
    },
    
    fields: [
        {name: 'id',  type: 'int'},
        {name: 'name', type: 'string'}
    ]
});