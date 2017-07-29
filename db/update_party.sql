UPDATE party SET name = $2, street = $3, state = $4, city = $5, zip = $6, description = $7
WHERE id = $1;