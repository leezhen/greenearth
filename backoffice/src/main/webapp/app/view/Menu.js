Ext.define('AM.view.Menu', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.menu',
	title: '',
	margins: '0 0 5 5',
	split: true,
    collapsible: true,
    animCollapse: true,
    layout: 'accordion',

	initComponent: function() {
		/*items.push({
            title: '收运管理',
            html: '<p>Some settings in here.</p>',
            iconCls: 'nav'
        });
		items.push({
            title: '分拣管理',
            html: '<p>Some info in here.</p>',
            iconCls: 'nav'
        });
		items.push({
            title: '积分管理',
            html: '<p>Some info in here.</p>',
            iconCls: 'nav'
        });
		items.push({
            title: '出库销售管理',
            html: '<p>Some info in here.</p>',
            iconCls: 'nav'
        });
		items.push({
            title: '合作商管理',
            html: '<p>Some info in here.</p>',
            iconCls: 'nav'
        });
		items.push({
            title: '用户管理',
            html: '<p>Some info in here.</p>',
            iconCls: 'nav'
        });
		items.push({
            title: '系统设置',
            html: '<p>Some info in here.</p>',
            iconCls: 'settings'
        });*/
		Ext.apply(this, {
			dockedItems: [{
				xtype: 'toolbar',
				items: [{
					text: '退出登录',
					action: 'add'
				}, {
					text: '修改密码',
					disabled: true,
					action: 'remove'
				}]
			}]
		});

		this.callParent(arguments);
	}
});
