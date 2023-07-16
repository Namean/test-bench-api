sqlite> PRAGMA table_info(employees);
cid name type notnull dflt_value pk

---

0 EmployeeId INTEGER 1 1
1 LastName NVARCHAR(20) 1 0
2 FirstName NVARCHAR(20) 1 0
3 Title NVARCHAR(30) 0 0
4 ReportsTo INTEGER 0 0
5 BirthDate DATETIME 0 0
6 HireDate DATETIME 0 0
7 Address NVARCHAR(70) 0 0
8 City NVARCHAR(40) 0 0
9 State NVARCHAR(40) 0 0
10 Country NVARCHAR(40) 0 0
11 PostalCode NVARCHAR(10) 0 0
12 Phone NVARCHAR(24) 0 0
13 Fax NVARCHAR(24) 0 0
14 Email NVARCHAR(60) 0 0

sqlite> .schema employees
CREATE TABLE IF NOT EXISTS "employees"
(
[EmployeeId] INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
[LastName] NVARCHAR(20) NOT NULL,
[FirstName] NVARCHAR(20) NOT NULL,
[Title] NVARCHAR(30),
[ReportsTo] INTEGER,
[BirthDate] DATETIME,
[HireDate] DATETIME,
[Address] NVARCHAR(70),
[City] NVARCHAR(40),
[State] NVARCHAR(40),
[Country] NVARCHAR(40),
[PostalCode] NVARCHAR(10),
[Phone] NVARCHAR(24),
[Fax] NVARCHAR(24),
[Email] NVARCHAR(60),
FOREIGN KEY ([ReportsTo]) REFERENCES "employees" ([EmployeeId])
ON DELETE NO ACTION ON UPDATE NO ACTION
);

alphabetical order
hire_date
