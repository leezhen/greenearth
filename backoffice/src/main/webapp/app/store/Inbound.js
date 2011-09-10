Ext.define('AM.store.Inbound', {
    extend: 'Ext.data.Store',
    model: 'AM.model.Inbound',
    remoteSort: true,
	proxy: {
        type: 'ajax',
        api: {
            update: 'inventory_sortInbound.do'
        },
        url: 'inventory_sortInbound.do',
        reader: {
            type: 'json',
            root: 'result',
            successProperty: 'success'
        }
    }
});