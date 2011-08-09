Ext.define('AM.store.Station', {
    extend: 'Ext.data.Store',
    model: 'AM.model.Station',
    
    remoteSort: true,
    pageSize: 20,
    
    proxy: {
        type: 'ajax',
        /*api: {
            read: 'customer_list.do',
            update: 'customer_save.do',
            create: 'customer_save.do'
        },*/
        url: 'recycleStation_query.do', 
        reader: {
            type: 'json',
            root: 'result',
            totalProperty  : 'totalItems',
            successProperty: 'success'
        }
    }
});