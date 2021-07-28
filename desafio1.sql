-- 1 - Exiba os países e indicando se cada um deles se encontra ou não na região formada pela Europa
SELECT @europe_id = REGION_ID FROM hr.regions WHERE REGION_NAME LIKE 'Europe';
SELECT COUNTRY_NAME AS 'País', IF(REGION_ID = @europe_id, 'incluído', 'não incluído') AS 'Status Inclusão'
FROM hr.countries ORDER BY COUNTRY_NAME;
