Ext.define('AM.store.Merchant', {
    extend: 'Ext.data.Store',
    model: 'AM.model.Merchant',
    
    autoLoad: false,
    remoteSort: true,
    pageSize: 20,
    
    proxy: {
        type: 'ajax',
        url: 'merchant_list.do', 
        reader: {
            type: 'json',
            root: 'result',
            totalProperty  : 'totalItems',
            successProperty: 'success'
        }
    }
});