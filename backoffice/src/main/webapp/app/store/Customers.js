Ext.define('AM.store.Customers', {
    extend: 'Ext.data.Store',
    model: 'AM.model.Customer',
    autoLoad: true,
    remoteSort: true,
    pageSize: 2,
    
    proxy: {
        type: 'ajax',
        /*api: {
            read: 'customer_list.do',
            update: 'customer_save.do',
            create: 'customer_save.do'
        },*/
        url: 'customer_list.do', 
        reader: {
            type: 'json',
            root: 'result',
            totalProperty  : 'totalItems',
            successProperty: 'success'
        }
    }
});