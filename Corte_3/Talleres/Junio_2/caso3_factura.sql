-- Eliminar si existen
DROP TABLE IF EXISTS detalle_factura, facturas CASCADE;

-- Crear facturas
CREATE TABLE facturas (
    id SERIAL PRIMARY KEY,
    total NUMERIC DEFAULT 0
);

-- Crear detalles de factura
CREATE TABLE detalle_factura (
    id SERIAL PRIMARY KEY,
    factura_id INT REFERENCES facturas(id),
    cantidad INT,
    precio_unitario NUMERIC
);

-- Función del trigger
CREATE OR REPLACE FUNCTION actualizar_total()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE facturas
    SET total = total + (NEW.cantidad * NEW.precio_unitario)
    WHERE id = NEW.factura_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Crear trigger
CREATE TRIGGER trg_actualizar_total
AFTER INSERT ON detalle_factura
FOR EACH ROW
EXECUTE FUNCTION actualizar_total();

-- Datos de prueba
INSERT INTO facturas DEFAULT VALUES; -- id = 1

-- Agregar productos
INSERT INTO detalle_factura(factura_id, cantidad, precio_unitario)
VALUES (1, 2, 5000), (1, 1, 12000);

-- Consultar total
SELECT * FROM facturas;
