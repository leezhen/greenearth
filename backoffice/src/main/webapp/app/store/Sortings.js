Ext.define('AM.store.Sortings', {
    extend: 'Ext.data.Store',
    model: 'AM.model.Sortings',
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