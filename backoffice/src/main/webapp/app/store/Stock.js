Ext.define('AM.store.Stock', {
    extend: 'Ext.data.Store',
    model: 'AM.model.Stock',
    data: [
           {id: 1 , name: '成都', quantity: 1 },
           {id: 2 , name: '北京', quantity: 2 }
       ]
});