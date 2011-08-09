Ext.define('AM.store.Stock', {
    extend: 'Ext.data.Store',
    model: 'AM.model.Stock',
    
    autoLoad: false,
    remoteSort: true,
    pageSize: 20,
    
    proxy: {
        type: 'ajax',
        /*api: {
            read: 'customer_list.do',
            update: 'customer_save.do',
            create: 'customer_save.do'
        },*/
        url: 'inventory_query.do', 
        reader: {
            type: 'json',
            root: 'result',
            totalProperty  : 'totalItems',
            successProperty: 'success'
        }
    }
//    data: [
//           {id: 1 , name: '成都', quantity: 1 },
//           {id: 2 , name: '北京', quantity: 2 }
//       ]
});