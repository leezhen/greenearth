Ext.define('AM.store.EarnedPoints', {
    extend: 'Ext.data.Store',
    model: 'AM.model.EarnedPoints',
    
    autoLoad: false,
    remoteSort: true,
    pageSize: 20,
    
    proxy: {
        type: 'ajax',
        url: 'point_listEarnedPoints.do', 
        reader: {
            type: 'json',
            root: 'result',
            totalProperty  : 'totalItems',
            successProperty: 'success'
        }
    }
});