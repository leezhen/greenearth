Ext.define('AM.store.PointRule', {
    extend: 'Ext.data.Store',
    model: 'AM.model.PointRule',
    autoLoad: false,
    remoteSort: true,
    pageSize: 20,
    
    proxy: {
        type: 'ajax',
        url: 'pointRule_listPointRules.do', 
        reader: {
            type: 'json',
            root: 'result',
            totalProperty  : 'totalItems',
            successProperty: 'success'
        }
    }
});