drop table if exists customer_point;
insert into role(id, name, description) values (1, 'user', 'The default role given to all users.');
insert into role(id, name, description) values (2, 'admin', 'The administrator role only given to site admins');
insert into role_permission values (2, 'customer:*');
insert into user(id,username,email,password) values (1, 'admin', 'longzhi@gmail.com', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918');
insert into user_role values (1, 2);

insert into menu(id, icon, code, caption, view_ref, parent_id) values(1, null, 'customerManage', '客户信息管理', null, null);
insert into menu(id, icon, code, caption, view_ref, parent_id) values(2, './images/kiva.png', 'customer', '客户信息查询', 'customerTab', 1);
insert into menu(id, icon, code, caption, view_ref, parent_id) values(3, null, 'shouyunManage', '收运管理', null, null);
insert into menu(id, icon, code, caption, view_ref, parent_id) values(4, null, 'sortingManage', '分拣管理', null, null);
insert into menu(id, icon, code, caption, view_ref, parent_id) values(5, './images/kiva.png', 'sorting', '分拣积分', 'sortingTab', 4);
insert into menu(id, icon, code, caption, view_ref, parent_id) values(6, null, 'pointsManage', '积分管理', null, null);
insert into menu(id, icon, code, caption, view_ref, parent_id) values(7, null, 'salesManage', '出库销售管理', null, null);
insert into menu(id, icon, code, caption, view_ref, parent_id) values(8, null, 'partnerManage', '销售商管理', null, null);
insert into menu(id, icon, code, caption, view_ref, parent_id) values(9, null, 'userManage', '用户管理', null, null);
insert into menu(id, icon, code, caption, view_ref, parent_id) values(10, null, 'stationManage', '分拣站管理', null, null);
insert into menu(id, icon, code, caption, view_ref, parent_id) values(11, null, 'settings', '系统设置', null, null);
insert into menu(id, icon, code, caption, view_ref, parent_id) values(12, './images/kiva.png', 'sales', '销售', 'saleTab', 7);
insert into menu(id, icon, code, caption, view_ref, parent_id) values(13, './images/kiva.png', 'salesRecord', '销售记录', 'saleRecordTab', 7);
insert into menu(id, icon, code, caption, view_ref, parent_id) values(14, './images/kiva.png', 'stock', '查看库存', 'stockTab', 4);
insert into menu(id, icon, code, caption, view_ref, parent_id) values(15, './images/kiva.png', 'inventoryLog', '查看入库记录', 'inventoryLogTab', 4);
insert into menu(id, icon, code, caption, view_ref, parent_id) values(16, './images/kiva.png', 'station', '查看分拣站', 'stationTab',10);
insert into menu(id, icon, code, caption, view_ref, parent_id) values(17, './images/kiva.png', 'pointRule', '积分规则设定', 'pointRuleTab',6);
insert into menu(id, icon, code, caption, view_ref, parent_id) values(18, './images/kiva.png', 'partner', '销售商列表', 'partnerTab',8);
insert into menu(id, icon, code, caption, view_ref, parent_id) values(19, './images/kiva.png', 'directTest', 'Direct测试', 'directTestTab', 1);
insert into menu(id, icon, code, caption, view_ref, parent_id) values(20, './images/kiva.png', 'inventoryType', '库存类型设定', 'inventoryTypeTab',6);
insert into menu(id, icon, code, caption, view_ref, parent_id) values(21, './images/kiva.png', 'inbound', '分类入库', 'inboundTab',4);
insert into menu(id, icon, code, caption, view_ref, parent_id) values(22, null, 'activityManager', '活动管理', null,null);
insert into menu(id, icon, code, caption, view_ref, parent_id) values(23, './images/kiva.png', 'activity', '活动列表', 'activityTab',22);
insert into menu(id, icon, code, caption, view_ref, parent_id) values(24, null, 'merchantManager', '商户管理', null,null);
insert into menu(id, icon, code, caption, view_ref, parent_id) values(25, './images/kiva.png', 'merchant', '商户列表', 'merchantTab',24);

insert into role_menu(role_id, menu_id) values(1, 2);
insert into role_menu(role_id, menu_id) values(1, 19);
insert into role_menu(role_id, menu_id) values(1, 5);
insert into role_menu(role_id, menu_id) values(1, 7);

insert into city(id, name) values (1, '成都');
insert into city(id, name) values (2, '北京');

insert into district(id, name, city_id) values (1, '武候区', 1);
insert into district(id, name, city_id) values (2, '锦江区', 1);
insert into district(id, name, city_id) values (3, '青羊区', 1);
insert into district(id, name, city_id) values (4, '金牛区', 1);
insert into district(id, name, city_id) values (5, '龙泉驿区', 1);
insert into district(id, name, city_id) values (6, '朝阳区', 2);
insert into district(id, name, city_id) values (7, '海淀区', 2);
insert into district(id, name, city_id) values (8, '东城区', 2);

insert into province(id,name) values(2,'北京');
insert into province(id,name) values(1,'成都');

insert into customer(id, name, cellphone, city_id, district_id, province_id,street_address, barcode, community, email,created_at, created_by, modified_at, modified_by) values(1, '张三', '13300000000', 1, 1,1, 'X街道X号X小区X楼X号', '00000001', 'XX小区','131083080@qq.com', now(), 'admin', null, null);
insert into customer(id, name, cellphone, city_id, district_id, province_id,street_address, barcode, community, email,created_at, created_by, modified_at, modified_by) values(2, '李四', '13411111111', 1, 5,1, 'Y街道Y号Y小区Y楼Y号', '00000002', 'XX小区','131083081@qq.com', now(), 'admin', null, null);
insert into customer(id, name, cellphone, city_id, district_id, province_id,street_address, barcode, community, email,created_at, created_by, modified_at, modified_by) values(3, '王五', '13522222222', 2, 2,2, 'Z街道Z号Z小区Z楼Z号', '00000003', 'XX小区','131083082@qq.com', now(), 'admin', null, null);

insert into inventory_type(id, name,level) values(1, '厨余',1);
insert into inventory_type(id, name,level) values(2, '塑料',1);
insert into inventory_type(id, name,level) values(3, '玻璃',1);
insert into inventory_type(id, name,level) values(4, '金属',1);

insert into inventory_type(id, name,level,parent_id) values(5, '铁制品',2,4);
insert into inventory_type(id, name,level,parent_id) values(6, '铜制品',2,4);
insert into inventory_type(id, name,level,parent_id) values(7, '锌制品',2,4);
insert into inventory_type(id, name,level,parent_id) values(8, '玻璃碗 ',2,3);
insert into inventory_type(id, name,level,parent_id) values(9, '塑料碗',2,2);
insert into inventory_type(id, name,level,parent_id) values(10, '玻璃雕像',2,3);
insert into inventory_type(id, name,level,parent_id) values(11, '塑料玩具',2,2);

insert into recycle_station(id,name,address) values(1,'成都','成都');
insert into recycle_station(id,name,address) values(2,'北京','北京');

insert into inventory(id,name,weight,recycle_station_id,inventory_type_id) values(1,'',10,1,1);
insert into inventory(id,name,weight,recycle_station_id,inventory_type_id) values(2,'',10,2,3);
insert into inventory(id,name,weight,recycle_station_id,inventory_type_id) values(3,'',20,2,4);
insert into inventory(id,name,weight,recycle_station_id,inventory_type_id) values(4,'',10,1,2);
insert into inventory(id,name,weight,recycle_station_id,inventory_type_id) values(5,'',50,2,1);
insert into inventory(id,name,weight,recycle_station_id,inventory_type_id) values(6,'',70,1,4);

insert into inventory_log values(1,now(),4,1,2);
insert into inventory_log values(2,now(),2,2,1);
insert into inventory_log values(3,now(),1,1,3);
insert into inventory_log values(4,now(),4,2,2);
insert into inventory_log values(5,now(),5,1,1);

insert into points_type values(1,'垃圾积分','垃圾积分');
insert into points_type values(2,'活动积分','活动积分');
insert into points_type values(3,'贡献积分','贡献积分');
insert into points_type values(4,'保留','保留');

insert into deduction_reason values(1,'something','dirty');
insert into deduction_reason values(2,'something','有毒');

insert into point_rule values(1,now(),'lizhen',now(),'lizhen',10,1,1,1);
insert into point_rule values(2,now(),'lizhen',now(),'lizhen',5,1,2,1);
insert into point_rule values(3,now(),'lizhen',now(),'lizhen',2,1,3,1);
insert into point_rule values(4,now(),'lizhen',now(),'lizhen',1,1,4,1);

insert into deduction_rule values(1,now(),'lizhen',now(),'lizhen',5,1);
insert into deduction_rule values(2,now(),'lizhen',now(),'lizhen',10,2);

insert into partner values(1,'','010-1102930','刘老板','131241706',1);
insert into partner values(2,'','020-110293430','汪老板','13151241706',2);

insert into sell_record values(1,now(),10,2,20,1,1,1);
insert into sell_record values(2,now(),5,3,15,2,2,2);

insert into merchant values (1,10.0,now(),now(),true,'商户地址','商户名称',now(),now(),5,1,1);

insert into activity values (1,now(),now(),'description',true,now(),now(),'活动名称',50,1,1);

ALTER TABLE point_rule ADD UNIQUE idx_inventory_point(inventory_type_id,points_type_id);
ALTER TABLE deduction_rule ADD UNIQUE idx_reason(deduction_reason_id);