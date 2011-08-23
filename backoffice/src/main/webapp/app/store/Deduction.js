Ext.define('AM.store.Deduction', {
    extend: 'Ext.data.Store',
    model: 'AM.model.Deduction',
    remoteSort: true,
	proxy: {
        type: 'ajax',
        api: {
            update: 'point_deductPoints.do'
        },
        url: 'point_deductPoints.do',
        reader: {
            type: 'json',
            root: 'result',
            successProperty: 'success'
        }
    }
});