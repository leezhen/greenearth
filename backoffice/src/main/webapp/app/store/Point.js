Ext.define('AM.store.Point', {
    extend: 'Ext.data.Store',
    model: 'AM.model.Point',
    
//    autoLoad: false,
//    remoteSort: true,
//    pageSize: 4,
    
//    proxy: {
//        type: 'ajax',
//        /*api: {
//            read: 'customer_list.do',
//            update: 'customer_save.do',
//            create: 'customer_save.do'
//        },*/
//        url: 'inventory_query.do', 
//        reader: {
//            type: 'json',
//            root: 'result',
//            totalProperty  : 'totalItems',
//            successProperty: 'success'
//        }
//    }
    data: [
           {id: 1 ,  points: 1 },
           {id: 2 ,  points: 2 }
       ]
});