-- Eliminar si existen
DROP TABLE IF EXISTS auditoria, usuarios CASCADE;

-- Crear tabla de usuarios
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre TEXT NOT NULL
);

-- Crear tabla de auditoría
CREATE TABLE auditoria (
    id SERIAL PRIMARY KEY,
    usuario TEXT,
    operacion TEXT,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Función del trigger
CREATE OR REPLACE FUNCTION auditar_cambios()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO auditoria(usuario, operacion)
    VALUES (
        CASE
            WHEN TG_OP = 'DELETE' THEN OLD.nombre
            ELSE NEW.nombre
        END,
        TG_OP
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Crear trigger
CREATE TRIGGER trg_auditoria
AFTER INSERT OR UPDATE OR DELETE ON usuarios
FOR EACH ROW
EXECUTE FUNCTION auditar_cambios();

-- Datos de prueba
INSERT INTO usuarios(nombre) VALUES ('Ana'), ('Luis');
UPDATE usuarios SET nombre = 'Luisa' WHERE nombre = 'Luis';
DELETE FROM usuarios WHERE nombre = 'Ana';

-- Consultar auditoría
SELECT * FROM auditoria;
