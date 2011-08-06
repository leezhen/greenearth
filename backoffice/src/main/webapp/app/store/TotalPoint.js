Ext.define('AM.store.TotalPoint', {
    extend: 'Ext.data.Store',
    model: 'AM.model.TotalPoint',
    
    data: [
           {type: '积分总额' ,  totalPoints: 3 },
           {type: '扣分总额' ,  totalPoints: 1 },
           {type: '可用积分' ,  totalPoints: 2 }
       ]
});