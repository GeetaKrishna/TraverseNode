-- INSERT INTO
--   AppStore (
--     ID,
--     APPNAME,
--     APPID,
--     APPDETAILS,
--     VERSION,
--     URL,
--     RATING,
--     ROUTESCREEN,
--     PatientID
--   ) VALUES (
--     1,
--     'Medications',
--     6,
--     'For Medication details',
--     1.0,
--     'assets/icons-home/motion07.png',
--     5,
--     'admin/medication',
--     2
--   )

-- DELETE FROM AppStore WHERE APPNAME='4CornersOfHealth';
-- ALTER TABLE AppStore
-- DROP COLUMN ID;

--   exec sp_columns AppStore

-- ALTER TABLE AppStore
--    ADD ID INT IDENTITY

--   ALTER TABLE AppStore Alter COLUMN ROUTESCREEN varchar(200);

select * from USERS;