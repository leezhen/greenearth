Ext.define('AM.store.Sortings', {
    extend: 'Ext.data.Store',
    model: 'AM.model.Sortings',
    remoteSort: true,
	proxy: {
        type: 'ajax',
        api: {
            update: 'point_calculatePoint.do'
        },
        url: 'point_calculatePoint.do',
        reader: {
            type: 'json',
            root: 'result',
            successProperty: 'success'
        }
    }
});