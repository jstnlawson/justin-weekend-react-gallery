-- database name: react_gallery
CREATE TABLE gallery (
	"id" SERIAL PRIMARY KEY,
	"path" TEXT,
	"description" VARCHAR(200),
	"likes" INTEGER
);



INSERT INTO "gallery" ("path", "description", "likes")
VALUES ('images/5C21BE8D-E15C-41F3-85F5-015B5784705E_1_105_c.jpeg', 'Butterflies at the Mall of America', 0),
('images/26BF59CF-C06D-403F-8A75-6B86467253BD_1_105_c.jpeg', 'My custom road bike', 0), 
('images/AD8C3EDB-B25E-4660-B099-7242077B96B6_1_105_c.jpeg', 'Michael Shannon Fan Club bumper sticker', 0);

