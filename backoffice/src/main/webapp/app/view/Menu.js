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
		Ext.apply(this, {
			items: [Ext.create('Ext.panel.Panel', {
	            bodyPadding: 5,  // Don't want content to crunch against the borders
	            title: '客户信息管理',
	            layout: 'fit',
	            split: true,
	            collapsible: true,
	            animCollapse: true,
	            iconCls: 'nav',
	            
	            items: [Ext.create('Ext.DataView', {
	                store: this.store,
	                tpl: new Ext.XTemplate(
	            		'<tpl for=".">',
	        		        '<div class="menu-list-item">',
	        		          '<a href="#">',
	        		          	'<img src="{icon}" />',
	        		          	'<br/><span>{caption}</span>',
	        		          '</a>',
	        		        '</div>',
	        		    '</tpl>'
	        		),
	                itemSelector: 'div.menu-list-item',
	        		cls: 'menu-list',
					overItemCls: 'feed-list-item-hover',
	                emptyText: 'No images available',
	                autoScroll: true
	            })]
	        }), {
	            title: '收运管理',
	            html: '<p>Some settings in here.</p>',
	            iconCls: 'nav'
	        }, {
	            title: '分拣管理',
	            html: '<p>Some info in here.</p>',
	            iconCls: 'nav'
	        }, {
	            title: '积分管理',
	            html: '<p>Some info in here.</p>',
	            iconCls: 'nav'
	        }, {
	            title: '出库销售管理',
	            html: '<p>Some info in here.</p>',
	            iconCls: 'nav'
	        }, {
	            title: '合作商管理',
	            html: '<p>Some info in here.</p>',
	            iconCls: 'nav'
	        }, {
	            title: '用户管理',
	            html: '<p>Some info in here.</p>',
	            iconCls: 'nav'
	        }, {
	            title: '系统设置',
	            html: '<p>Some info in here.</p>',
	            iconCls: 'settings'
	        }],

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
