import secrets

# Generate a random secret key (hexadecimal)
secret_key = secrets.token_hex(32)

# Print the generated secret key
print(secret_key)