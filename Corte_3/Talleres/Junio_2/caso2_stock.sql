-- Eliminar si existen
DROP TABLE IF EXISTS ventas, productos CASCADE;

-- Crear productos
CREATE TABLE productos (
    id SERIAL PRIMARY KEY,
    nombre TEXT,
    stock INT
);

-- Crear ventas
CREATE TABLE ventas (
    id SERIAL PRIMARY KEY,
    id_producto INT REFERENCES productos(id),
    cantidad INT
);

-- Función trigger
CREATE OR REPLACE FUNCTION verificar_stock()
RETURNS TRIGGER AS $$
DECLARE
    disponible INT;
BEGIN
    SELECT stock INTO disponible FROM productos WHERE id = NEW.id_producto;

    IF disponible IS NULL THEN
        RAISE EXCEPTION 'Producto no existe';
    END IF;

    IF disponible < NEW.cantidad THEN
        RAISE EXCEPTION 'Stock insuficiente';
    END IF;

    UPDATE productos SET stock = stock - NEW.cantidad WHERE id = NEW.id_producto;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Crear trigger
CREATE TRIGGER trg_verificar_stock
BEFORE INSERT ON ventas
FOR EACH ROW
EXECUTE FUNCTION verificar_stock();

-- Datos de prueba
INSERT INTO productos(nombre, stock) VALUES ('Teclado', 10), ('Mouse', 5);

-- Venta válida
INSERT INTO ventas(id_producto, cantidad) VALUES (1, 3); -- OK

-- Venta inválida
-- INSERT INTO ventas(id_producto, cantidad) VALUES (2, 10); -- Genera error: Stock insuficiente

-- Consultar inventario restante
SELECT * FROM productos;
