what does user need when he queries for get-wallet ?

- if default [Oauth , SSO , UUID_BASED]

  - uuid
  - hash it with server secret and verify in db

- if metamaskAuth

  - check the address being sent [siwe]

- if zkAuth
  - validate pwdhash

payload
Type
value
