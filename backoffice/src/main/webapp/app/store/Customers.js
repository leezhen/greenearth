Ext.define('AM.store.Customers', {
    extend: 'Ext.data.Store',
    model: 'AM.model.Customer',
    remoteSort: true,
    pageSize: 20,
    
    proxy: {
        type: 'ajax',
        /*api: {
            read: 'customer_list.do',
            update: 'customer_save.do',
            create: 'customer_save.do'
        },*/
        actionMethods: {
//            create: 'POST',
//            destroy: 'DELETE',
            read: 'GET',
//            update: 'POST'
        },
        url: 'customer_list.do', 
        reader: {
            type: 'json',
            root: 'result',
            totalProperty  : 'totalItems',
            successProperty: 'success'
        }
    }
});