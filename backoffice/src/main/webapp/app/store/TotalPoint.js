Ext.define('AM.store.TotalPoint', {
    extend: 'Ext.data.Store',
    model: 'AM.model.TotalPoint',
    
    remoteSort: true,
    pageSize: 20,
    
    proxy: {
        type: 'ajax',
        url: 'point_listTotal.do', 
        reader: {
            type: 'json',
            root: 'result',
            totalProperty  : 'totalItems',
            successProperty: 'success'
        }
    }
});