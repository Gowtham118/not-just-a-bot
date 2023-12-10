# import jwt
# from config import db
# from functools import wraps
# import config
# from flask import jsonify, make_response, request
# from hashlib import sha256
# from argon2 import PasswordHasher


# def API_required(f):
#     @wraps(f)
#     def decorated(*args, **kwargs):
#         if 'X-API-Key' in request.headers:
#             api_key = request.headers['X-API-Key']
#         else:
#             return make_response(jsonify({"message": "API-KEY is missing !!"}), 400)
#         if str(api_key) == config.API_KEY:
#             pass
#         else:
#             return make_response(jsonify({
#                 'message': 'API_KEY is invalid !!'
#             }), 401)

#         return f(*args, **kwargs)
#     return decorated


# # SHA256 for hashing usernames
# def Uhash(username):
#     return sha256(username.encode('utf-8')).hexdigest()


# # Argon2 for hashing passwords using salt
# ph = PasswordHasher()


# def Phash(password):
#     return ph.hash(password)


# def verifyPass(hash, password):
#     try:
#         return ph.verify(hash, password)
#     except:
#         return False



# # Decorators


# def token_required(f):
#     @wraps(f)
#     def decorated(*args, **kwargs):

#         token = None

#         # jwt is passed in the request header
#         if 'x-access-token' in request.headers:
#             token = request.headers['x-access-token']
#         else:
#             return make_response(jsonify({'message': 'Token is missing !!'}), 400)

#         # jwt validation
#         try:
#             # print(token)
#             try:
#                 data = jwt.decode(
#                     token, config.SECRET_KEY, algorithms=["HS256"])
#             except Exception as e:
#                 print(e,  e.__traceback__.tb_lineno)
#                 return make_response(jsonify({
#                     'message': 'Token invalid or tampered!! Access denied'
#                 }), 401)
#             current_user = db.users.find_one({"_id": data["public_id"]})
#             if not current_user:
#                 return make_response(jsonify({
#                     'message': 'unable to find user '
#                 }), 404)
#         except Exception as e:
#             print(e,  e.__traceback__.tb_lineno)
#             return make_response(jsonify({
#                 'message': 'unable to find user or token tampered!'
#             }), 400)

#         # returns the current logged in users context to the routes
#         return f(current_user, *args, **kwargs)
#     return decorated
