Ext.define('AM.store.SaleRecord', {
    extend: 'Ext.data.Store',
    model: 'AM.model.SaleRecord',
    
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
        url: 'sellRecord_list.do', 
        reader: {
            type: 'json',
            root: 'result',
            totalProperty  : 'totalItems',
            successProperty: 'success'
        }
    }
});