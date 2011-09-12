Ext.define('AM.store.Activity', {
    extend: 'Ext.data.Store',
    model: 'AM.model.Activity',
    
    autoLoad: false,
    remoteSort: true,
    pageSize: 20,
    
    proxy: {
        type: 'ajax',
        url: 'activity_list.do', 
        reader: {
            type: 'json',
            root: 'result',
            totalProperty  : 'totalItems',
            successProperty: 'success'
        }
    }
});