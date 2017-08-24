INSERT INTO items(name, description, qty, party_id)
VALUES ($1, $2, $3, $4) RETURNING id;



