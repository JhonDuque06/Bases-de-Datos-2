# Taller 2 de Junio – Disparadores (Triggers) en PostgreSQL

---

## ¿Qué son los Disparadores?

Los **disparadores** (triggers) son objetos de una base de datos que se ejecutan automáticamente cuando se produce un evento específico sobre una tabla o vista. Los eventos más comunes son: `INSERT`, `UPDATE` o `DELETE`.

Son útiles para implementar lógica en la base de datos, como validaciones, actualizaciones automáticas, auditoría de datos o reglas de negocio complejas.

---

## ¿Para qué sirven?

- Aplicar reglas de negocio directamente en la base de datos.
- Automatizar tareas repetitivas o críticas.
- Auditar operaciones en tablas sensibles.
- Garantizar consistencia en relaciones entre tablas.

---

## Ventajas

- Automatizan procesos sin intervención del usuario.
- Aseguran que ciertas reglas se cumplan **siempre**.
- Permiten mantener integridad lógica de los datos.
- Se ejecutan de forma **invisible y eficiente**.

## Desventajas

- Pueden volver más **compleja** la depuración (debugging).
- Si están mal diseñados, afectan el **rendimiento**.
- Su ejecución automática puede provocar efectos no deseados si no se documentan bien.
- Ocultan lógica que debería ser explícita en la aplicación.

---

## Sintaxis Básica (PostgreSQL)

### Crear función del trigger:

```sql
CREATE OR REPLACE FUNCTION nombre_funcion()
RETURNS TRIGGER AS $$
BEGIN
    -- Lógica a ejecutar
    RETURN NEW; -- o OLD según el tipo
END;
$$ LANGUAGE plpgsql;
