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

insert into customer(id, name, cellphone, city_id, district_id, street_address, barcode, created_at, created_by, modified_at, modified_by) values(1, '张三', '13300000000', 1, 1, 'X街道X号X小区X楼X号', '00000001', now(), 'admin', null, null);
insert into customer(id, name, cellphone, city_id, district_id, street_address, barcode, created_at, created_by, modified_at, modified_by) values(2, '李四', '13411111111', 1, 5, 'Y街道Y号Y小区Y楼Y号', '00000002', now(), 'admin', null, null);
insert into customer(id, name, cellphone, city_id, district_id, street_address, barcode, created_at, created_by, modified_at, modified_by) values(3, '王五', '13522222222', 2, 2, 'Z街道Z号Z小区Z楼Z号', '00000003', now(), 'admin', null, null);

insert into inventory_type(id, name) values(1, '厨余');
insert into inventory_type(id, name) values(2, '塑料瓶');
insert into inventory_type(id, name) values(3, '玻璃制品');
insert into inventory_type(id, name) values(4, '铁制品');

insert into recycle_station(id,name,address) values(1,'成都','成都');
insert into recycle_station(id,name,address) values(2,'北京','北京');

insert into inventory(id,name,weight,recycle_station_id,inventory_type_id) values(1,'',10,1,1);
insert into inventory(id,name,weight,recycle_station_id,inventory_type_id) values(2,'',10,2,3);
insert into inventory(id,name,weight,recycle_station_id,inventory_type_id) values(3,'',20,2,4);
insert into inventory(id,name,weight,recycle_station_id,inventory_type_id) values(4,'',10,1,2);
insert into inventory(id,name,weight,recycle_station_id,inventory_type_id) values(5,'',50,2,1);
insert into inventory(id,name,weight,recycle_station_id,inventory_type_id) values(6,'',70,1,2);

insert into points_type values(1,'something','可回收');
insert into points_type values(2,'something','不可回收');
insert into points_type values(3,'something','差不多可回收');
insert into points_type values(4,'something','勉强可回收');

insert into deduction_reason values(1,'something','dirty');
insert into deduction_reason values(2,'something','有毒');

insert into point_rule values(1,now(),'lizhen',now(),'lizhen',10,1,1,1);
insert into point_rule values(2,now(),'lizhen',now(),'lizhen',5,1,2,2);
insert into point_rule values(3,now(),'lizhen',now(),'lizhen',2,1,3,3);
insert into point_rule values(4,now(),'lizhen',now(),'lizhen',1,1,4,4);

insert into deduction_rule values(1,now(),'lizhen',now(),'lizhen',5,1);
insert into deduction_rule values(2,now(),'lizhen',now(),'lizhen',10,2);

insert into partner values(1,'','010-1102930','刘老板','131241706',1);
insert into partner values(2,'','020-110293430','汪老板','13151241706',2);

insert into sell_record values(1,now(),10,2,20,1,1,1);
insert into sell_record values(2,now(),5,3,15,2,2,2);