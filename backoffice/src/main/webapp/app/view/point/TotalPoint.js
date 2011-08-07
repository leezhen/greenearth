Ext.define('AM.view.point.TotalPoint', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.totalPoint',

//	cls: 'feed-grid',
    border: false,
    title: '积分统计',
    
    requires: ['Ext.toolbar.Toolbar'],
    
    initComponent: function() {
		Ext.apply(this, {
		    store: 'TotalPoint',
		    viewConfig: {
		    	forceFit: true
		    },
			/*viewConfig: {
				plugins: [{
					pluginId: 'preview',
					ptype: 'preview',
					bodyField: 'description',
					previewExpanded: true
				}]
			},*/

			columns: [
			    {text: '积分类型' ,dataIndex: 'type' ,flex :1 },
	            {text: '积分额', dataIndex: 'totalPoints', flex: 1}
	            ],
		});

		this.callParent(arguments);
//		this.store.load();
	}
});