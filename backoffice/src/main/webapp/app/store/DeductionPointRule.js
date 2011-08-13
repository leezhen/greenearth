Ext.define('AM.store.DeductionPointRule', {
    extend: 'Ext.data.Store',
    model: 'AM.model.DeductionPointRule',
    
    autoLoad: false,
    remoteSort: true,
    pageSize: 20,
    
    proxy: {
        type: 'ajax',
        url: 'pointRule_listDeductionRules.do', 
        reader: {
            type: 'json',
            root: 'result',
            totalProperty  : 'totalItems',
            successProperty: 'success'
        }
    }
});