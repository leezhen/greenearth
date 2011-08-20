Ext.define('AM.store.DeductedPoints', {
    extend: 'Ext.data.Store',
    model: 'AM.model.DeductedPoints',
    
    autoLoad: false,
    remoteSort: true,
    pageSize: 20,
    
    proxy: {
        type: 'ajax',
        url: 'point_listDeductionPoints.do', 
        reader: {
            type: 'json',
            root: 'result',
            totalProperty  : 'totalItems',
            successProperty: 'success'
        }
    }
});