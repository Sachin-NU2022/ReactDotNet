/****** SSMS の SelectTopNRows コマンドのスクリプト  ******/
--create database ReactUserDetail

--delete  employeedetail where StaffId in (1,2,3,4)
--delete from Employeedetail where StaffId in (8,9,10,11,12,13,15,18) 

--insert into EmployeeDetail values
--('アワル','sachin@nu-systems.com','大阪府',9856325698),
--('上田','ueda@nu-systems.com','大阪府',9845252356),
--('入口','iriguchi@nu-systems.com','名古屋',9875653258),
--('牧角','makisumi@nu-systems.com','東京',9853658595),
--('山口','yamaguchi@nu-systems.com','東京',9845235689),
--('杉本','sugimoto@nu-systems.com','京都',9825362525),
--('石本','ishimoto@nu-systems.com','奈良',9875859565)



--SELECT TOP (1000) [StaffId]
--      ,[StaffName]
--      ,[StaffEmail]
--      ,[StaffAddress]
--      ,[PhoneNo]
--  FROM [ReactUserDetail].[dbo].[EmployeeDetail]