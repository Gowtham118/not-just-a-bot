from flask import Blueprint
from flask import jsonify, make_response, request
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import tensorflow as tf

from pathlib import Path
from transformers import BertTokenizer, TFBertModel
from urllib.request import urlretrieve

from tensorflow.python.keras.layers import Dense, Dropout
from tensorflow.python.keras.losses import SparseCategoricalCrossentropy
from tensorflow.python.keras.metrics import SparseCategoricalAccuracy

# from tensorflow.python.keras.optimizers import Adam

test = Blueprint("test", __name__)
import openai

# print(slot_num_labels)


@test.route("/")
def live():
    return "Up and running!"


# validate incoming payload {"Text": "text"}
@test.route("/predict", methods=["POST"])
def predict():
    if request.method != "POST":
        return make_response(jsonify({"message": "Method not allowed"}), 405)

    if not request.is_json:
        return make_response(jsonify({"message": "Missing JSON in request"}), 400)

    data = request.get_json()
    userText = data["Text"]
    if not userText:
        return make_response(jsonify({"message": "Missing Text"}), 400)
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {
                "role": "system",
                "content": "From given text classify [intent based slot filling] it as CrossChainSwap , DexTrade or TransferAmount; if it is irregular irrelevant prompt from web3 space return nil so here are further constraints if it is CrossChain Swap print json of fromChain toChain fromAmount  fromAsset toAsset and it is specificChain Dextrade print json of chain fromAsset toAsset fromAmount and it is TransferAmount print json of toAccount toAmount asset chain every json output should also have intent field i,e: type CrossChainSwap , DexTrade or TransferAmount, not it is only CrossChain if user mentions fromchain and toChain else if its only one chain then its DexTrade",
            },
            {"role": "user", "content": userText},
        ],
    )
    return response["choices"][0]["message"]["content"]
